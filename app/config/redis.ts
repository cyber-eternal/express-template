export const redisConfig = {
  HOST: process.env.ARI_REDIS_HOST || '127.0.0.1',
  PORT: Number(process.env.ARI_REDIS_PORT) || 6379,
  PASSWORD: process.env.ARI_REDIS_PASSWORD,
};
