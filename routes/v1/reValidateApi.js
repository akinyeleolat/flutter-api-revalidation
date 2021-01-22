const express = require('express');

const reValidateApi = require('../../controllers/reValidateApi/validate');

const router = express.Router();

router.post('/', reValidateApi);

module.exports = router;
