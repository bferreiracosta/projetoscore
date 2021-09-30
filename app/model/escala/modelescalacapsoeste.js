function modelescalacapsoeste(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacapsoeste.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscapsoeste from funcionarioscapsoeste where turno = "'+turno+'"', callback);
}

modelescalacapsoeste.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacapsoeste (idfuncionarios,idescala) VALUES ?";
	if(turno == "Manhã"){
		var values = [
			[funcionarios[0].idfuncionarioscapsoeste, escala],
			[funcionarios[1].idfuncionarioscapsoeste, escala],
			[funcionarios[2].idfuncionarioscapsoeste, escala],
			[funcionarios[3].idfuncionarioscapsoeste, escala],
			[funcionarios[4].idfuncionarioscapsoeste, escala],
			[funcionarios[5].idfuncionarioscapsoeste, escala],
			[funcionarios[6].idfuncionarioscapsoeste, escala],
			[funcionarios[7].idfuncionarioscapsoeste, escala],
			[funcionarios[8].idfuncionarioscapsoeste, escala],
			[funcionarios[9].idfuncionarioscapsoeste, escala],
			[funcionarios[10].idfuncionarioscapsoeste, escala],
			[funcionarios[11].idfuncionarioscapsoeste, escala],
			[funcionarios[12].idfuncionarioscapsoeste, escala],
			[funcionarios[13].idfuncionarioscapsoeste, escala],
			[funcionarios[14].idfuncionarioscapsoeste, escala],
			[funcionarios[15].idfuncionarioscapsoeste, escala],
			[funcionarios[16].idfuncionarioscapsoeste, escala],
			[funcionarios[17].idfuncionarioscapsoeste, escala],
			[funcionarios[18].idfuncionarioscapsoeste, escala],
			[funcionarios[19].idfuncionarioscapsoeste, escala],
			[funcionarios[20].idfuncionarioscapsoeste, escala],
			[funcionarios[21].idfuncionarioscapsoeste, escala],
			[funcionarios[22].idfuncionarioscapsoeste, escala],
			[funcionarios[23].idfuncionarioscapsoeste, escala],
			[funcionarios[24].idfuncionarioscapsoeste, escala],
			[funcionarios[25].idfuncionarioscapsoeste, escala],
			[funcionarios[26].idfuncionarioscapsoeste, escala],
			[funcionarios[27].idfuncionarioscapsoeste, escala],
			[funcionarios[28].idfuncionarioscapsoeste, escala],
			[funcionarios[29].idfuncionarioscapsoeste, escala],
			[funcionarios[30].idfuncionarioscapsoeste, escala],
			[funcionarios[31].idfuncionarioscapsoeste, escala],
			[funcionarios[32].idfuncionarioscapsoeste, escala],
			[funcionarios[33].idfuncionarioscapsoeste, escala],
			[funcionarios[34].idfuncionarioscapsoeste, escala],
			[funcionarios[35].idfuncionarioscapsoeste, escala],
		];
	}
	if(turno == "Tarde"){
		var values = [
			[funcionarios[0].idfuncionarioscapsoeste, escala],
			[funcionarios[1].idfuncionarioscapsoeste, escala],
			[funcionarios[2].idfuncionarioscapsoeste, escala],
			[funcionarios[3].idfuncionarioscapsoeste, escala],
			[funcionarios[4].idfuncionarioscapsoeste, escala],
			[funcionarios[5].idfuncionarioscapsoeste, escala],
			[funcionarios[6].idfuncionarioscapsoeste, escala],
			[funcionarios[7].idfuncionarioscapsoeste, escala],
			[funcionarios[8].idfuncionarioscapsoeste, escala],
			[funcionarios[9].idfuncionarioscapsoeste, escala],
			[funcionarios[10].idfuncionarioscapsoeste, escala],
			[funcionarios[11].idfuncionarioscapsoeste, escala],
			[funcionarios[12].idfuncionarioscapsoeste, escala],
			[funcionarios[13].idfuncionarioscapsoeste, escala],
			[funcionarios[14].idfuncionarioscapsoeste, escala],
			[funcionarios[15].idfuncionarioscapsoeste, escala],
			[funcionarios[16].idfuncionarioscapsoeste, escala],
			[funcionarios[17].idfuncionarioscapsoeste, escala],
			[funcionarios[18].idfuncionarioscapsoeste, escala],
			[funcionarios[19].idfuncionarioscapsoeste, escala],
			[funcionarios[20].idfuncionarioscapsoeste, escala],
			[funcionarios[21].idfuncionarioscapsoeste, escala],
			[funcionarios[22].idfuncionarioscapsoeste, escala],
			[funcionarios[23].idfuncionarioscapsoeste, escala],
			[funcionarios[24].idfuncionarioscapsoeste, escala],
			[funcionarios[25].idfuncionarioscapsoeste, escala],
			[funcionarios[26].idfuncionarioscapsoeste, escala],
			[funcionarios[27].idfuncionarioscapsoeste, escala],
			[funcionarios[28].idfuncionarioscapsoeste, escala],
			[funcionarios[29].idfuncionarioscapsoeste, escala],
			[funcionarios[30].idfuncionarioscapsoeste, escala],
			[funcionarios[31].idfuncionarioscapsoeste, escala],
			[funcionarios[32].idfuncionarioscapsoeste, escala],
			[funcionarios[33].idfuncionarioscapsoeste, escala],
		];
	}
	if(turno == "SN1"){
		var values = [
			[funcionarios[0].idfuncionarioscapsoeste, escala],
			[funcionarios[1].idfuncionarioscapsoeste, escala],
			[funcionarios[2].idfuncionarioscapsoeste, escala],
			[funcionarios[3].idfuncionarioscapsoeste, escala],
			[funcionarios[4].idfuncionarioscapsoeste, escala],
			[funcionarios[5].idfuncionarioscapsoeste, escala],
			[funcionarios[6].idfuncionarioscapsoeste, escala],
			[funcionarios[7].idfuncionarioscapsoeste, escala],
			[funcionarios[8].idfuncionarioscapsoeste, escala],
			[funcionarios[9].idfuncionarioscapsoeste, escala],
			[funcionarios[10].idfuncionarioscapsoeste, escala],
			[funcionarios[11].idfuncionarioscapsoeste, escala],
			[funcionarios[12].idfuncionarioscapsoeste, escala],
			[funcionarios[13].idfuncionarioscapsoeste, escala],
			[funcionarios[14].idfuncionarioscapsoeste, escala],
			[funcionarios[15].idfuncionarioscapsoeste, escala],
			[funcionarios[16].idfuncionarioscapsoeste, escala],
			[funcionarios[17].idfuncionarioscapsoeste, escala],
			[funcionarios[18].idfuncionarioscapsoeste, escala],
			[funcionarios[19].idfuncionarioscapsoeste, escala],
			[funcionarios[20].idfuncionarioscapsoeste, escala],
			[funcionarios[21].idfuncionarioscapsoeste, escala],
			[funcionarios[22].idfuncionarioscapsoeste, escala],
			[funcionarios[23].idfuncionarioscapsoeste, escala],
			[funcionarios[24].idfuncionarioscapsoeste, escala],
			[funcionarios[25].idfuncionarioscapsoeste, escala],
			[funcionarios[26].idfuncionarioscapsoeste, escala],
			[funcionarios[27].idfuncionarioscapsoeste, escala],
			[funcionarios[28].idfuncionarioscapsoeste, escala],
			[funcionarios[29].idfuncionarioscapsoeste, escala],
			[funcionarios[30].idfuncionarioscapsoeste, escala],
			[funcionarios[31].idfuncionarioscapsoeste, escala],
			[funcionarios[32].idfuncionarioscapsoeste, escala],
			[funcionarios[33].idfuncionarioscapsoeste, escala],
		];
	}
	if(turno == "SN2"){
		var values = [
			[funcionarios[0].idfuncionarioscapsoeste, escala],
			[funcionarios[1].idfuncionarioscapsoeste, escala],
			[funcionarios[2].idfuncionarioscapsoeste, escala],
			[funcionarios[3].idfuncionarioscapsoeste, escala],
			[funcionarios[4].idfuncionarioscapsoeste, escala],
			[funcionarios[5].idfuncionarioscapsoeste, escala],
			[funcionarios[6].idfuncionarioscapsoeste, escala],
			[funcionarios[7].idfuncionarioscapsoeste, escala],
			[funcionarios[8].idfuncionarioscapsoeste, escala],
			[funcionarios[9].idfuncionarioscapsoeste, escala],
			[funcionarios[10].idfuncionarioscapsoeste, escala],
			[funcionarios[11].idfuncionarioscapsoeste, escala],
			[funcionarios[12].idfuncionarioscapsoeste, escala],
			[funcionarios[13].idfuncionarioscapsoeste, escala],
			[funcionarios[14].idfuncionarioscapsoeste, escala],
			[funcionarios[15].idfuncionarioscapsoeste, escala],
			[funcionarios[16].idfuncionarioscapsoeste, escala],
			[funcionarios[17].idfuncionarioscapsoeste, escala],
			[funcionarios[18].idfuncionarioscapsoeste, escala],
			[funcionarios[19].idfuncionarioscapsoeste, escala],
			[funcionarios[20].idfuncionarioscapsoeste, escala],
			[funcionarios[21].idfuncionarioscapsoeste, escala],
			[funcionarios[22].idfuncionarioscapsoeste, escala],
			[funcionarios[23].idfuncionarioscapsoeste, escala],
			[funcionarios[24].idfuncionarioscapsoeste, escala],
			[funcionarios[25].idfuncionarioscapsoeste, escala],
			[funcionarios[26].idfuncionarioscapsoeste, escala],
			[funcionarios[27].idfuncionarioscapsoeste, escala],
			[funcionarios[28].idfuncionarioscapsoeste, escala],
			[funcionarios[29].idfuncionarioscapsoeste, escala],
			[funcionarios[30].idfuncionarioscapsoeste, escala],
			[funcionarios[31].idfuncionarioscapsoeste, escala],
			[funcionarios[32].idfuncionarioscapsoeste, escala],
			[funcionarios[33].idfuncionarioscapsoeste, escala],
		];
	}

		if(turno == "Maqueiro"){
			var values = [
				[funcionarios[0].idfuncionarioscapsoeste, escala],
				[funcionarios[1].idfuncionarioscapsoeste, escala],
				[funcionarios[2].idfuncionarioscapsoeste, escala],
				[funcionarios[3].idfuncionarioscapsoeste, escala],
				[funcionarios[4].idfuncionarioscapsoeste, escala],
				[funcionarios[5].idfuncionarioscapsoeste, escala],
				[funcionarios[6].idfuncionarioscapsoeste, escala],
				[funcionarios[7].idfuncionarioscapsoeste, escala],
			];
}

		if(turno == "Sala de Gesso/Sutura/Centro Ortopedico"){
			var values = [
				[funcionarios[0].idfuncionarioscapsoeste, escala],
				[funcionarios[1].idfuncionarioscapsoeste, escala],
				[funcionarios[2].idfuncionarioscapsoeste, escala],
				[funcionarios[3].idfuncionarioscapsoeste, escala],
				[funcionarios[4].idfuncionarioscapsoeste, escala],
				[funcionarios[5].idfuncionarioscapsoeste, escala],

			];
		}
	this._conection.query(sql, [values], callback);	

}

modelescalacapsoeste.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgacapsoeste set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgacapsoeste = "'+idfuncionario+'"', callback);
}


modelescalacapsoeste.prototype.criarescalacapsoeste = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalacapsoeste set unidade="Caps Oeste", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacapsoeste.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacapsoeste set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Caps Oeste" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacapsoeste.prototype.updateescalacapsoeste = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga1 = "'+folga1+'"  where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga2 = "'+folga2+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga3 = "'+folga3+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga4 = "'+folga4+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga5 = "'+folga5+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga6 = "'+folga6+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga7 = "'+folga7+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga8 = "'+folga8+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga9 = "'+folga9+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga10 = "'+folga10+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga11 = "'+folga11+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga12 = "'+folga12+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga13 = "'+folga13+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga14 = "'+folga14+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga15 = "'+folga15+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga16 = "'+folga16+'" Where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga17 = "'+folga17+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga18 = "'+folga18+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga19 = "'+folga19+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga20 = "'+folga20+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga21 = "'+folga21+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga22 = "'+folga22+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga23 = "'+folga23+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga24 = "'+folga24+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga25 = "'+folga25+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga26 = "'+folga26+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga27 = "'+folga27+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga28 = "'+folga28+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga29 = "'+folga29+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga30 = "'+folga30+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacapsoeste set folga31 = "'+folga31+'" where idfolgacapsoeste = "'+valor.idfinal+'"', callback);}
	
}
modelescalacapsoeste.prototype.updateescalacapsoestetarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga1 = "'+folga1+'"  where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga2 = "'+folga2+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga3 = "'+folga3+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga4 = "'+folga4+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga5 = "'+folga5+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga6 = "'+folga6+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga7 = "'+folga7+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga8 = "'+folga8+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga9 = "'+folga9+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga10 = "'+folga10+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga11 = "'+folga11+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga12 = "'+folga12+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga13 = "'+folga13+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga14 = "'+folga14+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga15 = "'+folga15+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga16 = "'+folga16+'" Where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga17 = "'+folga17+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga18 = "'+folga18+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga19 = "'+folga19+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga20 = "'+folga20+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga21 = "'+folga21+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga22 = "'+folga22+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga23 = "'+folga23+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga24 = "'+folga24+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga25 = "'+folga25+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga26 = "'+folga26+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga27 = "'+folga27+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga28 = "'+folga28+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga29 = "'+folga29+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga30 = "'+folga30+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgacapsoeste set folga31 = "'+folga31+'" where idfolgacapsoeste = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalacapsoeste.prototype.buscarregraescalaunicacapsoeste = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacapsoeste where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalacapsoeste.prototype.buscarescalamensalcapsoeste = function(valor, callback){
	this._conection.query('select * from folgacapsoeste f inner join funcionarioscapsoeste func on f.idfuncionarios=func.idfuncionarioscapsoeste inner join escalacapsoeste esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps Oeste"', callback);
}

modelescalacapsoeste.prototype.buscarescalamensalcapsoestemulti = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgacapsoeste f inner join funcionarioscapsoeste func on f.idfuncionarios=func.idfuncionarioscapsoeste inner join escalacapsoeste esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps Oeste"', callback);
}
module.exports = function(){
	return modelescalacapsoeste;
}