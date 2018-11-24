require('dotenv').config();
const express = require('express');
const { logger } = require('./src/utils');
const router = require('./src/router');

const app = express();

app.use(router);

app.listen(process.env.SERVER_PORT, () => logger.info(`Service started at port ${process.env.SERVER_PORT}`));
