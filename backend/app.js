// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// // cross origin- share within your domain
// const cors = require('cors');
// const app = express();




// //imports routes
// const productsRouter = require('./routes/products');
// const usersRouter = require('./routes/users');
// //routes
// app.use('/api/products', productsRouter);
// app.use('/api/users', usersRouter);


// //logger
// app.use(cors({
//   origin: "*",
//   methods:['GET', 'POST', 'PATCH', 'DELETE','PUT'],
//   allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'
// }));

// // view engine setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// //routes
// // app.use('/', indexRouter);
// // app.use('/users', usersRouter);
// // -------------------avntel illa---------------
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// // -----------------------------------------------
// module.exports = app;
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();




// Import Routes
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');

// Use Routes
app.use('/api/products', productsRoute);
app.use('/api/users', usersRoute);


app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
