function modelmartins(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelmartins.prototype.cadastrarpaciente = function( dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, callback){
		
	this._conection.query('insert into pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'", news = "" , dispositivo = "", spict="'+spict+'" , fluxo_de_o2 = "" , droga = "" , fio2 = "" ,peep = "" ,sedacao = "" , glasgow = "" , tempo = "" ,exame = "'+exame+'", unidade = "'+unidade+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", dataadmissao="'+data+'"', callback);
}

modelmartins.prototype.update = function(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict, callback){
	

	this._conection.query('update pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'" , exame = "'+exame+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", spict="'+spict+'" where id_paciente = ' + idpaciente, callback);
}

modelmartins.prototype.updatenews = function(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, callback){


	this._conection.query('update pacientes set  news = "'+news+'", tempo = "'+tempo+'", data = "'+data+'", fr = "'+fr+'", sat = "'+sat+'", temp = "'+temp+'", o2 = "'+o2+'", sistolica = "'+sistolica+'", fc = "'+fc+'", alerta = "'+alerta+'"  where id_paciente = ' + idpaciente, callback);
}

modelmartins.prototype.updateresp = function(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic, callback){
	

	this._conection.query('update pacientes set vazaoDormonid="'+vazaoDormonid+'",vazaoFentanil="'+vazaoFentanil+'",vazaoRocuronio="'+vazaoRocuronio+'",vazaoPropofol="'+vazaoPropofol+'",vazaonora="'+vazaonora+'",vazaoadre="'+vazaoadre+'",vazaobica="'+vazaobica+'", profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'", glasgow = "'+glasgow+'", acomodacao = "'+leito+'", nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'", bic = "'+bic+'" where id_paciente = ' + idpaciente, callback);
}

modelmartins.prototype.updateleitosmartins = function(idleitos, senccv,sencmv,seccv,secmv,emccv,emcmv,efccv,efcmv,corredorccv,corredorcmv,pediatriaccv,pediatriabcv,goccv,gocmv,eaccv,eacmv,dataatualizacao,horaatualizacao, callback){
	
	this._conection.query('update centralleitosmartins set  senccv ="'+senccv+'",sencmv="'+sencmv+'",seccv="'+seccv+'",secmv="'+secmv+'",emccv="'+emccv+'",emcmv="'+emcmv+'",efccv="'+efccv+'",efcmv="'+efcmv+'",corredorccv="'+corredorccv+'",corredorcmv="'+corredorcmv+'",pediatriaccv="'+pediatriaccv+'",pediatriabcv="'+pediatriabcv+'",goccv="'+goccv+'",gocmv="'+gocmv+'",eaccv="'+eaccv+'",eacmv="'+eacmv+'",dataatualizacao="'+dataatualizacao+'",horaatualizacao="'+horaatualizacao+'" where id = ' + idleitos, callback);
}
modelmartins.prototype.updatedispositivo = function(vmu,vmd,mu,md,bicu,bicd,data, hora, callback){
	
	this._conection.query('update dispositivomartins set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'",mu = "'+mu+'",md = "'+md+'",bicu = "'+bicu+'",bicd = "'+bicd+'" where id = 1', callback);
}

modelmartins.prototype.baixa = function(idpaciente,baixa,data, callback){

	this._conection.query('update pacientes set   baixa = "'+baixa+'", databaixa = "'+data+'" where id_paciente = ' + idpaciente, callback);
}

modelmartins.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and baixa is null', callback);
}

modelmartins.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'"  order by paciente asc', callback);
}

modelmartins.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}


module.exports = function(){
	return modelmartins;
}