/* eslint-disable no-prototype-builtins */
/** *
 * @param data data
 * @param field field
 * @returns boolean
 */
const getFieldValue = (data, field) => (field.split('.').reduce((a, c) => (a.hasOwnProperty(c) ? a[c] || 1 : false), { ...data }));

module.exports = getFieldValue;
