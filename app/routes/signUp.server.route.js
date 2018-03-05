let express = require('express');
let router = express.Router();

let signUp = require("../controllers/signup");
router.post('/', signUp.signupPage);
  
  module.exports = router;