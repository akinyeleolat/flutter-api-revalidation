/* eslint-disable camelcase */
const Joi = require('joi').extend(require('@joi/date'));
const errorResponse = require('../../helpers/apiError');
const validatePayload = require('../../helpers/payloadValidator');
const getDataFieldValue = require('../../helpers/fieldChecker');
const checkRuleValidation = require('../../helpers/checkRuleValidation');

const ruleDataSchema = Joi.object({
  rule: Joi.object().keys({
    field: Joi.string().required(),
    condition: Joi.string().required(),
    condition_value: Joi.required(),
  }).required(),
  data: Joi.alternatives(
    Joi.string(),
    Joi.object(),
    Joi.array().items(Joi.string()),
  ).required(),
});

/**
 * @param {RuleData} ruleData
 * @summary validate rules against data field
 */

const ruleRunnerService = (ruleData) => {
  try {
    let isValid = false;
    let results = null;
    const {
      rule, data,
    } = validatePayload(ruleDataSchema, ruleData);

    const { field, condition, condition_value } = rule;

    const fieldDepth = field.split('.').length;

    if (fieldDepth > 3) {
      return errorResponse.throwError('rule.field has more than two levels of nesting');
    }

    const dataFieldValue = getDataFieldValue(data, field);

    if (dataFieldValue !== false) {
      isValid = checkRuleValidation(dataFieldValue, condition, condition_value);
      results = {
        validation: {
          error: !isValid,
          field,
          field_value: dataFieldValue,
          condition,
          condition_value,
        },
      };
      return results;
    }
    return errorResponse.throwError(`field ${field} is missing from the data.`);
  } catch (error) {
    return errorResponse.throwError(error.message);
  }
};

module.exports = ruleRunnerService;
