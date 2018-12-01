const GenericError = require('./GenericError');

class InternalServerError extends GenericError {
  constructor(error = 'Internal server error') {
    super(500, error);
  }
}

module.exports = InternalServerError;
