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
		];
	}
	if(turno == "SN1"){
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
		];
	}
	if(turno == "SN2"){
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
		];
	}

		if(turno == "Maqueiro"){
			var values = [
				[funcionarios[0].idfuncionariossad, escala],
				[funcionarios[1].idfuncionariossad, escala],
				[funcionarios[2].idfuncionariossad, escala],
				[funcionarios[3].idfuncionariossad, escala],
				[funcionarios[4].idfuncionariossad, escala],
				[funcionarios[5].idfuncionariossad, escala],
				[funcionarios[6].idfuncionariossad, escala],
				[funcionarios[7].idfuncionariossad, escala],
			];
}

		if(turno == "Sala de Gesso/Sutura/Centro Ortopedico"){
			var values = [
				[funcionarios[0].idfuncionariossad, escala],
				[funcionarios[1].idfuncionariossad, escala],
				[funcionarios[2].idfuncionariossad, escala],
				[funcionarios[3].idfuncionariossad, escala],
				[funcionarios[4].idfuncionariossad, escala],
				[funcionarios[5].idfuncionariossad, escala],

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
modelescalasad.prototype.buscarregraescalaunicasad = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalasad where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalasad.prototype.buscarescalamensalsad = function(valor, callback){
	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa"', callback);
}

modelescalasad.prototype.buscarescalamensalsadmulti = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgasad f inner join funcionariossad func on f.idfuncionarios=func.idfuncionariossad inner join escalasad esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Melhor em Casa"', callback);
}
module.exports = function(){
	return modelescalasad;
}