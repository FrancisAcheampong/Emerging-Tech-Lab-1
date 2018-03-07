let express = require('express');
let router = express.Router();

let signUp = require("../controllers/signup");
router.get('/signup', signUp.signupPage);
router.post('/signup', signUp.register)

  module.exports = router;