// require

let express = require('express');
let router = express.Router();
module.exports.indexPage = (req, res, next) => {

   
    
    
    res.render('index', { title: 'index' });

    
  }

