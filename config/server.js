var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('express-session');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));


app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/model')
	.then('app/controllers')
	.into(app);
  
module.exports = app;