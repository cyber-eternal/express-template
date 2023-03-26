import { elasticsearchConfig } from '@app/config';
import { Client, estypes } from '@elastic/elasticsearch';

export default class Elasticsearch {
  private static client = new Client({
    nodes: [elasticsearchConfig.HOST],
    auth: {
      username: elasticsearchConfig.USERNAME,
      password: elasticsearchConfig.PASSWORD,
    },
    requestTimeout: 600000,
    maxRetries: 3,
  });
  public static properties = elasticsearchConfig;

  public static clearScroll = async (data): Promise<any> => {
    return this.client.clearScroll(data);
  };

  public static scroll = async (data): Promise<any> => {
    return this.client.scroll(data);
  };

  public static search = async (data): Promise<estypes.SearchResponse> => {
    return this.client.search(data);
  };

  public static searchAll = async (data): Promise<any[]> => {
    const finalList = [];
    const response = await this.client.search({
      ...data,
      size: 10000,
      scroll: '15m',
    });

    const responseQueue = [];
    const scrollIds: string[] = [];

    responseQueue.push(response);
    while (responseQueue.length) {
      const body = responseQueue.shift();

      body.hits.hits.forEach((hit) => finalList.push(hit._source));

      if (body.hits.total.value === finalList.length) {
        break;
      }

      scrollIds.push(body._scroll_id);
      responseQueue.push(
        await this.client.scroll({
          scroll_id: body._scroll_id,
          scroll: '15m',
        }),
      );
    }

    if (scrollIds.length)
      await this.client.clearScroll({ scroll_id: scrollIds });

    return finalList;
  };

  public static getAllDataFromMultipleIndices = async <T>(
    indices: string[],
  ): Promise<T[]> =>
    (
      await Promise.all(
        indices.map((index) =>
          Elasticsearch.searchAll({
            index,
            query: { match_all: {} },
          }),
        ),
      )
    )?.flat();
}
