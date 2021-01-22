const express = require('express');
const user = require('./user');
const reValidateApi = require('./reValidateApi');

const router = express.Router();

router.use('/', user);
router.use('/validate-rule', reValidateApi);

module.exports = router;
