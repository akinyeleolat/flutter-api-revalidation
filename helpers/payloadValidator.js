const Error = require('../utils/ErrorUtils');

module.exports = function validatePayload(payload, data, optionalConfig = {}) {
  const { error, value } = payload.validate(data, {
    allowUnknown: true,
    stripUnknown: true,
    errors: {
      wrap: {
        label: '',
      },
    },
    ...optionalConfig,
  });
  if (error) {
    const message = `${error.message}.`;
    throw new Error('validationError', 400, message);
  }
  return value;
};
