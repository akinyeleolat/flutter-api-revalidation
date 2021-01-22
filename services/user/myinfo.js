const errorResponse = require('../../helpers/apiError');

const myData = {
  name: 'Oluwatosin Akinyele',
  github: '@akinyeleolat',
  email: 'akinyeleolat2005@gmail.com',
  mobile: '+2347032679325',
  twitter: '@ayanfeoluwa86',
};

/**
 * @summary returns my data
 */

const userService = () => {
  try {
    return myData;
  } catch (error) {
    return errorResponse.throwError(error.message);
  }
};

module.exports = userService;
