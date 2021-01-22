const SuccessResponse = require('../../helpers/successResponse');
const BadRequestResponse = require('../../helpers/badRequestResponse');
const ValidationFailResponse = require('../../helpers/validationFailResponse');
const ruleRunnerService = require('../../services/reValidateApi/ruleRunner');

function reValidateApi(req, res) {
  try {
    const result = ruleRunnerService(req.body);
    const { field } = result.validation;
    if (!result.validation.error) {
      return new SuccessResponse(`field ${field} successfully validated.`, result, 200).send(res);
    }
    return new ValidationFailResponse(`field ${field} failed validation.`, result, 400).send(res);
  } catch (error) {
    return new BadRequestResponse(error.message).send(res);
  }
}

module.exports = reValidateApi;
