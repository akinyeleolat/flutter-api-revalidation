/* eslint-disable camelcase */
const Joi = require('joi').extend(require('@joi/date'));
const Error = require('../../utils/ErrorUtils');
const validatePayload = require('../../helpers/payloadValidator');
const getDataFieldValue = require('../../helpers/fieldChecker');
const checkRuleValidation = require('../../helpers/checkRuleValidation');

const ruleDataSchema = Joi.object({
  rule: Joi.object().keys({
    field: Joi.string().required(),
    condition: Joi.string().required(),
    condition_value: Joi.required(),
  }).required().messages({
    'object.base': 'rule should be an object',
  }),
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
  let isValid = false;
  let results = null;
  const {
    rule, data,
  } = validatePayload(ruleDataSchema, ruleData);

  const { field, condition, condition_value } = rule;

  const fieldDepth = field.split('.').length;

  if (fieldDepth >= 3) {
    throw new Error('badRequestError', 400, 'rule.field has more than two levels of nesting');
  }
  const dataFieldValue = getDataFieldValue(data, field);

  if (!dataFieldValue) {
    throw new Error('badRequestError', 400, `field ${field} is missing from data.`);
  }
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
  if (!isValid) {
    throw new Error('validationFailedError', 200, `field ${field} failed validation.`, results);
  }
  return results;
};

module.exports = ruleRunnerService;
