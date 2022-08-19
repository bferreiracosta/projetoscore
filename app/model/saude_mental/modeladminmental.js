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

modeladminmental.prototype.cadastrarpacienteexcludente = function(datah, motivoh,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set datah="'+datah+'", motivoh="'+motivoh+'", dataa = "'+data+'", prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modeladminmental.prototype.cadastrarpaciente = function(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,internacao, juizo, comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('insert into mental set dataatu="'+dataatu+'", hora="'+horas+'", dataa = "'+data+'", internacao = "'+internacao+'",juizo = "'+juizo+'",prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'"', callback);
}

modeladminmental.prototype.historico = function(callback){
	
	this._conection.query('select * from mental', callback);
}
module.exports = function(){
	return modeladminmental;
}