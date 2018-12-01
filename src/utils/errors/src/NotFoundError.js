const GenericError = require('./GenericError');

class NotFoundError extends GenericError {
  constructor(error = 'Not found error') {
    super(404, error);
  }
}

module.exports = NotFoundError;
