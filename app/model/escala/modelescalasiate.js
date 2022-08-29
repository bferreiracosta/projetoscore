function modelescalasiate(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalasiate.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariossiate from funcionariossiate where unidade = "'+turno+'"', callback);
}

modelescalasiate.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgasiate (idfuncionarios,idescala) VALUES ?";
	if(turno == "SIATE"){
		var values = [
			[funcionarios[0].idfuncionariossiate, escala],
			[funcionarios[1].idfuncionariossiate, escala],
			[funcionarios[2].idfuncionariossiate, escala],
			[funcionarios[3].idfuncionariossiate, escala],
			[funcionarios[4].idfuncionariossiate, escala],
			[funcionarios[5].idfuncionariossiate, escala],
			[funcionarios[6].idfuncionariossiate, escala],
			[funcionarios[7].idfuncionariossiate, escala],
			[funcionarios[8].idfuncionariossiate, escala],
			[funcionarios[9].idfuncionariossiate, escala],
			[funcionarios[10].idfuncionariossiate, escala],
			[funcionarios[11].idfuncionariossiate, escala],
			[funcionarios[12].idfuncionariossiate, escala],
			[funcionarios[13].idfuncionariossiate, escala],
			[funcionarios[14].idfuncionariossiate, escala],
			[funcionarios[15].idfuncionariossiate, escala],
			[funcionarios[16].idfuncionariossiate, escala],
			[funcionarios[17].idfuncionariossiate, escala],
			[funcionarios[18].idfuncionariossiate, escala],
			[funcionarios[19].idfuncionariossiate, escala],
			[funcionarios[20].idfuncionariossiate, escala],
			[funcionarios[21].idfuncionariossiate, escala],
			[funcionarios[22].idfuncionariossiate, escala],
			[funcionarios[23].idfuncionariossiate, escala],
			[funcionarios[24].idfuncionariossiate, escala],
			[funcionarios[25].idfuncionariossiate, escala],
			[funcionarios[26].idfuncionariossiate, escala],
			[funcionarios[27].idfuncionariossiate, escala],
			[funcionarios[28].idfuncionariossiate, escala],
			[funcionarios[29].idfuncionariossiate, escala],
			[funcionarios[30].idfuncionariossiate, escala],
			[funcionarios[31].idfuncionariossiate, escala],
			[funcionarios[32].idfuncionariossiate, escala],
			[funcionarios[33].idfuncionariossiate, escala],
			[funcionarios[34].idfuncionariossiate, escala],
			[funcionarios[35].idfuncionariossiate, escala],
			[funcionarios[36].idfuncionariossiate, escala],
			[funcionarios[37].idfuncionariossiate, escala],
			[funcionarios[38].idfuncionariossiate, escala],
			[funcionarios[39].idfuncionariossiate, escala],
			[funcionarios[40].idfuncionariossiate, escala],
			[funcionarios[41].idfuncionariossiate, escala],
			[funcionarios[42].idfuncionariossiate, escala],
			[funcionarios[43].idfuncionariossiate, escala],
			[funcionarios[44].idfuncionariossiate, escala],
			[funcionarios[45].idfuncionariossiate, escala],
			[funcionarios[46].idfuncionariossiate, escala],
			[funcionarios[47].idfuncionariossiate, escala],
			[funcionarios[48].idfuncionariossiate, escala],
			[funcionarios[49].idfuncionariossiate, escala],
			[funcionarios[50].idfuncionariossiate, escala],
			[funcionarios[51].idfuncionariossiate, escala],
			[funcionarios[52].idfuncionariossiate, escala],
		];
	}
	
	this._conection.query(sql, [values], callback);	

}
modelescalasiate.prototype.updateferiasSIATE = function(valor, callback){

	this._conection.query('update folgasiate set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacaoferias = "'+valor.inputsituacaoferias+'", dateiniciosituacaoferias = "'+valor.dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+valor.datefinalsituacaoferias+'" where idfolgasiate = "'+valor.idfuncionario+'"', callback);
}

modelescalasiate.prototype.criarescalasiate = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalasiate set unidade="siate", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalasiate.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalasiate set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="siate" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalasiate.prototype.buscarsituacaosiate = function(valor, callback){

	this._conection.query('select situacaoferias,dateiniciosituacaoferias from folgasiate where idfolgasiate = "'+valor.idfinal+'"', callback )
}

modelescalasiate.prototype.updateescalasiate = function(valor,ferias, callback){
	if( ferias[0].situacaoferias == null || new Date(ferias[0].dateiniciosituacaoferias) > 16/11/2021){
		if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgasiate set folga1 = "'+folga1+'"  where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgasiate set folga2 = "'+folga2+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgasiate set folga3 = "'+folga3+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgasiate set folga4 = "'+folga4+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgasiate set folga5 = "'+folga5+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgasiate set folga6 = "'+folga6+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgasiate set folga7 = "'+folga7+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgasiate set folga8 = "'+folga8+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgasiate set folga9 = "'+folga9+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgasiate set folga10 = "'+folga10+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgasiate set folga11 = "'+folga11+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgasiate set folga12 = "'+folga12+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgasiate set folga13 = "'+folga13+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgasiate set folga14 = "'+folga14+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgasiate set folga15 = "'+folga15+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgasiate set folga16 = "'+folga16+'" Where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgasiate set folga17 = "'+folga17+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgasiate set folga18 = "'+folga18+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgasiate set folga19 = "'+folga19+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgasiate set folga20 = "'+folga20+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgasiate set folga21 = "'+folga21+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgasiate set folga22 = "'+folga22+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgasiate set folga23 = "'+folga23+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgasiate set folga24 = "'+folga24+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgasiate set folga25 = "'+folga25+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgasiate set folga26 = "'+folga26+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgasiate set folga27 = "'+folga27+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgasiate set folga28 = "'+folga28+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgasiate set folga29 = "'+folga29+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgasiate set folga30 = "'+folga30+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgasiate set folga31 = "'+folga31+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	}
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgasiate set folga1 = "'+folga1+'"  where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgasiate set folga2 = "'+folga2+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgasiate set folga3 = "'+folga3+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgasiate set folga4 = "'+folga4+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgasiate set folga5 = "'+folga5+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgasiate set folga6 = "'+folga6+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgasiate set folga7 = "'+folga7+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgasiate set folga8 = "'+folga8+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgasiate set folga9 = "'+folga9+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgasiate set folga10 = "'+folga10+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgasiate set folga11 = "'+folga11+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgasiate set folga12 = "'+folga12+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgasiate set folga13 = "'+folga13+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgasiate set folga14 = "'+folga14+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgasiate set folga15 = "'+folga15+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgasiate set folga16 = "'+folga16+'" Where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgasiate set folga17 = "'+folga17+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgasiate set folga18 = "'+folga18+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgasiate set folga19 = "'+folga19+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgasiate set folga20 = "'+folga20+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgasiate set folga21 = "'+folga21+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgasiate set folga22 = "'+folga22+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgasiate set folga23 = "'+folga23+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgasiate set folga24 = "'+folga24+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgasiate set folga25 = "'+folga25+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgasiate set folga26 = "'+folga26+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgasiate set folga27 = "'+folga27+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgasiate set folga28 = "'+folga28+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgasiate set folga29 = "'+folga29+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgasiate set folga30 = "'+folga30+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgasiate set folga31 = "'+folga31+'" where idfolgasiate = "'+valor.idfinal+'"', callback);}
	}
	
	
}

modelescalasiate.prototype.buscarescalasiate = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalasiate where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "siate"', callback);
}

modelescalasiate.prototype.buscarregraescalaunicasiate = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalasiate  where dateano="2022" and dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "siate"', callback);
}

modelescalasiate.prototype.buscarescalamensalsiate = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgasiate f inner join funcionariossiate func on f.idfuncionarios=func.idfuncionariossiate inner join escalasiate esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "siate" order by func.setor = "LM", func.setor = "SUPERVISÃO", func.setor, func.nome DESC', callback);
}

module.exports = function(){
	return modelescalasiate;
}