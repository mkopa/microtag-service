// const { errors } = require('../../utils');

const pingController = {
  get: ((req, res) => res.jsonResponse('pong')),
};

module.exports = pingController;
