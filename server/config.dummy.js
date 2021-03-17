export const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  mongodbUri: '',
  port: env.PORT || 3000,
  host: env.HOST || '0.0.0.0',
  emailUser: 'example@email.com', // set for a gmail account with less secure on
  emailPassword: '',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};
