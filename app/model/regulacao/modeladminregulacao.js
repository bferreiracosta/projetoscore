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
	
	this._conection.query('select id_paciente,susfacil, paciente, leito, idade, news, dispositivo, fluxo_de_o2, fio2, peep, glasgow, exame,dataexame, unidade, paliativo,ecf,nora,vazaonora,adrenalina,vazaoadre,bicarbonato,vazaobica,dormonid,vazaoDormonid,fentanil,vazaoFentanil, rocuronio,vazaoRocuronio, propofol,vazaoPropofol, svd, sne, cvc, avp, fr, sat, o2, temp, fc, sistolica, alerta,bic from pacientes p where p.baixa is null and p.leito="Enfermaria" union all select k.idpaciente, k.susfacil, k.nome, k.comodo, k.idade, n.news, d.dispositivoventilatorio, d.fluxoo2, d.fio2, d.peep, d.glasgow, k.exame, k.dataexame, k.unidade, k.paliativo, k.ECF, d.nora, d.vazaonora, d.adrenalina, d.vazaoadrenalina, d.bicarbonato, d.vazaobicarbonato, d.dormonid, d.vazaodormonid, d.fentanil, d.vazaofentanil, d.rocuronio, d.vazaorocuronio, d.propofol, d.vazaopropofol, d.svd, d.sne, d.cvc, d.avp, n.fr, n.sat, n.o2, n.temp, n.fc, n.sistolica, n.alerta, d.bic from kaban k inner join dispositivokaban d on k.idpaciente = d.idpaciente inner join news n on k.idpaciente = n.idpaciente where k.baixa is null and k.covid="true" and d.status = "Ativo" and n.status= "Ativo" and k.comodo="Enfermaria";', callback);
}

modeladminregulacao.prototype.buscarpacientenull = function(callback){
	
	this._conection.query('select * from pacientes where baixa is null and (paliativo = "" or  news = "" or ecf = "" or fr = "" or fc = "" or sistolica = "" or sat = "" or o2 = "" or temp = "" or dispositivo = "")', callback);
}


modeladminregulacao.prototype.buscarpacientesaladeemergencia = function(leito, callback){
	
	this._conection.query('select id_paciente,susfacil, paciente, leito, idade, news, dispositivo, fluxo_de_o2, fio2, peep, glasgow, exame,dataexame, unidade, paliativo,ecf,nora,vazaonora,adrenalina,vazaoadre,bicarbonato,vazaobica,dormonid,vazaoDormonid,fentanil,vazaoFentanil, rocuronio,vazaoRocuronio, propofol,vazaoPropofol, svd, sne, cvc, avp, fr, sat, o2, temp, fc, sistolica, alerta,bic from pacientes p where p.baixa is null and p.leito="Sala de Emergência" union all select k.idpaciente, k.susfacil, k.nome, k.comodo, k.idade, n.news, d.dispositivoventilatorio, d.fluxoo2, d.fio2, d.peep, d.glasgow, k.exame, k.dataexame, k.unidade, k.paliativo, k.ECF, d.nora, d.vazaonora, d.adrenalina, d.vazaoadrenalina, d.bicarbonato, d.vazaobicarbonato, d.dormonid, d.vazaodormonid, d.fentanil, d.vazaofentanil, d.rocuronio, d.vazaorocuronio, d.propofol, d.vazaopropofol, d.svd, d.sne, d.cvc, d.avp, n.fr, n.sat, n.o2, n.temp, n.fc, n.sistolica, n.alerta, d.bic from kaban k inner join dispositivokaban d on k.idpaciente = d.idpaciente inner join news n on k.idpaciente = n.idpaciente where k.baixa is null and k.covid="true" and d.status = "Ativo" and n.status= "Ativo" and k.comodo="Sala de Emergência";', callback);
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
}