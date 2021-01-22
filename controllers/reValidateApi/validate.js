const ruleRunnerService = require('../../services/reValidateApi/ruleRunner');
const displayError = require('../../helpers/displayError');

function reValidateApi(req, res, next) {
  try {
    const result = ruleRunnerService(req.body);
    if (result instanceof Error) {
      return displayError(result, res, result.httpStatusCode);
    }
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

module.exports = reValidateApi;
