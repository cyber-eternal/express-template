import { createClient, RedisClientType } from 'redis';
import { IRedisConnectionDetails } from './redis.interface';

export default class AbstractRedisClient {
  private _client: RedisClientType;

  constructor({ host, port, password }: IRedisConnectionDetails) {
    this._client = createClient({
      url: `redis://${host}:${port}`,
      password,
    });

    this._client.connect();
  }

  public getClient() {
    return this._client;
  }
}
