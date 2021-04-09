function modelroosevelt(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelroosevelt.prototype.cadastrarpaciente = function(paciente, susfacil, prt, idade, leito,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, callback){

	this._conection.query('insert into pacientes set susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'", news = "" , dispositivo = "", spict="'+spict+'" , fluxo_de_o2 = "" , droga = "" , fio2 = "" ,peep = "" ,sedacao = "" , glasgow = "" , tempo = "" ,exame = "'+exame+'", unidade = "'+unidade+'",ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", dataadmissao="'+data+'"', callback);
}

modelroosevelt.prototype.update = function(idpaciente, susfacil,prt, paciente, leito, idade, exame,paliativo,ecf,svd, sne, avp,cvc,spict, callback){
	

	this._conection.query('update pacientes set susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'" , exame = "'+exame+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", spict="'+spict+'" where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.updatenews = function(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, callback){


	this._conection.query('update pacientes set  news = "'+news+'", tempo = "'+tempo+'", data = "'+data+'", fr = "'+fr+'", sat = "'+sat+'", temp = "'+temp+'", o2 = "'+o2+'", sistolica = "'+sistolica+'", fc = "'+fc+'", alerta = "'+alerta+'"  where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.updateresp = function(idpaciente,profissional,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito, nora, adre,bica,dormonid,fentanil,rocuronio,propofol, bic, callback){
	

	this._conection.query('update pacientes set profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'", glasgow = "'+glasgow+'", acomodacao = "'+leito+'", nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'", bic = "'+bic+'" where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.baixa = function(idpaciente,baixa,data, callback){

	this._conection.query('update pacientes set   baixa = "'+baixa+'", databaixa = "'+data+'" where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and baixa is null', callback);
}

modelroosevelt.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'"  order by paciente asc', callback);
}

modelroosevelt.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}

modelroosevelt.prototype.updateleitosroosevelt = function(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se, callback){
	
	this._conection.query('update leitosdisponivel set macasroodisponivel = "'+macasdispo+'", leitosroo = "'+leitosdispo+'",enfroofem = "'+enffem+'",enfroomasc = "'+enfmasc+'",seroo = "'+se+'" where idleitos = ' + idleitos, callback);
}


module.exports = function(){
	return modelroosevelt;
}