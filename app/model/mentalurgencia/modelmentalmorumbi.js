<<<<<<< HEAD
function modelmentalmorumbi(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelmentalmorumbi.prototype.buscarpacientecaps = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}

modelmentalmorumbi.prototype.baixa = function(idpaciente,baixa, datas, callback){

	this._conection.query('update mentalurgencia set datas = "'+datas+'",  baixa = "'+baixa+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalmorumbi.prototype.cadastrarpaciente = function(prt,paciente, idade,diagnostico,referencia,unidade,data, callback){

	this._conection.query('insert into mentalurgencia set dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", unidade = "'+unidade+'"', callback);
}


modelmentalmorumbi.prototype.update = function(idpaciente, prt,paciente, idade,diagnostico,referencia,unidade, callback){

	this._conection.query('update mentalurgencia set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'" , referencia = "'+referencia+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalmorumbi.prototype.updatecaps = function(idpaciente,vinculo,motivo, articulacao, matriciado, unidade, callback){

	this._conection.query('update mentalurgencia set vinculo = "'+vinculo+'", motivocaps = "'+motivo+'", articulacao = "'+articulacao+'", matriciado = "'+matriciado+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalmorumbi.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}


modelmentalmorumbi.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'"', callback);
}


modelmentalmorumbi.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}

modelmentalmorumbi.prototype.buscarpacientepornome = function(paciente, callback){
		
	this._conection.query('select id_paciente from mentalurgencia where paciente = "'+paciente+'" and unidade = "Morumbi"', callback);
	
}
module.exports = function(){
	return modelmentalmorumbi;
=======
function modelmentalmorumbi(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelmentalmorumbi.prototype.buscarpacientecaps = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}

modelmentalmorumbi.prototype.baixa = function(idpaciente,baixa, datas, callback){

	this._conection.query('update mentalurgencia set datas = "'+datas+'",  baixa = "'+baixa+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalmorumbi.prototype.cadastrarpaciente = function(prt,paciente, idade,diagnostico,referencia,unidade,data, callback){

	this._conection.query('insert into mentalurgencia set dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", unidade = "'+unidade+'"', callback);
}


modelmentalmorumbi.prototype.update = function(idpaciente, prt,paciente, idade,diagnostico,referencia,unidade, callback){

	this._conection.query('update mentalurgencia set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'" , referencia = "'+referencia+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalmorumbi.prototype.updatecaps = function(idpaciente,vinculo,motivo, articulacao, matriciado, unidade, callback){

	this._conection.query('update mentalurgencia set vinculo = "'+vinculo+'", motivocaps = "'+motivo+'", articulacao = "'+articulacao+'", matriciado = "'+matriciado+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelmentalmorumbi.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and baixa is null', callback);
}


modelmentalmorumbi.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'"', callback);
}


modelmentalmorumbi.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mentalurgencia where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}

modelmentalmorumbi.prototype.buscarpacientepornome = function(paciente, callback){
		
	this._conection.query('select id_paciente from mentalurgencia where paciente = "'+paciente+'" and unidade = "Morumbi"', callback);
	
}
module.exports = function(){
	return modelmentalmorumbi;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}