let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let signUp = require("../controllers/signUp");

router.get('/signup', signUp.signupPage);
router.post('/signup', signUp.register)

  module.exports = router;