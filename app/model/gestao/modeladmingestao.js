function modeladmingestao(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladmingestao.prototype.buscarleitomartins = function(callback){
	
	this._conection.query('select mar.idmartins, mar.setor, mar.capacidade, mar.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Martins" and acomodacao="Cama" and nome is not null and setor = mar.setor) as qtdcama,mar.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Martins" and acomodacao="Maca" and nome is not null and setor = mar.setor) as qtdmaca,mar.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Martins" and acomodacao="Cadeira" and nome is not null and setor = mar.setor) as qtdcadeira, mar.bloqueado, mar.datas, mar.hora from martins mar', callback);
}

modeladmingestao.prototype.updateleitosmartins = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update martins set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidadecadeirasocupadas= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
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
	
	this._conection.query('select pla.idplanalto, pla.setor, pla.capacidade, pla.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Planalto" and acomodacao="Cama" and nome is not null and setor = pla.setor) as qtdcama,pla.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Planalto" and acomodacao="Maca" and nome is not null and setor = pla.setor) as qtdmaca,pla.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Planalto" and acomodacao="Cadeira" and nome is not null and setor = pla.setor) as qtdcadeira, pla.bloqueado, pla.datas, pla.hora from planalto pla', callback);
}

modeladmingestao.prototype.updateleitosplanalto = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update planalto set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidadecadeirasocupadas= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
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
	
	this._conection.query('select lui.idluizote, lui.setor, lui.capacidade, lui.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Cama" and nome is not null and setor = lui.setor) as qtdcama,lui.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Maca" and nome is not null and setor = lui.setor) as qtdmaca,lui.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Luizote" and acomodacao="Cadeira" and nome is not null and setor = lui.setor) as qtdcadeira, lui.bloqueado, lui.datas, lui.hora from luizote lui', callback);
}

modeladmingestao.prototype.updateleitosluizote = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update luizote set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidadecadeirasocupadas= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
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
	
	this._conection.query('select roo.idroosevelt, roo.setor, roo.capacidade, roo.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Roosevelt" and acomodacao="Cama" and nome is not null and setor = roo.setor) as qtdcama,roo.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Roosevelt" and acomodacao="Maca" and nome is not null and setor = roo.setor) as qtdmaca,roo.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Roosevelt" and acomodacao="Cadeira" and nome is not null and setor = roo.setor) as qtdcadeira, roo.bloqueado, roo.datas, roo.hora from roosevelt roo', callback);
}

modeladmingestao.prototype.updateleitosroosevelt = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update roosevelt set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidadecadeirasocupadas= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
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
	
	this._conection.query('select tib.idtibery, tib.setor, tib.capacidade, tib.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Tibery" and acomodacao="Cama" and nome is not null and setor = tib.setor) as qtdcama,tib.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Tibery" and acomodacao="Maca" and nome is not null and setor = tib.setor) as qtdmaca,tib.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Tibery" and acomodacao="Cadeira" and nome is not null and setor = tib.setor) as qtdcadeira, tib.bloqueado, tib.datas, tib.hora from tibery tib', callback);
}

modeladmingestao.prototype.updateleitostibery = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update tibery set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidadecadeirasocupadas= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
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
	
	this._conection.query('select mor.idmorumbi, mor.setor, mor.capacidade, mor.capacidadecamas, (select count(acomodacao) from leitokaban where unidade = "Morumbi" and acomodacao="Cama" and nome is not null and setor = mor.setor) as qtdcama,mor.capacidademacas,(select count(acomodacao) from leitokaban where unidade = "Morumbi" and acomodacao="Maca" and nome is not null and setor = mor.setor) as qtdmaca,mor.capacidadecadeiras,(select count(acomodacao) from leitokaban where unidade = "Morumbi" and acomodacao="Cadeira" and nome is not null and setor = mor.setor) as qtdcadeira, mor.bloqueado, mor.datas, mor.hora from morumbi mor', callback);
}

modeladmingestao.prototype.updateleitosmorumbi = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update morumbi set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidadecadeirasocupadas= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
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