function modelescalasad(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalasad.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariossad from funcionariossad where equipe = "'+turno+'"', callback);
}

modelescalasad.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgasad (idfuncionarios,idescala) VALUES ?";
	if(turno == "Enfermagem"){
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

modelescalasad.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgasad set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgasad = "'+idfuncionario+'"', callback);
}


modelescalasad.prototype.criarescalasad = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalasad set unidade="Melhor em Casa", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalasad.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalasad set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Melhor em Casa" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalasad.prototype.updateescalasad = function(valor, callback){

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
modelescalasad.prototype.updateescalasadtarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinaltarde+'"', callback);}
	
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
modelescalasad.prototype.updateescalasadtrab = function(valor, callback){

	if(valor.colunatrab ==9){var folga1 = valor.novoConteudotrab;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==10){var folga2 = valor.novoConteudotrab;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==11){var folga3 = valor.novoConteudotrab;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==12){var folga4 = valor.novoConteudotrab;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==13){var folga5 = valor.novoConteudotrab;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==14){var folga6 = valor.novoConteudotrab;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==15){var folga7 = valor.novoConteudotrab;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==16){var folga8 = valor.novoConteudotrab;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==17){var folga9 = valor.novoConteudotrab;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==18){var folga10 = valor.novoConteudotrab;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==19){var folga11 = valor.novoConteudotrab;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==20){var folga12 = valor.novoConteudotrab;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==21){var folga13 = valor.novoConteudotrab;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==22){var folga14 = valor.novoConteudotrab;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==23){var folga15 = valor.novoConteudotrab;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==24){var folga16 = valor.novoConteudotrab;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==25){var folga17 = valor.novoConteudotrab;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==26){var folga18 = valor.novoConteudotrab;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==27){var folga19 = valor.novoConteudotrab;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==28){var folga20 = valor.novoConteudotrab;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==29){var folga21 = valor.novoConteudotrab;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==30){var folga22 = valor.novoConteudotrab;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==31){var folga23 = valor.novoConteudotrab;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==32){var folga24 = valor.novoConteudotrab;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==33){var folga25 = valor.novoConteudotrab;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==34){var folga26 = valor.novoConteudotrab;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==35){var folga27 = valor.novoConteudotrab;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==36){var folga28 = valor.novoConteudotrab;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==37){var folga29 = valor.novoConteudotrab;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==38){var folga30 = valor.novoConteudotrab;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	if(valor.colunatrab ==39){var folga31 = valor.novoConteudotrab;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinaltrab+'"', callback);}
	
}
modelescalasad.prototype.updateescalasadmultimanha = function(valor, callback){

	if(valor.colunamultimanha ==9){var folga1 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==10){var folga2 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==11){var folga3 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==12){var folga4 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==13){var folga5 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==14){var folga6 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==15){var folga7 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==16){var folga8 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==17){var folga9 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==18){var folga10 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==19){var folga11 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==20){var folga12 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==21){var folga13 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==22){var folga14 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==23){var folga15 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==24){var folga16 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==25){var folga17 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==26){var folga18 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==27){var folga19 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==28){var folga20 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==29){var folga21 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==30){var folga22 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==31){var folga23 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==32){var folga24 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==33){var folga25 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==34){var folga26 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==35){var folga27 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==36){var folga28 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==37){var folga29 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==38){var folga30 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	if(valor.colunamultimanha ==39){var folga31 = valor.novoConteudomultimanha;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinalmultimanha+'"', callback);}
	
}
modelescalasad.prototype.updateescalasadmultitarde = function(valor, callback){

	if(valor.colunamultitarde ==9){var folga1 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga1 = "'+folga1+'"  where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==10){var folga2 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga2 = "'+folga2+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==11){var folga3 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga3 = "'+folga3+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==12){var folga4 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga4 = "'+folga4+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==13){var folga5 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga5 = "'+folga5+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==14){var folga6 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga6 = "'+folga6+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==15){var folga7 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga7 = "'+folga7+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==16){var folga8 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga8 = "'+folga8+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==17){var folga9 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga9 = "'+folga9+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==18){var folga10 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga10 = "'+folga10+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==19){var folga11 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga11 = "'+folga11+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==20){var folga12 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga12 = "'+folga12+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==21){var folga13 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga13 = "'+folga13+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==22){var folga14 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga14 = "'+folga14+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==23){var folga15 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga15 = "'+folga15+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==24){var folga16 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga16 = "'+folga16+'" Where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==25){var folga17 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga17 = "'+folga17+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==26){var folga18 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga18 = "'+folga18+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==27){var folga19 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga19 = "'+folga19+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==28){var folga20 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga20 = "'+folga20+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==29){var folga21 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga21 = "'+folga21+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==30){var folga22 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga22 = "'+folga22+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==31){var folga23 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga23 = "'+folga23+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==32){var folga24 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga24 = "'+folga24+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==33){var folga25 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga25 = "'+folga25+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==34){var folga26 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga26 = "'+folga26+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==35){var folga27 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga27 = "'+folga27+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==36){var folga28 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga28 = "'+folga28+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==37){var folga29 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga29 = "'+folga29+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==38){var folga30 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga30 = "'+folga30+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	if(valor.colunamultitarde ==39){var folga31 = valor.novoConteudomultitarde;this._conection.query('update folgasad set folga31 = "'+folga31+'" where idfolgasad = "'+valor.idfinalmultitarde+'"', callback);}
	
}
modelescalasad.prototype.buscarregraescalaunicasad = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalasad where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalasad.prototype.buscarescalamensalsad = function(valor, callback){
	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa"', callback);
}

modelescalasad.prototype.buscarescalamensalsadmulti = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa"', callback);
}

modelescalasad.prototype.buscarescalamanhasetor1sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Enfermeiro RT"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor2sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor3sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Tarde"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor4sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "SN1"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor5sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "SN2"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor6sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Diurno"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor7sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Gerente"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor8sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Farmacêutica"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor9sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Médico"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor10sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Fisioterapeuta"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor11sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Dentista"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor12sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Administrativo"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor13sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Nutricionista"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor14sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Fonoaudióloga"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor15sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Psicólogo"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor16sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Serviço Social"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor17sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Manhã" and setor = "Auxiliar Serviços Gerais"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor18sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Tarde" and setor = "Médico"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor19sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Tarde" and setor = "Fisioterapeuta"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor20sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Tarde" and setor = "Serviço Social"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor21sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Tarde" and setor = "Terapeuta Ocupacional"', callback);
}
modelescalasad.prototype.buscarescalamanhasetor22sad = function(valor, callback){

	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa" and func.turno = "Tarde" and setor = "Psicólogo"', callback);
}
module.exports = function(){
	return modelescalasad;
}