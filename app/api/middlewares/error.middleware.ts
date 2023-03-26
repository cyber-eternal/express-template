import { HttpException, InternalServerErrorException } from '@api/exceptions';
import logger from '@app/services/logger';
import { Request, Response, NextFunction } from 'express';

export const ErrorHandlerMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction, // !don't remove the next
) => {
  logger.error('Error', error);
  if (error instanceof HttpException) {
    return res.status(error.getStatus()).json(error.getResponse());
  }

  const err = new InternalServerErrorException(error.message);
  return res.status(err.getStatus()).json(err.getResponse());
};
