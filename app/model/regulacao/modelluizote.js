function modelluizote(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelluizote.prototype.cadastrarpaciente = function( dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, callback){
		
	this._conection.query('insert into pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'", news = "" , dispositivo = "", spict="'+spict+'" , fluxo_de_o2 = "" , droga = "" , fio2 = "" ,peep = "" ,sedacao = "" , glasgow = "" , tempo = "" ,exame = "'+exame+'", unidade = "'+unidade+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", dataadmissao="'+data+'"', callback);
}

modelluizote.prototype.update = function(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict, callback){
	
	this._conection.query('update pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'" , exame = "'+exame+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", spict="'+spict+'" where id_paciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatenews = function(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, callback){


	this._conection.query('update pacientes set  news = "'+news+'", tempo = "'+tempo+'", data = "'+data+'", fr = "'+fr+'", sat = "'+sat+'", temp = "'+temp+'", o2 = "'+o2+'", sistolica = "'+sistolica+'", fc = "'+fc+'", alerta = "'+alerta+'"  where id_paciente = ' + idpaciente, callback);
}

modelluizote.prototype.updateresp = function(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic, callback){
	

	this._conection.query('update pacientes set vazaoDormonid="'+vazaoDormonid+'",vazaoFentanil="'+vazaoFentanil+'",vazaoRocuronio="'+vazaoRocuronio+'",vazaoPropofol="'+vazaoPropofol+'",vazaonora="'+vazaonora+'",vazaoadre="'+vazaoadre+'",vazaobica="'+vazaobica+'", profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'", glasgow = "'+glasgow+'", acomodacao = "'+leito+'", nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'", bic = "'+bic+'" where id_paciente = ' + idpaciente, callback);
}

modelluizote.prototype.updaterespkaban = function(idpaciente, svd, sne, avp, cvc, glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, nora, adre,bica,dormonid,fentanil,rocuronio,propofol, callback){
	
	this._conection.query('update pacientes set svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'",glasgow="'+glasgow+'", bic="'+bic+'", vazaoDormonid="'+vazaoDormonid+'",vazaoFentanil="'+vazaoFentanil+'",vazaoRocuronio="'+vazaoRocuronio+'",vazaoPropofol="'+vazaoPropofol+'",vazaonora="'+vazaonora+'",vazaoadre="'+vazaoadre+'",vazaobica="'+vazaobica+'", profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'",  nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'" where id_paciente = ' + idpaciente, callback);
}
modelluizote.prototype.baixa = function(idpaciente,baixa,data, callback){

	this._conection.query('update pacientes set   baixa = "'+baixa+'", databaixa = "'+data+'" where id_paciente = ' + idpaciente, callback);
}

modelluizote.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from kaban inner join dispositivokaban on dispositivokaban.idpaciente = kaban.idpaciente inner join news on news.idpaciente = kaban.idpaciente where kaban.unidade = "'+unidade+'" and kaban.baixa is null and covid="true" and dispositivokaban.status="Ativo" and news.status="Ativo"', callback);
}

modelluizote.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from pacientes p inner join kaban k where p.unidade = "'+unidade+'" and k.unidade= "'+unidade+'" and k.covid="true"  group by p.paciente order by p.paciente asc', callback);
}

modelluizote.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}

modelluizote.prototype.buscarpacientepornome = function(paciente, callback){
	
	this._conection.query('select id_paciente from pacientes where paciente = "'+paciente+'" and unidade = "Luizote" order by id_paciente desc limit 1 ', callback);
	
}

module.exports = function(){
	return modelluizote;
}