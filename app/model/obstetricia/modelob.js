<<<<<<< HEAD
function modelad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelad.prototype.cadastrarpaciente = function(prt,data, paciente,motivo,unidade, conduta, destino, ufu, hmu, callback){
	
	this._conection.query('insert into obstetricia set conduta="'+conduta+'",ufu="'+ufu+'",destino="'+destino+'",hmu="'+hmu+'", dataatendimento="'+data+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"', callback);
}


modelad.prototype.update = function(idpaciente, prt, paciente,motivo,unidade, conduta, destino, ufu, hmu, callback){
	
	this._conection.query('update obstetricia set conduta="'+conduta+'",ufu="'+ufu+'",destino="'+destino+'",hmu="'+hmu+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"  where idpaciente = ' + idpaciente, callback);
}


modelad.prototype.buscarpaciente = function(callback){
	
	this._conection.query('select * from obstetricia', callback);
}



modelad.prototype.buscarpacienteid = function(idpaciente, callback){
	this._conection.query('select * from obstetricia where idpaciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelad;
=======
function modelad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelad.prototype.cadastrarpaciente = function(prt,data, paciente,motivo,unidade, conduta, destino, ufu, hmu, callback){
	
	this._conection.query('insert into obstetricia set conduta="'+conduta+'",ufu="'+ufu+'",destino="'+destino+'",hmu="'+hmu+'", dataatendimento="'+data+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"', callback);
}


modelad.prototype.update = function(idpaciente, prt, paciente,motivo,unidade, conduta, destino, ufu, hmu, callback){
	
	this._conection.query('update obstetricia set conduta="'+conduta+'",ufu="'+ufu+'",destino="'+destino+'",hmu="'+hmu+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"  where idpaciente = ' + idpaciente, callback);
}


modelad.prototype.buscarpaciente = function(callback){
	
	this._conection.query('select * from obstetricia', callback);
}



modelad.prototype.buscarpacienteid = function(idpaciente, callback){
	this._conection.query('select * from obstetricia where idpaciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelad;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}