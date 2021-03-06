let config = require('./config');
let express = require('express');
let path = require('path'); // built-in node module
//let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/customer');
require('./../app/models/customers');

let index = require('../app/routes/index.server.route'); // define the main route
let feedback = require('../app/routes/feedback.server.route'); // define the main route
let thankyou = require('../app/routes/thankyou.server.route'); // define the main route
let signup = require('../app/routes/signUp.server.route');


let app = express();  

// view engine setup
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs'); // view engine type

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', index); // main routing file
app.use('/', signup); // main routing file
app.use('/feedback', feedback)
app.use('/thankyou', thankyou)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
