const SuccessResponse = require('../../helpers/successResponse');
const BadRequestResponse = require('../../helpers/badRequestResponse');

const userService = require('../../services/user/myinfo');

function myInfo(req, res) {
  try {
    const result = userService();
    new SuccessResponse('My Rule-Validation API', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}

module.exports = myInfo;
