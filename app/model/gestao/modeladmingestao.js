function modeladmingestao(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladmingestao.prototype.buscarleitomartins = function(callback){
	
	this._conection.query('select * from martins', callback);
}

modeladmingestao.prototype.updateleitosmartins = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update martins set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitoplanalto = function(callback){
	
	this._conection.query('select * from planalto  ', callback);
}

modeladmingestao.prototype.updateleitosplanalto = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update planalto set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitoluizote = function(callback){
	
	this._conection.query('select * from luizote  ', callback);
}

modeladmingestao.prototype.updateleitosluizote = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update luizote set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitoroosevelt = function(callback){
	
	this._conection.query('select * from roosevelt  ', callback);
}

modeladmingestao.prototype.updateleitosroosevelt = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update roosevelt set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitotibery = function(callback){
	
	this._conection.query('select * from tibery  ', callback);
}

modeladmingestao.prototype.updateleitostibery = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update tibery set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitomorumbi = function(callback){
	
	this._conection.query('select * from morumbi  ', callback);
}

modeladmingestao.prototype.updateleitosmorumbi = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update morumbi set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitosaojorge = function(callback){
	
	this._conection.query('select * from saojorge  ', callback);
}

modeladmingestao.prototype.updateleitossaojorge = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update saojorge set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

modeladmingestao.prototype.buscarleitopampulha = function(callback){
	
	this._conection.query('select * from pampulha  ', callback);
}

modeladmingestao.prototype.updateleitospampulha = function(cama, maca, macaparada, berco, setor, data, hora,bloqueado, callback){
	
	this._conection.query('update pampulha set bloqueado="'+bloqueado+'", capacidadecamasocupadas = "'+cama+'" ,capacidademacasparadavaga= "'+macaparada+'"  ,capacidadebercoocupado= "'+berco+'",  capacidademacasocupadas= "'+maca+'", datas= "'+data+'", hora= "'+hora+'" where setor = "'+setor+'"', callback);
}

module.exports = function(){
	return modeladmingestao;
}