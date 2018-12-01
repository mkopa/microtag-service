class GenericError {
  constructor(statusCode = 500, errorsList = 'Undefined') {
    this.statusCode = statusCode;
    this.errorsList = errorsList;
  }

  getError() {
    return {
      success: false,
      errors: Array.isArray(this.errorsList) ? this.errorsList : [this.errorsList],
    };
  }

  getStatusCode() {
    return this.statusCode;
  }
}

module.exports = GenericError;
