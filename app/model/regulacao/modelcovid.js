function modelcovid(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modelcovid.prototype.relatoriocovidenf = function(callback){

	this._conection.query('SELECT * FROM portal_paciente.kaban k inner join dispositivokaban d on k.idpaciente = d.idpaciente inner join news n on k.idpaciente = n.idpaciente where k.baixa is null and k.covid="true" and k.comodo="Enfermaria" and n.status="Ativo" and d.status="Ativo";', callback);
}
modelcovid.prototype.relatoriocovidse = function(callback){
	
	this._conection.query('SELECT * FROM portal_paciente.kaban k inner join dispositivokaban d on k.idpaciente = d.idpaciente inner join news n on k.idpaciente = n.idpaciente where k.baixa is null and k.covid="true" and k.comodo="Sala de Emergência" and n.status="Ativo" and d.status="Ativo";', callback);
}


module.exports = function(){
	return modelcovid;
}