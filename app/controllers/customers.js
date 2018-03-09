let express = require('express');
let router =express.Router();
let mongoose = require(mongoose);

//user object created from scheme model
let user = require('../models/customers');

module.exports.GetAllUsers = function(req,res, next){
    user.find((err, customers)=>{
        console.log(customers);
    
    if (err) {
        return console.error(err);
    } else {
        res.render('customers/index',{
            title:'Customers',
            customers:customers
        });
     }
    });
};

module.exports.CreateUser = function(req, res, next) {
    let newUser = user({
       
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "password":req.body.password
    });
  
    user.create(newUser, (err, user) => {
      if (err) {
        console.error(err);
        res.end(err);
      } else {
        res.redirect('/user');
      }
    });
}
  
  