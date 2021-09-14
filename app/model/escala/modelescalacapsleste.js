function modelescalacapsleste(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacapsleste.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscapsleste from funcionarioscapsleste where turno = "'+turno+'"', callback);
}

modelescalacapsleste.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacapsleste (idfuncionarios,idescala) VALUES ?";
	if(turno == "Manhã"){
		var values = [
			[funcionarios[0].idfuncionarioscapsleste, escala],
			[funcionarios[1].idfuncionarioscapsleste, escala],
			[funcionarios[2].idfuncionarioscapsleste, escala],
			[funcionarios[3].idfuncionarioscapsleste, escala],
			[funcionarios[4].idfuncionarioscapsleste, escala],
			[funcionarios[5].idfuncionarioscapsleste, escala],
			[funcionarios[6].idfuncionarioscapsleste, escala],
			[funcionarios[7].idfuncionarioscapsleste, escala],
			[funcionarios[8].idfuncionarioscapsleste, escala],
			[funcionarios[9].idfuncionarioscapsleste, escala],
			[funcionarios[10].idfuncionarioscapsleste, escala],
			[funcionarios[11].idfuncionarioscapsleste, escala],
			[funcionarios[12].idfuncionarioscapsleste, escala],
			[funcionarios[13].idfuncionarioscapsleste, escala],
			[funcionarios[14].idfuncionarioscapsleste, escala],
			[funcionarios[15].idfuncionarioscapsleste, escala],
			[funcionarios[16].idfuncionarioscapsleste, escala],
			[funcionarios[17].idfuncionarioscapsleste, escala],
			[funcionarios[18].idfuncionarioscapsleste, escala],
			[funcionarios[19].idfuncionarioscapsleste, escala],
			[funcionarios[20].idfuncionarioscapsleste, escala],
			[funcionarios[21].idfuncionarioscapsleste, escala],
			[funcionarios[22].idfuncionarioscapsleste, escala],
			[funcionarios[23].idfuncionarioscapsleste, escala],
			[funcionarios[24].idfuncionarioscapsleste, escala],
			[funcionarios[25].idfuncionarioscapsleste, escala],
			[funcionarios[26].idfuncionarioscapsleste, escala],
			[funcionarios[27].idfuncionarioscapsleste, escala],
			[funcionarios[28].idfuncionarioscapsleste, escala],
			[funcionarios[29].idfuncionarioscapsleste, escala],
			[funcionarios[30].idfuncionarioscapsleste, escala],
			[funcionarios[31].idfuncionarioscapsleste, escala],
			[funcionarios[32].idfuncionarioscapsleste, escala],
			[funcionarios[33].idfuncionarioscapsleste, escala],
			[funcionarios[34].idfuncionarioscapsleste, escala],
			[funcionarios[35].idfuncionarioscapsleste, escala],
		];
	}
	if(turno == "Tarde"){
		var values = [
			[funcionarios[0].idfuncionarioscapsleste, escala],
			[funcionarios[1].idfuncionarioscapsleste, escala],
			[funcionarios[2].idfuncionarioscapsleste, escala],
			[funcionarios[3].idfuncionarioscapsleste, escala],
			[funcionarios[4].idfuncionarioscapsleste, escala],
			[funcionarios[5].idfuncionarioscapsleste, escala],
			[funcionarios[6].idfuncionarioscapsleste, escala],
			[funcionarios[7].idfuncionarioscapsleste, escala],
			[funcionarios[8].idfuncionarioscapsleste, escala],
			[funcionarios[9].idfuncionarioscapsleste, escala],
			[funcionarios[10].idfuncionarioscapsleste, escala],
			[funcionarios[11].idfuncionarioscapsleste, escala],
			[funcionarios[12].idfuncionarioscapsleste, escala],
			[funcionarios[13].idfuncionarioscapsleste, escala],
			[funcionarios[14].idfuncionarioscapsleste, escala],
			[funcionarios[15].idfuncionarioscapsleste, escala],
			[funcionarios[16].idfuncionarioscapsleste, escala],
			[funcionarios[17].idfuncionarioscapsleste, escala],
			[funcionarios[18].idfuncionarioscapsleste, escala],
			[funcionarios[19].idfuncionarioscapsleste, escala],
			[funcionarios[20].idfuncionarioscapsleste, escala],
			[funcionarios[21].idfuncionarioscapsleste, escala],
			[funcionarios[22].idfuncionarioscapsleste, escala],
			[funcionarios[23].idfuncionarioscapsleste, escala],
			[funcionarios[24].idfuncionarioscapsleste, escala],
			[funcionarios[25].idfuncionarioscapsleste, escala],
			[funcionarios[26].idfuncionarioscapsleste, escala],
			[funcionarios[27].idfuncionarioscapsleste, escala],
			[funcionarios[28].idfuncionarioscapsleste, escala],
			[funcionarios[29].idfuncionarioscapsleste, escala],
			[funcionarios[30].idfuncionarioscapsleste, escala],
			[funcionarios[31].idfuncionarioscapsleste, escala],
			[funcionarios[32].idfuncionarioscapsleste, escala],
			[funcionarios[33].idfuncionarioscapsleste, escala],
		];
	}
	if(turno == "SN1"){
		var values = [
			[funcionarios[0].idfuncionarioscapsleste, escala],
			[funcionarios[1].idfuncionarioscapsleste, escala],
			[funcionarios[2].idfuncionarioscapsleste, escala],
			[funcionarios[3].idfuncionarioscapsleste, escala],
			[funcionarios[4].idfuncionarioscapsleste, escala],
			[funcionarios[5].idfuncionarioscapsleste, escala],
			[funcionarios[6].idfuncionarioscapsleste, escala],
			[funcionarios[7].idfuncionarioscapsleste, escala],
			[funcionarios[8].idfuncionarioscapsleste, escala],
			[funcionarios[9].idfuncionarioscapsleste, escala],
			[funcionarios[10].idfuncionarioscapsleste, escala],
			[funcionarios[11].idfuncionarioscapsleste, escala],
			[funcionarios[12].idfuncionarioscapsleste, escala],
			[funcionarios[13].idfuncionarioscapsleste, escala],
			[funcionarios[14].idfuncionarioscapsleste, escala],
			[funcionarios[15].idfuncionarioscapsleste, escala],
			[funcionarios[16].idfuncionarioscapsleste, escala],
			[funcionarios[17].idfuncionarioscapsleste, escala],
			[funcionarios[18].idfuncionarioscapsleste, escala],
			[funcionarios[19].idfuncionarioscapsleste, escala],
			[funcionarios[20].idfuncionarioscapsleste, escala],
			[funcionarios[21].idfuncionarioscapsleste, escala],
			[funcionarios[22].idfuncionarioscapsleste, escala],
			[funcionarios[23].idfuncionarioscapsleste, escala],
			[funcionarios[24].idfuncionarioscapsleste, escala],
			[funcionarios[25].idfuncionarioscapsleste, escala],
			[funcionarios[26].idfuncionarioscapsleste, escala],
			[funcionarios[27].idfuncionarioscapsleste, escala],
			[funcionarios[28].idfuncionarioscapsleste, escala],
			[funcionarios[29].idfuncionarioscapsleste, escala],
			[funcionarios[30].idfuncionarioscapsleste, escala],
			[funcionarios[31].idfuncionarioscapsleste, escala],
			[funcionarios[32].idfuncionarioscapsleste, escala],
			[funcionarios[33].idfuncionarioscapsleste, escala],
		];
	}
	if(turno == "SN2"){
		var values = [
			[funcionarios[0].idfuncionarioscapsleste, escala],
			[funcionarios[1].idfuncionarioscapsleste, escala],
			[funcionarios[2].idfuncionarioscapsleste, escala],
			[funcionarios[3].idfuncionarioscapsleste, escala],
			[funcionarios[4].idfuncionarioscapsleste, escala],
			[funcionarios[5].idfuncionarioscapsleste, escala],
			[funcionarios[6].idfuncionarioscapsleste, escala],
			[funcionarios[7].idfuncionarioscapsleste, escala],
			[funcionarios[8].idfuncionarioscapsleste, escala],
			[funcionarios[9].idfuncionarioscapsleste, escala],
			[funcionarios[10].idfuncionarioscapsleste, escala],
			[funcionarios[11].idfuncionarioscapsleste, escala],
			[funcionarios[12].idfuncionarioscapsleste, escala],
			[funcionarios[13].idfuncionarioscapsleste, escala],
			[funcionarios[14].idfuncionarioscapsleste, escala],
			[funcionarios[15].idfuncionarioscapsleste, escala],
			[funcionarios[16].idfuncionarioscapsleste, escala],
			[funcionarios[17].idfuncionarioscapsleste, escala],
			[funcionarios[18].idfuncionarioscapsleste, escala],
			[funcionarios[19].idfuncionarioscapsleste, escala],
			[funcionarios[20].idfuncionarioscapsleste, escala],
			[funcionarios[21].idfuncionarioscapsleste, escala],
			[funcionarios[22].idfuncionarioscapsleste, escala],
			[funcionarios[23].idfuncionarioscapsleste, escala],
			[funcionarios[24].idfuncionarioscapsleste, escala],
			[funcionarios[25].idfuncionarioscapsleste, escala],
			[funcionarios[26].idfuncionarioscapsleste, escala],
			[funcionarios[27].idfuncionarioscapsleste, escala],
			[funcionarios[28].idfuncionarioscapsleste, escala],
			[funcionarios[29].idfuncionarioscapsleste, escala],
			[funcionarios[30].idfuncionarioscapsleste, escala],
			[funcionarios[31].idfuncionarioscapsleste, escala],
			[funcionarios[32].idfuncionarioscapsleste, escala],
			[funcionarios[33].idfuncionarioscapsleste, escala],
		];
	}

		if(turno == "Maqueiro"){
			var values = [
				[funcionarios[0].idfuncionarioscapsleste, escala],
				[funcionarios[1].idfuncionarioscapsleste, escala],
				[funcionarios[2].idfuncionarioscapsleste, escala],
				[funcionarios[3].idfuncionarioscapsleste, escala],
				[funcionarios[4].idfuncionarioscapsleste, escala],
				[funcionarios[5].idfuncionarioscapsleste, escala],
				[funcionarios[6].idfuncionarioscapsleste, escala],
				[funcionarios[7].idfuncionarioscapsleste, escala],
			];
}

		if(turno == "Sala de Gesso/Sutura/Centro Ortopedico"){
			var values = [
				[funcionarios[0].idfuncionarioscapsleste, escala],
				[funcionarios[1].idfuncionarioscapsleste, escala],
				[funcionarios[2].idfuncionarioscapsleste, escala],
				[funcionarios[3].idfuncionarioscapsleste, escala],
				[funcionarios[4].idfuncionarioscapsleste, escala],
				[funcionarios[5].idfuncionarioscapsleste, escala],

			];
		}
	this._conection.query(sql, [values], callback);	

}

modelescalacapsleste.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgacapsleste set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgacapsleste = "'+idfuncionario+'"', callback);
}


modelescalacapsleste.prototype.criarescalacapsleste = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalacapsleste set unidade="Caps Leste", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacapsleste.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacapsleste set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Caps Leste" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacapsleste.prototype.updateescalacapsleste = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga1 = "'+folga1+'"  where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga2 = "'+folga2+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga3 = "'+folga3+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga4 = "'+folga4+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga5 = "'+folga5+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga6 = "'+folga6+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga7 = "'+folga7+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga8 = "'+folga8+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga9 = "'+folga9+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga10 = "'+folga10+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga11 = "'+folga11+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga12 = "'+folga12+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga13 = "'+folga13+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga14 = "'+folga14+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga15 = "'+folga15+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga16 = "'+folga16+'" Where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga17 = "'+folga17+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga18 = "'+folga18+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga19 = "'+folga19+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga20 = "'+folga20+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga21 = "'+folga21+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga22 = "'+folga22+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga23 = "'+folga23+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga24 = "'+folga24+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga25 = "'+folga25+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga26 = "'+folga26+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga27 = "'+folga27+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga28 = "'+folga28+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga29 = "'+folga29+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga30 = "'+folga30+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacapsleste set folga31 = "'+folga31+'" where idfolgacapsleste = "'+valor.idfinal+'"', callback);}
	
}
modelescalacapsleste.prototype.updateescalacapslestetarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga1 = "'+folga1+'"  where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga2 = "'+folga2+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga3 = "'+folga3+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga4 = "'+folga4+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga5 = "'+folga5+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga6 = "'+folga6+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga7 = "'+folga7+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga8 = "'+folga8+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga9 = "'+folga9+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga10 = "'+folga10+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga11 = "'+folga11+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga12 = "'+folga12+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga13 = "'+folga13+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga14 = "'+folga14+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga15 = "'+folga15+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga16 = "'+folga16+'" Where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga17 = "'+folga17+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga18 = "'+folga18+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga19 = "'+folga19+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga20 = "'+folga20+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga21 = "'+folga21+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga22 = "'+folga22+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga23 = "'+folga23+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga24 = "'+folga24+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga25 = "'+folga25+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga26 = "'+folga26+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga27 = "'+folga27+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga28 = "'+folga28+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga29 = "'+folga29+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga30 = "'+folga30+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgacapsleste set folga31 = "'+folga31+'" where idfolgacapsleste = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalacapsleste.prototype.buscarregraescalaunicacapsleste = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacapsleste where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalacapsleste.prototype.buscarescalamensalcapsleste = function(valor, callback){
	this._conection.query('select * from folgacapsleste f inner join funcionarioscapsleste func on f.idfuncionarios=func.idfuncionarioscapsleste inner join escalacapsleste esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps Leste"', callback);
}

modelescalacapsleste.prototype.buscarescalamensalcapslestemulti = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgacapsleste f inner join funcionarioscapsleste func on f.idfuncionarios=func.idfuncionarioscapsleste inner join escalacapsleste esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps Leste"', callback);
}
module.exports = function(){
	return modelescalacapsleste;
}