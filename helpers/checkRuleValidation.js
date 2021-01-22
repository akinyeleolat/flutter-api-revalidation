/* eslint-disable camelcase */
/**
 *
 * @param {*} dataFieldValue data field value
 * @param {*} condition rule conditions
 * @param {*} condition_value rule value
 */
const checkRuleValidation = (dataFieldValue, condition, condition_value) => {
  let result;
  switch (condition) {
    case 'eq':
      result = dataFieldValue === condition_value;
      break;
    case 'neq':
      result = dataFieldValue !== condition_value;
      break;
    case 'gt':
      result = dataFieldValue > condition_value;
      break;
    case 'gte':
      result = dataFieldValue >= condition_value;
      break;
    case 'lt':
      result = dataFieldValue < condition_value;
      break;
    case 'lte':
      result = dataFieldValue <= condition_value;
      break;
    case 'contains':
      result = dataFieldValue.includes(condition_value);
      break;
    default:
      result = 'invalid condition';
  }
  return result;
};

module.exports = checkRuleValidation;
