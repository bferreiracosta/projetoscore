function modelmorumbi(application){
	var conection = require('../../../../config/dbConnection');
	this._conection = conection();
}


modelmorumbi.prototype.relatoriocovidmorumbienf = function(unidade, callback){
	
	this._conection.query('SELECT * FROM portal_paciente.kaban k inner join dispositivokaban d on k.idpaciente = d.idpaciente inner join news n on k.idpaciente = n.idpaciente where k.unidade = "'+unidade+'" and k.baixa is null and k.covid="true" and k.comodo="Enfermaria" and n.status="Ativo" and d.status="Ativo";', callback);
}
modelmorumbi.prototype.relatoriocovidmorumbise = function(unidade, callback){
	
	this._conection.query('SELECT * FROM portal_paciente.kaban k inner join dispositivokaban d on k.idpaciente = d.idpaciente inner join news n on k.idpaciente = n.idpaciente where k.unidade = "'+unidade+'" and k.baixa is null and k.covid="true" and k.comodo="Sala de Emergência" and n.status="Ativo" and d.status="Ativo";', callback);
}


module.exports = function(){
	return modelmorumbi;
}