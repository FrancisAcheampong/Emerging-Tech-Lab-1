let express = require('express');
let router = express.Router();

let feedback = require("../controllers/feedback");

router.post('/', feedback.feedbackPage);
  
  module.exports = router;