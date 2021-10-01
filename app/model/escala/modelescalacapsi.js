function modelescalacapsi(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacapsi.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscapsi from funcionarioscapsi where equipe = "'+turno+'"', callback);
}

modelescalacapsi.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacapsi (idfuncionarios,idescala) VALUES ?";
	if(turno == "Enfermagem"){
		var values = [
			[funcionarios[0].idfuncionarioscapsi, escala],
			[funcionarios[1].idfuncionarioscapsi, escala],
			[funcionarios[2].idfuncionarioscapsi, escala],
			[funcionarios[3].idfuncionarioscapsi, escala],
			[funcionarios[4].idfuncionarioscapsi, escala],
			[funcionarios[5].idfuncionarioscapsi, escala],
			[funcionarios[6].idfuncionarioscapsi, escala],
			[funcionarios[7].idfuncionarioscapsi, escala],
			[funcionarios[8].idfuncionarioscapsi, escala],
		];
	}
	if(turno == "Multi"){
		var values = [
			[funcionarios[0].idfuncionarioscapsi, escala],
			[funcionarios[1].idfuncionarioscapsi, escala],
			[funcionarios[2].idfuncionarioscapsi, escala],
			[funcionarios[3].idfuncionarioscapsi, escala],
			[funcionarios[4].idfuncionarioscapsi, escala],
			[funcionarios[5].idfuncionarioscapsi, escala],
			[funcionarios[6].idfuncionarioscapsi, escala],
			[funcionarios[7].idfuncionarioscapsi, escala],
			[funcionarios[8].idfuncionarioscapsi, escala],
			[funcionarios[9].idfuncionarioscapsi, escala],
			[funcionarios[10].idfuncionarioscapsi, escala],
			[funcionarios[11].idfuncionarioscapsi, escala],
			[funcionarios[12].idfuncionarioscapsi, escala],
			[funcionarios[13].idfuncionarioscapsi, escala],
			[funcionarios[14].idfuncionarioscapsi, escala],
			[funcionarios[15].idfuncionarioscapsi, escala],
			[funcionarios[16].idfuncionarioscapsi, escala],
			[funcionarios[17].idfuncionarioscapsi, escala],
			[funcionarios[18].idfuncionarioscapsi, escala],
		];
	}
	
	this._conection.query(sql, [values], callback);	

}

modelescalacapsi.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgacapsi set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgacapsi = "'+idfuncionario+'"', callback);
}


modelescalacapsi.prototype.criarescalacapsi = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalacapsi set unidade="Caps I", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacapsi.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacapsi set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Caps I" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacapsi.prototype.updateescalacapsi = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacapsi set folga1 = "'+folga1+'"  where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacapsi set folga2 = "'+folga2+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacapsi set folga3 = "'+folga3+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacapsi set folga4 = "'+folga4+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacapsi set folga5 = "'+folga5+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacapsi set folga6 = "'+folga6+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacapsi set folga7 = "'+folga7+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacapsi set folga8 = "'+folga8+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacapsi set folga9 = "'+folga9+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacapsi set folga10 = "'+folga10+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacapsi set folga11 = "'+folga11+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacapsi set folga12 = "'+folga12+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacapsi set folga13 = "'+folga13+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacapsi set folga14 = "'+folga14+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacapsi set folga15 = "'+folga15+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacapsi set folga16 = "'+folga16+'" Where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacapsi set folga17 = "'+folga17+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacapsi set folga18 = "'+folga18+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacapsi set folga19 = "'+folga19+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacapsi set folga20 = "'+folga20+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacapsi set folga21 = "'+folga21+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacapsi set folga22 = "'+folga22+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacapsi set folga23 = "'+folga23+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacapsi set folga24 = "'+folga24+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacapsi set folga25 = "'+folga25+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacapsi set folga26 = "'+folga26+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacapsi set folga27 = "'+folga27+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacapsi set folga28 = "'+folga28+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacapsi set folga29 = "'+folga29+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacapsi set folga30 = "'+folga30+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacapsi set folga31 = "'+folga31+'" where idfolgacapsi = "'+valor.idfinal+'"', callback);}
	
}
modelescalacapsi.prototype.updateescalacapsitarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga1 = "'+folga1+'"  where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga2 = "'+folga2+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga3 = "'+folga3+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga4 = "'+folga4+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga5 = "'+folga5+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga6 = "'+folga6+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga7 = "'+folga7+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga8 = "'+folga8+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga9 = "'+folga9+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga10 = "'+folga10+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga11 = "'+folga11+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga12 = "'+folga12+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga13 = "'+folga13+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga14 = "'+folga14+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga15 = "'+folga15+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga16 = "'+folga16+'" Where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga17 = "'+folga17+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga18 = "'+folga18+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga19 = "'+folga19+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga20 = "'+folga20+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga21 = "'+folga21+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga22 = "'+folga22+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga23 = "'+folga23+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga24 = "'+folga24+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga25 = "'+folga25+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga26 = "'+folga26+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga27 = "'+folga27+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga28 = "'+folga28+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga29 = "'+folga29+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga30 = "'+folga30+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgacapsi set folga31 = "'+folga31+'" where idfolgacapsi = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalacapsi.prototype.buscarregraescalaunicacapsi = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacapsi where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Caps I"', callback);
}

modelescalacapsi.prototype.buscarescalamensalcapsi = function(valor, callback){
	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps I"', callback);
}

modelescalacapsi.prototype.buscarescalamensalcapsimulti = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps I"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor1 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps I" and func.turno="Enfermeiro RT" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor2 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor3 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps I" and func.turno="Tarde" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor4 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps I" and func.turno="SN1" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor5 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps I" and func.turno="SN2" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor6 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Psicologia"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor7 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Tarde" and func.equipe = "Multi" and func.setor = "Psicologia"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor8 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Assistente Social"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor9 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Tarde" and func.equipe = "Multi" and func.setor = "Assistente Social"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor10 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Médico"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor11 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Tarde" and func.equipe = "Multi" and func.setor = "Médico"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor12 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Gerente"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor13 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Educador Físico"', callback);
}

modelescalacapsi.prototype.buscarescalamanhasetor14 = function(valor, callback){

	this._conection.query('select * from folgacapsi f inner join funcionarioscapsi func on f.idfuncionarios=func.idfuncionarioscapsi inner join escalacapsi esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps I" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Oficineiro"', callback);
}
module.exports = function(){
	return modelescalacapsi;
}