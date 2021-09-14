function modelescalaco(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalaco.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariosco from funcionariosco where turno = "'+turno+'"', callback);
}

modelescalaco.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgaco (idfuncionarios,idescala) VALUES ?";
	if(turno == "Manhã"){
		var values = [
			[funcionarios[0].idfuncionariosco, escala],
			[funcionarios[1].idfuncionariosco, escala],
			[funcionarios[2].idfuncionariosco, escala],
			[funcionarios[3].idfuncionariosco, escala],
			[funcionarios[4].idfuncionariosco, escala],
			[funcionarios[5].idfuncionariosco, escala],
			[funcionarios[6].idfuncionariosco, escala],
			[funcionarios[7].idfuncionariosco, escala],
			[funcionarios[8].idfuncionariosco, escala],
			[funcionarios[9].idfuncionariosco, escala],
			[funcionarios[10].idfuncionariosco, escala],
			[funcionarios[11].idfuncionariosco, escala],
			[funcionarios[12].idfuncionariosco, escala],
			[funcionarios[13].idfuncionariosco, escala],
			[funcionarios[14].idfuncionariosco, escala],
			[funcionarios[15].idfuncionariosco, escala],
			[funcionarios[16].idfuncionariosco, escala],
			[funcionarios[17].idfuncionariosco, escala],
			[funcionarios[18].idfuncionariosco, escala],
			[funcionarios[19].idfuncionariosco, escala],
			[funcionarios[20].idfuncionariosco, escala],
			[funcionarios[21].idfuncionariosco, escala],
			[funcionarios[22].idfuncionariosco, escala],
			[funcionarios[23].idfuncionariosco, escala],
			[funcionarios[24].idfuncionariosco, escala],
			[funcionarios[25].idfuncionariosco, escala],
			[funcionarios[26].idfuncionariosco, escala],
			[funcionarios[27].idfuncionariosco, escala],
			[funcionarios[28].idfuncionariosco, escala],
			[funcionarios[29].idfuncionariosco, escala],
			[funcionarios[30].idfuncionariosco, escala],
			[funcionarios[31].idfuncionariosco, escala],
			[funcionarios[32].idfuncionariosco, escala],
			[funcionarios[33].idfuncionariosco, escala],
			[funcionarios[34].idfuncionariosco, escala],
			[funcionarios[35].idfuncionariosco, escala],
		];
	}
	if(turno == "Tarde"){
		var values = [
			[funcionarios[0].idfuncionariosco, escala],
			[funcionarios[1].idfuncionariosco, escala],
			[funcionarios[2].idfuncionariosco, escala],
			[funcionarios[3].idfuncionariosco, escala],
			[funcionarios[4].idfuncionariosco, escala],
			[funcionarios[5].idfuncionariosco, escala],
			[funcionarios[6].idfuncionariosco, escala],
			[funcionarios[7].idfuncionariosco, escala],
			[funcionarios[8].idfuncionariosco, escala],
			[funcionarios[9].idfuncionariosco, escala],
			[funcionarios[10].idfuncionariosco, escala],
			[funcionarios[11].idfuncionariosco, escala],
			[funcionarios[12].idfuncionariosco, escala],
			[funcionarios[13].idfuncionariosco, escala],
			[funcionarios[14].idfuncionariosco, escala],
			[funcionarios[15].idfuncionariosco, escala],
			[funcionarios[16].idfuncionariosco, escala],
			[funcionarios[17].idfuncionariosco, escala],
			[funcionarios[18].idfuncionariosco, escala],
			[funcionarios[19].idfuncionariosco, escala],
			[funcionarios[20].idfuncionariosco, escala],
			[funcionarios[21].idfuncionariosco, escala],
			[funcionarios[22].idfuncionariosco, escala],
			[funcionarios[23].idfuncionariosco, escala],
			[funcionarios[24].idfuncionariosco, escala],
			[funcionarios[25].idfuncionariosco, escala],
			[funcionarios[26].idfuncionariosco, escala],
			[funcionarios[27].idfuncionariosco, escala],
			[funcionarios[28].idfuncionariosco, escala],
			[funcionarios[29].idfuncionariosco, escala],
			[funcionarios[30].idfuncionariosco, escala],
			[funcionarios[31].idfuncionariosco, escala],
			[funcionarios[32].idfuncionariosco, escala],
			[funcionarios[33].idfuncionariosco, escala],
		];
	}
	if(turno == "SN1"){
		var values = [
			[funcionarios[0].idfuncionariosco, escala],
			[funcionarios[1].idfuncionariosco, escala],
			[funcionarios[2].idfuncionariosco, escala],
			[funcionarios[3].idfuncionariosco, escala],
			[funcionarios[4].idfuncionariosco, escala],
			[funcionarios[5].idfuncionariosco, escala],
			[funcionarios[6].idfuncionariosco, escala],
			[funcionarios[7].idfuncionariosco, escala],
			[funcionarios[8].idfuncionariosco, escala],
			[funcionarios[9].idfuncionariosco, escala],
			[funcionarios[10].idfuncionariosco, escala],
			[funcionarios[11].idfuncionariosco, escala],
			[funcionarios[12].idfuncionariosco, escala],
			[funcionarios[13].idfuncionariosco, escala],
			[funcionarios[14].idfuncionariosco, escala],
			[funcionarios[15].idfuncionariosco, escala],
			[funcionarios[16].idfuncionariosco, escala],
			[funcionarios[17].idfuncionariosco, escala],
			[funcionarios[18].idfuncionariosco, escala],
			[funcionarios[19].idfuncionariosco, escala],
			[funcionarios[20].idfuncionariosco, escala],
			[funcionarios[21].idfuncionariosco, escala],
			[funcionarios[22].idfuncionariosco, escala],
			[funcionarios[23].idfuncionariosco, escala],
			[funcionarios[24].idfuncionariosco, escala],
			[funcionarios[25].idfuncionariosco, escala],
			[funcionarios[26].idfuncionariosco, escala],
			[funcionarios[27].idfuncionariosco, escala],
			[funcionarios[28].idfuncionariosco, escala],
			[funcionarios[29].idfuncionariosco, escala],
			[funcionarios[30].idfuncionariosco, escala],
			[funcionarios[31].idfuncionariosco, escala],
			[funcionarios[32].idfuncionariosco, escala],
			[funcionarios[33].idfuncionariosco, escala],
		];
	}
	if(turno == "SN2"){
		var values = [
			[funcionarios[0].idfuncionariosco, escala],
			[funcionarios[1].idfuncionariosco, escala],
			[funcionarios[2].idfuncionariosco, escala],
			[funcionarios[3].idfuncionariosco, escala],
			[funcionarios[4].idfuncionariosco, escala],
			[funcionarios[5].idfuncionariosco, escala],
			[funcionarios[6].idfuncionariosco, escala],
			[funcionarios[7].idfuncionariosco, escala],
			[funcionarios[8].idfuncionariosco, escala],
			[funcionarios[9].idfuncionariosco, escala],
			[funcionarios[10].idfuncionariosco, escala],
			[funcionarios[11].idfuncionariosco, escala],
			[funcionarios[12].idfuncionariosco, escala],
			[funcionarios[13].idfuncionariosco, escala],
			[funcionarios[14].idfuncionariosco, escala],
			[funcionarios[15].idfuncionariosco, escala],
			[funcionarios[16].idfuncionariosco, escala],
			[funcionarios[17].idfuncionariosco, escala],
			[funcionarios[18].idfuncionariosco, escala],
			[funcionarios[19].idfuncionariosco, escala],
			[funcionarios[20].idfuncionariosco, escala],
			[funcionarios[21].idfuncionariosco, escala],
			[funcionarios[22].idfuncionariosco, escala],
			[funcionarios[23].idfuncionariosco, escala],
			[funcionarios[24].idfuncionariosco, escala],
			[funcionarios[25].idfuncionariosco, escala],
			[funcionarios[26].idfuncionariosco, escala],
			[funcionarios[27].idfuncionariosco, escala],
			[funcionarios[28].idfuncionariosco, escala],
			[funcionarios[29].idfuncionariosco, escala],
			[funcionarios[30].idfuncionariosco, escala],
			[funcionarios[31].idfuncionariosco, escala],
			[funcionarios[32].idfuncionariosco, escala],
			[funcionarios[33].idfuncionariosco, escala],
		];
	}

		if(turno == "Maqueiro"){
			var values = [
				[funcionarios[0].idfuncionariosco, escala],
				[funcionarios[1].idfuncionariosco, escala],
				[funcionarios[2].idfuncionariosco, escala],
				[funcionarios[3].idfuncionariosco, escala],
				[funcionarios[4].idfuncionariosco, escala],
				[funcionarios[5].idfuncionariosco, escala],
				[funcionarios[6].idfuncionariosco, escala],
				[funcionarios[7].idfuncionariosco, escala],
			];
}

		if(turno == "Sala de Gesso/Sutura/Centro Ortopedico"){
			var values = [
				[funcionarios[0].idfuncionariosco, escala],
				[funcionarios[1].idfuncionariosco, escala],
				[funcionarios[2].idfuncionariosco, escala],
				[funcionarios[3].idfuncionariosco, escala],
				[funcionarios[4].idfuncionariosco, escala],
				[funcionarios[5].idfuncionariosco, escala],

			];
		}
	this._conection.query(sql, [values], callback);	

}

modelescalaco.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaco set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaco = "'+idfuncionario+'"', callback);
}


modelescalaco.prototype.criarescalaco = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalaco set unidade="Centro Oftamológico", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaco.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaco set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Centro Oftamológico" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaco.prototype.updateescalaco = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgaco set folga1 = "'+folga1+'"  where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgaco set folga2 = "'+folga2+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgaco set folga3 = "'+folga3+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgaco set folga4 = "'+folga4+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgaco set folga5 = "'+folga5+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgaco set folga6 = "'+folga6+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgaco set folga7 = "'+folga7+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgaco set folga8 = "'+folga8+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgaco set folga9 = "'+folga9+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgaco set folga10 = "'+folga10+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgaco set folga11 = "'+folga11+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgaco set folga12 = "'+folga12+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgaco set folga13 = "'+folga13+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgaco set folga14 = "'+folga14+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgaco set folga15 = "'+folga15+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgaco set folga16 = "'+folga16+'" Where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgaco set folga17 = "'+folga17+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgaco set folga18 = "'+folga18+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgaco set folga19 = "'+folga19+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgaco set folga20 = "'+folga20+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgaco set folga21 = "'+folga21+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgaco set folga22 = "'+folga22+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgaco set folga23 = "'+folga23+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgaco set folga24 = "'+folga24+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgaco set folga25 = "'+folga25+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgaco set folga26 = "'+folga26+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgaco set folga27 = "'+folga27+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgaco set folga28 = "'+folga28+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgaco set folga29 = "'+folga29+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgaco set folga30 = "'+folga30+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgaco set folga31 = "'+folga31+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	
}
modelescalaco.prototype.updateescalacotarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgaco set folga1 = "'+folga1+'"  where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgaco set folga2 = "'+folga2+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgaco set folga3 = "'+folga3+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgaco set folga4 = "'+folga4+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgaco set folga5 = "'+folga5+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgaco set folga6 = "'+folga6+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgaco set folga7 = "'+folga7+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgaco set folga8 = "'+folga8+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgaco set folga9 = "'+folga9+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgaco set folga10 = "'+folga10+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgaco set folga11 = "'+folga11+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgaco set folga12 = "'+folga12+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgaco set folga13 = "'+folga13+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgaco set folga14 = "'+folga14+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgaco set folga15 = "'+folga15+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgaco set folga16 = "'+folga16+'" Where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgaco set folga17 = "'+folga17+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgaco set folga18 = "'+folga18+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgaco set folga19 = "'+folga19+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgaco set folga20 = "'+folga20+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgaco set folga21 = "'+folga21+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgaco set folga22 = "'+folga22+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgaco set folga23 = "'+folga23+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgaco set folga24 = "'+folga24+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgaco set folga25 = "'+folga25+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgaco set folga26 = "'+folga26+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgaco set folga27 = "'+folga27+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgaco set folga28 = "'+folga28+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgaco set folga29 = "'+folga29+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgaco set folga30 = "'+folga30+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgaco set folga31 = "'+folga31+'" where idfolgaco = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalaco.prototype.buscarregraescalaunicaco = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaco where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalaco.prototype.buscarescalamensalco = function(valor, callback){
	this._conection.query('select * from folgaco f inner join funcionariosco func on f.idfuncionarios=func.idfuncionariosco inner join escalaco esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Centro Oftamológico"', callback);
}

modelescalaco.prototype.buscarescalamensalcomulti = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgaco f inner join funcionariosco func on f.idfuncionarios=func.idfuncionariosco inner join escalaco esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Centro Oftamológico"', callback);
}
module.exports = function(){
	return modelescalaco;
}