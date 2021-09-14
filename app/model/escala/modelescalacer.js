function modelescalacer(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacer.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscer from funcionarioscer where turno = "'+turno+'"', callback);
}

modelescalacer.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacer (idfuncionarios,idescala) VALUES ?";
	if(turno == "Manhã"){
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
			[funcionarios[9].idfuncionarioscer, escala],
			[funcionarios[10].idfuncionarioscer, escala],
			[funcionarios[11].idfuncionarioscer, escala],
			[funcionarios[12].idfuncionarioscer, escala],
			[funcionarios[13].idfuncionarioscer, escala],
			[funcionarios[14].idfuncionarioscer, escala],
			[funcionarios[15].idfuncionarioscer, escala],
			[funcionarios[16].idfuncionarioscer, escala],
			[funcionarios[17].idfuncionarioscer, escala],
			[funcionarios[18].idfuncionarioscer, escala],
			[funcionarios[19].idfuncionarioscer, escala],
			[funcionarios[20].idfuncionarioscer, escala],
			[funcionarios[21].idfuncionarioscer, escala],
			[funcionarios[22].idfuncionarioscer, escala],
			[funcionarios[23].idfuncionarioscer, escala],
			[funcionarios[24].idfuncionarioscer, escala],
			[funcionarios[25].idfuncionarioscer, escala],
			[funcionarios[26].idfuncionarioscer, escala],
			[funcionarios[27].idfuncionarioscer, escala],
			[funcionarios[28].idfuncionarioscer, escala],
			[funcionarios[29].idfuncionarioscer, escala],
			[funcionarios[30].idfuncionarioscer, escala],
			[funcionarios[31].idfuncionarioscer, escala],
			[funcionarios[32].idfuncionarioscer, escala],
			[funcionarios[33].idfuncionarioscer, escala],
			[funcionarios[34].idfuncionarioscer, escala],
			[funcionarios[35].idfuncionarioscer, escala],
		];
	}
	if(turno == "Tarde"){
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
			[funcionarios[9].idfuncionarioscer, escala],
			[funcionarios[10].idfuncionarioscer, escala],
			[funcionarios[11].idfuncionarioscer, escala],
			[funcionarios[12].idfuncionarioscer, escala],
			[funcionarios[13].idfuncionarioscer, escala],
			[funcionarios[14].idfuncionarioscer, escala],
			[funcionarios[15].idfuncionarioscer, escala],
			[funcionarios[16].idfuncionarioscer, escala],
			[funcionarios[17].idfuncionarioscer, escala],
			[funcionarios[18].idfuncionarioscer, escala],
			[funcionarios[19].idfuncionarioscer, escala],
			[funcionarios[20].idfuncionarioscer, escala],
			[funcionarios[21].idfuncionarioscer, escala],
			[funcionarios[22].idfuncionarioscer, escala],
			[funcionarios[23].idfuncionarioscer, escala],
			[funcionarios[24].idfuncionarioscer, escala],
			[funcionarios[25].idfuncionarioscer, escala],
			[funcionarios[26].idfuncionarioscer, escala],
			[funcionarios[27].idfuncionarioscer, escala],
			[funcionarios[28].idfuncionarioscer, escala],
			[funcionarios[29].idfuncionarioscer, escala],
			[funcionarios[30].idfuncionarioscer, escala],
			[funcionarios[31].idfuncionarioscer, escala],
			[funcionarios[32].idfuncionarioscer, escala],
			[funcionarios[33].idfuncionarioscer, escala],
		];
	}
	if(turno == "SN1"){
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
			[funcionarios[9].idfuncionarioscer, escala],
			[funcionarios[10].idfuncionarioscer, escala],
			[funcionarios[11].idfuncionarioscer, escala],
			[funcionarios[12].idfuncionarioscer, escala],
			[funcionarios[13].idfuncionarioscer, escala],
			[funcionarios[14].idfuncionarioscer, escala],
			[funcionarios[15].idfuncionarioscer, escala],
			[funcionarios[16].idfuncionarioscer, escala],
			[funcionarios[17].idfuncionarioscer, escala],
			[funcionarios[18].idfuncionarioscer, escala],
			[funcionarios[19].idfuncionarioscer, escala],
			[funcionarios[20].idfuncionarioscer, escala],
			[funcionarios[21].idfuncionarioscer, escala],
			[funcionarios[22].idfuncionarioscer, escala],
			[funcionarios[23].idfuncionarioscer, escala],
			[funcionarios[24].idfuncionarioscer, escala],
			[funcionarios[25].idfuncionarioscer, escala],
			[funcionarios[26].idfuncionarioscer, escala],
			[funcionarios[27].idfuncionarioscer, escala],
			[funcionarios[28].idfuncionarioscer, escala],
			[funcionarios[29].idfuncionarioscer, escala],
			[funcionarios[30].idfuncionarioscer, escala],
			[funcionarios[31].idfuncionarioscer, escala],
			[funcionarios[32].idfuncionarioscer, escala],
			[funcionarios[33].idfuncionarioscer, escala],
		];
	}
	if(turno == "SN2"){
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
			[funcionarios[9].idfuncionarioscer, escala],
			[funcionarios[10].idfuncionarioscer, escala],
			[funcionarios[11].idfuncionarioscer, escala],
			[funcionarios[12].idfuncionarioscer, escala],
			[funcionarios[13].idfuncionarioscer, escala],
			[funcionarios[14].idfuncionarioscer, escala],
			[funcionarios[15].idfuncionarioscer, escala],
			[funcionarios[16].idfuncionarioscer, escala],
			[funcionarios[17].idfuncionarioscer, escala],
			[funcionarios[18].idfuncionarioscer, escala],
			[funcionarios[19].idfuncionarioscer, escala],
			[funcionarios[20].idfuncionarioscer, escala],
			[funcionarios[21].idfuncionarioscer, escala],
			[funcionarios[22].idfuncionarioscer, escala],
			[funcionarios[23].idfuncionarioscer, escala],
			[funcionarios[24].idfuncionarioscer, escala],
			[funcionarios[25].idfuncionarioscer, escala],
			[funcionarios[26].idfuncionarioscer, escala],
			[funcionarios[27].idfuncionarioscer, escala],
			[funcionarios[28].idfuncionarioscer, escala],
			[funcionarios[29].idfuncionarioscer, escala],
			[funcionarios[30].idfuncionarioscer, escala],
			[funcionarios[31].idfuncionarioscer, escala],
			[funcionarios[32].idfuncionarioscer, escala],
			[funcionarios[33].idfuncionarioscer, escala],
		];
	}

		if(turno == "Maqueiro"){
			var values = [
				[funcionarios[0].idfuncionarioscer, escala],
				[funcionarios[1].idfuncionarioscer, escala],
				[funcionarios[2].idfuncionarioscer, escala],
				[funcionarios[3].idfuncionarioscer, escala],
				[funcionarios[4].idfuncionarioscer, escala],
				[funcionarios[5].idfuncionarioscer, escala],
				[funcionarios[6].idfuncionarioscer, escala],
				[funcionarios[7].idfuncionarioscer, escala],
			];
}

		if(turno == "Sala de Gesso/Sutura/Centro Ortopedico"){
			var values = [
				[funcionarios[0].idfuncionarioscer, escala],
				[funcionarios[1].idfuncionarioscer, escala],
				[funcionarios[2].idfuncionarioscer, escala],
				[funcionarios[3].idfuncionarioscer, escala],
				[funcionarios[4].idfuncionarioscer, escala],
				[funcionarios[5].idfuncionarioscer, escala],

			];
		}
	this._conection.query(sql, [values], callback);	

}

modelescalacer.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgacer set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgacer = "'+idfuncionario+'"', callback);
}


modelescalacer.prototype.criarescalacer = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalacer set unidade="CENTRO ESPECIALIZADO EM REABILITAÇÃO", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacer.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacer set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="CENTRO ESPECIALIZADO EM REABILITAÇÃO" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacer.prototype.updateescalacer = function(valor, callback){

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
modelescalacer.prototype.updateescalacertarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgacer set folga1 = "'+folga1+'"  where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgacer set folga2 = "'+folga2+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgacer set folga3 = "'+folga3+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgacer set folga4 = "'+folga4+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgacer set folga5 = "'+folga5+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgacer set folga6 = "'+folga6+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgacer set folga7 = "'+folga7+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgacer set folga8 = "'+folga8+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgacer set folga9 = "'+folga9+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgacer set folga10 = "'+folga10+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgacer set folga11 = "'+folga11+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgacer set folga12 = "'+folga12+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgacer set folga13 = "'+folga13+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgacer set folga14 = "'+folga14+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgacer set folga15 = "'+folga15+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgacer set folga16 = "'+folga16+'" Where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgacer set folga17 = "'+folga17+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgacer set folga18 = "'+folga18+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgacer set folga19 = "'+folga19+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgacer set folga20 = "'+folga20+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgacer set folga21 = "'+folga21+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgacer set folga22 = "'+folga22+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgacer set folga23 = "'+folga23+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgacer set folga24 = "'+folga24+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgacer set folga25 = "'+folga25+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgacer set folga26 = "'+folga26+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgacer set folga27 = "'+folga27+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgacer set folga28 = "'+folga28+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgacer set folga29 = "'+folga29+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgacer set folga30 = "'+folga30+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgacer set folga31 = "'+folga31+'" where idfolgacer = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalacer.prototype.buscarregraescalaunicacer = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacer where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalacer.prototype.buscarescalamensalcer = function(valor, callback){
	this._conection.query('select * from folgacer f inner join funcionarioscer func on f.idfuncionarios=func.idfuncionarioscer inner join escalacer esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "CENTRO ESPECIALIZADO EM REABILITAÇÃO"', callback);
}

modelescalacer.prototype.buscarescalamensalcermulti = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgacer f inner join funcionarioscer func on f.idfuncionarios=func.idfuncionarioscer inner join escalacer esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "CENTRO ESPECIALIZADO EM REABILITAÇÃO"', callback);
}
module.exports = function(){
	return modelescalacer;
}