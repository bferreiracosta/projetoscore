function modelescalacc(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalacc.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionarioscc from funcionarioscc where turno = "Diurno"', callback);
}

modelescalacc.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgacc (idfuncionarios,idescala) VALUES ?";
		var values = [
			[funcionarios[0].idfuncionarioscc, escala],
			[funcionarios[1].idfuncionarioscc, escala],
			[funcionarios[2].idfuncionarioscc, escala],
			[funcionarios[3].idfuncionarioscc, escala],
			[funcionarios[4].idfuncionarioscc, escala],
			[funcionarios[5].idfuncionarioscc, escala],
			[funcionarios[6].idfuncionarioscc, escala],
		]
	this._conection.query(sql, [values], callback);	

}

modelescalacc.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgacc set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgacc = "'+idfuncionario+'"', callback);
}


modelescalacc.prototype.criarescalacc = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalacc set unidade="Centro de Convivência", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalacc.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalacc set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Centro de Convivência" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalacc.prototype.updateescalacc = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgacc set folga1 = "'+folga1+'"  where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgacc set folga2 = "'+folga2+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgacc set folga3 = "'+folga3+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgacc set folga4 = "'+folga4+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgacc set folga5 = "'+folga5+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgacc set folga6 = "'+folga6+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgacc set folga7 = "'+folga7+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgacc set folga8 = "'+folga8+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgacc set folga9 = "'+folga9+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgacc set folga10 = "'+folga10+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgacc set folga11 = "'+folga11+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgacc set folga12 = "'+folga12+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgacc set folga13 = "'+folga13+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgacc set folga14 = "'+folga14+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgacc set folga15 = "'+folga15+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgacc set folga16 = "'+folga16+'" Where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgacc set folga17 = "'+folga17+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgacc set folga18 = "'+folga18+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgacc set folga19 = "'+folga19+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgacc set folga20 = "'+folga20+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgacc set folga21 = "'+folga21+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgacc set folga22 = "'+folga22+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgacc set folga23 = "'+folga23+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgacc set folga24 = "'+folga24+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgacc set folga25 = "'+folga25+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgacc set folga26 = "'+folga26+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgacc set folga27 = "'+folga27+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgacc set folga28 = "'+folga28+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgacc set folga29 = "'+folga29+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgacc set folga30 = "'+folga30+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgacc set folga31 = "'+folga31+'" where idfolgacc = "'+valor.idfinal+'"', callback);}
	
}
modelescalacc.prototype.updateescalacctarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgacc set folga1 = "'+folga1+'"  where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgacc set folga2 = "'+folga2+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgacc set folga3 = "'+folga3+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgacc set folga4 = "'+folga4+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgacc set folga5 = "'+folga5+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgacc set folga6 = "'+folga6+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgacc set folga7 = "'+folga7+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgacc set folga8 = "'+folga8+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgacc set folga9 = "'+folga9+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgacc set folga10 = "'+folga10+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgacc set folga11 = "'+folga11+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgacc set folga12 = "'+folga12+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgacc set folga13 = "'+folga13+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgacc set folga14 = "'+folga14+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgacc set folga15 = "'+folga15+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgacc set folga16 = "'+folga16+'" Where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgacc set folga17 = "'+folga17+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgacc set folga18 = "'+folga18+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgacc set folga19 = "'+folga19+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgacc set folga20 = "'+folga20+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgacc set folga21 = "'+folga21+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgacc set folga22 = "'+folga22+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgacc set folga23 = "'+folga23+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgacc set folga24 = "'+folga24+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgacc set folga25 = "'+folga25+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgacc set folga26 = "'+folga26+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgacc set folga27 = "'+folga27+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgacc set folga28 = "'+folga28+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgacc set folga29 = "'+folga29+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgacc set folga30 = "'+folga30+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgacc set folga31 = "'+folga31+'" where idfolgacc = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalacc.prototype.buscarregraescalaunicacc = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalacc where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalacc.prototype.buscarescalamensalcc = function(valor, callback){
	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.unidade = "Centro de Convivência"', callback);
}

modelescalacc.prototype.buscarescalamensalccmulti = function(valor, callback){
	console.log(valor)
	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.unidade = "Centro de Convivência"', callback);
}

modelescalacc.prototype.buscarescalamanhasetor1cc = function(valor, callback){

	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "Centro de Convivência" and func.setor = "Assistente de Serviço Gerais"', callback);
}

modelescalacc.prototype.buscarescalamanhasetor2cc = function(valor, callback){

	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "Centro de Convivência" and func.setor = "Administrativo"', callback);
}

modelescalacc.prototype.buscarescalamanhasetor3cc = function(valor, callback){

	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "Centro de Convivência" and func.setor = "Assistente Social"', callback);
}

modelescalacc.prototype.buscarescalamanhasetor4cc = function(valor, callback){

	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "Centro de Convivência" and func.setor = "Psicologo"', callback);
}

modelescalacc.prototype.buscarescalamanhasetor5cc = function(valor, callback){

	this._conection.query('select * from folgacc f inner join funcionarioscc func on f.idfuncionarios=func.idfuncionarioscc inner join escalacc esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Diurno" and esc.unidade = "Centro de Convivência" and func.setor = "Gerente"', callback);
}
module.exports = function(){
	return modelescalacc;
}