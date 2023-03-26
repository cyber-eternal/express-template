import { WorkerRuleEnum } from '@app/enums';

export const appConfig = {
  NODE_ENV: process.env.NODE_ENV || 'local',
  API_PREFIX: process.env.API_PREFIX || '/api',
  AUTHORIZED_TOKEN: process.env.AUTHORIZED_TOKEN,
  SERVER_PORT: Number(process.env.SERVER_PORT) || 3000,
  WORKER_RULE: (process.env.SERVER_RULE ||
    WorkerRuleEnum.ALL) as WorkerRuleEnum,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  HCM_URL: process.env.HCM_URL,
  HCM_TOKEN: process.env.HCM_TOKEN,

  MOCKMOCK_URL: process.env.MOCKMOCK_URL,

  ARI_REPORT_INTERVAL_IN_DAYS:
    parseInt(process.env.ARI_REPORT_INTERVAL_IN_DAYS, 10) || 365,
};
