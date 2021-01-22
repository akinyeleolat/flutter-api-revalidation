const ruleRunnerService = require('../../services/reValidateApi/ruleRunner');
const displayError = require('../../helpers/displayError');

function reValidateApi(req, res) {
  try {
    const result = ruleRunnerService(req.body);
    // const { field } = result.validation;
    // if (!result.validation.error) {
    //   return new SuccessResponse(`field ${field} successfully validated.`, result, 200).send(res);
    // }
    // return new ValidationFailResponse(`field ${field} failed validation.`, result, 400).send(res);
    // if (result instanceof Error) {
    //   return displayError(result, res, result.httpStatusCode);
    // }
    return res.status(200).json(result);
  } catch (error) {
    return displayError(error, res, error.httpStatusCode);
  }
}

module.exports = reValidateApi;
