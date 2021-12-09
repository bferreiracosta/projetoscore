function modelescalasad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalasad.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariossad from funcionariossad where turno = "'+turno+'"', callback);
}

modelescalasad.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgasad (idfuncionarios,idescala) VALUES ?";
	if(turno == "Manhã"){
		var values = [
			[funcionarios[0].idfuncionariossad, escala],
			[funcionarios[1].idfuncionariossad, escala],
			[funcionarios[2].idfuncionariossad, escala],
			[funcionarios[3].idfuncionariossad, escala],
			[funcionarios[4].idfuncionariossad, escala],
			[funcionarios[5].idfuncionariossad, escala],
			[funcionarios[6].idfuncionariossad, escala],
			[funcionarios[7].idfuncionariossad, escala],
			[funcionarios[8].idfuncionariossad, escala],
			[funcionarios[9].idfuncionariossad, escala],
			[funcionarios[10].idfuncionariossad, escala],
			[funcionarios[11].idfuncionariossad, escala],
		];
	}
	if(turno == "Tarde"){
		var values = [
			[funcionarios[0].idfuncionariossad, escala],
			[funcionarios[1].idfuncionariossad, escala],
			[funcionarios[2].idfuncionariossad, escala],
			[funcionarios[3].idfuncionariossad, escala],
			[funcionarios[4].idfuncionariossad, escala],
			[funcionarios[5].idfuncionariossad, escala],
			[funcionarios[6].idfuncionariossad, escala],
			[funcionarios[7].idfuncionariossad, escala],
			[funcionarios[8].idfuncionariossad, escala],
		];
	}
	if(turno == "Horario Trabalhador"){
		var values = [
			[funcionarios[0].idfuncionariossad, escala],
			[funcionarios[1].idfuncionariossad, escala],
			[funcionarios[2].idfuncionariossad, escala],
			[funcionarios[3].idfuncionariossad, escala],
			[funcionarios[4].idfuncionariossad, escala],
			[funcionarios[5].idfuncionariossad, escala],
		];
	}
	if(turno == "Noite"){
		var values = [
			[funcionarios[0].idfuncionariossad, escala],
			[funcionarios[1].idfuncionariossad, escala],
		];
	}

		if(turno == "Multi"){
			var values = [
				[funcionarios[0].idfuncionariossad, escala],
				[funcionarios[1].idfuncionariossad, escala],
				[funcionarios[2].idfuncionariossad, escala],
				[funcionarios[3].idfuncionariossad, escala],
				[funcionarios[4].idfuncionariossad, escala],
				[funcionarios[5].idfuncionariossad, escala],
				[funcionarios[6].idfuncionariossad, escala],
				[funcionarios[7].idfuncionariossad, escala],
				[funcionarios[8].idfuncionariossad, escala],
				[funcionarios[9].idfuncionariossad, escala],
				[funcionarios[10].idfuncionariossad, escala],
				[funcionarios[11].idfuncionariossad, escala],
				[funcionarios[12].idfuncionariossad, escala],
				[funcionarios[13].idfuncionariossad, escala],
				[funcionarios[14].idfuncionariossad, escala],
				[funcionarios[15].idfuncionariossad, escala],
				[funcionarios[16].idfuncionariossad, escala],
				[funcionarios[17].idfuncionariossad, escala],
				[funcionarios[18].idfuncionariossad, escala],
				[funcionarios[19].idfuncionariossad, escala],
				[funcionarios[20].idfuncionariossad, escala],
				[funcionarios[21].idfuncionariossad, escala],
				[funcionarios[22].idfuncionariossad, escala],
				[funcionarios[23].idfuncionariossad, escala],
				[funcionarios[24].idfuncionariossad, escala],
				[funcionarios[25].idfuncionariossad, escala],
				[funcionarios[26].idfuncionariossad, escala],
				[funcionarios[27].idfuncionariossad, escala],
				[funcionarios[28].idfuncionariossad, escala],
				[funcionarios[29].idfuncionariossad, escala],
				[funcionarios[30].idfuncionariossad, escala],
				[funcionarios[31].idfuncionariossad, escala],
				[funcionarios[32].idfuncionariossad, escala],
				[funcionarios[33].idfuncionariossad, escala],
				[funcionarios[34].idfuncionariossad, escala],
				[funcionarios[35].idfuncionariossad, escala],
				[funcionarios[36].idfuncionariossad, escala],
			];
}
	this._conection.query(sql, [values], callback);	

}
modelescalasad.prototype.updateferias = function(valor, callback){

	this._conection.query('update folgasad set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacao = "'+valor.inputsituacao+'", dateiniciosituacao = "'+valor.dateinicialsituacao+'", datefinalsituacao = "'+valor.datefinalsituacao+'" where idfolgasad = "'+valor.idfuncionario+'"', callback);
}
modelescalasad.prototype.updateferiastarde = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgasad set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgasad = "'+idfuncionario+'"', callback);
}

modelescalasad.prototype.updateferiasSN1 = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgasad set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgasad = "'+idfuncionario+'"', callback);
}

modelescalasad.prototype.updateferiasSN2 = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgasad set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgasad = "'+idfuncionario+'"', callback);
}

modelescalasad.prototype.criarescalasad = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalasad set unidade="SAD", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalasad.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalasad set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="SAD" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalasad.prototype.buscarsituacaosad = function(valor, callback){

	this._conection.query('select situacao,dateiniciosituacao from folgasad where idfolgasad = "'+valor.idfinal+'"', callback )
}

modelescalasad.prototype.updateescalasad = function(valor,ferias, callback){
	console.log(ferias, new Date(ferias[0].dateiniciosituacao) > 16/11/2021)
	if( ferias[0].situacao == null || new Date(ferias[0].dateiniciosituacao) > 16/11/2021){
		if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
		if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	}
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	}
	
	
}
modelescalasad.prototype.updateescalasadSN1 = function(valor, callback){

	if(valor.colunaSN1 ==9){var folga1 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==10){var folga2 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==11){var folga3 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==12){var folga4 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==13){var folga5 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==14){var folga6 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==15){var folga7 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==16){var folga8 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==17){var folga9 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==18){var folga10 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==19){var folga11 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==20){var folga12 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==21){var folga13 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==22){var folga14 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==23){var folga15 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==24){var folga16 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==25){var folga17 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==26){var folga18 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==27){var folga19 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==28){var folga20 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==29){var folga21 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==30){var folga22 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==31){var folga23 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==32){var folga24 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==33){var folga25 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==34){var folga26 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==35){var folga27 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==36){var folga28 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==37){var folga29 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==38){var folga30 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==39){var folga31 = valor.novoConteudoSN1;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinalSN1+'"', callback);}
	
}
modelescalasad.prototype.updateescalasadSN2 = function(valor, callback){

	if(valor.colunaSN2 ==9){var folga1 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==10){var folga2 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==11){var folga3 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==12){var folga4 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==13){var folga5 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==14){var folga6 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==15){var folga7 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==16){var folga8 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==17){var folga9 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==18){var folga10 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==19){var folga11 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==20){var folga12 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==21){var folga13 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==22){var folga14 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==23){var folga15 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==24){var folga16 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==25){var folga17 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==26){var folga18 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==27){var folga19 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==28){var folga20 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==29){var folga21 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==30){var folga22 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==31){var folga23 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==32){var folga24 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==33){var folga25 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==34){var folga26 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==35){var folga27 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==36){var folga28 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==37){var folga29 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==38){var folga30 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==39){var folga31 = valor.novoConteudoSN2;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinalSN2+'"', callback);}
	
}

modelescalasad.prototype.updateescalasadmaq = function(valor, callback){

	if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinal+'"', callback);}
	
}
modelescalasad.prototype.buscarescalasad = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalasad where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "SAD"', callback);
}

modelescalasad.prototype.buscarregraescalaunicasad = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalasad where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "SAD"', callback);
}

modelescalasad.prototype.buscarescalamensalsad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "SAD" order by func.categoria = "AE", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalasad.prototype.buscarescalamensalsadtarde = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "SAD" order by func.categoria = "AE", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalasad.prototype.buscarescalamensalsadsn1 = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "SAD" order by func.categoria = "AE", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalasad.prototype.buscarescalamensalsadsn2 = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "SAD" order by func.categoria = "AE", func.categoria = "Tec", func.categoria = "Enf Jr", func.categoria = "Enf",-func.nome DESC;', callback);
}

modelescalasad.prototype.buscarescalamensalsadmaq = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "SAD" order by func.nome', callback);
}


module.exports = function(){
	return modelescalasad;
}