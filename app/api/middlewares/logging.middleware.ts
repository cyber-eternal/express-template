import bunyan from 'bunyan';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const log = bunyan.createLogger({
  name: `API-Req-Res-${process.env.NODE_ENV}`,
  serializers: bunyan.stdSerializers,
});

export const LoggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  log.child({ req_id: uuidv4() }, true);

  log.info({ req });
  res.on('finish', () => log.info({ res }));

  next();
};
