import { redisConfig } from '@app/config';
import { saveJsonParse } from '@app/utils';
import AbstractRedisClient from '@services/redis';

class RedisClient extends AbstractRedisClient {
  private client;

  constructor() {
    const { HOST, PASSWORD, PORT } = redisConfig;
    super({ host: HOST, port: PORT, password: PASSWORD });

    this.client = super.getClient();
  }

  public async getObject<T = any>(key: string): Promise<T | undefined> {
    const value = (await this.client.get(key)) || '';
    if (!value) return;
    return saveJsonParse(value);
  }

  public setObject(key: string, value: any, expiry?: number) {
    return expiry
      ? this.client.setEx(key, expiry, JSON.stringify(value))
      : this.client.set(key, JSON.stringify(value));
  }

  public removeObject(key: string) {
    return this.client.del(key);
  }
}

export const redisClient = new RedisClient();
