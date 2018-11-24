const pingController = {
  get: ((req, res) => {
    res.end('pong');
  }),
};

module.exports = pingController;
