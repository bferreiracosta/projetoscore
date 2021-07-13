function modelmentaladmin(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelmentaladmin.prototype.historico = function(callback){
	
	this._conection.query('select * from mentalurgencia where baixa is null', callback);
}

module.exports = function(){
	return modelmentaladmin;
}