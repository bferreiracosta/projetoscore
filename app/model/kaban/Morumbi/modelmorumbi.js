function modelmorumbi(application){
	var conection = require('../../../../config/dbConnection');
	this._conection = conection();
}

modelmorumbi.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from kaban where unidade = "'+unidade+'" and baixa is null', callback);
}

modelmorumbi.prototype.buscarpacienterelatorio = function(unidade, callback){
	
	this._conection.query('SELECT * FROM portal_paciente.leitokaban inner join kaban on leitokaban.idpaciente = kaban.idpaciente where kaban.unidade = "'+unidade+'" and kaban.baixa is null;', callback);
}

modelmorumbi.prototype.buscarexames = function(callback){
	
	this._conection.query('select * from evento where title IS NOT NULL and unidade = "Morumbi"', callback);
}

modelmorumbi.prototype.buscarexamesid = function(idevento, callback){
	
	this._conection.query('select * from evento where idevento = ' + idevento.id, callback);
}

modelmorumbi.prototype.addexame = function(title, start,end, paciente, unidade, callback){
	
	this._conection.query('insert into evento set title = "'+title+'", start = "'+start+'",end = "'+end+'", paciente = "'+paciente+'", unidade = "'+unidade+'"', callback);
}

modelmorumbi.prototype.updateexamemorumbi = function(idevento, title, start, paciente, end, callback){
	
	this._conection.query('update  evento set title = "'+title+'", start = "'+start+'",end = "'+end+'", paciente = "'+paciente+'" where idevento = ' + idevento, callback);
}

modelmorumbi.prototype.deleteexamemorumbi = function(idevento, callback){
	
	this._conection.query('delete from  evento  where idevento = ' + idevento, callback);
}

modelmorumbi.prototype.buscarleitospacientes = function(callback){
	
	this._conection.query('select * from leitokaban where baixa is null and unidade = "Morumbi"', callback);
}

modelmorumbi.prototype.addcentralid = function(idpaciente,nome, unidade,callback){
	
	this._conection.query('insert leitokaban set idpaciente = "'+idpaciente+'", nome="'+nome+'", unidade="'+unidade+'"', callback);
}

modelmorumbi.prototype.baixacentral = function(idpaciente,baixa, callback){

	this._conection.query('update leitokaban set baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.buscarleitosid = function(valor,callback){

	this._conection.query('select idleito from leitos where idsetor = (select idsetor from setor where setor = "'+valor[0].setor+'"and unidade = "Morumbi") and leito = "'+valor[0].leito+'" and unidade = "Morumbi" and status = "Inativo" limit 1', callback);

}

modelmorumbi.prototype.buscarleitosnome = function(valor,callback){

	this._conection.query('select idleito from leitokaban where nome = "'+valor[0].nome+'"', callback);
}

modelmorumbi.prototype.buscarleitospacientesporid = function(valor, callback){
	
	this._conection.query('select setor, leito from leitokaban where idpaciente = "'+valor+'"', callback);
}

modelmorumbi.prototype.buscarleitospacientespornome = function(valor, callback){
	
	this._conection.query('select nome from leitokaban where idpaciente = "'+valor+'"', callback);
}

modelmorumbi.prototype.atualizarleitokaban = function(idpaciente, setor, leito, callback){
	
	this._conection.query('update leitokaban set setor = "'+setor+'", leito = "'+leito+'" where idpaciente = '+ idpaciente, callback);
}

modelmorumbi.prototype.buscarleitoativo = function(idsetor, leito, callback){

	this._conection.query('select idleito from leitos where idsetor="'+idsetor[0].idsetor+'" and leito = "'+leito+'" and status = "Ativo" limit 1', callback);
}

modelmorumbi.prototype.updateleitos = function(idleito, callback){
	
	this._conection.query('update leitos set status = "Inativo"  where idleito = "'+idleito[0].idleito+'"', callback);
}

modelmorumbi.prototype.updateleitosativo = function(idleito, callback){

	this._conection.query('update leitos set status = "Ativo" where idleito = "'+idleito+'"', callback);
}

modelmorumbi.prototype.buscarsetoresid = function(setor, callback){
	
	this._conection.query('select idsetor from setor where setor = "'+setor+'"  and unidade = "Morumbi"', callback);
}

modelmorumbi.prototype.buscarsetores = function(callback){
	
	this._conection.query('select * from setor inner join leitos on setor.idsetor = leitos.idsetor where status != "Inativo" and setor.unidade = "Morumbi"  group by setor', callback);
}

modelmorumbi.prototype.buscarleitos = function(valor, callback){

	this._conection.query('select * from leitos inner join setor on setor.idsetor = leitos.idsetor where setor = "'+valor.valor+'" and status = "Ativo" and setor.unidade = "Morumbi"', callback);

}

modelmorumbi.prototype.buscardispositivohora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM dispositivokaban dd where unidade = "'+unidade+'" and  status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelmorumbi.prototype.buscarfugulinhora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM fugulin dd where setor != "Observação" and unidade = "'+unidade+'" and   status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or setor!= "Observação" and unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelmorumbi.prototype.buscarnewshora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM news dd where setor = "Enfermaria" and unidade = "'+unidade+'" and  status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or setor = "Enfermaria" and unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelmorumbi.prototype.buscartisshora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM tiss dd where setor = "Sala de Emergência" and unidade = "'+unidade+'" and   status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or setor = "Sala de Emergência" and unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelmorumbi.prototype.buscarfugulinid = function(idpaciente, unidade, callback){

	this._conection.query('select * from fugulin where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelmorumbi.prototype.buscardispositivoid = function(idpaciente, unidade, callback){
	this._conection.query('select * from dispositivokaban where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelmorumbi.prototype.buscardispositivoporid = function(idpaciente, unidade, callback){
	this._conection.query('select * from kaban where unidade = "'+unidade+'" and idpaciente = "'+idpaciente+'"', callback);
}

modelmorumbi.prototype.buscarnewsid = function(idpaciente, unidade, callback){

	this._conection.query('select * from news where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelmorumbi.prototype.buscartissid = function(idpaciente, unidade, callback){
	this._conection.query('select * from tiss where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelmorumbi.prototype.buscarfugulin = function(unidade, callback){
	
	this._conection.query('SELECT * FROM fugulin dd where setor != "Observação" and  status = "Ativo" and unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null GROUP BY idpaciente', callback);
}

modelmorumbi.prototype.buscarnews = function(unidade, callback){
	
	this._conection.query('SELECT * FROM news dd where setor = "Enfermaria" and  status = "Ativo" and unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null GROUP BY idpaciente ', callback);
}

modelmorumbi.prototype.buscartiss = function(unidade, callback){
	
	this._conection.query('SELECT * FROM tiss dd where setor = "Sala de Emergência" and  status = "Ativo" and unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null GROUP BY idpaciente ', callback);
}

modelmorumbi.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from kaban where unidade = "'+unidade+'"  order by dataentrada asc', callback);
}

modelmorumbi.prototype.buscardispositivo = function(unidade, callback){
	
	this._conection.query('SELECT * FROM dispositivokaban dd where unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null GROUP BY idpaciente ', callback);
}

modelmorumbi.prototype.buscardispositivodataid = function(idpaciente, unidade, callback){
	this._conection.query('SELECT dataatualizacao, iddispositivo FROM dispositivokaban where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelmorumbi.prototype.buscarfugulindataid = function(idpaciente, unidade, callback){

	this._conection.query('SELECT dataatualizacao, idfugulin FROM fugulin where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelmorumbi.prototype.buscarnewsdataid = function(idpaciente, unidade, callback){

	this._conection.query('SELECT dataatualizacao, idnews FROM news where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelmorumbi.prototype.buscartissdataid = function(idpaciente, unidade, callback){

	this._conection.query('SELECT dataatualizacao, idtiss FROM tiss where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelmorumbi.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from kaban where unidade = "'+unidade+'" and idpaciente = ' + idpaciente.id, callback);
}

modelmorumbi.prototype.buscarpacienteporid = function(idpaciente, callback){
	
	this._conection.query('select * from kaban where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.buscarsetor = function(idpaciente, callback){

	this._conection.query('select acomodacao from kaban where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.cadastrarpaciente = function( paciente, medico, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, callback){
	
	this._conection.query('insert into kaban set medico = "'+medico+'", dieta = "'+dieta+'", exame = "'+exame+'", dataexame = "'+dataexame+'",mental = "'+mental+'", referencia = "'+referencia+'", covid = "'+covid+'", glasgow = "'+glasgow+'", bic = "'+bic+'",  nome = "'+paciente+'", acomodacao = "'+setor+'", susfacil = "'+susfacil+'",prt = "'+prt+'", datanascimento = "'+dn+'", idade = "'+idade+'", dataentrada = "'+da+'", qtddiasinternados = "'+qtdi+'" , ECF = "'+ecf+'", spict="'+spict+'" , paliativo = "'+paliativo+'" , diagnostico = "'+diagnostico+'" ,especialidade = "'+especialidade+'" ,observacao = "'+observacao+'" , banho = "'+banho+'" , pendencias = "'+pendencias+'" ,mobilidade = "'+mobilidade+'", unidade = "'+unidade+'"',callback);
}

modelmorumbi.prototype.update = function(idpaciente, medico, dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, callback){
	
	this._conection.query('update kaban set medico = "'+medico+'", dieta = "'+dieta+'", dataexame="'+dataexame+'", exame="'+exame+'", mental = "'+mental+'", referencia = "'+referencia+'", covid = "'+covid+'", glasgow = "'+glasgow+'", bic = "'+bic+'",  nome = "'+paciente+'", acomodacao = "'+setor+'", susfacil = "'+susfacil+'",prt = "'+prt+'", datanascimento = "'+dn+'", idade = "'+idade+'", dataentrada = "'+da+'", qtddiasinternados = "'+qtdi+'" , ECF = "'+ecf+'", spict="'+spict+'" ,  paliativo = "'+paliativo+'" , diagnostico = "'+diagnostico+'" ,especialidade = "'+especialidade+'" ,observacao = "'+observacao+'" , banho = "'+banho+'" , pendencias = "'+pendencias+'" ,mobilidade = "'+mobilidade+'", unidade = "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.baixa = function(idpaciente,baixa, destino, alta,data, callback){

	this._conection.query('update kaban set destino="'+destino+'", alta = "'+alta+'",   baixa = "'+baixa+'", datasaida = "'+data+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.baixadispositivo = function(idpaciente,baixa, callback){

	this._conection.query('update dispositivokaban set   baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.baixafugulin = function(idpaciente,baixa, callback){

	this._conection.query('update fugulin set  baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.baixatiss = function(idpaciente,baixa, callback){

	this._conection.query('update tiss set  baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.baixanews = function(idpaciente,baixa, callback){

	this._conection.query('update news set  baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatedispositivo = function(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade, callback){
	
	this._conection.query('update dispositivokaban set svd= "'+svd+'",datasvd= "'+datasvd+'",sne= "'+sne+'",datasne= "'+datasne+'",avp= "'+avp+'",dataavp= "'+dataavp+'",cvc= "'+cvc+'",datacvc= "'+datacvc+'",dispositivoventilatorio= "'+dispositivoventilatorio+'",fluxoo2= "'+fluxoo2+'",fio2= "'+fio2+'" ,peep= "'+peep+'",drogas= "'+drogas+'",nora= "'+nora+'",vazaonora= "'+vazaonora+'",adrenalina= "'+adre+'",vazaoadrenalina= "'+vazaoadre+'",bicarbonato= "'+bica+'",vazaobicarbonato= "'+vazaobica+'",sedacao= "'+sedacao+'",dormonid= "'+dormonid3+'",vazaodormonid= "'+vazaoDormonid+'",fentanil= "'+fentanil3+'",vazaofentanil= "'+vazaoFentanil+'",rocuronio= "'+rocuronio3+'",vazaorocuronio= "'+vazaoRocuronio+'",propofol= "'+propofol3+'",vazaopropofol= "'+vazaoPropofol+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ) ,unidade= "'+unidade+'" where idpaciente = '+ idpaciente, callback);
}

modelmorumbi.prototype.updatedispositivodados = function(idpaciente,data, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade, callback){

	this._conection.query('update dispositivokaban set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), svd= "'+svd+'",datasvd= "'+datasvd+'",sne= "'+sne+'",datasne= "'+datasne+'",avp= "'+avp+'",dataavp= "'+dataavp+'",cvc= "'+cvc+'",datacvc= "'+datacvc+'",dispositivoventilatorio= "'+dispositivoventilatorio+'",fluxoo2= "'+fluxoo2+'",fio2= "'+fio2+'" ,peep= "'+peep+'",drogas= "'+drogas+'",nora= "'+nora+'",vazaonora= "'+vazaonora+'",adrenalina= "'+adre+'",vazaoadrenalina= "'+vazaoadre+'",bicarbonato= "'+bica+'",vazaobicarbonato= "'+vazaobica+'",sedacao= "'+sedacao+'",dormonid= "'+dormonid3+'",vazaodormonid= "'+vazaoDormonid+'",fentanil= "'+fentanil3+'",vazaofentanil= "'+vazaoFentanil+'",rocuronio= "'+rocuronio3+'",vazaorocuronio= "'+vazaoRocuronio+'",propofol= "'+propofol3+'",vazaopropofol= "'+vazaoPropofol+'",unidade= "'+unidade+'" where idpaciente = '+ idpaciente, callback);
}

modelmorumbi.prototype.updatedispositivostatus = function(iddispositivo, callback){
	
	this._conection.query('update dispositivokaban set status = "Inativo" where iddispositivo = '+ iddispositivo, callback);
}

modelmorumbi.prototype.adddispositivo = function(idpaciente,nome,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade, callback){
	
	this._conection.query('insert dispositivokaban set idpaciente = "'+idpaciente+'", nome="'+nome+'", svd= "'+svd+'",datasvd= "'+datasvd+'",sne= "'+sne+'",datasne= "'+datasne+'",avp= "'+avp+'",dataavp= "'+dataavp+'",cvc= "'+cvc+'",datacvc= "'+datacvc+'",dispositivoventilatorio= "'+dispositivoventilatorio+'",fluxoo2= "'+fluxoo2+'",fio2= "'+fio2+'" ,peep= "'+peep+'",drogas= "'+drogas+'",nora= "'+nora+'",vazaonora= "'+vazaonora+'",adrenalina= "'+adre+'",vazaoadrenalina= "'+vazaoadre+'",bicarbonato= "'+bica+'",vazaobicarbonato= "'+vazaobica+'",sedacao= "'+sedacao+'",dormonid= "'+dormonid3+'",vazaodormonid= "'+vazaoDormonid+'",fentanil= "'+fentanil3+'",vazaofentanil= "'+vazaoFentanil+'",rocuronio= "'+rocuronio3+'",vazaorocuronio= "'+vazaoRocuronio+'",propofol= "'+propofol3+'",vazaopropofol= "'+vazaoPropofol+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelmorumbi.prototype.adddispositivoid = function(idpaciente,nome, unidade,callback){
	
	this._conection.query('insert dispositivokaban set idpaciente = "'+idpaciente+'", nome="'+nome+'", unidade="'+unidade+'",status= "Ativo"', callback);
}

modelmorumbi.prototype.updatedispositivonome = function(idpaciente, nome, callback){

	this._conection.query('update dispositivokaban set nome= "'+nome+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.addfugulinid = function(idpaciente,setor, nome, unidade, callback){
	
	this._conection.query('insert fugulin set idpaciente = "'+idpaciente+'",setor="'+setor+'", nome="'+nome+'",unidade="'+unidade+'", status= "Ativo"', callback);
}

modelmorumbi.prototype.addfugulin = function(idpaciente, setor, nome, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade, callback){
	
	this._conection.query('insert fugulin set setor = "'+setor+'",  idpaciente = "'+idpaciente+'",nome="'+nome+'",mental= "'+mental2+'",oxigenacao= "'+oxigenacao2+'",sinaisvitais= "'+sinaisvitais2+'",motilidade= "'+motilidade2+'",deambulacao= "'+deambulacao2+'",alimentacao= "'+alimentacao2+'",cuidado= "'+cuidado2+'",eliminacao= "'+eliminacao2+'",terapeutica= "'+terapeutica2+'",integridade= "'+integridade2+'" ,curativo= "'+curativo2+'",tempocurativo= "'+tempo2+'",resultado= "'+fugulin+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelmorumbi.prototype.updatefugulin = function(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade, callback){

	this._conection.query('update fugulin set mental= "'+mental2+'",oxigenacao= "'+oxigenacao2+'",sinaisvitais= "'+sinaisvitais2+'",motilidade= "'+motilidade2+'",deambulacao= "'+deambulacao2+'",deambulacao= "'+deambulacao2+'",alimentacao= "'+alimentacao2+'",cuidado= "'+cuidado2+'",eliminacao= "'+eliminacao2+'",terapeutica= "'+terapeutica2+'",integridade= "'+integridade2+'" ,curativo= "'+curativo2+'",tempocurativo= "'+tempo2+'",resultado= "'+fugulin+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"  where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatefugulinnome = function(idpaciente, nome, setor, callback){

	this._conection.query('update fugulin set nome= "'+nome+'",setor= "'+setor+'"  where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatefugulindados = function(idpaciente,data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade, callback){

	this._conection.query('update fugulin set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), mental= "'+mental2+'",oxigenacao= "'+oxigenacao2+'",sinaisvitais= "'+sinaisvitais2+'",motilidade= "'+motilidade2+'",deambulacao= "'+deambulacao2+'",alimentacao= "'+alimentacao2+'",cuidado= "'+cuidado2+'",eliminacao= "'+eliminacao2+'",terapeutica= "'+terapeutica2+'",integridade= "'+integridade2+'" ,curativo= "'+curativo2+'",tempocurativo= "'+tempo2+'",resultado= "'+fugulin+'",unidade= "'+unidade+'"  where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatefugulinstatus = function(idfugulin, callback){

	this._conection.query('update fugulin set status = "Inativo" where idfugulin = '+ idfugulin, callback);
}

modelmorumbi.prototype.addtissid = function(idpaciente,setor, nome,unidade,callback){
	
	this._conection.query('insert tiss set idpaciente = "'+idpaciente+'",setor="'+setor+'", nome="'+nome+'", unidade="'+unidade+'",status= "Ativo"', callback);
}

modelmorumbi.prototype.addtiss = function(idpaciente, setor , nome, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade, callback){
	
	this._conection.query('insert tiss set setor = "'+setor+'",  idpaciente = "'+idpaciente+'",nome="'+nome+'",atividadesbasica= "'+atividades+'",suporteventilatorio= "'+ventilatorio+'",suportecardiovascular= "'+cardiovascular+'",suporterenal= "'+renal+'",suporteneurologico= "'+neurologico+'",suportemetabolico= "'+metabolico+'",intervencoes= "'+intervencoes+'",tiss= "'+tiss+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelmorumbi.prototype.updatetiss = function(idpaciente, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade, callback){

	this._conection.query('update tiss set atividadesbasica= "'+atividades+'",suporteventilatorio= "'+ventilatorio+'",suportecardiovascular= "'+cardiovascular+'",suporterenal= "'+renal+'",suporteneurologico= "'+neurologico+'",suportemetabolico= "'+metabolico+'",intervencoes= "'+intervencoes+'",tiss= "'+tiss+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"  where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatetissdados = function(idpaciente,data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,unidade, callback){

	this._conection.query('update tiss set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), atividadesbasica= "'+atividades+'",suporteventilatorio= "'+ventilatorio+'",suportecardiovascular= "'+cardiovascular+'",suporterenal= "'+renal+'",suporteneurologico= "'+neurologico+'",suportemetabolico= "'+metabolico+'",intervencoes= "'+intervencoes+'",tiss= "'+tiss+'",unidade= "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatetissstatus = function(idtiss, callback){

	this._conection.query('update tiss set status = "Inativo" where idtiss = '+ idtiss, callback);
}

modelmorumbi.prototype.updatetissnome = function(idpaciente, nome,setor, callback){

	this._conection.query('update tiss set nome= "'+nome+'", setor= "'+setor+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.addnewsid = function(idpaciente,setor, nome, unidade,callback){
	
	this._conection.query('insert news set idpaciente = "'+idpaciente+'", setor="'+setor+'", nome="'+nome+'", unidade="'+unidade+'", status= "Ativo"', callback);
}

modelmorumbi.prototype.addnews = function(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade, callback){
	
	this._conection.query('insert news set idpaciente = "'+idpaciente+'",setor="'+setor+'", nome="'+nome+'",fr= "'+fr+'",sat= "'+sat+'",o2= "'+o2+'",temp= "'+temp+'",fc= "'+fc+'",sistolica= "'+sistolica+'",alerta= "'+alerta+'",news= "'+news+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelmorumbi.prototype.updatenews = function(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade, callback){

	this._conection.query('update news set setor="'+setor+'", fr= "'+fr+'",sat= "'+sat+'",o2= "'+o2+'",temp= "'+temp+'",fc= "'+fc+'",sistolica= "'+sistolica+'",alerta= "'+alerta+'",news= "'+news+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"  where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatenewsdados = function(idpaciente,data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade, callback){

	this._conection.query('update news set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), setor="'+setor+'", fr= "'+fr+'",sat= "'+sat+'",o2= "'+o2+'",temp= "'+temp+'",fc= "'+fc+'",sistolica= "'+sistolica+'",alerta= "'+alerta+'",news= "'+news+'",unidade= "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.updatenewsstatus = function(idnews, callback){

	this._conection.query('update news set status = "Inativo" where idnews = '+ idnews, callback);
}

modelmorumbi.prototype.updatenewsnome = function(idpaciente, nome,setor, callback){
	
	this._conection.query('update news set nome= "'+nome+'", setor= "'+setor+'" where idpaciente = ' + idpaciente, callback);
}

modelmorumbi.prototype.buscarclinicomorumbi = function(unidade, callback){

	this._conection.query('select count(especialidade) as Clinica  from kaban where especialidade = "Clinica" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscartraumatologiamorumbi = function(unidade, callback){

	this._conection.query('select count(especialidade) as Traumatologia  from kaban where especialidade = "Traumatologia" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscarpediatriamorumbi = function(unidade, callback){

	this._conection.query('select count(especialidade) as Pediatria  from kaban where especialidade = "Pediatria" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscarpsquiatriamorumbi = function(unidade, callback){

	this._conection.query('select count(especialidade) as Psquiatria  from kaban where especialidade = "Psquiatria" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscarcirurgicomorumbi = function(unidade, callback){

	this._conection.query('select count(especialidade) as Cirurgico  from kaban where especialidade = "Cirurgico" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscarobservacaomorumbi = function(unidade, callback){

	this._conection.query('select count(acomodacao) as Observação  from kaban where acomodacao = "Observacao" and unidade = "'+unidade+'" and baixa is not null;', callback);
}

modelmorumbi.prototype.buscaraltamorumbi = function(unidade, callback){

	this._conection.query('select count(baixa) as Altas  from kaban where baixa = "alta" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelmorumbi.prototype.buscarevasaomorumbi = function(unidade, callback){

	this._conection.query('select count(baixa) as Evasão  from kaban where baixa = "evasao" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelmorumbi.prototype.buscartransferenciamorumbi = function(unidade, callback){

	this._conection.query('select count(baixa) as Transferência  from kaban where baixa = "transferencia" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelmorumbi.prototype.buscarobitomorumbi = function(unidade, callback){

	this._conection.query('select count(baixa) as Obitos  from kaban where baixa = "obito" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelmorumbi.prototype.buscarinternacaodiamorumbi = function(unidade, callback){

	this._conection.query('select count(nome) as Inernação from kaban where unidade = "'+unidade+'"  and baixa is null and dataentrada =(select DATE_FORMAT(NOW(), "%Y-%m-%d") as hoje);', callback);
}

modelmorumbi.prototype.buscarsetoresmorumbi = function(callback){

	this._conection.query('SELECT setor, capacidadecamasocupadas, capacidademacasocupadas, capacidade FROM morumbi', callback);
}

modelmorumbi.prototype.buscarbanhomanhamorumbi = function(callback){

	this._conection.query('SELECT count(banho) as manha from kaban where banho = "Manhã" and baixa is null and unidade = "Morumbi";', callback);
}

modelmorumbi.prototype.buscarbanhotardemorumbi = function(callback){

	this._conection.query('SELECT count(banho) as tarde from kaban where banho = "Tarde"  and baixa is null and unidade = "Morumbi";', callback);
}

modelmorumbi.prototype.buscarbanhonoitemorumbi = function(callback){

	this._conection.query('SELECT count(banho) as noite from kaban where banho = "Noite"  and baixa is null and unidade = "Morumbi";', callback);
}

modelmorumbi.prototype.buscardieta1 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta1 FROM portal_paciente.kaban where dieta ="BRANDA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta2 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta2 FROM portal_paciente.kaban where dieta ="BRANDA + HEP" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta3 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta3 FROM portal_paciente.kaban where dieta ="BRANDA + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta4 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta4 FROM portal_paciente.kaban where dieta ="BRANDA + NEF" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta5 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta5 FROM portal_paciente.kaban where dieta ="BRANDA DM" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta6 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta6 FROM portal_paciente.kaban where dieta ="IRC" and unidade = "'+unidade+'";', callback);
}

modelmorumbi.prototype.buscardieta7 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta7 FROM portal_paciente.kaban where dieta ="DM" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta8 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta8 FROM portal_paciente.kaban where dieta ="DM + HEP + NEF" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta9 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta9 FROM portal_paciente.kaban where dieta ="DM + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta10 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta10 FROM portal_paciente.kaban where dieta ="DM + NEF" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta11 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta11 FROM portal_paciente.kaban where dieta ="HPS" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta12 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta12 FROM portal_paciente.kaban where dieta ="HPS + DM"and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta13 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta13 FROM portal_paciente.kaban where dieta ="HPS + HEP" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelmorumbi.prototype.buscardieta14 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta14 FROM portal_paciente.kaban where dieta ="HPS  + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta15 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta15 FROM portal_paciente.kaban where dieta ="HIPOLIPIDICA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta16 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta16 FROM portal_paciente.kaban where dieta ="LÍQUIDA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta17 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta17 FROM portal_paciente.kaban where dieta ="LIVRE" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta18 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta18 FROM portal_paciente.kaban where dieta ="LIVRE + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta19 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta19 FROM portal_paciente.kaban where dieta ="LIVRE POBRE K" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta20 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta20 FROM portal_paciente.kaban where dieta ="PASTOSA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta21 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta21 FROM portal_paciente.kaban where dieta ="PASTOSA + OVO" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta22 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta22 FROM portal_paciente.kaban where dieta ="SNE 1.0" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta23 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta23 FROM portal_paciente.kaban where dieta ="SNE 1.5" and unidade = "'+unidade+'" and baixa is null;', callback);
}


modelmorumbi.prototype.buscardieta24 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta24 FROM portal_paciente.kaban where dieta ="DIBEN 1.0" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelmorumbi.prototype.buscardieta25 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta25 FROM portal_paciente.kaban where dieta ="OBSTIPANTE" and unidade = "'+unidade+'" and baixa is null ;', callback);
}
module.exports = function(){
	return modelmorumbi;
}