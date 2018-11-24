const { Router } = require('express');
const { pingController } = require('../../controllers');

const router = new Router();

router.route('/ping')
  .get((...args) => pingController.get(...args));

module.exports = router;
