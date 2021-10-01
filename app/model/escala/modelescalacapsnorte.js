function modelescalacapsnorte(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacapsnorte.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscapsnorte from funcionarioscapsnorte where equipe = "'+turno+'"', callback);
}

modelescalacapsnorte.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacapsnorte (idfuncionarios,idescala) VALUES ?";
	if(turno == "Enfermagem"){
		var values = [
			[funcionarios[0].idfuncionarioscapsnorte, escala],
			[funcionarios[1].idfuncionarioscapsnorte, escala],
			[funcionarios[2].idfuncionarioscapsnorte, escala],
			[funcionarios[3].idfuncionarioscapsnorte, escala],
			[funcionarios[4].idfuncionarioscapsnorte, escala],
			[funcionarios[5].idfuncionarioscapsnorte, escala],
			[funcionarios[6].idfuncionarioscapsnorte, escala],
			[funcionarios[7].idfuncionarioscapsnorte, escala],
			[funcionarios[8].idfuncionarioscapsnorte, escala],
			[funcionarios[9].idfuncionarioscapsnorte, escala],
			[funcionarios[10].idfuncionarioscapsnorte, escala],

		];
	}
	if(turno == "Multi"){
		var values = [
			[funcionarios[0].idfuncionarioscapsnorte, escala],
			[funcionarios[1].idfuncionarioscapsnorte, escala],
			[funcionarios[2].idfuncionarioscapsnorte, escala],
			[funcionarios[3].idfuncionarioscapsnorte, escala],
			[funcionarios[4].idfuncionarioscapsnorte, escala],
			[funcionarios[5].idfuncionarioscapsnorte, escala],
			[funcionarios[6].idfuncionarioscapsnorte, escala],
			[funcionarios[7].idfuncionarioscapsnorte, escala],
			[funcionarios[8].idfuncionarioscapsnorte, escala],
			[funcionarios[9].idfuncionarioscapsnorte, escala],
			[funcionarios[10].idfuncionarioscapsnorte, escala],
			[funcionarios[11].idfuncionarioscapsnorte, escala],
			[funcionarios[12].idfuncionarioscapsnorte, escala],
			[funcionarios[13].idfuncionarioscapsnorte, escala],
		];
	}
	
	this._conection.query(sql, [values], callback);	

}

modelescalacapsnorte.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgacapsnorte set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgacapsnorte = "'+idfuncionario+'"', callback);
}


modelescalacapsnorte.prototype.criarescalacapsnorte = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalacapsnorte set unidade="Caps Norte", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacapsnorte.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacapsnorte set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Caps Norte" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacapsnorte.prototype.updateescalacapsnorte = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga1 = "'+folga1+'"  where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga2 = "'+folga2+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga3 = "'+folga3+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga4 = "'+folga4+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga5 = "'+folga5+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga6 = "'+folga6+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga7 = "'+folga7+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga8 = "'+folga8+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga9 = "'+folga9+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga10 = "'+folga10+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga11 = "'+folga11+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga12 = "'+folga12+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga13 = "'+folga13+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga14 = "'+folga14+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga15 = "'+folga15+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga16 = "'+folga16+'" Where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga17 = "'+folga17+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga18 = "'+folga18+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga19 = "'+folga19+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga20 = "'+folga20+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga21 = "'+folga21+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga22 = "'+folga22+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga23 = "'+folga23+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga24 = "'+folga24+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga25 = "'+folga25+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga26 = "'+folga26+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga27 = "'+folga27+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga28 = "'+folga28+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga29 = "'+folga29+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga30 = "'+folga30+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacapsnorte set folga31 = "'+folga31+'" where idfolgacapsnorte = "'+valor.idfinal+'"', callback);}
	
}
modelescalacapsnorte.prototype.updateescalacapsnortetarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga1 = "'+folga1+'"  where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga2 = "'+folga2+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga3 = "'+folga3+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga4 = "'+folga4+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga5 = "'+folga5+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga6 = "'+folga6+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga7 = "'+folga7+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga8 = "'+folga8+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga9 = "'+folga9+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga10 = "'+folga10+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga11 = "'+folga11+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga12 = "'+folga12+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga13 = "'+folga13+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga14 = "'+folga14+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga15 = "'+folga15+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga16 = "'+folga16+'" Where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga17 = "'+folga17+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga18 = "'+folga18+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga19 = "'+folga19+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga20 = "'+folga20+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga21 = "'+folga21+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga22 = "'+folga22+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga23 = "'+folga23+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga24 = "'+folga24+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga25 = "'+folga25+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga26 = "'+folga26+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga27 = "'+folga27+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga28 = "'+folga28+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga29 = "'+folga29+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga30 = "'+folga30+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgacapsnorte set folga31 = "'+folga31+'" where idfolgacapsnorte = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalacapsnorte.prototype.buscarregraescalaunicacapsnorte = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacapsnorte where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Caps Norte"', callback);
}

modelescalacapsnorte.prototype.buscarescalamensalcapsnorte = function(valor, callback){
	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps Norte"', callback);
}

modelescalacapsnorte.prototype.buscarescalamensalcapsnortemulti = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Caps Norte"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor1 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps Norte" and func.turno="Enfermeiro RT" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor2 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps Norte" and func.turno="Manhã" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor3 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps Norte" and func.turno="Tarde" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor4 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps Norte" and func.turno="SN1" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor5 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Enfermagem" and esc.unidade = "Caps Norte" and func.turno="SN2" and func.equipe = "Enfermagem"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor6 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Psicologia"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor7 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Tarde" and func.equipe = "Multi" and func.setor = "Psicologia"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor8 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Assistente Social"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor9 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Tarde" and func.equipe = "Multi" and func.setor = "Assistente Social"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor10 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Médico"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor11 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Tarde" and func.equipe = "Multi" and func.setor = "Médico"', callback);
}

modelescalacapsnorte.prototype.buscarescalamanhasetor12 = function(valor, callback){

	this._conection.query('select * from folgacapsnorte f inner join funcionarioscapsnorte func on f.idfuncionarios=func.idfuncionarioscapsnorte inner join escalacapsnorte esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Multi" and esc.unidade = "Caps Norte" and func.turno="Manhã" and func.equipe = "Multi" and func.setor = "Gerente"', callback);
}
module.exports = function(){
	return modelescalacapsnorte;
}