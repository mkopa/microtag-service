const { Router } = require('express');
const ping = require('./ping');

const router = new Router();

router.use('/api', ping);

module.exports = router;
