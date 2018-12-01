const { Router } = require('express');
const ping = require('./src/ping');

const router = new Router();

router.use('/api', ping);

module.exports = router;
