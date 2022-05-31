function modelescalacolorida(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacolorida.prototype.buscarescalaplanalto = function( callback){
	
	this._conection.query('select * from funcionariosplanalto', callback);
}

modelescalacolorida.prototype.buscarescalaluizote = function( callback){
	
	this._conection.query('select * from funcionariosluizote', callback);
}

modelescalacolorida.prototype.buscarescalamartins = function( callback){
	
	this._conection.query('select * from funcionariosmartins', callback);
}

modelescalacolorida.prototype.buscarescalaroosevelt = function( callback){
	
	this._conection.query('select * from funcionariosroosevelt', callback);
}

modelescalacolorida.prototype.buscarescalatibery = function( callback){
	
	this._conection.query('select * from funcionariostibery', callback);
}

modelescalacolorida.prototype.buscarescalamorumbi = function( callback){
	
	this._conection.query('select * from funcionariosmorumbi', callback);
}

modelescalacolorida.prototype.buscarescalasiate = function( callback){
	
	this._conection.query('select * from funcionariossiate', callback);
}

modelescalacolorida.prototype.buscarescalasad = function( callback){
	
	this._conection.query('select * from funcionariossad', callback);
}

modelescalacolorida.prototype.buscarescalacer = function( callback){
	
	this._conection.query('select * from funcionarioscer', callback);
}

modelescalacolorida.prototype.buscarescalacc = function( callback){
	
	this._conection.query('select * from funcionarioscc', callback);
}

modelescalacolorida.prototype.buscarescalaua = function( callback){
	
	this._conection.query('select * from funcionariosua', callback);
}

modelescalacolorida.prototype.buscarescalacapsad = function( callback){
	
	this._conection.query('select * from funcionarioscapsad', callback);
}

modelescalacolorida.prototype.buscarescalacapsi = function( callback){
	
	this._conection.query('select * from funcionarioscapsi', callback);
}

modelescalacolorida.prototype.buscarescalacapsleste = function( callback){
	
	this._conection.query('select * from funcionarioscapsleste', callback);
}

modelescalacolorida.prototype.buscarescalacapsoeste = function( callback){
	
	this._conection.query('select * from funcionarioscapsoeste', callback);
}

modelescalacolorida.prototype.buscarescalacapsnorte = function( callback){
	
	this._conection.query('select * from funcionarioscapsnorte', callback);
}


module.exports = function(){
	return modelescalacolorida;
}