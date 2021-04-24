function modelinfantil(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelinfantil.prototype.cadastrarpaciente = function(prt,paciente, idade,diagnostico,referencia,unidade,data, callback){

	this._conection.query('insert into mental set dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", unidade = "'+unidade+'"', callback);
}

modelinfantil.prototype.update = function(idpaciente, prt,paciente, idade,diagnostico,referencia,unidade, callback){

	this._conection.query('update mental set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'" , referencia = "'+referencia+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelinfantil.prototype.baixahospitalidade = function(idpaciente,motivo,data, callback){

	this._conection.query('update mental set datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

modelinfantil.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null', callback);
}


modelinfantil.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modelinfantil.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelinfantil;
}