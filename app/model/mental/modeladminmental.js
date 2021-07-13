<<<<<<< HEAD
function modeladminmental(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladminmental.prototype.buscarpacientecaps = function(callback){
	
	this._conection.query('select * from mental where baixa is null and motivoh is null and soma != "Excludente"', callback);
}

modeladminmental.prototype.buscarpacientecapsurgencia = function(callback){
	
	this._conection.query('select * from mental where soma = "Excludente"', callback);
}

modeladminmental.prototype.baixa = function(idpaciente,baixa,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datas="'+data+'",  baixa = "'+baixa+'", motivo="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

module.exports = function(){
	return modeladminmental;
=======
function modeladminmental(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladminmental.prototype.buscarpacientecaps = function(callback){
	
	this._conection.query('select * from mental where baixa is null and motivoh is null and soma != "Excludente"', callback);
}

modeladminmental.prototype.buscarpacientecapsurgencia = function(callback){
	
	this._conection.query('select * from mental where soma = "Excludente"', callback);
}

modeladminmental.prototype.baixa = function(idpaciente,baixa,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datas="'+data+'",  baixa = "'+baixa+'", motivo="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

module.exports = function(){
	return modeladminmental;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}