<<<<<<< HEAD
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


modeladminregulacao.prototype.buscarleito= function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = 1 ', callback);
}

modeladminregulacao.prototype.buscarleitouti = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarleitoenfermaria = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarpacienteenfermaria = function(leito, callback){
	
	this._conection.query('select * from pacientes where leito = "'+leito+'" and baixa is null and paliativo != "" and  news != "" and ecf != "" and fr != "" and fc != "" and sistolica!= "" and sat != "" and o2 != "" and temp != "" and dispositivo != ""', callback);
}

modeladminregulacao.prototype.buscarpacientenull = function(callback){
	
	this._conection.query('select * from pacientes where baixa is null and (paliativo = "" or  news = "" or ecf = "" or fr = "" or fc = "" or sistolica = "" or sat = "" or o2 = "" or temp = "" or dispositivo = "")', callback);
}


modeladminregulacao.prototype.buscarpacientesaladeemergencia = function(leito, callback){
	
	this._conection.query('select * from pacientes where leito = "Sala de Emergência" and baixa is null and paliativo != "" and  news != "" and ecf != "" and fr != "" and fc != "" and sistolica != "" and sat != "" and o2 != "" and temp != "" and dispositivo != ""', callback);
}

modeladminregulacao.prototype.buscardispositivomartins = function(callback){
	
	this._conection.query('select * from dispositivomartins where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivoplanalto = function(callback){
	
	this._conection.query('select * from dispositivoplanalto where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivoluizote = function(callback){
	
	this._conection.query('select * from dispositivoluizote where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivoroosevelt = function(callback){
	
	this._conection.query('select * from dispositivoroosevelt where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivotibery = function(callback){
	
	this._conection.query('select * from dispositivotibery where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivomorumbi = function(callback){
	
	this._conection.query('select * from dispositivomorumbi where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivosaojorge = function(callback){
	
	this._conection.query('select * from dispositivosaojorge where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivopampulha = function(callback){
	
	this._conection.query('select * from dispositivopampulha where id = 1 ', callback);
}

module.exports = function(){
	return modeladminregulacao;
=======
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


modeladminregulacao.prototype.buscarleito= function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = 1 ', callback);
}

modeladminregulacao.prototype.buscarleitouti = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarleitoenfermaria = function(callback){
	
	this._conection.query('select * from leitosdisponivel where idleitos = "1" ', callback);
}

modeladminregulacao.prototype.buscarpacienteenfermaria = function(leito, callback){
	
	this._conection.query('select * from pacientes where leito = "'+leito+'" and baixa is null and paliativo != "" and  news != "" and ecf != "" and fr != "" and fc != "" and sistolica!= "" and sat != "" and o2 != "" and temp != "" and dispositivo != ""', callback);
}

modeladminregulacao.prototype.buscarpacientenull = function(callback){
	
	this._conection.query('select * from pacientes where baixa is null and (paliativo = "" or  news = "" or ecf = "" or fr = "" or fc = "" or sistolica = "" or sat = "" or o2 = "" or temp = "" or dispositivo = "")', callback);
}


modeladminregulacao.prototype.buscarpacientesaladeemergencia = function(leito, callback){
	
	this._conection.query('select * from pacientes where leito = "Sala de Emergência" and baixa is null and paliativo != "" and  news != "" and ecf != "" and fr != "" and fc != "" and sistolica != "" and sat != "" and o2 != "" and temp != "" and dispositivo != ""', callback);
}

modeladminregulacao.prototype.buscardispositivomartins = function(callback){
	
	this._conection.query('select * from dispositivomartins where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivoplanalto = function(callback){
	
	this._conection.query('select * from dispositivoplanalto where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivoluizote = function(callback){
	
	this._conection.query('select * from dispositivoluizote where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivoroosevelt = function(callback){
	
	this._conection.query('select * from dispositivoroosevelt where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivotibery = function(callback){
	
	this._conection.query('select * from dispositivotibery where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivomorumbi = function(callback){
	
	this._conection.query('select * from dispositivomorumbi where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivosaojorge = function(callback){
	
	this._conection.query('select * from dispositivosaojorge where id = 1 ', callback);
}

modeladminregulacao.prototype.buscardispositivopampulha = function(callback){
	
	this._conection.query('select * from dispositivopampulha where id = 1 ', callback);
}

module.exports = function(){
	return modeladminregulacao;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}