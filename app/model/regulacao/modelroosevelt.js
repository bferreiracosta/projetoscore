function modelroosevelt(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelroosevelt.prototype.cadastrarpaciente = function( dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, callback){
		
	this._conection.query('insert into pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'", news = "" , dispositivo = "", spict="'+spict+'" , fluxo_de_o2 = "" , droga = "" , fio2 = "" ,peep = "" ,sedacao = "" , glasgow = "" , tempo = "" ,exame = "'+exame+'", unidade = "'+unidade+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", dataadmissao="'+data+'"', callback);
}

modelroosevelt.prototype.update = function(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict, callback){
	

	this._conection.query('update pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'" , exame = "'+exame+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", spict="'+spict+'" where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.updatenews = function(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, callback){


	this._conection.query('update pacientes set  news = "'+news+'", tempo = "'+tempo+'", data = "'+data+'", fr = "'+fr+'", sat = "'+sat+'", temp = "'+temp+'", o2 = "'+o2+'", sistolica = "'+sistolica+'", fc = "'+fc+'", alerta = "'+alerta+'"  where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.updateresp = function(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic, callback){
	

	this._conection.query('update pacientes set vazaoDormonid="'+vazaoDormonid+'",vazaoFentanil="'+vazaoFentanil+'",vazaoRocuronio="'+vazaoRocuronio+'",vazaoPropofol="'+vazaoPropofol+'",vazaonora="'+vazaonora+'",vazaoadre="'+vazaoadre+'",vazaobica="'+vazaobica+'", profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'", glasgow = "'+glasgow+'", acomodacao = "'+leito+'", nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'", bic = "'+bic+'" where id_paciente = ' + idpaciente, callback);
}

modelroosevelt.prototype.updateleitosroosevelt = function(idleitos, se1ccv ,se1cmv ,se2ccv ,se2cmv, se3ccv ,se3cmv ,se4ccv ,se4cmv ,se5ccv ,se5cmv ,se6ccv ,se6cmv ,seccv ,secmv ,paccv  ,pacmv ,is1ccv ,is1cmv ,is2ccv ,is2cmv ,is3ccv  ,is3cmv ,is4ccv ,is4cmv ,is5ccv ,is5cmv ,e7ccv ,e7cmv ,e8ccv ,e8cmv ,e9ccv ,e9cmv, e11ccv ,e11cmv ,e12ccv ,e12cmv  ,e13ccv ,e13cmv ,e14ccv ,e14cmv ,e15ccv ,e15cmv ,e16ccv ,e16cmv ,e17ccv ,e17cmv ,corredorccv ,corredorcmv ,macaparada ,dataatualizacao,horaatualizacao, callback){
	
	this._conection.query('update centralleitosroosevelt set  se1ccv ="'+se1ccv+'",se1cmv ="'+se1cmv+'",se2ccv  ="'+se2ccv+'",se2cmv  ="'+se2cmv+'",se3ccv  ="'+se3ccv+'",se3cmv  ="'+se3cmv+'",se4ccv  ="'+se4ccv+'",se4cmv  ="'+se4cmv+'",se5ccv  ="'+se5ccv+'",se5cmv  ="'+se5cmv+'",se6ccv  ="'+se6ccv+'",se6cmv  ="'+se6cmv+'",seccv  ="'+seccv+'",secmv  ="'+secmv+'",paccv   ="'+paccv+'",pacmv  ="'+pacmv+'",is1ccv  ="'+is1ccv+'",is1cmv  ="'+is1cmv+'",is2ccv  ="'+is2ccv+'",is2cmv  ="'+is2cmv+'",is3ccv   ="'+is3ccv+'",is3cmv  ="'+is3cmv+'",is4ccv  ="'+is4ccv+'",is4cmv  ="'+is4cmv+'",is5ccv  ="'+is5ccv+'",is5cmv  ="'+is5cmv+'",e7ccv  ="'+e7ccv+'",e7cmv  ="'+e7cmv+'",e8ccv  ="'+e8ccv+'",e8cmv  ="'+e8cmv+'",e9ccv  ="'+e9ccv+'",e9cmv  ="'+e9cmv+'",e11ccv  ="'+e11ccv+'",e11cmv  ="'+e11cmv+'",e12ccv  ="'+e12ccv+'",e12cmv   ="'+e12cmv+'",e13ccv  ="'+e13ccv+'",e13cmv  ="'+e13cmv+'",e14ccv  ="'+e14ccv+'",e14cmv  ="'+e14cmv+'",e15ccv  ="'+e15ccv+'",e15cmv  ="'+e15cmv+'",e16ccv  ="'+e16ccv+'",e16cmv  ="'+e16cmv+'",e17ccv  ="'+e17ccv+'",e17cmv  ="'+e17cmv+'",corredorccv  ="'+corredorccv+'", corredorcmv  ="'+corredorcmv+'",macaparada  ="'+macaparada+'",dataatualizacao="'+dataatualizacao+'",horaatualizacao="'+horaatualizacao+'" where id = ' + idleitos, callback);
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




module.exports = function(){
	return modelroosevelt;
}