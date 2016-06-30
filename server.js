'use strict';

var http = require('http');
var path = require('path');
var routes = require('./app/routes/routes.js');
var morgan = require("morgan");
var cleaner = require("./app/controllers/cleanerController.js");

var express = require('express');

var app = express();
var server = http.createServer(app);

var bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/views', express.static(process.cwd() + '/app/views'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');

routes(app, cleaner);

var port = process.env.PORT || 8080;
server.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
