var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');;
var app = express();
var myRouting = require('./routes/router');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', myRouting);
// app.use('/add', myRouting);

//General routing
app.get('/zz', myRouting.mortadela);
app.post('/aa', myRouting.add);
app.get('/sh', myRouting.show);
app.post('/kk', myRouting.addSeq);
app.post('/dd', myRouting.delDriver);
app.get('/showDriv', myRouting.showDrivers);
app.get('/dochange', myRouting.showDrivers);
app.put('/:whichOrderUp', myRouting.updateOrder);
app.get('/edit/:id', myRouting.editOneDriver);
app.get('/upp', myRouting.updateOrder);
// app.locals.updateOrder;


// parsing POST HTML to args like .name for takeElementInDb
var bodyParser = require('body-parser');
app.use(bodyParser()); //Now deprecated You now need to call the methods separately
app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); //And so on.
app.use(bodyParser.urlencoded({
    extended: true
}))

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
// });

module.exports = app;
