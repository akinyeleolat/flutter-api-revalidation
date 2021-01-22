/**
 * Display error
 * @param {Object} result
 * @param {Object} res
 * @param {number} status
 * @returns {Object} response body - statusCode and message
 */
const displaySuccess = (result, message, res, statusCode = 200) => {
  res.status(statusCode).json({
    message,
    status: 'success',
    data: result,
  });
};

module.exports = displaySuccess;
