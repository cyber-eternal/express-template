export const elasticsearchConfig = {
  HOST: process.env.ELASTICSEARCH_HOST || 'http://localhost:9200',
  USERNAME: process.env.ELASTICSEARCH_USERNAME,
  PASSWORD: process.env.ELASTICSEARCH_PASSWORD,
};
