function modelad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelad.prototype.cadastrarpaciente = function(prt,data, paciente,motivo,unidade, conduta, destino, ufu,vagazero, vagazero1, vagaaceita, vagaaceita1, hmu, callback){
	
	this._conection.query('insert into obstetricia set vagazero="'+vagazero+'",vagazero1="'+vagazero1+'",vagaaceita="'+vagaaceita+'",vagaaceita1="'+vagaaceita1+'", conduta="'+conduta+'",ufu="'+ufu+'",destino="'+destino+'",hmu="'+hmu+'", dataatendimento="'+data+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"', callback);
}


modelad.prototype.update = function(idpaciente, prt, paciente,motivo,unidade, conduta, destino, ufu, vagazero, vagazero1, vagaaceita, vagaaceita1,hmu, callback){
	
	this._conection.query('update obstetricia set vagazero="'+vagazero+'",vagazero1="'+vagazero1+'",vagaaceita="'+vagaaceita+'",vagaaceita1="'+vagaaceita1+'", conduta="'+conduta+'",ufu="'+ufu+'",destino="'+destino+'",hmu="'+hmu+'", prt = "'+prt+'", nome = "'+paciente+'", motivo = "'+motivo+'", unidade = "'+unidade+'"  where idpaciente = ' + idpaciente, callback);
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