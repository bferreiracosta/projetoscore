function modelescalacer(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacer.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscer from funcionarioscer where turno = "'+turno+'"', callback);
}

modelescalacer.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacer (idfuncionarios,idescala) VALUES ?";
	if(turno == "Diurno"){
		var values = [
			[funcionarios[0].idfuncionarioscer, escala],
			[funcionarios[1].idfuncionarioscer, escala],
			[funcionarios[2].idfuncionarioscer, escala],
			[funcionarios[3].idfuncionarioscer, escala],
			[funcionarios[4].idfuncionarioscer, escala],
			[funcionarios[5].idfuncionarioscer, escala],
			[funcionarios[6].idfuncionarioscer, escala],
			[funcionarios[7].idfuncionarioscer, escala],
			[funcionarios[8].idfuncionarioscer, escala],
		];
	}

	this._conection.query(sql, [values], callback);	

}
modelescalacer.prototype.updateferiascer = function(valor, callback){

	this._conection.query('update folgacer set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacao = "'+valor.inputsituacao+'", dateiniciosituacao = "'+valor.dateinicialsituacao+'", datefinalsituacao = "'+valor.datefinalsituacao+'" where idfolgacer = "'+valor.idfuncionario+'"', callback);
}


modelescalacer.prototype.criarescalacer = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalacer set unidade="CER", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacer.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacer set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="CER" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacer.prototype.buscarsituacaocer = function(valor, callback){

	this._conection.query('select situacao,dateiniciosituacao from folgacer where idfolgacer = "'+valor.idfinal+'"', callback )
}

modelescalacer.prototype.updateescalacer = function(valor,ferias, callback){
	if( ferias[0].situacao == null || new Date(ferias[0].dateiniciosituacao) > 16/11/2021){
		if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacer set folga1 = "'+folga1+'"  where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacer set folga2 = "'+folga2+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacer set folga3 = "'+folga3+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacer set folga4 = "'+folga4+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacer set folga5 = "'+folga5+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacer set folga6 = "'+folga6+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacer set folga7 = "'+folga7+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacer set folga8 = "'+folga8+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacer set folga9 = "'+folga9+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacer set folga10 = "'+folga10+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacer set folga11 = "'+folga11+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacer set folga12 = "'+folga12+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacer set folga13 = "'+folga13+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacer set folga14 = "'+folga14+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacer set folga15 = "'+folga15+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacer set folga16 = "'+folga16+'" Where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacer set folga17 = "'+folga17+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacer set folga18 = "'+folga18+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacer set folga19 = "'+folga19+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacer set folga20 = "'+folga20+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacer set folga21 = "'+folga21+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacer set folga22 = "'+folga22+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacer set folga23 = "'+folga23+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacer set folga24 = "'+folga24+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacer set folga25 = "'+folga25+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacer set folga26 = "'+folga26+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacer set folga27 = "'+folga27+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacer set folga28 = "'+folga28+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacer set folga29 = "'+folga29+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacer set folga30 = "'+folga30+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacer set folga31 = "'+folga31+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	}
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgacer set folga1 = "'+folga1+'"  where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgacer set folga2 = "'+folga2+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgacer set folga3 = "'+folga3+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgacer set folga4 = "'+folga4+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgacer set folga5 = "'+folga5+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgacer set folga6 = "'+folga6+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgacer set folga7 = "'+folga7+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgacer set folga8 = "'+folga8+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgacer set folga9 = "'+folga9+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgacer set folga10 = "'+folga10+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgacer set folga11 = "'+folga11+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgacer set folga12 = "'+folga12+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgacer set folga13 = "'+folga13+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgacer set folga14 = "'+folga14+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgacer set folga15 = "'+folga15+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgacer set folga16 = "'+folga16+'" Where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgacer set folga17 = "'+folga17+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgacer set folga18 = "'+folga18+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgacer set folga19 = "'+folga19+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgacer set folga20 = "'+folga20+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgacer set folga21 = "'+folga21+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgacer set folga22 = "'+folga22+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgacer set folga23 = "'+folga23+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgacer set folga24 = "'+folga24+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgacer set folga25 = "'+folga25+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgacer set folga26 = "'+folga26+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgacer set folga27 = "'+folga27+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgacer set folga28 = "'+folga28+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgacer set folga29 = "'+folga29+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgacer set folga30 = "'+folga30+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgacer set folga31 = "'+folga31+'" where idfolgacer = "'+valor.idfinal+'"', callback);}
	}
	
	
}
modelescalacer.prototype.buscarescalacer = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalacer where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "CER"', callback);
}

modelescalacer.prototype.buscarregraescalaunicacer = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacer where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "CER"', callback);
}

modelescalacer.prototype.buscarescalamensalcer = function(valor, callback){

	this._conection.query('select * from folgacer f inner join funcionarioscer func on f.idfuncionarios=func.idfuncionarioscer inner join escalacer esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "CER"', callback);
}

module.exports = function(){
	return modelescalacer;
}