/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config('./.env');

const apps = [
  {
    name: `sc-listener-${process.env.NODE_ENV}`,
    namespace: process.env.NODE_ENV,
    script: './dist/app/start/index.js',
    watch: false,
    instances: 1,
    exec_mode: 'cluster',
    merge_logs: true,
    env: {
      SERVER_RULE: 'LISTENER',
    },
  },
  // {
  //   name: `sc-scheduler-${process.env.NODE_ENV}`,
  //   namespace: process.env.NODE_ENV,
  //   script: './dist/app/start/index.js',
  //   watch: false,
  //   instances: 1,
  //   exec_mode: 'cluster',
  //   merge_logs: true,
  //   env: {
  //     SERVER_RULE: 'SCHEDULER',
  //   },
  // },
];

console.log(JSON.stringify(apps, null, 4));

module.exports = {
  apps,
};
