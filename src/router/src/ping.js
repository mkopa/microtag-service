const { Router } = require('express');
const { pingController } = require('../../controllers');

const router = new Router();

/**
 * @api {get} /api/ping Request pong message
 * @apiName Ping
 * @apiGroup Test
 *
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 *   {
 *     "success": true,
 *     "message": "pong"
 *   }
 */
router.route('/ping')
  .get((...args) => pingController.get(...args));

module.exports = router;
