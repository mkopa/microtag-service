require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { logger } = require('./src/utils');
const router = require('./src/router');
const { jsonResponse, errorResponse } = require('./src/middlewares');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jsonResponse);
app.use(router);
app.use(errorResponse);

const server = app.listen(process.env.SERVER_PORT, () => logger.info(`Service started at port ${process.env.SERVER_PORT}`));

const closeServer = (() => {
  server.close();
});

module.exports = app;
module.exports.stop = closeServer;
