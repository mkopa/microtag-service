const { Router } = require('express');
const ping = require('./src/ping');
const { errors } = require('../utils');

const router = new Router();

router.use('/api', ping);
router.get('*', ((req, res, next) => {
  next(new errors.NotFoundError());
}));

module.exports = router;
