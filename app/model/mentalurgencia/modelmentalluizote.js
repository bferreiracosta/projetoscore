function modelmentalluizote(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelmentalluizote.prototype.buscarpacientecaps = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}

modelmentalluizote.prototype.baixa = function(idpaciente,baixa, datas, callback){
	
	this._conection.query('update mentalurgencia set datas = "'+datas+'",  motivo = "'+baixa+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalluizote.prototype.cadastrarpaciente = function(prt,paciente, idade,diagnostico,referencia,unidade,data, callback){

	this._conection.query('insert into mentalurgencia set dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", unidade = "'+unidade+'"', callback);
}


modelmentalluizote.prototype.update = function(idpaciente, prt,paciente, idade,diagnostico,referencia,unidade, callback){
	
	this._conection.query('update mentalurgencia set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'" , referencia = "'+referencia+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalluizote.prototype.updatecaps = function(idpaciente,vinculo,motivo, articulacao, matriciado, unidade, callback){

	this._conection.query('update mentalurgencia set vinculo = "'+vinculo+'", motivocaps = "'+motivo+'", articulacao = "'+articulacao+'", matriciado = "'+matriciado+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}


modelmentalluizote.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}


modelmentalluizote.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'"', callback);
}


modelmentalluizote.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}

modelmentalluizote.prototype.buscarpacientepornome = function(paciente, callback){
		
	this._conection.query('select id_paciente from mentalurgencia where paciente = "'+paciente+'" and unidade = "Luizote"', callback);
	
}

module.exports = function(){
	return modelmentalluizote;
}