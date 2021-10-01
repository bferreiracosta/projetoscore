function modelescalaist(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalaist.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariosist from funcionariosist where turno = "Diurno"', callback);
}

modelescalaist.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgaist (idfuncionarios,idescala) VALUES ?";
		var values = [
			[funcionarios[0].idfuncionariosist, escala],
			[funcionarios[1].idfuncionariosist, escala],
			[funcionarios[2].idfuncionariosist, escala],
			[funcionarios[3].idfuncionariosist, escala],
			[funcionarios[4].idfuncionariosist, escala],
			[funcionarios[5].idfuncionariosist, escala],
			[funcionarios[6].idfuncionariosist, escala],
			[funcionarios[7].idfuncionariosist, escala],
			[funcionarios[8].idfuncionariosist, escala],
			[funcionarios[9].idfuncionariosist, escala],
			[funcionarios[10].idfuncionariosist, escala],
			[funcionarios[11].idfuncionariosist, escala],
			[funcionarios[12].idfuncionariosist, escala],
			[funcionarios[13].idfuncionariosist, escala],
			[funcionarios[14].idfuncionariosist, escala],
			[funcionarios[15].idfuncionariosist, escala],
			[funcionarios[16].idfuncionariosist, escala],
			[funcionarios[17].idfuncionariosist, escala],
			[funcionarios[18].idfuncionariosist, escala],
			[funcionarios[19].idfuncionariosist, escala],
			[funcionarios[20].idfuncionariosist, escala],
			[funcionarios[21].idfuncionariosist, escala],
			[funcionarios[22].idfuncionariosist, escala],
			[funcionarios[23].idfuncionariosist, escala],
			[funcionarios[24].idfuncionariosist, escala],
			[funcionarios[25].idfuncionariosist, escala],
			[funcionarios[26].idfuncionariosist, escala],
			[funcionarios[27].idfuncionariosist, escala],
			[funcionarios[28].idfuncionariosist, escala],
			[funcionarios[29].idfuncionariosist, escala],
			[funcionarios[30].idfuncionariosist, escala],
			[funcionarios[31].idfuncionariosist, escala],
			[funcionarios[32].idfuncionariosist, escala],
			[funcionarios[33].idfuncionariosist, escala],
			[funcionarios[34].idfuncionariosist, escala],
			[funcionarios[35].idfuncionariosist, escala],
			[funcionarios[36].idfuncionariosist, escala],
			[funcionarios[37].idfuncionariosist, escala],
		]
	this._conection.query(sql, [values], callback);	

}

modelescalaist.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaist set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaist = "'+idfuncionario+'"', callback);
}


modelescalaist.prototype.criarescalaist = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalaist set unidade="IST/AIDS", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaist.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaist set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="IST/AIDS" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaist.prototype.updateescalaist = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoconteudo;this._conection.query('update folgaist set folga1 = "'+folga1+'"  where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoconteudo;this._conection.query('update folgaist set folga2 = "'+folga2+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoconteudo;this._conection.query('update folgaist set folga3 = "'+folga3+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoconteudo;this._conection.query('update folgaist set folga4 = "'+folga4+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoconteudo;this._conection.query('update folgaist set folga5 = "'+folga5+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoconteudo;this._conection.query('update folgaist set folga6 = "'+folga6+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoconteudo;this._conection.query('update folgaist set folga7 = "'+folga7+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoconteudo;this._conection.query('update folgaist set folga8 = "'+folga8+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoconteudo;this._conection.query('update folgaist set folga9 = "'+folga9+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoconteudo;this._conection.query('update folgaist set folga10 = "'+folga10+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoconteudo;this._conection.query('update folgaist set folga11 = "'+folga11+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoconteudo;this._conection.query('update folgaist set folga12 = "'+folga12+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoconteudo;this._conection.query('update folgaist set folga13 = "'+folga13+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoconteudo;this._conection.query('update folgaist set folga14 = "'+folga14+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoconteudo;this._conection.query('update folgaist set folga15 = "'+folga15+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoconteudo;this._conection.query('update folgaist set folga16 = "'+folga16+'" Where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoconteudo;this._conection.query('update folgaist set folga17 = "'+folga17+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoconteudo;this._conection.query('update folgaist set folga18 = "'+folga18+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoconteudo;this._conection.query('update folgaist set folga19 = "'+folga19+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoconteudo;this._conection.query('update folgaist set folga20 = "'+folga20+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoconteudo;this._conection.query('update folgaist set folga21 = "'+folga21+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoconteudo;this._conection.query('update folgaist set folga22 = "'+folga22+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoconteudo;this._conection.query('update folgaist set folga23 = "'+folga23+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoconteudo;this._conection.query('update folgaist set folga24 = "'+folga24+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoconteudo;this._conection.query('update folgaist set folga25 = "'+folga25+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoconteudo;this._conection.query('update folgaist set folga26 = "'+folga26+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoconteudo;this._conection.query('update folgaist set folga27 = "'+folga27+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoconteudo;this._conection.query('update folgaist set folga28 = "'+folga28+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoconteudo;this._conection.query('update folgaist set folga29 = "'+folga29+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoconteudo;this._conection.query('update folgaist set folga30 = "'+folga30+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoconteudo;this._conection.query('update folgaist set folga31 = "'+folga31+'" where idfolgaist = "'+valor.idfinal+'"', callback);}
	
}
modelescalaist.prototype.updateescalaisttarde = function(valor, callback){
	console.log(valor)
	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgaist set folga1 = "'+folga1+'"  where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgaist set folga2 = "'+folga2+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgaist set folga3 = "'+folga3+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgaist set folga4 = "'+folga4+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgaist set folga5 = "'+folga5+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgaist set folga6 = "'+folga6+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgaist set folga7 = "'+folga7+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgaist set folga8 = "'+folga8+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgaist set folga9 = "'+folga9+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgaist set folga10 = "'+folga10+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgaist set folga11 = "'+folga11+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgaist set folga12 = "'+folga12+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgaist set folga13 = "'+folga13+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgaist set folga14 = "'+folga14+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgaist set folga15 = "'+folga15+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgaist set folga16 = "'+folga16+'" Where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgaist set folga17 = "'+folga17+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgaist set folga18 = "'+folga18+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgaist set folga19 = "'+folga19+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgaist set folga20 = "'+folga20+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgaist set folga21 = "'+folga21+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgaist set folga22 = "'+folga22+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgaist set folga23 = "'+folga23+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgaist set folga24 = "'+folga24+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgaist set folga25 = "'+folga25+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgaist set folga26 = "'+folga26+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgaist set folga27 = "'+folga27+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgaist set folga28 = "'+folga28+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgaist set folga29 = "'+folga29+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgaist set folga30 = "'+folga30+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgaist set folga31 = "'+folga31+'" where idfolgaist = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalaist.prototype.buscarregraescalaunicaist = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaist where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalaist.prototype.buscarescalamensalist = function(valor, callback){
	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.unidade = "IST/AIDS"', callback);
}

modelescalaist.prototype.buscarescalamensalistmulti = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.unidade = "IST/AIDS"', callback);
}

modelescalaist.prototype.buscarescalamanhasetor1ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Gerente"', callback);
}

modelescalaist.prototype.buscarescalamanhasetor2ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Enfermeiro RT"', callback);
}

modelescalaist.prototype.buscarescalamanhasetor3ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Enfermagem"', callback);
}

modelescalaist.prototype.buscarescalamanhasetor4ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Cirurgião Dentista"', callback);
}

modelescalaist.prototype.buscarescalamanhasetor5ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Tec Saude Bucal"', callback);
}

modelescalaist.prototype.buscarescalamanhasetor6ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Pscicologa"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor7ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Assistente Social"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor8ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Farmacêutica"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor9ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Auxiliar de Farmácia"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor10ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Assistente Administrativo"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor11ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Auxiliar de Serviçoes Gerais"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor12ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Motorista"', callback);
}
modelescalaist.prototype.buscarescalamanhasetor13ist = function(valor, callback){

	this._conection.query('select * from folgaist f inner join funcionariosist func on f.idfuncionarios=func.idfuncionariosist inner join escalaist esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "IST/AIDS" and func.setor = "Nutricionista"', callback);
}
module.exports = function(){
	return modelescalaist;
}