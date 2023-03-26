import bodyParser from 'body-parser';
export { Request, Response, NextFunction } from 'express';
import { LoggingMiddleware } from './logging.middleware';

const REQUESTS_LIMIT = process.env.MAX_REQUEST_SIZE || 50 + 'mb';

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: false, limit: REQUESTS_LIMIT }));
  app.use(bodyParser.json({ limit: REQUESTS_LIMIT }));

  app.use(LoggingMiddleware);
};
