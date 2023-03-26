import '@root/set-environment';
import { Mongo } from '@app/clients';
import { appConfig } from '@app/config';
import { WorkerRuleEnum } from '@app/enums';
import logger from '@app/services/logger';

(async () => {
  try {
    try {
      await Mongo.initConnection();
    } catch (e) {
      throw e;
    }

    const { WORKER_RULE } = appConfig;
    logger.info(`Start worker with WORKER_RULE: ${WORKER_RULE}`);

    switch (WORKER_RULE) {
      case WorkerRuleEnum.LISTENER:
        require('@api/index');
        break;
      case WorkerRuleEnum.SCHEDULER:
        // Scheduler tasks here
        break;
      case WorkerRuleEnum.ALL:
        require('@api/index');
        break;
      default:
        throw new Error(`Invalid SERVER_RULE - ${WORKER_RULE}`);
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
})();
