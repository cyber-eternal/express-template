import '@root/set-environment';
import { NotFoundException } from '@api/exceptions';
import setBaseMiddlewares from '@api/middlewares/base.middlewares';
import { ErrorHandlerMiddleware } from '@api/middlewares/error.middleware';
import controllers from '@api/controllers';
import { appConfig } from '@app/config';
import Logger from '@services/logger';
import express from 'express';

const { API_PREFIX } = appConfig;
const app = express();

// add middlewares
setBaseMiddlewares(app);

// add routes
Object.values(controllers).forEach((controller) =>
  app.use(API_PREFIX, controller.router),
);

app.all('*', () => {
  throw new NotFoundException('Route not found');
});

app.use(ErrorHandlerMiddleware);

app.listen(appConfig.SERVER_PORT, () =>
  Logger.info(
    `Server started on port ${appConfig.SERVER_PORT} - PID ${process.pid}`,
  ),
).keepAliveTimeout = 350000;
