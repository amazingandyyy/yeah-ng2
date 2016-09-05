/**
 * Server side boostrap file
 */

'use strict'
require('dotenv').config()

var express = require('express');
var http = require('http');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.ENV || 'dev';

const PORT = process.env.PORT || 8000
const MONGOURL = process.env.MONGOLAB_URI || 'mongodb://localhost/yeah'

// Set up mongoDB connection if the JWT_SECRET is available
if (!process.env.JWT_SECRET) {
    console.error(error(`ERROR:  Missing process.env.JWT_SECRET.`))
} else {
    mongoose.connect(MONGOURL, err => {
        console.log(err || `Connected to MongoDB: ${MONGOURL}`)
    })
}

var app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// Do some express routine
app
    // .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')));

// Kickstart route
app.use('/', require('./server/routing'))

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page is currently not available."});
});

//If the environment is dev, populate dummy data.
// if(env === 'dev') { require('./seed'); }

// Create server
var server = http.createServer(app);
// Make socket avalable
var socketio = require('socket.io')(server);
// Kickstart socket
require('./socketio')(socketio);

// Log: when server start smoothly/badly
server.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})
server.on('error', function(err) {
    console.error(err)
})

// Make the app available
module.exports = app;