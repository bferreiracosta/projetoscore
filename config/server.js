var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('cookie-session');
const cors = require('cors');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(session({
	secret: 'secret',
	resave: false,
	maxAge:  600000,
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