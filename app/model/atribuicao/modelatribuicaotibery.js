function modelatribuicaotibery(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelatribuicaotibery.prototype.adicionarescalatibery = function(unidade, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
	,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15,tecenf16,tecenf17,
	 enf2, enf3, enf4, enf5, enf6 , enf7,enfcme, teccme, callback){
	
	this._conection.query('insert into atribuicaotibery set unidade="Tibery", date="'+date+'", turno="'+turno+'", enf1="'+enf1+'",tecenf16="'+tecenf16+'",tecenf17="'+tecenf17+'",tecenf1="'+tecenf1+'", maq1="'+maq1+'", maq2="'+maq2+'", enfpreposto="'+enfpreposto+'", tecenf2="'+tecenf2+'", tecenf3="'+tecenf3+'", tecenf4="'+tecenf4+'", tecenf5="'+tecenf5+'",tecenf6="'+tecenf6+'", tecenf7="'+tecenf7+'", tecenf8="'+tecenf8+'", tecenf9="'+tecenf9+'", tecenf10="'+tecenf10+'", tecenf11="'+tecenf11+'", tecenf12="'+tecenf12+'", tecenf13="'+tecenf13+'", tecenf14="'+tecenf14+'", tecenf15="'+tecenf15+'", enf2="'+enf2+'", enf3="'+enf3+'", enf4="'+enf4+'", enf5="'+enf5+'", enf6="'+enf6+'" ,enf7="'+enf7+'" ,tecenfcme="'+teccme+'" , enfcme="'+enfcme+'"', callback);
}
modelatribuicaotibery.prototype.updatedescanso = function(unidade, date, turno, desc1,desc2,desc3,desc4,desc5,desc6,desc7,desc8,desc9,desc10,desc11,desc12,desc13,desc14,desc15,desc16,desc17,desc18,desc19,desc20, callback){
	console.log(unidade, date, turno, desc1,desc2,desc3,desc4,desc5,desc6,desc7,desc8,desc9,desc10,desc11,desc12,desc13,desc14,desc15,desc16,desc17,desc18,desc19,desc20)
	this._conection.query('update atribuicaotibery set desc1="'+desc1+'",desc2="'+desc2+'",desc3="'+desc3+'",desc4="'+desc4+'",desc5="'+desc5+'",desc6="'+desc6+'",desc7="'+desc7+'",desc8="'+desc8+'",desc9="'+desc9+'",desc10="'+desc10+'",desc11="'+desc11+'",desc12="'+desc12+'",desc13="'+desc13+'",desc14="'+desc14+'",desc15="'+desc15+'",desc16="'+desc16+'",desc17="'+desc17+'",desc18="'+desc18+'",desc19="'+desc19+'",desc20="'+desc20+'" where unidade="'+unidade+'" and date="'+date+'"and turno="'+turno+'"', callback);
}
modelatribuicaotibery.prototype.updateescalatibery = function(unidade, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
	,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15,tecenf16,tecenf17,
	 enf2, enf3, enf4, enf5, enf6 , enf7,enfcme, teccme, callback){
	
	this._conection.query('update atribuicaotibery set enf1="'+enf1+'", tecenf16="'+tecenf16+'",tecenf17="'+tecenf17+'",tecenf1="'+tecenf1+'", maq1="'+maq1+'", maq2="'+maq2+'", enfpreposto="'+enfpreposto+'", tecenf2="'+tecenf2+'", tecenf3="'+tecenf3+'", tecenf4="'+tecenf4+'", tecenf5="'+tecenf5+'",tecenf6="'+tecenf6+'", tecenf7="'+tecenf7+'", tecenf8="'+tecenf8+'", tecenf9="'+tecenf9+'", tecenf10="'+tecenf10+'", tecenf11="'+tecenf11+'", tecenf12="'+tecenf12+'", tecenf13="'+tecenf13+'", tecenf14="'+tecenf14+'", tecenf15="'+tecenf15+'", enf2="'+enf2+'", enf3="'+enf3+'", enf4="'+enf4+'", enf5="'+enf5+'", enf6="'+enf6+'" ,enf7="'+enf7+'" ,tecenfcme="'+teccme+'" , enfcme="'+enfcme+'" where unidade="Tibery" and date="'+date+'"and turno="'+turno+'"', callback);
}

modelatribuicaotibery.prototype.adicionandoescalafolga = function(unidade, date, turno, enfermeiro1, enfermeiro2, enfermeiro3, enfermeiro4, tecnico1, tecnico2, tecnico3, tecnico4, atestado1,atestado2, atestado3, atestado4, callback){
	console.log(unidade, date, turno)
	this._conection.query('update atribuicaotibery set enfermeiro1="'+enfermeiro1+'", enfermeiro2="'+enfermeiro2+'", enfermeiro3="'+enfermeiro3+'", enfermeiro4="'+enfermeiro4+'", tecnico1="'+tecnico1+'", tecnico2="'+tecnico2+'", tecnico3="'+tecnico3+'", tecnico4="'+tecnico4+'", atestado1="'+atestado1+'",atestado2="'+atestado2+'", atestado3="'+atestado3+'", atestado4="'+atestado4+'" where unidade="Tibery" and date="'+date+'"and turno="'+turno+'"', callback);
}

modelatribuicaotibery.prototype.updateescalaparadatibery = function(unidade, date, turno, monitorizacao1, monitorizacao2, anotacao1, anotacao2, compressao1, compressao2, ventilacao1, ventilacao2, medicacao1, medicacao2, callback){
	
	this._conection.query('update atribuicaotibery set monitorizacao1="'+monitorizacao1+'", monitorizacao2="'+monitorizacao2+'", anotacao1="'+anotacao1+'", anotacao2="'+anotacao2+'", compressao1="'+compressao1+'", compressao2="'+compressao2+'", ventilacao1="'+ventilacao1+'", ventilacao2="'+ventilacao2+'", medicacao1="'+medicacao1+'",medicacao2="'+medicacao2+'" where unidade="Tibery" and date="'+date+'"and turno="'+turno+'"', callback);
}


modelatribuicaotibery.prototype.buscarescalatibery = function(valor, callback){
	var data = valor.datas;
	var turno = valor.turno;
	if(valor.unidade==1){
		var setor = "Planalto"
	}
	if(valor.unidade==2){
		var setor = "Tibery"
	}
	if(valor.unidade==3){
		var setor = "Martins"
	}
	if(valor.unidade==4){
		var setor = "Tibery"
	}
	if(valor.unidade==6){
		var setor = "Tibery"
	}
	if(valor.unidade==5){
		var setor = "Tibery"
	}

	this._conection.query('select * from atribuicaotibery where date = "'+data+'" and turno = "'+turno+'" and unidade = "Tibery"', callback);
}

modelatribuicaotibery.prototype.buscarregraescalaunicatibery = function(data, turno, unidade, callback){

	if(unidade==1){
		var setor = "Planalto"
	}
	if(unidade==2){
		var setor = "Tibery"
	}
	if(unidade==3){
		var setor = "Martins"
	}
	if(unidade==4){
		var setor = "Tibery"
	}
	if(unidade==6){
		var setor = "Tibery"
	}
	if(unidade==5){
		var setor = "Tibery"
	}

	this._conection.query('select * from atribuicaotibery where date = "'+data+'" and turno = "'+turno+'" and unidade = "Tibery"', callback);
}

module.exports = function(){
	return modelatribuicaotibery;
}