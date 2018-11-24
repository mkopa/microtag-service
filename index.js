require('dotenv').config();
const express = require('express');
const { logger } = require('./src/utils');

const app = express();

logger.info('Starting server node');

app.listen(process.env.SERVER_PORT, () => logger.info(`Service started at port ${process.env.SERVER_PORT}`));
