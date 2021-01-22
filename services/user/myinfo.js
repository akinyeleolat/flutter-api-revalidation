const Error = require('../../utils/ErrorUtils');

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
    throw new Error('dataError', 400, error.message);
  }
};

module.exports = userService;
