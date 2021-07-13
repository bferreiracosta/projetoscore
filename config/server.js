<<<<<<< HEAD
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('cookie-session');
const cors = require('cors');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

var corsOptions = {
	origin: '*',
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

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
  
=======
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('cookie-session');
const cors = require('cors');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

var corsOptions = {
	origin: '*',
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

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
  
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
module.exports = app;