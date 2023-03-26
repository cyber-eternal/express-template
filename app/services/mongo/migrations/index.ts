import { Mongo } from '@app/clients';
import logger from '@app/services/logger';
import RunTemplateMigrations from './add-templates';

(async () => {
  try {
    await Mongo.initConnection();

    logger.info('Migrations started');

    await RunTemplateMigrations();

    logger.info('Migrations completed');
    process.exit(0);
  } catch (e) {
    logger.error(e);
    throw e;
  }
})();
