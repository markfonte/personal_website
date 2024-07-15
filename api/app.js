var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index.js');
var apiHeartbeatRouter = require('./routes/api_heartbeat.js');
var contactRouter = require('./routes/contact.js');
var commentRouter = require('./routes/comment.js');
var likeRouter = require('./routes/like.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/api', indexRouter);
app.use('/api/api_heartbeat', apiHeartbeatRouter);
app.use('/api/contact', contactRouter);
app.use('/api/comment', commentRouter);
app.use('/api/like', likeRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// removes 304 error
app.disable('etag');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
