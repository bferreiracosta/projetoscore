<<<<<<< HEAD
function modelad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelad.prototype.buscarleito = function(callback){
	
	this._conection.query('select * from mentalleito where id_leito = 1;', callback);
}

modelad.prototype.updateleito = function(leitofemad,leitomascad, callback){

	this._conection.query('update mentalleito set leitofemad = "'+leitofemad+'", leitomascad = "'+leitomascad+'"  where id_leito = 1 ', callback);
}

modelad.prototype.cadastrarpaciente = function(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set dataatu="'+dataatu+'", hora="'+horas+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}
modelad.prototype.cadastrarpacienteexcludente = function(data, motivoh,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set datah="'+datah+'", motivoh="'+motivoh+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modelad.prototype.update = function(idpaciente,dataatu, horas, prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('update mental set dataatu="'+dataatu+'", hora="'+horas+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelad.prototype.baixahospitalidade = function(idpaciente,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}


modelad.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null and soma != "Excludente"', callback);
}


modelad.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modelad.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelad;
=======
function modelad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelad.prototype.buscarleito = function(callback){
	
	this._conection.query('select * from mentalleito where id_leito = 1;', callback);
}

modelad.prototype.updateleito = function(leitofemad,leitomascad, callback){

	this._conection.query('update mentalleito set leitofemad = "'+leitofemad+'", leitomascad = "'+leitomascad+'"  where id_leito = 1 ', callback);
}

modelad.prototype.cadastrarpaciente = function(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set dataatu="'+dataatu+'", hora="'+horas+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}
modelad.prototype.cadastrarpacienteexcludente = function(data, motivoh,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set datah="'+datah+'", motivoh="'+motivoh+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modelad.prototype.update = function(idpaciente,dataatu, horas, prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('update mental set dataatu="'+dataatu+'", hora="'+horas+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelad.prototype.baixahospitalidade = function(idpaciente,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}


modelad.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null and soma != "Excludente"', callback);
}


modelad.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modelad.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelad;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}