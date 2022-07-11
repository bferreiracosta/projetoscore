function modelescalaplanalto(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalaplanalto.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariosplanalto from funcionariosplanalto where turno = "'+turno+'"', callback);
}

modelescalaplanalto.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgaplanalto (idfuncionarios,idescala) VALUES ?";
	if(turno == "Manhã"){
		var values = [
			[funcionarios[0].idfuncionariosplanalto, escala],
			[funcionarios[1].idfuncionariosplanalto, escala],
			[funcionarios[2].idfuncionariosplanalto, escala],
			[funcionarios[3].idfuncionariosplanalto, escala],
			[funcionarios[4].idfuncionariosplanalto, escala],
			[funcionarios[5].idfuncionariosplanalto, escala],
			[funcionarios[6].idfuncionariosplanalto, escala],
			[funcionarios[7].idfuncionariosplanalto, escala],
			[funcionarios[8].idfuncionariosplanalto, escala],
			[funcionarios[9].idfuncionariosplanalto, escala],
			[funcionarios[10].idfuncionariosplanalto, escala],
			[funcionarios[11].idfuncionariosplanalto, escala],
			[funcionarios[12].idfuncionariosplanalto, escala],
			[funcionarios[13].idfuncionariosplanalto, escala],
			[funcionarios[14].idfuncionariosplanalto, escala],
			[funcionarios[15].idfuncionariosplanalto, escala],
			[funcionarios[16].idfuncionariosplanalto, escala],
			[funcionarios[17].idfuncionariosplanalto, escala],
			[funcionarios[18].idfuncionariosplanalto, escala],
			[funcionarios[19].idfuncionariosplanalto, escala],
			[funcionarios[20].idfuncionariosplanalto, escala],
			[funcionarios[21].idfuncionariosplanalto, escala],
			[funcionarios[22].idfuncionariosplanalto, escala],
			[funcionarios[23].idfuncionariosplanalto, escala],
			[funcionarios[24].idfuncionariosplanalto, escala],
			[funcionarios[25].idfuncionariosplanalto, escala],
			[funcionarios[26].idfuncionariosplanalto, escala],
			[funcionarios[27].idfuncionariosplanalto, escala],
			[funcionarios[28].idfuncionariosplanalto, escala],
			[funcionarios[29].idfuncionariosplanalto, escala],
			[funcionarios[30].idfuncionariosplanalto, escala],
			[funcionarios[31].idfuncionariosplanalto, escala],
		];
	}
	if(turno == "Tarde"){
		var values = [
			[funcionarios[0].idfuncionariosplanalto, escala],
			[funcionarios[1].idfuncionariosplanalto, escala],
			[funcionarios[2].idfuncionariosplanalto, escala],
			[funcionarios[3].idfuncionariosplanalto, escala],
			[funcionarios[4].idfuncionariosplanalto, escala],
			[funcionarios[5].idfuncionariosplanalto, escala],
			[funcionarios[6].idfuncionariosplanalto, escala],
			[funcionarios[7].idfuncionariosplanalto, escala],
			[funcionarios[8].idfuncionariosplanalto, escala],
			[funcionarios[9].idfuncionariosplanalto, escala],
			[funcionarios[10].idfuncionariosplanalto, escala],
			[funcionarios[11].idfuncionariosplanalto, escala],
			[funcionarios[12].idfuncionariosplanalto, escala],
			[funcionarios[13].idfuncionariosplanalto, escala],
			[funcionarios[14].idfuncionariosplanalto, escala],
			[funcionarios[15].idfuncionariosplanalto, escala],
			[funcionarios[16].idfuncionariosplanalto, escala],
			[funcionarios[17].idfuncionariosplanalto, escala],
			[funcionarios[18].idfuncionariosplanalto, escala],
			[funcionarios[19].idfuncionariosplanalto, escala],
			[funcionarios[20].idfuncionariosplanalto, escala],
			[funcionarios[21].idfuncionariosplanalto, escala],
			[funcionarios[22].idfuncionariosplanalto, escala],
			[funcionarios[23].idfuncionariosplanalto, escala],
			[funcionarios[24].idfuncionariosplanalto, escala],
			[funcionarios[25].idfuncionariosplanalto, escala],
			[funcionarios[26].idfuncionariosplanalto, escala],
			[funcionarios[27].idfuncionariosplanalto, escala],
			[funcionarios[28].idfuncionariosplanalto, escala],
			[funcionarios[29].idfuncionariosplanalto, escala],
		];
	}
	if(turno == "SN1"){
		var values = [
			[funcionarios[0].idfuncionariosplanalto, escala],
			[funcionarios[1].idfuncionariosplanalto, escala],
			[funcionarios[2].idfuncionariosplanalto, escala],
			[funcionarios[3].idfuncionariosplanalto, escala],
			[funcionarios[4].idfuncionariosplanalto, escala],
			[funcionarios[5].idfuncionariosplanalto, escala],
			[funcionarios[6].idfuncionariosplanalto, escala],
			[funcionarios[7].idfuncionariosplanalto, escala],
			[funcionarios[8].idfuncionariosplanalto, escala],
			[funcionarios[9].idfuncionariosplanalto, escala],
			[funcionarios[10].idfuncionariosplanalto, escala],
			[funcionarios[11].idfuncionariosplanalto, escala],
			[funcionarios[12].idfuncionariosplanalto, escala],
			[funcionarios[13].idfuncionariosplanalto, escala],
			[funcionarios[14].idfuncionariosplanalto, escala],
			[funcionarios[15].idfuncionariosplanalto, escala],
			[funcionarios[16].idfuncionariosplanalto, escala],
			[funcionarios[17].idfuncionariosplanalto, escala],
			[funcionarios[18].idfuncionariosplanalto, escala],
			[funcionarios[19].idfuncionariosplanalto, escala],
			[funcionarios[20].idfuncionariosplanalto, escala],
			[funcionarios[21].idfuncionariosplanalto, escala],
			[funcionarios[22].idfuncionariosplanalto, escala],
			[funcionarios[23].idfuncionariosplanalto, escala],
			[funcionarios[24].idfuncionariosplanalto, escala],
			[funcionarios[25].idfuncionariosplanalto, escala],
			[funcionarios[26].idfuncionariosplanalto, escala],
			[funcionarios[27].idfuncionariosplanalto, escala],
			[funcionarios[28].idfuncionariosplanalto, escala],
		];
	}
	if(turno == "SN2"){
		var values = [
			[funcionarios[0].idfuncionariosplanalto, escala],
			[funcionarios[1].idfuncionariosplanalto, escala],
			[funcionarios[2].idfuncionariosplanalto, escala],
			[funcionarios[3].idfuncionariosplanalto, escala],
			[funcionarios[4].idfuncionariosplanalto, escala],
			[funcionarios[5].idfuncionariosplanalto, escala],
			[funcionarios[6].idfuncionariosplanalto, escala],
			[funcionarios[7].idfuncionariosplanalto, escala],
			[funcionarios[8].idfuncionariosplanalto, escala],
			[funcionarios[9].idfuncionariosplanalto, escala],
			[funcionarios[10].idfuncionariosplanalto, escala],
			[funcionarios[11].idfuncionariosplanalto, escala],
			[funcionarios[12].idfuncionariosplanalto, escala],
			[funcionarios[13].idfuncionariosplanalto, escala],
			[funcionarios[14].idfuncionariosplanalto, escala],
			[funcionarios[15].idfuncionariosplanalto, escala],
			[funcionarios[16].idfuncionariosplanalto, escala],
			[funcionarios[17].idfuncionariosplanalto, escala],
			[funcionarios[18].idfuncionariosplanalto, escala],
			[funcionarios[19].idfuncionariosplanalto, escala],
			[funcionarios[20].idfuncionariosplanalto, escala],
			[funcionarios[21].idfuncionariosplanalto, escala],
			[funcionarios[22].idfuncionariosplanalto, escala],
			[funcionarios[23].idfuncionariosplanalto, escala],
			[funcionarios[24].idfuncionariosplanalto, escala],
			[funcionarios[25].idfuncionariosplanalto, escala],
			[funcionarios[26].idfuncionariosplanalto, escala],
			[funcionarios[27].idfuncionariosplanalto, escala],
		
		];
	}

		if(turno == "Maqueiro"){
			var values = [
				[funcionarios[0].idfuncionariosplanalto, escala],
				[funcionarios[1].idfuncionariosplanalto, escala],
				[funcionarios[2].idfuncionariosplanalto, escala],
				[funcionarios[3].idfuncionariosplanalto, escala],
				[funcionarios[4].idfuncionariosplanalto, escala],
				[funcionarios[5].idfuncionariosplanalto, escala],
				[funcionarios[6].idfuncionariosplanalto, escala],
				[funcionarios[7].idfuncionariosplanalto, escala],
			];
}
	this._conection.query(sql, [values], callback);	

}
modelescalaplanalto.prototype.updateferias = function(valor, callback){

	this._conection.query('update folgaplanalto set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacaoferias = "'+valor.inputsituacaoferias+'", dateiniciosituacaoferias = "'+valor.dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+valor.datefinalsituacaoferias+'" where idfolgaplanalto = "'+valor.idfuncionario+'"', callback);
}
modelescalaplanalto.prototype.updateferiastarde = function(idfuncionario, inputsituacaoferias, dateinicialsituacaoferias, datefinalsituacaoferias, callback){

	this._conection.query('update folgaplanalto set situacaoferias = "'+inputsituacaoferias+'", dateiniciosituacaoferias = "'+dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+datefinalsituacaoferias+'" where idfolgaplanalto = "'+idfuncionario+'"', callback);
}

modelescalaplanalto.prototype.updateferiasSN1 = function(idfuncionario, inputsituacaoferias, dateinicialsituacaoferias, datefinalsituacaoferias, callback){

	this._conection.query('update folgaplanalto set situacaoferias = "'+inputsituacaoferias+'", dateiniciosituacaoferias = "'+dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+datefinalsituacaoferias+'" where idfolgaplanalto = "'+idfuncionario+'"', callback);
}

modelescalaplanalto.prototype.updateferiasSN2 = function(idfuncionario, inputsituacaoferias, dateinicialsituacaoferias, datefinalsituacaoferias, callback){

	this._conection.query('update folgaplanalto set situacaoferias = "'+inputsituacaoferias+'", dateiniciosituacaoferias = "'+dateinicialsituacaoferias+'", datefinalsituacaoferias = "'+datefinalsituacaoferias+'" where idfolgaplanalto = "'+idfuncionario+'"', callback);
}

modelescalaplanalto.prototype.criarescalaplanalto = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalaplanalto set unidade="Planalto", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaplanalto.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaplanalto set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Planalto" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaplanalto.prototype.buscarsituacaoplanalto = function(valor, callback){

	this._conection.query('select situacaoferias,dateiniciosituacaoferias from folgaplanalto where idfolgaplanalto = "'+valor.idfinal+'"', callback )
}

modelescalaplanalto.prototype.updateescalaplanalto = function(valor,ferias, callback){
	console.log(ferias, new Date(ferias[0].dateiniciosituacaoferias) > 16/11/2021)
	if( ferias[0].situacaoferias == null || new Date(ferias[0].dateiniciosituacaoferias) > 16/11/2021){
		if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga1 = "'+folga1+'"  where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga2 = "'+folga2+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga3 = "'+folga3+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga4 = "'+folga4+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga5 = "'+folga5+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga6 = "'+folga6+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga7 = "'+folga7+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga8 = "'+folga8+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga9 = "'+folga9+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga10 = "'+folga10+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga11 = "'+folga11+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga12 = "'+folga12+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga13 = "'+folga13+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga14 = "'+folga14+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga15 = "'+folga15+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga16 = "'+folga16+'" Where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga17 = "'+folga17+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga18 = "'+folga18+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga19 = "'+folga19+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga20 = "'+folga20+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga21 = "'+folga21+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga22 = "'+folga22+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga23 = "'+folga23+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga24 = "'+folga24+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga25 = "'+folga25+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga26 = "'+folga26+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga27 = "'+folga27+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga28 = "'+folga28+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga29 = "'+folga29+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga30 = "'+folga30+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga31 = "'+folga31+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	}
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga1 = "'+folga1+'"  where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga2 = "'+folga2+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga3 = "'+folga3+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga4 = "'+folga4+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga5 = "'+folga5+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga6 = "'+folga6+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga7 = "'+folga7+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga8 = "'+folga8+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga9 = "'+folga9+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga10 = "'+folga10+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga11 = "'+folga11+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga12 = "'+folga12+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga13 = "'+folga13+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga14 = "'+folga14+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga15 = "'+folga15+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga16 = "'+folga16+'" Where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga17 = "'+folga17+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga18 = "'+folga18+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga19 = "'+folga19+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga20 = "'+folga20+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga21 = "'+folga21+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga22 = "'+folga22+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga23 = "'+folga23+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga24 = "'+folga24+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga25 = "'+folga25+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga26 = "'+folga26+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga27 = "'+folga27+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga28 = "'+folga28+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga29 = "'+folga29+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga30 = "'+folga30+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga31 = "'+folga31+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	}
	
	
}
modelescalaplanalto.prototype.updateescalaplanaltoSN1 = function(valor, callback){

	if(valor.colunaSN1 ==9){var folga1 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga1 = "'+folga1+'"  where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==10){var folga2 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga2 = "'+folga2+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==11){var folga3 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga3 = "'+folga3+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==12){var folga4 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga4 = "'+folga4+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==13){var folga5 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga5 = "'+folga5+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==14){var folga6 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga6 = "'+folga6+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==15){var folga7 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga7 = "'+folga7+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==16){var folga8 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga8 = "'+folga8+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==17){var folga9 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga9 = "'+folga9+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==18){var folga10 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga10 = "'+folga10+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==19){var folga11 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga11 = "'+folga11+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==20){var folga12 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga12 = "'+folga12+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==21){var folga13 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga13 = "'+folga13+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==22){var folga14 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga14 = "'+folga14+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==23){var folga15 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga15 = "'+folga15+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==24){var folga16 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga16 = "'+folga16+'" Where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==25){var folga17 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga17 = "'+folga17+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==26){var folga18 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga18 = "'+folga18+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==27){var folga19 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga19 = "'+folga19+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==28){var folga20 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga20 = "'+folga20+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==29){var folga21 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga21 = "'+folga21+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==30){var folga22 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga22 = "'+folga22+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==31){var folga23 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga23 = "'+folga23+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==32){var folga24 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga24 = "'+folga24+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==33){var folga25 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga25 = "'+folga25+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==34){var folga26 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga26 = "'+folga26+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==35){var folga27 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga27 = "'+folga27+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==36){var folga28 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga28 = "'+folga28+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==37){var folga29 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga29 = "'+folga29+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==38){var folga30 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga30 = "'+folga30+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==39){var folga31 = valor.novoConteudoSN1;this._conection.query('update folgaplanalto set folga31 = "'+folga31+'" where idfolgaplanalto = "'+valor.idfinalSN1+'"', callback);}
	
}
modelescalaplanalto.prototype.updateescalaplanaltoSN2 = function(valor, callback){

	if(valor.colunaSN2 ==9){var folga1 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga1 = "'+folga1+'"  where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==10){var folga2 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga2 = "'+folga2+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==11){var folga3 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga3 = "'+folga3+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==12){var folga4 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga4 = "'+folga4+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==13){var folga5 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga5 = "'+folga5+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==14){var folga6 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga6 = "'+folga6+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==15){var folga7 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga7 = "'+folga7+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==16){var folga8 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga8 = "'+folga8+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==17){var folga9 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga9 = "'+folga9+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==18){var folga10 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga10 = "'+folga10+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==19){var folga11 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga11 = "'+folga11+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==20){var folga12 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga12 = "'+folga12+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==21){var folga13 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga13 = "'+folga13+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==22){var folga14 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga14 = "'+folga14+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==23){var folga15 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga15 = "'+folga15+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==24){var folga16 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga16 = "'+folga16+'" Where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==25){var folga17 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga17 = "'+folga17+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==26){var folga18 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga18 = "'+folga18+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==27){var folga19 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga19 = "'+folga19+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==28){var folga20 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga20 = "'+folga20+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==29){var folga21 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga21 = "'+folga21+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==30){var folga22 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga22 = "'+folga22+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==31){var folga23 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga23 = "'+folga23+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==32){var folga24 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga24 = "'+folga24+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==33){var folga25 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga25 = "'+folga25+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==34){var folga26 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga26 = "'+folga26+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==35){var folga27 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga27 = "'+folga27+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==36){var folga28 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga28 = "'+folga28+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==37){var folga29 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga29 = "'+folga29+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==38){var folga30 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga30 = "'+folga30+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==39){var folga31 = valor.novoConteudoSN2;this._conection.query('update folgaplanalto set folga31 = "'+folga31+'" where idfolgaplanalto = "'+valor.idfinalSN2+'"', callback);}
	
}

modelescalaplanalto.prototype.updateescalaplanaltomaq = function(valor, callback){

	if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga1 = "'+folga1+'"  where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga2 = "'+folga2+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga3 = "'+folga3+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga4 = "'+folga4+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga5 = "'+folga5+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga6 = "'+folga6+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga7 = "'+folga7+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga8 = "'+folga8+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga9 = "'+folga9+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga10 = "'+folga10+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga11 = "'+folga11+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga12 = "'+folga12+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga13 = "'+folga13+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga14 = "'+folga14+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga15 = "'+folga15+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga16 = "'+folga16+'" Where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga17 = "'+folga17+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga18 = "'+folga18+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga19 = "'+folga19+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga20 = "'+folga20+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga21 = "'+folga21+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga22 = "'+folga22+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga23 = "'+folga23+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga24 = "'+folga24+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga25 = "'+folga25+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga26 = "'+folga26+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga27 = "'+folga27+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga28 = "'+folga28+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga29 = "'+folga29+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga30 = "'+folga30+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgaplanalto set folga31 = "'+folga31+'" where idfolgaplanalto = "'+valor.idfinal+'"', callback);}
	
}
modelescalaplanalto.prototype.buscarescalaplanalto = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalaplanalto where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "Planalto"', callback);
}

modelescalaplanalto.prototype.buscarregraescalaunicaplanalto = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaplanalto  where dateano="2022" and dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Planalto"', callback);
}

modelescalaplanalto.prototype.buscarescalamensalplanalto = function(valor, callback){

	this._conection.query('select * from folgaplanalto f inner join funcionariosplanalto func on f.idfuncionarios=func.idfuncionariosplanalto inner join escalaplanalto esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Planalto" order by func.categoria = "AUX", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalaplanalto.prototype.buscarescalamensalplanaltotarde = function(valor, callback){

	this._conection.query('select * from folgaplanalto f inner join funcionariosplanalto func on f.idfuncionarios=func.idfuncionariosplanalto inner join escalaplanalto esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Planalto" order by func.categoria = "AUX", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalaplanalto.prototype.buscarescalamensalplanaltosn1 = function(valor, callback){

	this._conection.query('select * from folgaplanalto f inner join funcionariosplanalto func on f.idfuncionarios=func.idfuncionariosplanalto inner join escalaplanalto esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Planalto" order by func.categoria = "AUX", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalaplanalto.prototype.buscarescalamensalplanaltosn2 = function(valor, callback){

	this._conection.query('select * from folgaplanalto f inner join funcionariosplanalto func on f.idfuncionarios=func.idfuncionariosplanalto inner join escalaplanalto esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Planalto" order by func.categoria = "AUX", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalaplanalto.prototype.buscarescalamensalplanaltomaq = function(valor, callback){

	this._conection.query('select * from folgaplanalto f inner join funcionariosplanalto func on f.idfuncionarios=func.idfuncionariosplanalto inner join escalaplanalto esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Planalto" order by func.nome', callback);
}


module.exports = function(){
	return modelescalaplanalto;
}