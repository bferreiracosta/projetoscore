function modelescalacolorida(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacolorida.prototype.buscarescala = function( callback){
	
	this._conection.query('select * from funcionariosplanalto', callback);
}


module.exports = function(){
	return modelescalacolorida;
}