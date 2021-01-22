const userService = require('../../services/user/myinfo');
const displayError = require('../../helpers/displayError');

function myInfo(req, res) {
  try {
    const result = userService();
    return res.json(result).status(200);
  } catch (error) {
    return displayError(error, res, error.httpStatusCode);
  }
}

module.exports = myInfo;
