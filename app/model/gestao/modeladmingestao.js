function modeladmingestao(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladmingestao.prototype.buscarleitomartins = function(callback){
	
	this._conection.query('select mar.idmartins, mar.setor, mar.capacidade, mar.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Martins" and baixa is null and setor = mar.setor and acomodacao="Cama") as qtdcama,mar.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Martins" and baixa is null and setor = mar.setor and acomodacao="Maca") as qtdmaca,mar.bloqueado, mar.datas, mar.hora  from leitokaban l inner join martins mar where unidade = "Martins" and baixa is null group by mar.setor;', callback);
}

modeladmingestao.prototype.updateleitosmartins = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update martins set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmartinsmaca = function(setor, callback){

	this._conection.query('update martins set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmartinsmacamais = function(setor, callback){
	
	this._conection.query('update martins set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmartinscama = function(setor, callback){
	
	this._conection.query('update martins set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmartinscamamais = function(setor, callback){
	
	this._conection.query('update martins set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitoplanalto = function(callback){
	
	this._conection.query('select pla.idplanalto, pla.setor, pla.capacidade, pla.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Planalto" and baixa is null and setor = pla.setor and acomodacao="Cama") as qtdcama,pla.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Planalto" and baixa is null and setor = pla.setor and acomodacao="Maca") as qtdmaca,pla.bloqueado, pla.datas, pla.hora  from leitokaban l inner join planalto pla where unidade = "Planalto" and baixa is null group by pla.setor;', callback);
}

modeladmingestao.prototype.updateleitosplanalto = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update planalto set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosplanaltomaca = function(setor, callback){

	this._conection.query('update planalto set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosplanaltomacamais = function(setor, callback){
	
	this._conection.query('update planalto set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosplanaltocama = function(setor, callback){
	
	this._conection.query('update planalto set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosplanaltocamamais = function(setor, callback){
	
	this._conection.query('update planalto set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitoluizote = function(callback){
	
	this._conection.query('select lui.idluizote, lui.setor, lui.capacidade, lui.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Luizote" and baixa is null and setor = lui.setor and acomodacao="Cama") as qtdcama,lui.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Luizote" and baixa is null and setor = lui.setor and acomodacao="Maca") as qtdmaca,lui.bloqueado, lui.datas, lui.hora  from leitokaban l inner join luizote lui where unidade = "Luizote" and baixa is null group by lui.setor;', callback);
}

modeladmingestao.prototype.updateleitosluizote = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update luizote set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosluizotemaca = function(setor, callback){

	this._conection.query('update luizote set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosluizotemacamais = function(setor, callback){
	
	this._conection.query('update luizote set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosluizotecama = function(setor, callback){
	
	this._conection.query('update luizote set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosluizotecamamais = function(setor, callback){
	
	this._conection.query('update luizote set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}
modeladmingestao.prototype.buscarleitoroosevelt = function(callback){
	
	this._conection.query('select roo.idroosevelt, roo.setor, roo.capacidade, roo.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Roosevelt" and baixa is null and setor = roo.setor and acomodacao="Cama") as qtdcama,roo.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Roosevelt" and baixa is null and setor = roo.setor and acomodacao="Maca") as qtdmaca,roo.bloqueado, roo.datas, roo.hora  from leitokaban l inner join roosevelt roo where unidade = "Roosevelt" and baixa is null group by roo.setor;', callback);
}

modeladmingestao.prototype.updateleitosroosevelt = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update roosevelt set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosrooseveltmaca = function(setor, callback){

	this._conection.query('update roosevelt set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosrooseveltmacamais = function(setor, callback){
	
	this._conection.query('update roosevelt set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosrooseveltcama = function(setor, callback){
	
	this._conection.query('update roosevelt set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosrooseveltcamamais = function(setor, callback){
	
	this._conection.query('update roosevelt set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitotibery = function(callback){
	
	this._conection.query('select tib.idtibery, tib.setor, tib.capacidade, tib.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Tibery" and baixa is null and setor = tib.setor and acomodacao="Cama") as qtdcama,tib.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Tibery" and baixa is null and setor = tib.setor and acomodacao="Maca") as qtdmaca,tib.bloqueado, tib.datas, tib.hora  from leitokaban l inner join tibery tib where unidade = "Tibery" and baixa is null group by tib.setor;', callback);
}

modeladmingestao.prototype.updateleitostibery = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update tibery set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitostiberymaca = function(setor, callback){

	this._conection.query('update tibery set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitostiberymacamais = function(setor, callback){
	
	this._conection.query('update tibery set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitostiberycama = function(setor, callback){
	
	this._conection.query('update tibery set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitostiberycamamais = function(setor, callback){
	
	this._conection.query('update tibery set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitomorumbi = function(callback){
	
	this._conection.query('select mor.idmorumbi, mor.setor, mor.capacidade, mor.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Morumbi" and baixa is null and setor = mor.setor and acomodacao="Cama") as qtdcama,mor.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Morumbi" and baixa is null and setor = mor.setor and acomodacao="Maca") as qtdmaca,mor.bloqueado, mor.datas, mor.hora  from leitokaban l inner join morumbi mor where unidade = "Morumbi" and baixa is null group by mor.setor;', callback);
}

modeladmingestao.prototype.updateleitosmorumbi = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update morumbi set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmorumbimaca = function(setor, callback){

	this._conection.query('update morumbi set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmorumbimacamais = function(setor, callback){
	
	this._conection.query('update morumbi set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmorumbicama = function(setor, callback){
	
	this._conection.query('update morumbi set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitosmorumbicamamais = function(setor, callback){
	
	this._conection.query('update morumbi set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitosaojorge = function(callback){
	
	this._conection.query('select * from saojorge;', callback);
}

modeladmingestao.prototype.updateleitossaojorge = function(capacidade, setor, data, hora,bloqueado, callback){

	this._conection.query('update saojorge set bloqueado="'+bloqueado+'", capacidade = "'+capacidade+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitossaojorgemaca = function(setor, callback){

	this._conection.query('update saojorge set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitossaojorgemacamais = function(setor, callback){
	
	this._conection.query('update saojorge set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitossaojorgecama = function(setor, callback){
	
	this._conection.query('update saojorge set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitossaojorgecamamais = function(setor, callback){
	
	this._conection.query('update saojorge set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitopampulha = function(callback){
	
	this._conection.query('select * from pampulha', callback);
}

modeladmingestao.prototype.updateleitospampulha = function(capacidade, setor, data, hora,bloqueado, callback){

	this._conection.query('update pampulha set bloqueado="'+bloqueado+'", capacidade = "'+capacidade+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitospampulhamaca = function(setor, callback){

	this._conection.query('update pampulha set capacidademacasocupadas = (capacidademacasocupadas - 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitospampulhamacamais = function(setor, callback){
	
	this._conection.query('update pampulha set capacidademacasocupadas = (capacidademacasocupadas + 1)  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitospampulhacama = function(setor, callback){
	
	this._conection.query('update pampulha set capacidadecamasocupadas = capacidadecamasocupadas - 1  where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.updateleitospampulhacamamais = function(setor, callback){
	
	this._conection.query('update pampulha set capacidadecamasocupadas = capacidadecamasocupadas + 1  where setor = "'+setor+'"', callback);
}

module.exports = function(){
	return modeladmingestao;
}