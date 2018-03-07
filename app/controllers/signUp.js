
module.exports.signupPage = (req, res, next) => {
    res.render('signUp', { title: 'signup' });
  };

module.exports.register = (req, res, next) => {
  console.log(JSON.stringify(req.body,null, 2));
  res.redirect('/');
};