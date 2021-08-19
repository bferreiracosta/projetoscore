function modelatribuicaoplanalto(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelatribuicaoplanalto.prototype.adicionarescalaplanalto = function(campo, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
	,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15, tecenf16, tecenf17,tecenf18, tecenf19, tecenf20,tecenf21, tecenf22, enf2, enf3, enf4, enf5, enf6 , enfcme, callback){
	
	this._conection.query('insert into atribuicaoplanalto set unidade="'+campo+'", date="'+date+'", turno="'+turno+'", enf1="'+enf1+'", tecenf1="'+tecenf1+'", maq1="'+maq1+'", maq2="'+maq2+'", enfpreposto="'+enfpreposto+'", tecenf2="'+tecenf2+'", tecenf3="'+tecenf3+'", tecenf4="'+tecenf4+'", tecenf5="'+tecenf5+'",tecenf6="'+tecenf6+'", tecenf7="'+tecenf7+'", tecenf8="'+tecenf8+'", tecenf9="'+tecenf9+'", tecenf10="'+tecenf10+'", tecenf11="'+tecenf11+'", tecenf12="'+tecenf12+'", tecenf13="'+tecenf13+'", tecenf14="'+tecenf14+'", tecenf15="'+tecenf15+'", tecenf16="'+tecenf16+'", tecenf17="'+tecenf17+'",tecenf18="'+tecenf18+'", tecenf19="'+tecenf19+'", tecenf20="'+tecenf20+'",tecenf21="'+tecenf21+'",tecenf22="'+tecenf22+'", enf2="'+enf2+'", enf3="'+enf3+'", enf4="'+enf4+'", enf5="'+enf5+'", enf6="'+enf6+'" , enfcme="'+enfcme+'"', callback);
}

modelatribuicaoplanalto.prototype.buscarescalaplanalto = function(valor, callback){
	var data = valor.datas;
	var turno = valor.turno;
	if(valor.unidade=1){
		var unidade = "Planalto"
	}

	this._conection.query('select * from atribuicaoplanalto where date = "'+data+'" and turno = "'+turno+'" and unidade = "'+unidade+'"', callback);
}

module.exports = function(){
	return modelatribuicaoplanalto;
}