const ApiResponse = require('./apiResponse');
const { StatusCode, ResponseStatus } = require('./responseData');

class ValidationFailResponse extends ApiResponse {
  constructor(message, data = null) {
    super(StatusCode.failure, ResponseStatus.badrequest, message);
    this.data = data;
  }

  send(res) {
    return super.prepare(res, this);
  }
}

module.exports = ValidationFailResponse;
