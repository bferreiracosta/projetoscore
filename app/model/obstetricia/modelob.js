function modelad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelad.prototype.cadastrarpaciente = function(prt,data, paciente,motivo,unidade, callback){
	console.log(prt,data, paciente,motivo,unidade)
	this._conection.query('insert into obstetricia set dataatendimento="'+data+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"', callback);
}


modelad.prototype.update = function(idpaciente,prt,data, paciente,motivo,unidade, callback){
	console.log(idpaciente,prt,data, paciente,motivo,unidade)
	this._conection.query('update obstetricia set dataatendimento="'+data+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}


modelad.prototype.buscarpaciente = function(callback){
	
	this._conection.query('select * from obstetricia', callback);
}



modelad.prototype.buscarpacienteid = function(idpaciente, callback){
	this._conection.query('select * from obstetricia where idpaciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelad;
}