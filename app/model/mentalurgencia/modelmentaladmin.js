function modelmentaladmin(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelmentaladmin.prototype.historico = function(callback){
	
	this._conection.query('select * from mentalurgencia', callback);
}

module.exports = function(){
	return modelmentaladmin;
}