function modeladminmental(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladminmental.prototype.buscarpacientecaps = function(callback){
	
	this._conection.query('select * from mental where baixa is null and motivoh is null', callback);
}

modeladminmental.prototype.baixa = function(idpaciente,baixa,motivo,data, callback){

	this._conection.query('update mental set datas="'+data+'",  baixa = "'+baixa+'", motivo="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

module.exports = function(){
	return modeladminmental;
}