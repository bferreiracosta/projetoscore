function modelpampulha(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelpampulha.prototype.cadastrarpaciente = function( dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, callback){
		
	this._conection.query('insert into pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'", news = "" , dispositivo = "", spict="'+spict+'" , fluxo_de_o2 = "" , droga = "" , fio2 = "" ,peep = "" ,sedacao = "" , glasgow = "" , tempo = "" ,exame = "'+exame+'", unidade = "'+unidade+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", dataadmissao="'+data+'"', callback);
}

modelpampulha.prototype.update = function(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict, callback){
	

	this._conection.query('update pacientes set dataexame = "'+dataexame+'", susfacil = "'+susfacil+'",prt = "'+prt+'", paciente = "'+paciente+'", leito = "'+leito+'", idade = "'+idade+'" , exame = "'+exame+'", ecf="'+ecf+'", paliativo="'+paliativo+'", svd="'+svd+'", sne="'+sne+'", avp="'+avp+'", cvc="'+cvc+'", spict="'+spict+'" where id_paciente = ' + idpaciente, callback);
}

modelpampulha.prototype.updatenews = function(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, callback){


	this._conection.query('update pacientes set  news = "'+news+'", tempo = "'+tempo+'", data = "'+data+'", fr = "'+fr+'", sat = "'+sat+'", temp = "'+temp+'", o2 = "'+o2+'", sistolica = "'+sistolica+'", fc = "'+fc+'", alerta = "'+alerta+'"  where id_paciente = ' + idpaciente, callback);
}

modelpampulha.prototype.updateresp = function(idpaciente,profissional,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito, nora, adre,bica,dormonid,fentanil,rocuronio,propofol, bic, callback){
	
	this._conection.query('update pacientes set profissional = "'+profissional+'",  dispositivo = "'+dispositivo+'", fluxo_de_o2 = "'+fluxoo2+'", droga = "'+droga+'", fio2 = "'+fio2+'", peep = "'+peep+'", sedacao = "'+sedacao+'", glasgow = "'+glasgow+'", acomodacao = "'+leito+'", nora = "'+nora+'", adrenalina = "'+adre+'",bicarbonato = "'+bica+'", dormonid = "'+dormonid+'", fentanil = "'+fentanil+'", rocuronio = "'+rocuronio+'", propofol = "'+propofol+'", bic = "'+bic+'" where id_paciente = ' + idpaciente, callback);
}

modelpampulha.prototype.updateleitospampulha = function(idleitos, sec1,sec1cc,sec1ccv,sec1cm,sec1cmv,sec2,sec2cc,sec2ccv,sec2cm,sec2cmv,sec3,sec3cc,sec3ccv,sec3cm,sec3cmv,ec1,ec1cc,ec1ccv,ec1cm,ec1cmv,ec2,ec2cc,ec2ccv,ec2cm,ec2cmv,ec3,ec3cc,ec3ccv,ec3cm,ec3cmv,ec4,ec4cc,ec4ccv,ec4cm,ec4cmv,ec5,ec5cc,ec5ccv,ec5cm,ec5cmv,ec6,ec6cc,ec6ccv,ec6cm,ec6cmv,ec7,ec7cc,ec7ccv,ec7cm,ec7cmv,se,secc,seccv,secm,secmv,e1,e1cc,e1ccv,e1cm,e1cmv,e2,e2cc,e2ccv,e2cm,e2cmv,e3,e3cc,e3ccv,e3cm,e3cmv,e4,e4cc,e4ccv,e4cm,e4cmv,e5,e5cc,e5ccv,e5cm,e5cmv,dataatualizacao,horaatualizacao, callback){
	
	this._conection.query('update centralleitospampulha set  sec1="'+sec1+'",sec1cc="'+sec1cc+'",sec1ccv="'+sec1ccv+'",sec1cm="'+sec1cm+'",sec1cmv="'+sec1cmv+'",sec2="'+sec2+'",sec2cc="'+sec2cc+'",sec2ccv="'+sec2ccv+'",sec2cm="'+sec2cm+'",sec2cmv="'+sec2cmv+'",sec3="'+sec3+'",sec3cc="'+sec3cc+'",sec3ccv="'+sec3ccv+'",sec3cm="'+sec3cm+'",sec3cmv="'+sec3cmv+'",ec1="'+ec1+'",ec1cc="'+ec1cc+'",ec1ccv="'+ec1ccv+'",ec1cm="'+ec1cm+'",ec1cmv="'+ec1cmv+'",ec2="'+ec2+'",ec2cc="'+ec2cc+'",ec2ccv="'+ec2ccv+'",ec2cm="'+ec2cm+'",ec2cmv="'+ec2cmv+'",ec3="'+ec3+'",ec3cc="'+ec3cc+'",ec3ccv="'+ec3ccv+'",ec3cm="'+ec3cm+'",ec3cmv="'+ec3cmv+'",ec4="'+ec4+'",ec4cc="'+ec4cc+'",ec4ccv="'+ec4ccv+'",ec4cm="'+ec4cm+'",ec4cmv="'+ec4cmv+'",ec5="'+ec5+'",ec5cc="'+ec5cc+'",ec5ccv="'+ec5ccv+'",ec5cm="'+ec5cm+'",ec5cmv="'+ec5cmv+'",ec6="'+ec6+'",ec6cc="'+ec6cc+'",ec6ccv="'+ec6ccv+'",ec6cm="'+ec6cm+'",ec6cmv="'+ec6cmv+'",ec7="'+ec7+'",ec7cc="'+ec7cc+'",ec7ccv="'+ec7ccv+'",ec7cm="'+ec7cm+'",ec7cmv="'+ec7cmv+'",se="'+se+'",secc="'+secc+'",seccv="'+seccv+'",secm="'+secm+'",secmv="'+secmv+'",e1="'+e1+'",e1cc="'+e1cc+'",e1ccv="'+e1ccv+'",e1cm="'+e1cm+'",e1cmv="'+e1cmv+'",e2="'+e2+'",e2cc="'+e2cc+'",e2ccv="'+e2ccv+'",e2cm="'+e2cm+'",e2cmv="'+e2cmv+'",e3="'+e3+'",e3cc="'+e3cc+'",e3ccv="'+e3ccv+'",e3cm="'+e3cm+'",e3cmv="'+e3cmv+'",e4="'+e4+'",e4cc="'+e4cc+'",e4ccv="'+e4ccv+'",e4cm="'+e4cm+'",e4cmv="'+e4cmv+'",e5="'+e5+'",e5cc="'+e5cc+'",e5ccv="'+e5ccv+'",e5cm="'+e5cm+'",e5cmv="'+e5cmv+'",dataatualizacao="'+dataatualizacao+'",horaatualizacao="'+horaatualizacao+'" where id = ' + idleitos, callback);
}
modelpampulha.prototype.updatedispositivo = function(vmu,vmd,mu,md,bicu,bicd,data, hora, callback){
	
	this._conection.query('update dispositivopampulha set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'",mu = "'+mu+'",md = "'+md+'",bicu = "'+bicu+'",bicd = "'+bicd+'" where id = 1', callback);
}

modelpampulha.prototype.baixa = function(idpaciente,baixa,data, callback){

	this._conection.query('update pacientes set   baixa = "'+baixa+'", databaixa = "'+data+'" where id_paciente = ' + idpaciente, callback);
}

modelpampulha.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and baixa is null', callback);
}

modelpampulha.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from pacientes where unidade = "'+unidade+'"  order by paciente asc', callback);
}

modelpampulha.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from pacientes where unidade = "'+unidade+'" and id_paciente = ' + idpaciente.id, callback);
}


module.exports = function(){
	return modelpampulha;
}