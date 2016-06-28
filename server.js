'use strict';

var http = require('http');
var path = require('path');
var routes = require('./app/routes/routes.js');
var morgan = require("morgan");

var express = require('express');

var app = express();
var server = http.createServer(app);

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/views', express.static(process.cwd() + '/app/views'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');

routes(app);

var port = process.env.PORT || 8080;
server.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
