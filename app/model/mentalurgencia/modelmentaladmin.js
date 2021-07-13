<<<<<<< HEAD
function modelmentaladmin(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelmentaladmin.prototype.historico = function(callback){
	
	this._conection.query('select * from mentalurgencia where baixa is null', callback);
}

module.exports = function(){
	return modelmentaladmin;
=======
function modelmentaladmin(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelmentaladmin.prototype.historico = function(callback){
	
	this._conection.query('select * from mentalurgencia where baixa is null', callback);
}

module.exports = function(){
	return modelmentaladmin;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}