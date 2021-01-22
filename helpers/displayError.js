/**
 * Display error
 * @param {Object} err
 * @param {Object} res
 * @param {number} status
 * @returns {Object} response body - statusCode and errorMessage
 */
const displayError = (err, res, statusCode = 400) => {
  res.status(statusCode).json({
    message: err.message,
    status: err.responseStatus,
    data: err.data,
  });
};

module.exports = displayError;
