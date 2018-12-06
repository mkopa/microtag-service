module.exports = {
  development: {
    username: 'microtag',
    password: 'passw0rd',
    database: 'microtag_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'microtag',
    password: 'passw0rd',
    database: 'microtag_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
  },
};
