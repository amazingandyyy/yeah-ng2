'use strict'
require('dotenv').config()

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const PORT = process.env.PORT
const MONGOURL = process.env.MONGOLAB_URI

// set up mongoDB connection
if (!process.env.JWT_SECRET) {
    console.error(error(`ERROR:  Missing process.env.JWT_SECRET.`))
} else {
    mongoose.connect(MONGOURL, err => {
        console.log(err || `Connected to MongoDB: ${MONGOURL}`)
    })
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DEvarE');
    next();
});

// kickstart route
app.use('/', require('./routes/index'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page is currently not available."});
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

app.use(function(req, res) {
    res.status(404).render('404')
})

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = http.createServer(app);
var socketio = require('socket.io')(server);

require('./socketio')(socketio);

server.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})
server.on('error', function(err) {
    console.error(err)
})
// server.on('listening', )
// var io = require('socket.io')(server);
// io.on('connection', function(socket){
//   socket.on('event', function(data){});
//   socket.on('disconnect', function(){});
// });

module.exports = app;