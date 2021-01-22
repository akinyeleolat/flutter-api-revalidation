const express = require('express');

const myInfo = require('../../controllers/user/myinfo');

const router = express.Router();

router.get('/', myInfo);

module.exports = router;
