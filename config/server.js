var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('cookie-session');
const cors = require('cors');
var flash = require('connect-flash');

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
app.use(flash());

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));


consign({
	verbose: process.env.APP_DEBUG === 'false',
})
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/model')
	.then('app/controllers')
	.into(app);
  
module.exports = app;