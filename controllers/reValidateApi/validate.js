const ruleRunnerService = require('../../services/reValidateApi/ruleRunner');
const displayError = require('../../helpers/displayError');
const displaySuccess = require('../../helpers/displaySuccess');

function reValidateApi(req, res) {
  try {
    const result = ruleRunnerService(req.body);
    const { field } = result.validation;
    return displaySuccess(result, `field ${field} successfully validated.`, res, 200);
  } catch (error) {
    return displayError(error, res, error.httpStatusCode);
  }
}

module.exports = reValidateApi;
