const pingController = {
  get: ((req, res) => {
    const response = {
      message: 'pong',
    };
    res.status(200).json(response);
  }),
};

module.exports = pingController;
