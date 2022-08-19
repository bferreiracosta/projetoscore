function modelleste(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelleste.prototype.buscarleito = function(callback){
	
	this._conection.query('select * from mentalleito where id_leito = 1;', callback);
}

modelleste.prototype.updateleito = function(leitofemad,leitomascad, callback){

	this._conection.query('update mentalleito set leitofemad = "'+leitofemad+'", leitomascad = "'+leitomascad+'"  where id_leito = 1 ', callback);
}

modelleste.prototype.update = function(idpaciente,dataatu, horas, prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,internacao, juizo,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, callback){

	this._conection.query('update mental set dataatu="'+dataatu+'", hora="'+horas+'", prt = "'+prt+'", paciente = "'+paciente+'", internacao = "'+internacao+'",juizo = "'+juizo+'",diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", tratamento="'+tratamento+'",risco="'+risco+'",comportamento="'+comportamento+'",exposicao="'+exposicao+'",autonegligencia="'+autonegligencia+'",dependencia="'+dependencia+'",terapeutico="'+terapeutico+'",social="'+social+'",soma="'+soma+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelleste.prototype.baixahospitalidade = function(idpaciente,motivo,data,profissional, callback){

	this._conection.query('update mental set profissional="'+profissional+'", datah="'+data+'",  motivoh="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}


modelleste.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null and motivoh is null and soma != "Excludente"', callback);
}

modelleste.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelleste;
}