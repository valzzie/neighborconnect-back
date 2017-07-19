const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
//to log user into a session
const session= require('express-session');
const passport = require('passport');

//import dotenv package an dload variables
const dotenv =require('dotenv').config();
// const configPassport= require('../config/passport-config.js');

//added this for angular part
var cors = require('cors');
// mongoose.connect(process.env.MONGODB_URI);
//just for testing until set up dotenv and config folders
mongoose.connect('mongodb://localhost/neighborhood');
//import dotenv package and load variables
//add if we are using passport-config to login
// require('dotenv').config();
// require('./config/passport-config.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//switched from ejs to jade
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//makse sure it is before the const index.  //added this for angular part
app.use(cors());

const index = require('./routes/index');
app.use('/', index);

//added this route.  here we attach the /api prefix to all the routes in teh phone-api router file. Therefore if we have a route called /home it will actually be /api/home.
var profilesApi=require('./routes/profile-api');
app.use('/api',profilesApi);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;