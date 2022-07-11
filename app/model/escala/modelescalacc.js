function modelescalacc(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacc.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscc from funcionarioscc where turno = "Diurno"', callback);
}

modelescalacc.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacc (idfuncionarios,idescala) VALUES ?";
	if(turno == "Diurno"){
		var values = [
			[funcionarios[0].idfuncionarioscc, escala],
			[funcionarios[1].idfuncionarioscc, escala],
			[funcionarios[2].idfuncionarioscc, escala],
			[funcionarios[3].idfuncionarioscc, escala],
			[funcionarios[4].idfuncionarioscc, escala],
			[funcionarios[5].idfuncionarioscc, escala],
			[funcionarios[6].idfuncionarioscc, escala],
			[funcionarios[7].idfuncionarioscc, escala],
			[funcionarios[8].idfuncionarioscc, escala],
			[funcionarios[9].idfuncionarioscc, escala],
			[funcionarios[10].idfuncionarioscc, escala],
			[funcionarios[11].idfuncionarioscc, escala],
		];
	}

	this._conection.query(sql, [values], callback);	

}
modelescalacc.prototype.updateferiascc = function(valor, callback){

	this._conection.query('update folgacc set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacaoferias = "'+valor.inputsituacaoferias+'", dateiniciosituacaoferias = "'+valor.dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+valor.datefinalsituacaoferias+'" where idfolgacc = "'+valor.idfuncionario+'"', callback);
}


modelescalacc.prototype.criarescalacc = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalacc set unidade="CC", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacc.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacc set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="CC" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacc.prototype.buscarsituacaocc = function(valor, callback){

	this._conection.query('select situacaoferias,dateiniciosituacaoferias from folgacc where idfolgacc = "'+valor.idfinal+'"', callback )
}

modelescalacc.prototype.updateescalacc = function(valor,ferias, callback){
	if( ferias[0].situacaoferias == null || new Date(ferias[0].dateiniciosituacaoferias) > 16/11/2021){
		if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacc set folga1 = "'+folga1+'"  where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacc set folga2 = "'+folga2+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacc set folga3 = "'+folga3+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacc set folga4 = "'+folga4+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacc set folga5 = "'+folga5+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacc set folga6 = "'+folga6+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacc set folga7 = "'+folga7+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacc set folga8 = "'+folga8+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacc set folga9 = "'+folga9+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacc set folga10 = "'+folga10+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacc set folga11 = "'+folga11+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacc set folga12 = "'+folga12+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacc set folga13 = "'+folga13+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacc set folga14 = "'+folga14+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacc set folga15 = "'+folga15+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacc set folga16 = "'+folga16+'" Where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacc set folga17 = "'+folga17+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacc set folga18 = "'+folga18+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacc set folga19 = "'+folga19+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacc set folga20 = "'+folga20+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacc set folga21 = "'+folga21+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacc set folga22 = "'+folga22+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacc set folga23 = "'+folga23+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacc set folga24 = "'+folga24+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacc set folga25 = "'+folga25+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacc set folga26 = "'+folga26+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacc set folga27 = "'+folga27+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacc set folga28 = "'+folga28+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacc set folga29 = "'+folga29+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacc set folga30 = "'+folga30+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacc set folga31 = "'+folga31+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	}
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgacc set folga1 = "'+folga1+'"  where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgacc set folga2 = "'+folga2+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgacc set folga3 = "'+folga3+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgacc set folga4 = "'+folga4+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgacc set folga5 = "'+folga5+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgacc set folga6 = "'+folga6+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgacc set folga7 = "'+folga7+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgacc set folga8 = "'+folga8+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgacc set folga9 = "'+folga9+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgacc set folga10 = "'+folga10+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgacc set folga11 = "'+folga11+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgacc set folga12 = "'+folga12+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgacc set folga13 = "'+folga13+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgacc set folga14 = "'+folga14+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgacc set folga15 = "'+folga15+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgacc set folga16 = "'+folga16+'" Where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgacc set folga17 = "'+folga17+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgacc set folga18 = "'+folga18+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgacc set folga19 = "'+folga19+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgacc set folga20 = "'+folga20+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgacc set folga21 = "'+folga21+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgacc set folga22 = "'+folga22+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgacc set folga23 = "'+folga23+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgacc set folga24 = "'+folga24+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgacc set folga25 = "'+folga25+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgacc set folga26 = "'+folga26+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgacc set folga27 = "'+folga27+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgacc set folga28 = "'+folga28+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgacc set folga29 = "'+folga29+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgacc set folga30 = "'+folga30+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgacc set folga31 = "'+folga31+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	}
	
	
}
modelescalacc.prototype.buscarescalacc = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalacc where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "CC"', callback);
}

modelescalacc.prototype.buscarregraescalaunicacc = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacc where dateano="2022" and dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "CC"', callback);
}

modelescalacc.prototype.buscarescalamensalcc = function(valor, callback){

	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "CC"', callback);
}

module.exports = function(){
	return modelescalacc;
}