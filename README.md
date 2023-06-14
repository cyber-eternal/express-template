# Boilerplate for Nodejs/Express/Typescript projects

This is a boilerplate project for creating web applications using [Express.js](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/). It provides all the necessary tools and configuration to get started with building your own application.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Removes any existing 'dist' folder, compiles TypeScript code to JavaScript, and generates aliases for paths.

### `npm run lint`

Checks TypeScript and JavaScript files for linting errors using [ESLint](https://eslint.org/).

### `npm run lint:fix`

Runs ESLint and fixes all auto-fixable issues.

### `npm run prepare`

Installs [Husky](https://github.com/typicode/husky) to set up git hooks required for this project.

### `npm run prettier`

Checks if the code follows the Prettier formatting rules.

### `npm run pm2:start`

Builds the project and starts the server using [PM2](http://pm2.keymetrics.io/).

### `npm run pm2:stop`

Stops the PM2 process for this project.

### `npm run prettier:fix`

Formats all files with Prettier and overwrites them.

### `npm run start`

Starts the application using [ts-node](https://github.com/TypeStrong/ts-node) with `tsconfig-paths/register` and running the entry point located at `/app/start/index.ts`.
