const authcontroller = require('../controller/auth')
const express = require('express')
const router = express.Router();

router.post('/signup',authcontroller.signup)
      .post('/login',authcontroller.login);

exports.router = router;