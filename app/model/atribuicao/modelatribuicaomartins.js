function modelatribuicaomartins(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelatribuicaomartins.prototype.adicionarescalamartins = function(unidade, date, turno, enf1, tecenf1,  enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
	,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15, tecenf16, tecenf17,tecenf18, tecenf19, tecenf20,tecenf21,tecenf22,tecenf23,tecenf24, tecenf25, enf2, enf3, enf4, enf5, enf6 ,enf7 ,enf8 , enfcme,teccme, callback){
	
	this._conection.query('insert into atribuicaomartins set unidade="'+unidade+'", date="'+date+'", turno="'+turno+'", enf1="'+enf1+'", tecenf1="'+tecenf1+'", enfpreposto="'+enfpreposto+'", tecenf2="'+tecenf2+'", tecenf3="'+tecenf3+'", tecenf4="'+tecenf4+'", tecenf5="'+tecenf5+'",tecenf6="'+tecenf6+'", tecenf7="'+tecenf7+'", tecenf8="'+tecenf8+'", tecenf9="'+tecenf9+'", tecenf10="'+tecenf10+'", tecenf11="'+tecenf11+'", tecenf12="'+tecenf12+'", tecenf13="'+tecenf13+'", tecenf14="'+tecenf14+'", tecenf15="'+tecenf15+'", tecenf16="'+tecenf16+'", tecenf17="'+tecenf17+'",tecenf18="'+tecenf18+'", tecenf19="'+tecenf19+'", tecenf20="'+tecenf20+'",tecenf21="'+tecenf21+'",tecenf22="'+tecenf22+'",tecenf23="'+tecenf23+'",tecenf24="'+tecenf24+'",tecenf25="'+tecenf25+'", enf2="'+enf2+'", enf3="'+enf3+'", enf4="'+enf4+'", enf5="'+enf5+'", enf6="'+enf6+'" ,enf7="'+enf7+'" ,enf8="'+enf8+'" , enfcme="'+enfcme+'", teccme="'+teccme+'"', callback);
}

modelatribuicaomartins.prototype.updateescalamartins = function(unidade, date, turno, enf1, tecenf1,  enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
	,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15, tecenf16, tecenf17,tecenf18, tecenf19, tecenf20,tecenf21,tecenf22,tecenf23,tecenf24, tecenf25, enf2, enf3, enf4, enf5, enf6 ,enf7 ,enf8 , enfcme,teccme, callback){
	
	this._conection.query('update atribuicaomartins set enf1="'+enf1+'", tecenf1="'+tecenf1+'",  enfpreposto="'+enfpreposto+'", tecenf2="'+tecenf2+'", tecenf3="'+tecenf3+'", tecenf4="'+tecenf4+'", tecenf5="'+tecenf5+'",tecenf6="'+tecenf6+'", tecenf7="'+tecenf7+'", tecenf8="'+tecenf8+'", tecenf9="'+tecenf9+'", tecenf10="'+tecenf10+'", tecenf11="'+tecenf11+'", tecenf12="'+tecenf12+'", tecenf13="'+tecenf13+'", tecenf14="'+tecenf14+'", tecenf15="'+tecenf15+'", tecenf16="'+tecenf16+'", tecenf17="'+tecenf17+'",tecenf18="'+tecenf18+'", tecenf19="'+tecenf19+'", tecenf20="'+tecenf20+'",tecenf21="'+tecenf21+'",tecenf22="'+tecenf22+'",tecenf23="'+tecenf23+'",tecenf24="'+tecenf24+'",tecenf25="'+tecenf25+'", enf2="'+enf2+'", enf3="'+enf3+'", enf4="'+enf4+'", enf5="'+enf5+'", enf6="'+enf6+'" ,enf7="'+enf7+'" ,enf8="'+enf8+'", enfcme="'+enfcme+'", teccme="'+teccme+'" where unidade="'+unidade+'" and date="'+date+'"and turno="'+turno+'"', callback);
}

modelatribuicaomartins.prototype.adicionandoescalafolga = function(unidade, date, turno, enfermeiro1, enfermeiro2, enfermeiro3, enfermeiro4, tecnico1, tecnico2, tecnico3, tecnico4, atestado1,atestado2, atestado3, atestado4, callback){
	
	this._conection.query('update atribuicaomartins set enfermeiro1="'+enfermeiro1+'", enfermeiro2="'+enfermeiro2+'", enfermeiro3="'+enfermeiro3+'", enfermeiro4="'+enfermeiro4+'", tecnico1="'+tecnico1+'", tecnico2="'+tecnico2+'", tecnico3="'+tecnico3+'", tecnico4="'+tecnico4+'", atestado1="'+atestado1+'",atestado2="'+atestado2+'", atestado3="'+atestado3+'", atestado4="'+atestado4+'" where unidade="'+unidade+'" and date="'+date+'"and turno="'+turno+'"', callback);
}

modelatribuicaomartins.prototype.updateescalaparadamartins = function(unidade, date, turno, monitorizacao1, monitorizacao2, anotacao1, anotacao2, compressao1, compressao2, ventilacao1, ventilacao2, medicacao1, medicacao2, callback){
	
	this._conection.query('update atribuicaomartins set monitorizacao1="'+monitorizacao1+'", monitorizacao2="'+monitorizacao2+'", anotacao1="'+anotacao1+'", anotacao2="'+anotacao2+'", compressao1="'+compressao1+'", compressao2="'+compressao2+'", ventilacao1="'+ventilacao1+'", ventilacao2="'+ventilacao2+'", medicacao1="'+medicacao1+'",medicacao2="'+medicacao2+'" where unidade="'+unidade+'" and date="'+date+'"and turno="'+turno+'"', callback);
}


modelatribuicaomartins.prototype.buscarescalamartins = function(valor, callback){
	var data = valor.datas;
	var turno = valor.turno;
	if(valor.unidade=1){
		var unidade = "martins"
	}

	this._conection.query('select * from atribuicaomartins where date = "'+data+'" and turno = "'+turno+'" and unidade = "'+unidade+'"', callback);
}

modelatribuicaomartins.prototype.buscarregraescalaunicamartins = function(data, turno, unidade, callback){

	if(unidade=1){
		var setor = "martins"
	}

	this._conection.query('select * from atribuicaomartins where date = "'+data+'" and turno = "'+turno+'" and unidade = "'+setor+'"', callback);
}

module.exports = function(){
	return modelatribuicaomartins;
}