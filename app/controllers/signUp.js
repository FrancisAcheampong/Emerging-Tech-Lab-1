var Customer = require('mongoose').model('customers');

exports.signupPage = (req, res, next) => {
  
  

  
  res.render('signUp', { title: 'signup' });

};
module.exports.register = (req, res, next) => {
  console.log(JSON.stringify(req.body,null, 2));

  var customer = new Customer(req.body);

  if(customer.save){
    res.json(customer);
  } else {
    return next(err);
  }

  res.redirect('/');
};