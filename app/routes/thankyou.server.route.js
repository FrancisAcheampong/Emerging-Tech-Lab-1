let express = require('express');
let router = express.Router();

let thankyou = require("../controllers/thankyou");
router.post('/', thankyou.thankyouPage);
  
  module.exports = router;