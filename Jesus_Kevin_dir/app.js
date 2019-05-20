var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var _ = require('underscore');
var async = require('async');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var e = new Motor;

var app = express();

// view motor setup
app.set('views', __dirname + '/views');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get(function (arg, res, next) {
    
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404);
    res.render('error', {url: req.url});

});

