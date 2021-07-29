function modeloeste(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modeloeste.prototype.buscarleito = function(callback){
	
	this._conection.query('select * from mentalleito where id_leito = 1;', callback);
}

modeloeste.prototype.updateleito = function(leitofemoeste,leitomascoeste, callback){

	this._conection.query('update mentalleito set leitofemoeste = "'+leitofemoeste+'", leitomascoeste = "'+leitomascoeste+'"  where id_leito = 1 ', callback);
}

modeloeste.prototype.cadastrarpaciente = function(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set dataatu="'+dataatu+'", hora="'+horas+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modeloeste.prototype.cadastrarpacienteexcludente = function(datah, motivoh,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set datah="'+datah+'", motivoh="'+motivoh+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modeloeste.prototype.update = function(idpaciente,dataatu, horas, prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('update mental set dataatu="'+dataatu+'", hora="'+horas+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modeloeste.prototype.baixahospitalidade = function(idpaciente,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

modeloeste.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null and soma != "Excludente"', callback);
}


modeloeste.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modeloeste.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modeloeste;
}