require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bucketRoutes = require('./routes/bucket');
const app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bucketRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error pagen
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
