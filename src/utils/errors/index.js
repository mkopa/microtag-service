const GenericError = require('./src/GenericError');
const NotFoundError = require('./src/NotFoundError');
const InternalServerError = require('./src/InternalServerError');

const errors = { GenericError, NotFoundError, InternalServerError };

module.exports = errors;
