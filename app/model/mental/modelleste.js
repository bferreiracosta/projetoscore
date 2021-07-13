<<<<<<< HEAD
function modelleste(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelleste.prototype.cadastrarpaciente = function(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set dataatu="'+dataatu+'", hora="'+horas+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modelleste.prototype.cadastrarpacienteexcludente = function(data, motivoh,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set datah="'+datah+'", motivoh="'+motivoh+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}
modelleste.prototype.update = function(idpaciente,dataatu, horas, prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('update mental set dataatu="'+dataatu+'", hora="'+horas+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelleste.prototype.baixahospitalidade = function(idpaciente,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

modelleste.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null and soma != "Excludente"', callback);
}


modelleste.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modelleste.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelleste;
=======
function modelleste(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelleste.prototype.cadastrarpaciente = function(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set dataatu="'+dataatu+'", hora="'+horas+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modelleste.prototype.cadastrarpacienteexcludente = function(data, motivoh,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set datah="'+datah+'", motivoh="'+motivoh+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}
modelleste.prototype.update = function(idpaciente,dataatu, horas, prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('update mental set dataatu="'+dataatu+'", hora="'+horas+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelleste.prototype.baixahospitalidade = function(idpaciente,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

modelleste.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null and soma != "Excludente"', callback);
}


modelleste.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modelleste.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelleste;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}