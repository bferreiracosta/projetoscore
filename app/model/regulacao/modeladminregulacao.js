function modeladminregulacao(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladminregulacao.prototype.updateleitosanexo = function(idleitos, enfermariamasculina,enfermariafeminina,utigeral,utimasculina, utifeminina, leitosenfbloqueado,leitosutibloqueado, callback){
	

	this._conection.query('update leitosdisponivel set enfermariaanexofeminino = "'+enfermariafeminina+'", enfermariaanexomasculino = "'+enfermariamasculina+'",utigeralanexo = "'+utigeral+'", utianexofeminino = "'+utifeminina+'",utianexomasculino = "'+utimasculina+'", leitosbloqueadoutianexo="'+leitosutibloqueado+'", leitosbloqueadoenfermariaanexo="'+leitosenfbloqueado+'" where idleitos = ' + idleitos, callback);
}

modeladminregulacao.prototype.updateleitoscim = function(idleitos, enfermariamasculina,enfermariafeminina, leitosenfbloqueado, callback){
	

	this._conection.query('update leitosdisponivel set enfermariacimfeminino = "'+enfermariafeminina+'", enfermariacimmasculino = "'+enfermariamasculina+'", leitosbloqueadoenfermariacim = "'+leitosenfbloqueado+'" where idleitos = ' + idleitos, callback);
}

modeladminregulacao.prototype.updateleitoshmu = function(idleitos,uti,leitosutibloqueado, callback){
	

	this._conection.query('update leitosdisponivel set utivagas = "'+uti+'", leitosbloqueadoutihmu = "'+leitosutibloqueado+'" where idleitos = ' + idleitos, callback);
}

modeladminregulacao.prototype.buscarleito = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarleitouti = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarleitoenfermaria = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarpacienteenfermaria = function(leito, callback){
	
	this._conection.query('select * from pacientes where leito = "'+leito+'" and baixa is null and paliativo is not null and  news is not null and ecf is not null and fr is not null and fc is not null and sistolica is not null and sat is not null and o2 is not null and temp is not null;', callback);
}

modeladminregulacao.prototype.buscarpacientenull = function(callback){
	
	this._conection.query('select * from pacientes where baixa is null and paliativo is null or  news is null or ecf is null or fr is null or fc is null or sistolica is null or sat is null or o2 is null or temp is null', callback);
}


modeladminregulacao.prototype.buscarpacientesaladeemergencia = function(leito, callback){
	
	this._conection.query('select * from pacientes where leito = "'+leito+'" and baixa is null and paliativo is not null and  news is not null and ecf is not null and fr is not null and fc is not null and sistolica is not null and sat is not null and o2 is not null and temp is not null', callback);
}

module.exports = function(){
	return modeladminregulacao;
}