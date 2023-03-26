import { mongoConfig } from '@app/config';
import logger from '@app/services/logger';
import mongoose from 'mongoose';

export const initConnection = () => {
  return new Promise((resolve, reject) => {
    mongoose.set('strictQuery', false);
    mongoose.connect(
      mongoConfig.url,
      {
        dbName: mongoConfig.databases.core,
        retryWrites: true,
        w: 'majority',
      },
      (err) => {
        if (err) throw reject(err);
        logger.info('Connected to MongoDB');
        resolve(true);
      },
    );
  });
};
