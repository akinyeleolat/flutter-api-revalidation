const userService = require('../../services/user/myinfo');
const displayError = require('../../helpers/displayError');
const displaySuccess = require('../../helpers/displaySuccess');

function myInfo(req, res) {
  try {
    const result = userService();
    return displaySuccess(result, 'My Rule-Validation API', res, 200);
  } catch (error) {
    return displayError(error, res, error.httpStatusCode);
  }
}
// /validate-rule
module.exports = myInfo;
