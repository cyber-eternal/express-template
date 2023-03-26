export const mongoConfig = {
  port: process.env.MONGO_PORT || 27017,
  host: process.env.MONGO_URL || '127.0.0.1',
  password: process.env.MONGO_PASSWORD,
  username: process.env.MONGO_USERNAME,
  databases: {
    core: 'core',
  },

  get url() {
    return process.env.NODE_ENV === 'local'
      ? `mongodb://127.0.0.1:27017`
      : `mongodb+srv://${this.username}:${this.password}@${this.host}`;
  },
};
