<<<<<<< HEAD
function modeladminregulacao(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladminregulacao.prototype.buscardispositivomartins = function(callback){
	
	this._conection.query('select * from dispositivomartins where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivomartins = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivomartins set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivoplanalto = function(callback){
	
	this._conection.query('select * from dispositivoplanalto where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivoplanalto = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivoplanalto set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivoluizote = function(callback){
	
	this._conection.query('select * from dispositivoluizote where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivoluizote = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivoluizote set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivoroosevelt = function(callback){
	
	this._conection.query('select * from dispositivoroosevelt where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivoroosevelt = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivoroosevelt set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivotibery = function(callback){
	
	this._conection.query('select * from dispositivotibery where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivotibery = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivotibery set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivomorumbi = function(callback){
	
	this._conection.query('select * from dispositivomorumbi where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivomorumbi = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivomorumbi set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivosaojorge = function(callback){
	
	this._conection.query('select * from dispositivosaojorge where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivosaojorge = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivosaojorge set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivopampulha = function(callback){
	
	this._conection.query('select * from dispositivopampulha where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivopampulha = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivopampulha set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}
module.exports = function(){
	return modeladminregulacao;
=======
function modeladminregulacao(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modeladminregulacao.prototype.buscardispositivomartins = function(callback){
	
	this._conection.query('select * from dispositivomartins where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivomartins = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivomartins set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivoplanalto = function(callback){
	
	this._conection.query('select * from dispositivoplanalto where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivoplanalto = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivoplanalto set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivoluizote = function(callback){
	
	this._conection.query('select * from dispositivoluizote where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivoluizote = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivoluizote set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivoroosevelt = function(callback){
	
	this._conection.query('select * from dispositivoroosevelt where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivoroosevelt = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivoroosevelt set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivotibery = function(callback){
	
	this._conection.query('select * from dispositivotibery where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivotibery = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivotibery set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivomorumbi = function(callback){
	
	this._conection.query('select * from dispositivomorumbi where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivomorumbi = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivomorumbi set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivosaojorge = function(callback){
	
	this._conection.query('select * from dispositivosaojorge where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivosaojorge = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivosaojorge set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}

modeladminregulacao.prototype.buscardispositivopampulha = function(callback){
	
	this._conection.query('select * from dispositivopampulha where id = 1 ', callback);
}

modeladminregulacao.prototype.updatedispositivopampulha = function(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, callback){
	
	this._conection.query('update dispositivopampulha set dataatualizacao = "'+data+'", horaatualizacao="'+hora+'", vmu = "'+vmu+'", vmd = "'+vmd+'", vmde= "'+vmde+'", mu = "'+mu+'",md = "'+md+'", mde = "'+mde+'", bicu = "'+bicu+'",bicd = "'+bicd+'", bicde= "'+bicde+'" where id = 1', callback);
}
module.exports = function(){
	return modeladminregulacao;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}