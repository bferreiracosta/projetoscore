function modelmentalroosevelt(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelmentalroosevelt.prototype.buscarpacientecaps = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}

modelmentalroosevelt.prototype.baixa = function(idpaciente,baixa, datas, callback){

	this._conection.query('update mentalurgencia set datas = "'+datas+'",  baixa = "'+baixa+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalroosevelt.prototype.cadastrarpaciente = function(prt,paciente, idade,diagnostico,referencia,unidade,data, callback){

	this._conection.query('insert into mentalurgencia set dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", unidade = "'+unidade+'"', callback);
}


modelmentalroosevelt.prototype.update = function(idpaciente, prt,paciente, idade,diagnostico,referencia,unidade, callback){

	this._conection.query('update mentalurgencia set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'" , referencia = "'+referencia+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalroosevelt.prototype.updatecaps = function(idpaciente,vinculo,motivo, articulacao, matriciado, unidade, callback){

	this._conection.query('update mentalurgencia set vinculo = "'+vinculo+'", motivocaps = "'+motivo+'", articulacao = "'+articulacao+'", matriciado = "'+matriciado+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalroosevelt.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}


modelmentalroosevelt.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'"', callback);
}


modelmentalroosevelt.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}
modelmentalroosevelt.prototype.buscarpacientepornome = function(paciente, unidade, callback){
	this._conection.query('select idpaciente from mentalurgencia where unidade = "'+unidade+'" and paciente = ' + paciente, callback);
}


module.exports = function(){
	return modelmentalroosevelt;
}