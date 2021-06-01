function modelsaojorge(application){
	var conection = require('../../../../config/dbConnection');
	this._conection = conection();
}

modelsaojorge.prototype.cadastrarpaciente = function( dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, callback){
		
	this._conection.query('insert into kabansaojorge set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'", news = "" , dispositivo = "", spict="'+spict+'" , fluxo_de_o2 = "" , droga = "" , fio2 = "" ,peep = "" ,sedacao = "" , glasgow = "" , tempo = "" ,exame = "'+exame+'", unidade = "'+unidade+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", dataadmissao="'+data+'"', callback);
}

modelsaojorge.prototype.update = function(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict, callback){
	

	this._conection.query('update kabansaojorge set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'" , exame = "'+exame+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", spict="'+spict+'" where idpaciente = ' + idpaciente, callback);
}

modelsaojorge.prototype.updatenews = function(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, callback){


	this._conection.query('update kabansaojorge set  news = "'+news+'", tempo = "'+tempo+'", data = "'+data+'", fr = "'+fr+'", sat = "'+sat+'", temp = "'+temp+'", o2 = "'+o2+'", sistolica = "'+sistolica+'", fc = "'+fc+'", alerta = "'+alerta+'"  where idpaciente = ' + idpaciente, callback);
}

modelsaojorge.prototype.updateresp = function(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic, callback){
	

	this._conection.query('update kabansaojorge set vazaoDormonid="'+vazaoDormonid+'",vazaoFentanil="'+vazaoFentanil+'",vazaoRocuronio="'+vazaoRocuronio+'",vazaoPropofol="'+vazaoPropofol+'",vazaonora="'+vazaonora+'",vazaoadre="'+vazaoadre+'",vazaobica="'+vazaobica+'", profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'", glasgow = "'+glasgow+'", acomodacao = "'+leito+'", nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'", bic = "'+bic+'" where idpaciente = ' + idpaciente, callback);
}

modelsaojorge.prototype.baixa = function(idpaciente,baixa,data, callback){

	this._conection.query('update kabansaojorge set   baixa = "'+baixa+'", databaixa = "'+data+'" where idpaciente = ' + idpaciente, callback);
}

modelsaojorge.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from kabansaojorge where unidade = "'+unidade+'" and baixa is null', callback);
}

modelsaojorge.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from kabansaojorge where unidade = "'+unidade+'"  order by paciente asc', callback);
}

modelsaojorge.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from kabansaojorge where unidade = "'+unidade+'" and idpaciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelsaojorge;
}