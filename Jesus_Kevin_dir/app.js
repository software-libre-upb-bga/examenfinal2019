var express = require('express');
var request = require('request');
var path = require('path');
var logger = require('morgan');
var _ = require('underscore');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view motor setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
module.exports = app;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get(function (arg, res, next) {
    request('https://uinames.com/api/', function (err, body) {
        res.render('index', {
            personas: JSON.parse(body.body)
        });
    })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404);
});