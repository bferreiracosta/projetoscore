function modelluizote(application){
	var conection = require('../../../../config/dbConnection');
	this._conection = conection();
}

modelluizote.prototype.buscarpaciente = function(unidade, callback){
	
	this._conection.query('select * from kaban where unidade = "'+unidade+'" and baixa is null', callback);
}

modelluizote.prototype.buscarpacienterelatorio = function(unidade, callback){
	
	this._conection.query('SELECT * FROM portal_paciente.kaban inner join leitokaban on kaban.idpaciente = leitokaban.idpaciente where kaban.unidade = "'+unidade+'" and kaban.baixa is null;', callback);
}
modelluizote.prototype.buscarpacienterelatoriocovid = function(unidade, callback){
	
	this._conection.query('SELECT * FROM portal_paciente.kaban inner join leitokaban on kaban.idpaciente = leitokaban.idpaciente inner join dispositivokaban on kaban.idpaciente = dispositivokaban.idpaciente where kaban.unidade = "'+unidade+'" and kaban.baixa is null and kaban.covid="true" and dispositivokaban.status="Ativo";', callback);
}
modelluizote.prototype.buscarpacienterelatoriomental = function(unidade, callback){
	
	this._conection.query('SELECT * FROM portal_paciente.kaban inner join leitokaban on kaban.idpaciente = leitokaban.idpaciente where kaban.unidade = "'+unidade+'" and kaban.baixa is null and kaban.mental="true";', callback);
}

modelluizote.prototype.buscarpacientesemleitos = function(unidade, callback){
	
	this._conection.query('SELECT * FROM kaban where kaban.unidade = "Luizote" and kaban.baixa is null and idpaciente not in (select idpaciente from leitokaban where idpaciente is not null);', callback);
}


modelluizote.prototype.buscarexames = function(callback){
	
	this._conection.query('select * from evento where title IS NOT NULL and unidade = "Luizote"', callback);
}

modelluizote.prototype.buscarexamesid = function(idevento, callback){
	
	this._conection.query('select * from evento where idevento = ' + idevento.id, callback);
}

modelluizote.prototype.addexame = function(title, start,end, paciente, unidade, callback){
	
	this._conection.query('insert into evento set title = "'+title+'", start = "'+start+'",end = "'+end+'", paciente = "'+paciente+'", unidade = "'+unidade+'"', callback);
}

modelluizote.prototype.updateexameluizote = function(idevento, title, start, paciente, end, callback){
	
	this._conection.query('update  evento set title = "'+title+'", start = "'+start+'",end = "'+end+'", paciente = "'+paciente+'" where idevento = ' + idevento, callback);
}

modelluizote.prototype.deleteexameluizote = function(idevento, callback){
	
	this._conection.query('delete from  evento  where idevento = ' + idevento, callback);
}

modelluizote.prototype.buscarleitospacientes = function(callback){
	
	this._conection.query('SELECT * FROM portal_paciente.leitokaban inner join kaban on leitokaban.idpaciente = kaban.idpaciente where kaban.unidade = "Luizote" and kaban.baixa is null;', callback);
}

modelluizote.prototype.cadastrarleitosluizote = function(callback){
	
	this._conection.query('select * from leitokaban where unidade = "Luizote"', callback);
}

modelluizote.prototype.addcentralid = function(idpaciente,nome, unidade,callback){
	
	this._conection.query('insert leitokaban set idpaciente = "'+idpaciente+'", nome="'+nome+'", unidade="'+unidade+'"', callback);
}

modelluizote.prototype.baixacentral = function(idpaciente,baixa, callback){

	this._conection.query('update leitokaban set baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.buscarleitosid = function(valor,callback){

	this._conection.query('select idleito from leitos where idsetor = (select idsetor from setor where setor = "'+valor[0].setor+'"and unidade = "Luizote") and leitos = "'+valor[0].leito+'" and unidade = "Luizote" and status = "Inativo" limit 1', callback);
}

modelluizote.prototype.buscarleitosnome = function(valor,callback){

	this._conection.query('select idleito from leitokaban where nome = "'+valor[0].nome+'"', callback);
}

modelluizote.prototype.buscarleitospacientesporid = function(valor, callback){

	this._conection.query('select idleito from leitokaban where idpaciente = "'+valor+'"', callback);
}

modelluizote.prototype.buscarleitospacientespornome = function(valor, callback){
	
	this._conection.query('select nome from leitokaban where idpaciente = "'+valor+'"', callback);
}

modelluizote.prototype.atualizarleitokaban = function(idleito, idpaciente, nome, callback){
	
	this._conection.query('update leitokaban set idpaciente = "'+idpaciente+'", nome = "'+nome+'"  where idleito = "'+idleito+'"', callback);
}

modelluizote.prototype.mudarpacienteleito = function(idleito, callback){
	
	this._conection.query('update leitokaban set idpaciente = null, nome = null  where idleito = "'+idleito+'"', callback);
}

modelluizote.prototype.buscarleitoativo = function(idsetor, leito, callback){

	this._conection.query('select idleito from leitos where idsetor="'+idsetor[0].idsetor+'" and leitos = "'+leito+'" and status = "Ativo" limit 1', callback);
}

modelluizote.prototype.updateleitos = function(idleito, callback){

	this._conection.query('update leitos set status = "Inativo"  where idleito = "'+idleito[0].idleito+'"', callback);
}

modelluizote.prototype.updateleitosnome = function(idpaciente, paciente,unidade, callback){

	this._conection.query('update leitokaban set nome = "'+paciente+'"  where idpaciente = "'+idpaciente+'" and unidade = "'+unidade+'"', callback);
}

modelluizote.prototype.updateleitosativo = function(idleito, callback){

	this._conection.query('update leitos set status = "Ativo" where idleito = "'+idleito+'"', callback);
}

modelluizote.prototype.buscarsetoresid = function(setor, callback){
	
	this._conection.query('select idsetor from setor where setor = "'+setor+'"  and unidade = "Luizote"', callback);
}

modelluizote.prototype.buscarpacientesluizote = function(callback){
	
	this._conection.query('select * from kaban where unidade = "Luizote" and baixa is null', callback);
}

modelluizote.prototype.buscarpacientesidluizote = function(valor, callback){
	
	this._conection.query('select idpaciente from kaban where unidade = "Luizote" and baixa is null and nome="'+valor.valor+'"', callback);
}

modelluizote.prototype.buscardispositivohora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM dispositivokaban dd where unidade = "'+unidade+'" and  status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelluizote.prototype.buscarfugulinhora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM fugulin dd where setor = "Enfermaria" and unidade = "'+unidade+'" and   status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or setor = "Enfermaria" and unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelluizote.prototype.buscarnewshora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM news dd inner join kaban k on dd.idpaciente = k.idpaciente where dd.setor = "Enfermaria" and dd.unidade = "'+unidade+'" and dd.status = "Ativo" and dd.baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW() or dd.setor = "Enfermaria" and dd.unidade = "'+unidade+'" and (dd.dataatualizacao) is null and dd.baixa is null GROUP BY dd.idpaciente;', callback);
}

modelluizote.prototype.buscartisshora = function(unidade, callback){
	
	this._conection.query('SELECT * FROM tiss dd where setor = "Sala de Emergência" and unidade = "'+unidade+'" and   status = "Ativo" and  baixa is null and date_add(dd.dataatualizacao, INTERVAL 1 DAY)< NOW()  or setor = "Sala de Emergência" and unidade = "'+unidade+'" and (dd.dataatualizacao) is null and  baixa is null  GROUP BY idpaciente;', callback);
}

modelluizote.prototype.buscarfugulinid = function(idpaciente, unidade, callback){

	this._conection.query('select * from fugulin where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelluizote.prototype.buscardispositivoid = function(idpaciente, unidade, callback){
	this._conection.query('select * from dispositivokaban where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelluizote.prototype.buscardispositivoporid = function(idpaciente, unidade, callback){
	this._conection.query('select * from kaban where unidade = "'+unidade+'" and idpaciente = "'+idpaciente+'"', callback);
}

modelluizote.prototype.buscarnewsid = function(idpaciente, unidade, callback){

	this._conection.query('select * from news where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelluizote.prototype.buscartissid = function(idpaciente, unidade, callback){
	this._conection.query('select * from tiss where unidade = "'+unidade+'" and idpaciente = "'+idpaciente.id+'" and status = "Ativo"', callback);
}

modelluizote.prototype.buscarfugulin = function(unidade, callback){
	
	this._conection.query('SELECT * FROM fugulin dd where setor = "Enfermaria" and  status = "Ativo" and unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null GROUP BY idpaciente', callback);
}

modelluizote.prototype.buscarnews = function(unidade, callback){
	
	this._conection.query('SELECT * FROM news dd inner join kaban k on dd.idpaciente = k.idpaciente where dd.setor = "Enfermaria" and  dd.status = "Ativo" and dd.unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and dd.baixa is null GROUP BY dd.idpaciente ', callback);
}

modelluizote.prototype.buscartiss = function(unidade, callback){
	
	this._conection.query('SELECT * FROM tiss dd where setor = "Sala de Emergência" and  status = "Ativo" and unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null GROUP BY idpaciente ', callback);
}

modelluizote.prototype.historico = function(unidade, callback){
	
	this._conection.query('select * from kaban where unidade = "'+unidade+'"  order by dataentrada asc', callback);
}

modelluizote.prototype.buscardispositivo = function(unidade, callback){
	
	this._conection.query('SELECT * FROM dispositivokaban dd where unidade = "'+unidade+'" and  date_add(dd.dataatualizacao, INTERVAL 1 DAY) > NOW() and baixa is null and status = "Ativo" GROUP BY idpaciente ', callback);
}

modelluizote.prototype.buscardispositivodataid = function(idpaciente, unidade, callback){
	this._conection.query('SELECT dataatualizacao, iddispositivo FROM dispositivokaban where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelluizote.prototype.buscarfugulindataid = function(idpaciente, unidade, callback){

	this._conection.query('SELECT dataatualizacao, idfugulin FROM fugulin where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelluizote.prototype.buscarnewsdataid = function(idpaciente, unidade, callback){

	this._conection.query('SELECT dataatualizacao, idnews FROM news where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelluizote.prototype.buscartissdataid = function(idpaciente, unidade, callback){

	this._conection.query('SELECT dataatualizacao, idtiss FROM tiss where unidade = "'+unidade+'" and  idpaciente = "'+idpaciente+'" and status = "Ativo" ORDER BY dataatualizacao desc limit 1', callback);
}

modelluizote.prototype.buscarpacienteid = function(idpaciente, unidade, callback){
	this._conection.query('select * from kaban where unidade = "'+unidade+'" and idpaciente = ' + idpaciente.id, callback);
}

modelluizote.prototype.buscarpacienteporid = function(idpaciente, callback){
	
	this._conection.query('select * from kaban where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.buscarsetor = function(idpaciente, callback){

	this._conection.query('select comodo from kaban where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.cadastrarpaciente = function( Suspeição,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios, casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, callback){
	
	this._conection.query('insert into kaban set suspeicao = "'+Suspeição+'", round = "'+round+'", planoalta = "'+alta+'", metas = "'+metas+'", agenexames = "'+agenexames+'", laudo = "'+laudo+'", descexame = "'+descexame+'", desclaudo = "'+desclaudo+'", oxigenios = "'+oxigenios+'", casas = "'+casas+'", avespecialistas = "'+avespecialistas+'", descespecialista = "'+descespecialista+'", coleta = "'+coletas+'", resultadolabs = "'+resultadolabs+'", transferencias = "'+transferencias+'", desctransferencia = "'+desctransferencia+'", hemos = "'+hemos+'", medico = "'+medico+'", dieta = "'+dieta+'", exame = "'+exame+'", dataexame = "'+dataexame+'",mental = "'+mental+'", referencia = "'+referencia+'", covid = "'+covid+'", nome = "'+paciente+'", comodo = "'+setor+'", susfacil = "'+susfacil+'",prt = "'+prt+'", datanascimento = "'+dn+'", idade = "'+idade+'", dataentrada = "'+da+'", qtddiasinternados = "'+qtdi+'" , ECF = "'+ecf+'", spict="'+spict+'" , paliativo = "'+paliativo+'" , diagnostico = "'+diagnostico+'" ,especialidade = "'+especialidade+'" ,observacao = "'+observacao+'" , banho = "'+banho+'" , pendencias = "'+pendencias+'" ,mobilidade = "'+mobilidade+'", unidade = "'+unidade+'"',callback);
}

modelluizote.prototype.update = function(Suspeição,idpaciente, paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, callback){
	
	this._conection.query('update kaban set suspeicao = "'+Suspeição+'",round = "'+round+'", planoalta = "'+alta+'", metas = "'+metas+'", agenexames = "'+agenexames+'", laudo = "'+laudo+'", descexame = "'+descexame+'", desclaudo = "'+desclaudo+'", oxigenios = "'+oxigenios+'", casas = "'+casas+'", avespecialistas = "'+avespecialistas+'", descespecialista = "'+descespecialista+'", coleta = "'+coletas+'", resultadolabs = "'+resultadolabs+'", transferencias = "'+transferencias+'", desctransferencia = "'+desctransferencia+'", hemos = "'+hemos+'", medico = "'+medico+'", dieta = "'+dieta+'", dataexame="'+dataexame+'", exame="'+exame+'", mental = "'+mental+'", referencia = "'+referencia+'", covid = "'+covid+'",  nome = "'+paciente+'", comodo = "'+setor+'", susfacil = "'+susfacil+'",prt = "'+prt+'", datanascimento = "'+dn+'", idade = "'+idade+'", dataentrada = "'+da+'", qtddiasinternados = "'+qtdi+'" , ECF = "'+ecf+'", spict="'+spict+'" ,  paliativo = "'+paliativo+'" , diagnostico = "'+diagnostico+'" ,especialidade = "'+especialidade+'" ,observacao = "'+observacao+'" , banho = "'+banho+'" , pendencias = "'+pendencias+'" ,mobilidade = "'+mobilidade+'", unidade = "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.baixa = function(idpaciente,baixa, destino, alta,data, callback){

	this._conection.query('update kaban set destino="'+destino+'", alta = "'+alta+'",   baixa = "'+baixa+'", datasaida = "'+data+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.baixadispositivo = function(idpaciente,baixa, callback){

	this._conection.query('update dispositivokaban set   baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.baixafugulin = function(idpaciente,baixa, callback){

	this._conection.query('update fugulin set  baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.baixatiss = function(idpaciente,baixa, callback){

	this._conection.query('update tiss set  baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.baixanews = function(idpaciente,baixa, callback){

	this._conection.query('update news set  baixa = "'+baixa+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatedispositivo = function(idpaciente,glasgow, bic, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,gtt,datagtt,sng,datasng,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade, callback){
	
	this._conection.query('update dispositivokaban set glasgow = "'+glasgow+'",bic = "'+bic+'",gtt= "'+gtt+'",datagtt= "'+datagtt+'",sng  = "'+sng+'",datasng= "'+datasng+'",svd= "'+svd+'",datasvd= "'+datasvd+'",sne= "'+sne+'",datasne= "'+datasne+'",avp= "'+avp+'",dataavp= "'+dataavp+'",cvc= "'+cvc+'",datacvc= "'+datacvc+'",dispositivoventilatorio= "'+dispositivoventilatorio+'",fluxoo2= "'+fluxoo2+'",fio2= "'+fio2+'" ,peep= "'+peep+'",drogas= "'+drogas+'",nora= "'+nora+'",vazaonora= "'+vazaonora+'",adrenalina= "'+adre+'",vazaoadrenalina= "'+vazaoadre+'",bicarbonato= "'+bica+'",vazaobicarbonato= "'+vazaobica+'",sedacao= "'+sedacao+'",dormonid= "'+dormonid3+'",vazaodormonid= "'+vazaoDormonid+'",fentanil= "'+fentanil3+'",vazaofentanil= "'+vazaoFentanil+'",rocuronio= "'+rocuronio3+'",vazaorocuronio= "'+vazaoRocuronio+'",propofol= "'+propofol3+'",vazaopropofol= "'+vazaoPropofol+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ) ,unidade= "'+unidade+'" where idpaciente = '+ idpaciente, callback);
}

modelluizote.prototype.updatedispositivodados = function(idpaciente,glasgow, bic,data, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,gtt,datagtt,sng,datasng,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade, callback){

	this._conection.query('update dispositivokaban set  glasgow = "'+glasgow+'",bic = "'+bic+'",dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), gtt= "'+gtt+'",datagtt= "'+datagtt+'",sng  = "'+sng+'",datasng= "'+datasng+'",svd= "'+svd+'",datasvd= "'+datasvd+'",sne= "'+sne+'",datasne= "'+datasne+'",avp= "'+avp+'",dataavp= "'+dataavp+'",cvc= "'+cvc+'",datacvc= "'+datacvc+'",dispositivoventilatorio= "'+dispositivoventilatorio+'",fluxoo2= "'+fluxoo2+'",fio2= "'+fio2+'" ,peep= "'+peep+'",drogas= "'+drogas+'",nora= "'+nora+'",vazaonora= "'+vazaonora+'",adrenalina= "'+adre+'",vazaoadrenalina= "'+vazaoadre+'",bicarbonato= "'+bica+'",vazaobicarbonato= "'+vazaobica+'",sedacao= "'+sedacao+'",dormonid= "'+dormonid3+'",vazaodormonid= "'+vazaoDormonid+'",fentanil= "'+fentanil3+'",vazaofentanil= "'+vazaoFentanil+'",rocuronio= "'+rocuronio3+'",vazaorocuronio= "'+vazaoRocuronio+'",propofol= "'+propofol3+'",vazaopropofol= "'+vazaoPropofol+'",unidade= "'+unidade+'" where idpaciente = '+ idpaciente, callback);
}

modelluizote.prototype.updatedispositivostatus = function(iddispositivo, callback){
	
	this._conection.query('update dispositivokaban set status = "Inativo" where iddispositivo = '+ iddispositivo, callback);
}

modelluizote.prototype.adddispositivo = function(idpaciente,nome, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,gtt,datagtt,sng,datasng,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade, callback){

	this._conection.query('insert dispositivokaban set gtt= "'+gtt+'",datagtt= "'+datagtt+'",sng  = "'+sng+'",datasng= "'+datasng+'", glasgow = "'+glasgow+'",bic = "'+bic+'",idpaciente = "'+idpaciente+'", nome="'+nome+'", svd= "'+svd+'",datasvd= "'+datasvd+'",sne= "'+sne+'",datasne= "'+datasne+'",avp= "'+avp+'",dataavp= "'+dataavp+'",cvc= "'+cvc+'",datacvc= "'+datacvc+'",dispositivoventilatorio= "'+dispositivoventilatorio+'",fluxoo2= "'+fluxoo2+'",fio2= "'+fio2+'" ,peep= "'+peep+'",drogas= "'+drogas+'",nora= "'+nora+'",vazaonora= "'+vazaonora+'",adrenalina= "'+adre+'",vazaoadrenalina= "'+vazaoadre+'",bicarbonato= "'+bica+'",vazaobicarbonato= "'+vazaobica+'",sedacao= "'+sedacao+'",dormonid= "'+dormonid3+'",vazaodormonid= "'+vazaoDormonid+'",fentanil= "'+fentanil3+'",vazaofentanil= "'+vazaoFentanil+'",rocuronio= "'+rocuronio3+'",vazaorocuronio= "'+vazaoRocuronio+'",propofol= "'+propofol3+'",vazaopropofol= "'+vazaoPropofol+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelluizote.prototype.adddispositivoid = function(idpaciente,nome, unidade,callback){
	
	this._conection.query('insert dispositivokaban set idpaciente = "'+idpaciente+'", nome="'+nome+'", unidade="'+unidade+'",status= "Ativo"', callback);
}

modelluizote.prototype.updatedispositivonome = function(idpaciente, nome, callback){

	this._conection.query('update dispositivokaban set nome= "'+nome+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.addfugulinid = function(idpaciente,setor, nome, unidade, callback){
	
	this._conection.query('insert fugulin set idpaciente = "'+idpaciente+'",setor="'+setor+'", nome="'+nome+'",unidade="'+unidade+'", status= "Ativo"', callback);
}

modelluizote.prototype.addfugulin = function(idpaciente, setor, nome, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade, callback){
	
	this._conection.query('insert fugulin set setor = "'+setor+'",  idpaciente = "'+idpaciente+'",nome="'+nome+'",mental= "'+mental2+'",oxigenacao= "'+oxigenacao2+'",sinaisvitais= "'+sinaisvitais2+'",motilidade= "'+motilidade2+'",deambulacao= "'+deambulacao2+'",alimentacao= "'+alimentacao2+'",cuidado= "'+cuidado2+'",eliminacao= "'+eliminacao2+'",terapeutica= "'+terapeutica2+'",integridade= "'+integridade2+'" ,curativo= "'+curativo2+'",tempocurativo= "'+tempo2+'",resultado= "'+fugulin+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelluizote.prototype.updatefugulin = function(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade, callback){

	this._conection.query('update fugulin set mental= "'+mental2+'",oxigenacao= "'+oxigenacao2+'",sinaisvitais= "'+sinaisvitais2+'",motilidade= "'+motilidade2+'",deambulacao= "'+deambulacao2+'",deambulacao= "'+deambulacao2+'",alimentacao= "'+alimentacao2+'",cuidado= "'+cuidado2+'",eliminacao= "'+eliminacao2+'",terapeutica= "'+terapeutica2+'",integridade= "'+integridade2+'" ,curativo= "'+curativo2+'",tempocurativo= "'+tempo2+'",resultado= "'+fugulin+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"  where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatefugulinnome = function(idpaciente, nome, setor, callback){

	this._conection.query('update fugulin set nome= "'+nome+'",setor= "'+setor+'"  where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatefugulindados = function(idpaciente,data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade, callback){

	this._conection.query('update fugulin set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), mental= "'+mental2+'",oxigenacao= "'+oxigenacao2+'",sinaisvitais= "'+sinaisvitais2+'",motilidade= "'+motilidade2+'",deambulacao= "'+deambulacao2+'",alimentacao= "'+alimentacao2+'",cuidado= "'+cuidado2+'",eliminacao= "'+eliminacao2+'",terapeutica= "'+terapeutica2+'",integridade= "'+integridade2+'" ,curativo= "'+curativo2+'",tempocurativo= "'+tempo2+'",resultado= "'+fugulin+'",unidade= "'+unidade+'"  where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatefugulinstatus = function(idfugulin, callback){

	this._conection.query('update fugulin set status = "Inativo" where idfugulin = '+ idfugulin, callback);
}

modelluizote.prototype.addtissid = function(idpaciente,setor, nome,unidade,callback){
	
	this._conection.query('insert tiss set idpaciente = "'+idpaciente+'",setor="'+setor+'", nome="'+nome+'", unidade="'+unidade+'",status= "Ativo"', callback);
}

modelluizote.prototype.addtiss = function(idpaciente, setor , nome, tiss ,data,unidade, callback){
	
	this._conection.query('insert tiss set setor = "'+setor+'", tiss= "'+tiss+'", idpaciente = "'+idpaciente+'",nome="'+nome+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelluizote.prototype.updatetiss = function(idpaciente, tiss ,data,unidade, callback){

	this._conection.query('update tiss set tiss= "'+tiss+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"  where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatetissdados = function(idpaciente,data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,unidade, callback){

	this._conection.query('update tiss set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), atividadesbasica= "'+atividades+'",suporteventilatorio= "'+ventilatorio+'",suportecardiovascular= "'+cardiovascular+'",suporterenal= "'+renal+'",suporteneurologico= "'+neurologico+'",suportemetabolico= "'+metabolico+'",intervencoes= "'+intervencoes+'",tiss= "'+tiss+'",unidade= "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatetissstatus = function(idtiss, callback){

	this._conection.query('update tiss set status = "Inativo" where idtiss = '+ idtiss, callback);
}

modelluizote.prototype.updatetissnome = function(idpaciente, nome,setor, callback){

	this._conection.query('update tiss set nome= "'+nome+'", setor= "'+setor+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.addnewsid = function(idpaciente,setor, nome, unidade,callback){
	
	this._conection.query('insert news set idpaciente = "'+idpaciente+'", setor="'+setor+'", nome="'+nome+'", unidade="'+unidade+'", status= "Ativo"', callback);
}

modelluizote.prototype.addnews = function(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade, callback){
	
	this._conection.query('insert news set idpaciente = "'+idpaciente+'",setor="'+setor+'", nome="'+nome+'",fr= "'+fr+'",sat= "'+sat+'",o2= "'+o2+'",temp= "'+temp+'",fc= "'+fc+'",sistolica= "'+sistolica+'",alerta= "'+alerta+'",news= "'+news+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"', callback);
}

modelluizote.prototype.updatenews = function(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade, callback){

	this._conection.query('update news set setor="'+setor+'", fr= "'+fr+'",sat= "'+sat+'",o2= "'+o2+'",temp= "'+temp+'",fc= "'+fc+'",sistolica= "'+sistolica+'",alerta= "'+alerta+'",news= "'+news+'",dataatualizacao= STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ),unidade= "'+unidade+'", status= "Ativo"  where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatenewsdados = function(idpaciente,data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade, callback){

	this._conection.query('update news set dataatualizacao = STR_TO_DATE( "'+data+'" , "%d-%m-%Y %H:%i:%s" ), setor="'+setor+'", fr= "'+fr+'",sat= "'+sat+'",o2= "'+o2+'",temp= "'+temp+'",fc= "'+fc+'",sistolica= "'+sistolica+'",alerta= "'+alerta+'",news= "'+news+'",unidade= "'+unidade+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.updatenewsstatus = function(idnews, callback){

	this._conection.query('update news set status = "Inativo" where idnews = '+ idnews, callback);
}

modelluizote.prototype.updatenewsnome = function(idpaciente, nome,setor, callback){
	
	this._conection.query('update news set nome= "'+nome+'", setor= "'+setor+'" where idpaciente = ' + idpaciente, callback);
}

modelluizote.prototype.buscarclinicoluizote = function(unidade, callback){

	this._conection.query('select count(especialidade) as Clinica  from kaban where especialidade = "Clinica" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscartraumatologialuizote = function(unidade, callback){

	this._conection.query('select count(especialidade) as Traumatologia  from kaban where especialidade = "Traumatologia" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscarpediatrialuizote = function(unidade, callback){

	this._conection.query('select count(especialidade) as Pediatria  from kaban where especialidade = "Pediatria" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscarpsquiatrialuizote = function(unidade, callback){

	this._conection.query('select count(especialidade) as Psquiatria  from kaban where especialidade = "Psquiatria" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscarcirurgicoluizote = function(unidade, callback){

	this._conection.query('select count(especialidade) as Cirurgico  from kaban where especialidade = "Cirurgico" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscarobservacaoluizote = function(unidade, callback){

	this._conection.query('select count(comodo) as Observação  from kaban where comodo = "Observacao" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscaraltaluizote = function(unidade, callback){

	this._conection.query('select count(baixa) as Altas  from kaban where baixa = "Alta" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelluizote.prototype.buscarevasaoluizote = function(unidade, callback){

	this._conection.query('select count(baixa) as Evasão  from kaban where baixa = "Evasão" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelluizote.prototype.buscartransferencialuizote = function(unidade, callback){

	this._conection.query('select count(baixa) as Transferência  from kaban where baixa = "Transferência" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelluizote.prototype.buscarobitoluizote = function(unidade, callback){

	this._conection.query('select count(baixa) as Obitos  from kaban where baixa = "Óbito" and unidade = "'+unidade+'" and  datasaida = (select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelluizote.prototype.buscarinternacaodialuizote = function(unidade, callback){

	this._conection.query('select count(nome) as Inernação from kaban where unidade = "'+unidade+'"  and baixa is null and dataentrada =(select DATE_FORMAT(NOW(), "%d/%m/%Y") as hoje);', callback);
}

modelluizote.prototype.buscarsetoresluizote = function(callback){

	this._conection.query('select lui.idluizote, lui.setor, lui.capacidade,lui.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Cama" and nome is not null and setor = lui.setor) as qtdcama,lui.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Maca" and nome is not null and setor = lui.setor) as qtdmaca,lui.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Cadeira" and nome is not null and setor = lui.setor) as qtdcadeira, lui.capacidadebercos,(select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Berço" and nome is not null and setor = lui.setor) as qtdbercos, lui.bloqueado, lui.datas, lui.hora from luizote lui', callback);
}

modelluizote.prototype.buscarbanhomanhaluizote = function(callback){

	this._conection.query('SELECT count(banho) as manha from kaban where banho = "Manhã" and baixa is null and unidade = "Luizote";', callback);
}

modelluizote.prototype.buscarbanhotardeluizote = function(callback){

	this._conection.query('SELECT count(banho) as tarde from kaban where banho = "Tarde"  and baixa is null and unidade = "Luizote";', callback);
}

modelluizote.prototype.buscarbanhonoiteluizote = function(callback){

	this._conection.query('SELECT count(banho) as noite from kaban where banho = "Noite"  and baixa is null and unidade = "Luizote";', callback);
}

modelluizote.prototype.buscardieta1 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta1 FROM portal_paciente.kaban where dieta ="BRANDA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta2 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta2 FROM portal_paciente.kaban where dieta ="BRANDA + HEP" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta3 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta3 FROM portal_paciente.kaban where dieta ="BRANDA + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta4 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta4 FROM portal_paciente.kaban where dieta ="BRANDA + NEF" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta5 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta5 FROM portal_paciente.kaban where dieta ="BRANDA DM" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta6 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta6 FROM portal_paciente.kaban where dieta ="IRC" and unidade = "'+unidade+'" and baixa is null; ', callback);
}

modelluizote.prototype.buscardieta7 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta7 FROM portal_paciente.kaban where dieta ="DM" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta8 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta8 FROM portal_paciente.kaban where dieta ="DM + HEP + NEF" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta9 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta9 FROM portal_paciente.kaban where dieta ="DM + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta10 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta10 FROM portal_paciente.kaban where dieta ="DM + NEF" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta11 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta11 FROM portal_paciente.kaban where dieta ="HPS" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta12 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta12 FROM portal_paciente.kaban where dieta ="HPS + DM"and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta13 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta13 FROM portal_paciente.kaban where dieta ="HPS + HEP" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta14 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta14 FROM portal_paciente.kaban where dieta ="HPS  + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta15 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta15 FROM portal_paciente.kaban where dieta ="HIPOLIPIDICA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta16 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta16 FROM portal_paciente.kaban where dieta ="LÍQUIDA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta17 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta17 FROM portal_paciente.kaban where dieta ="LIVRE" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta18 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta18 FROM portal_paciente.kaban where dieta ="LIVRE + LAX" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta19 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta19 FROM portal_paciente.kaban where dieta ="LIVRE POBRE K" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta20 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta20 FROM portal_paciente.kaban where dieta ="PASTOSA" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta21 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta21 FROM portal_paciente.kaban where dieta ="PASTOSA + OVO" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta22 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta22 FROM portal_paciente.kaban where dieta ="SNE 1.0" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta23 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta23 FROM portal_paciente.kaban where dieta ="SNE 1.5" and unidade = "'+unidade+'" and baixa is null;', callback);
}


modelluizote.prototype.buscardieta24 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta24 FROM portal_paciente.kaban where dieta ="DIBEN 1.0" and unidade = "'+unidade+'" and baixa is null;', callback);
}

modelluizote.prototype.buscardieta25 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta25 FROM portal_paciente.kaban where dieta ="OBSTIPANTE" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta26 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta26 FROM portal_paciente.kaban where dieta ="PASTOSA DM SEM RESÍDUOS" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta27 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta27 FROM portal_paciente.kaban where dieta ="PASTOSA SEM RESÍDUOS" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta28 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta28 FROM portal_paciente.kaban where dieta ="BRANDA HIPOLIPIDICA" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta29 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta29 FROM portal_paciente.kaban where dieta ="HIPOLIPIDICA/HPS" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta30 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta30 FROM portal_paciente.kaban where dieta ="HIPOLIPIDICA/DM" and unidade = "'+unidade+'" and baixa is null ;', callback);
}

modelluizote.prototype.buscardieta31 = function(unidade,callback){

	this._conection.query('SELECT count(dieta) as dieta31 FROM portal_paciente.kaban where dieta ="LIQUIDA SEM RESÍDUOS" and unidade = "'+unidade+'" and baixa is null ;', callback);
}



module.exports = function(){
	return modelluizote;
}