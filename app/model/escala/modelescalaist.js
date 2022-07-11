function modelescalaist(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalaist.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariosist from funcionariosist where turno = "'+turno+'"', callback);
}

modelescalaist.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgaist (idfuncionarios,idescala) VALUES ?";
	if(turno == "Diurno"){
		var values = [
			[funcionarios[0].idfuncionariosist, escala],
			[funcionarios[1].idfuncionariosist, escala],
			[funcionarios[2].idfuncionariosist, escala],
			[funcionarios[3].idfuncionariosist, escala],
			[funcionarios[4].idfuncionariosist, escala],
			[funcionarios[5].idfuncionariosist, escala],
			[funcionarios[6].idfuncionariosist, escala],
			[funcionarios[7].idfuncionariosist, escala],
			[funcionarios[8].idfuncionariosist, escala],
			[funcionarios[9].idfuncionariosist, escala],
		];
	}

	this._conection.query(sql, [values], callback);	

}
modelescalaist.prototype.updateferiasist = function(valor, callback){

	this._conection.query('update folgaist set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacao = "'+valor.inputsituacaoferias+'", dateiniciosituacao = "'+valor.dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+valor.datefinalsituacaoferias+'" where idfolgaist = "'+valor.idfuncionario+'"', callback);
}


modelescalaist.prototype.criarescalaist = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalaist set unidade="IST", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaist.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaist set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="IST" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaist.prototype.buscarsituacaoist = function(valor, callback){

	this._conection.query('select situacao,dateiniciosituacao from folgaist where idfolgaist = "'+valor.idfinal+'"', callback )
}

modelescalaist.prototype.updateescalaist = function(valor,ferias, callback){
	if( ferias[0].situacao == null || new Date(ferias[0].dateiniciosituacao) > 16/11/2021){
		if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgaist set folga1 = "'+folga1+'"  where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgaist set folga2 = "'+folga2+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgaist set folga3 = "'+folga3+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgaist set folga4 = "'+folga4+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgaist set folga5 = "'+folga5+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgaist set folga6 = "'+folga6+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgaist set folga7 = "'+folga7+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgaist set folga8 = "'+folga8+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgaist set folga9 = "'+folga9+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgaist set folga10 = "'+folga10+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgaist set folga11 = "'+folga11+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgaist set folga12 = "'+folga12+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgaist set folga13 = "'+folga13+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgaist set folga14 = "'+folga14+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgaist set folga15 = "'+folga15+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgaist set folga16 = "'+folga16+'" Where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgaist set folga17 = "'+folga17+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgaist set folga18 = "'+folga18+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgaist set folga19 = "'+folga19+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgaist set folga20 = "'+folga20+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgaist set folga21 = "'+folga21+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgaist set folga22 = "'+folga22+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgaist set folga23 = "'+folga23+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgaist set folga24 = "'+folga24+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgaist set folga25 = "'+folga25+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgaist set folga26 = "'+folga26+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgaist set folga27 = "'+folga27+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgaist set folga28 = "'+folga28+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgaist set folga29 = "'+folga29+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgaist set folga30 = "'+folga30+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgaist set folga31 = "'+folga31+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	}
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgaist set folga1 = "'+folga1+'"  where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgaist set folga2 = "'+folga2+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgaist set folga3 = "'+folga3+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgaist set folga4 = "'+folga4+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgaist set folga5 = "'+folga5+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgaist set folga6 = "'+folga6+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgaist set folga7 = "'+folga7+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgaist set folga8 = "'+folga8+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgaist set folga9 = "'+folga9+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgaist set folga10 = "'+folga10+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgaist set folga11 = "'+folga11+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgaist set folga12 = "'+folga12+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgaist set folga13 = "'+folga13+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgaist set folga14 = "'+folga14+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgaist set folga15 = "'+folga15+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgaist set folga16 = "'+folga16+'" Where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgaist set folga17 = "'+folga17+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgaist set folga18 = "'+folga18+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgaist set folga19 = "'+folga19+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgaist set folga20 = "'+folga20+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgaist set folga21 = "'+folga21+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgaist set folga22 = "'+folga22+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgaist set folga23 = "'+folga23+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgaist set folga24 = "'+folga24+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgaist set folga25 = "'+folga25+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgaist set folga26 = "'+folga26+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgaist set folga27 = "'+folga27+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgaist set folga28 = "'+folga28+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgaist set folga29 = "'+folga29+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgaist set folga30 = "'+folga30+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgaist set folga31 = "'+folga31+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	}
	
	
}
modelescalaist.prototype.buscarescalaist = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalaist where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "IST"', callback);
}

modelescalaist.prototype.buscarregraescalaunicaist = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaist where dateano="2022" and dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "IST"', callback);
}

modelescalaist.prototype.buscarescalamensalist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "IST"', callback);
}

module.exports = function(){
	return modelescalaist;
}