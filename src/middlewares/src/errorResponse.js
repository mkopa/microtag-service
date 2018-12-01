const { errors, logger } = require('../../utils/');

const error = ((err, req, res, next) => {
  if (err instanceof errors.GenericError) {
    if (res.headersSent) {
      next(err);
      return;
    }

    res.status(err.getStatusCode()).json(err.getError());
  } else {
    logger.debug('catchErrors - not handled error', err);

    const genericError = new errors.GenericError();

    if (res.headersSent) {
      next(genericError);
      return;
    }
    res.status(genericError.getStatusCode()).json(genericError.getError());
  }
});

module.exports = error;
