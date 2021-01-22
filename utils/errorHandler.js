const logger = require('./logger');
/**
   * @description Default error handler to be used with express
   * @param error Error object
   * @param req {object} Express req object
   * @param res {object} Express res object
   * @param next {function} Express next object
   * @returns {*} errors
   */
const errorHandler = (error, req, res, next) => {
  let parsedError;

  // Attempt to gracefully parse error object
  try {
    if (error && typeof error === 'object') {
      parsedError = JSON.stringify(error);
    } else {
      parsedError = error;
    }
  } catch (e) {
    logger.error(e);
  }

  // Log the original error
  logger.error(parsedError);

  // If response is already sent, don't attempt to respond to client
  if (res.headersSent) {
    return next(error);
  }

  logger.error('Error %o', error);
  return res.json(error).status(error.httpStatusCode || 500);
};

module.exports = errorHandler;
