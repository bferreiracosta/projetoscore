function modelnorte(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelnorte.prototype.cadastrarpaciente = function(prt,paciente, idade,diagnostico,referencia,unidade, callback){

	this._conection.query('insert into mental set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'", referencia = "'+referencia+'", unidade = "'+unidade+'"', callback);
}


modelnorte.prototype.update = function(idpaciente, prt,paciente, idade,diagnostico,referencia,unidade, callback){

	this._conection.query('update mental set prt = "'+prt+'", paciente = "'+paciente+'", diagnostico = "'+diagnostico+'", idade = "'+idade+'" , referencia = "'+referencia+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelnorte.prototype.updatecaps = function(idpaciente,prt,paciente, vinculo,motivo,articulacoes,matriciado, unidade, callback){

	this._conection.query('update mental set prt = "'+prt+'", paciente = "'+paciente+'", vinculo = "'+vinculo+'", motivocaps = "'+motivo+'" , articulacoes = "'+articulacoes+'", matriciado = "'+matriciado+'", unidade = "'+unidade+'" where id_paciente = ' + idpaciente, callback);
}

modelnorte.prototype.baixa = function(idpaciente,baixa,motivo, callback){

	this._conection.query('update mental set   baixa = "'+baixa+'", motivo="'+motivo+'" where id_paciente = ' + idpaciente, callback);
}

modelnorte.prototype.buscarusuarioeditavel = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

modelnorte.prototype.buscarusuario = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id.id, callback);
}

modelnorte.prototype.buscarusuarioporid = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

modelnorte.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'" and baixa is null', callback);
}


modelnorte.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from mental where unidade = "'+unidade+'"', callback);
}


modelnorte.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from mental where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelnorte;
}