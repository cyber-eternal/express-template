import bformat from 'bunyan-format';
import bunyan, { LogLevelString } from 'bunyan';
import { appConfig } from '@app/config';

export default bunyan.createLogger({
  name: `${appConfig.WORKER_RULE}-${process.env.NODE_ENV}`,
  level: appConfig.LOG_LEVEL as LogLevelString,
  src: true,
  stream: bformat({
    outputMode: 'short',
  }),
});
