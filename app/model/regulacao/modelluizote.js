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

modelluizote.prototype.updatedispositivo = function(vmu,vmd,mu,md,bicu,bicd,data, hora, callback){
	
	this._conection.query('update dispositivoluizote set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'",mu = "'+mu+'",md = "'+md+'",bicu = "'+bicu+'",bicd = "'+bicd+'" where id = 1', callback);
}

modelluizote.prototype.updateleitosluizote = function(idleitos,  dataatualizacao,horaatualizacao,se1ccv,se1cmv,se2ccv,se2cmv,se3ccv,se3cmv,se4ccv,se4cmv,seasccv,seascmv,enf1ccv,enf1cmv, enf2ccv,enf2cmv,enf3ccv,enf3cmv,enf4ccv,enf4cmv,enf5ccv,enf5cmv,enf6ccv,enf6cmv,enf7ccv,enf7cmv,se8ccv,se8cmv,se9ccv,se9cmv,enf10ccv,enf10cmv,enf11ccv,enf11cmv,enf12ccv,enf12cmv, enf13ccv,enf13cmv, enf14ccv,enf14cmv,amb1ccv,amb1cmv, amb2ccv, amb2cmv, amb3ccv, amb3cmv, amb4ccv, amb4cmv,amb5ccv,amb5cmv,amb6ccv,amb6cmv,amb7ccv,amb7cmv, callback){
	
	this._conection.query('update centralleitosluizote set  dataatualizacao ="'+dataatualizacao+'",horaatualizacao="'+horaatualizacao+'",se1ccv="'+se1ccv+'",se1cmv="'+se1cmv+'",se2ccv="'+se2ccv+'",se2cmv="'+se2cmv+'",se3ccv="'+se3ccv+'",se3cmv="'+se3cmv+'",se4ccv="'+se4ccv+'",se4cmv="'+se4cmv+'",seasccv="'+seasccv+'",seascmv="'+seascmv+'",enf1ccv="'+enf1ccv+'",enf1cmv="'+enf1cmv+'",enf2ccv="'+enf2ccv+'",enf2cmv="'+enf2cmv+'",enf3ccv="'+enf3ccv+'",enf3cmv="'+enf3cmv+'",enf4ccv ="'+enf4ccv+'",enf4cmv="'+enf4cmv+'",enf5ccv="'+enf5ccv+'",enf5cmv="'+enf5cmv+'",enf6ccv="'+enf6ccv+'",enf6cmv="'+enf6cmv+'",enf7ccv="'+enf7ccv+'",enf7cmv="'+enf7cmv+'",se8ccv="'+se8ccv+'",se8cmv="'+se8cmv+'",se9ccv="'+se9ccv+'",se9cmv="'+se9cmv+'",enf10ccv="'+enf10ccv+'",enf10cmv="'+enf10cmv+'",enf11ccv="'+enf11ccv+'",enf11cmv="'+enf11cmv+'",enf12ccv="'+enf12ccv+'",en12cmv="'+enf12cmv+'",enf13ccv="'+enf13ccv+'",enf13cmv="'+enf13cmv+'",enf14ccv="'+enf14ccv+'",enf14cmv="'+enf14cmv+'",amb1ccv="'+amb1ccv+'",amb1cmv="'+amb1cmv+'",amb2ccv="'+amb2ccv+'",amb2cmv="'+amb2cmv+'",amb3ccv="'+amb3ccv+'",amb3cmv="'+amb3cmv+'",amb4ccv="'+amb4ccv+'",amb4cmv="'+amb4cmv+'",amb5ccv="'+amb5ccv+'",amb5cmv="'+amb5cmv+'",amb6ccv="'+amb6ccv+'",amb6cmv="'+amb6cmv+'",amb7ccv="'+amb7ccv+'",amb7cmv="'+amb7cmv+'" where id = ' + idleitos, callback);
}

modelluizote.prototype.baixa = function(idpaciente,baixa,data, callback){

	this._conection.query('update pacientes set   baixa = "'+baixa+'", databaixa = "'+data+'" where id_paciente = ' + idpaciente, callback);
}

modelluizote.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and baixa is null', callback);
}

modelluizote.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'"  order by paciente asc', callback);
}

modelluizote.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}



module.exports = function(){
	return modelluizote;
}