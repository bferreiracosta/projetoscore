function modelescalaua(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalaua.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariosua from funcionariosua where equipe = "Multi"', callback);
}

modelescalaua.prototype.criarfolga =  function(funcionarios, escala, turno, callback){
	var sql = "insert into folgaua (idfuncionarios,idescala) VALUES ?";

		var values = [
			[funcionarios[0].idfuncionariosua, escala],
			[funcionarios[1].idfuncionariosua, escala],
			[funcionarios[2].idfuncionariosua, escala],
			[funcionarios[3].idfuncionariosua, escala],
			[funcionarios[4].idfuncionariosua, escala],
			[funcionarios[5].idfuncionariosua, escala],
			[funcionarios[6].idfuncionariosua, escala],
			[funcionarios[7].idfuncionariosua, escala],

		];

	this._conection.query(sql, [values], callback);	

}

modelescalaua.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaua set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaua = "'+idfuncionario+'"', callback);
}


modelescalaua.prototype.criarescalaua = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalaua set unidade="Unidade de Acolhimento", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaua.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaua set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Unidade de Acolhimento" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaua.prototype.updateescalaua = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgaua set folga1 = "'+folga1+'"  where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgaua set folga2 = "'+folga2+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgaua set folga3 = "'+folga3+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgaua set folga4 = "'+folga4+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgaua set folga5 = "'+folga5+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgaua set folga6 = "'+folga6+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgaua set folga7 = "'+folga7+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgaua set folga8 = "'+folga8+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgaua set folga9 = "'+folga9+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgaua set folga10 = "'+folga10+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgaua set folga11 = "'+folga11+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgaua set folga12 = "'+folga12+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgaua set folga13 = "'+folga13+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgaua set folga14 = "'+folga14+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgaua set folga15 = "'+folga15+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgaua set folga16 = "'+folga16+'" Where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgaua set folga17 = "'+folga17+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgaua set folga18 = "'+folga18+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgaua set folga19 = "'+folga19+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgaua set folga20 = "'+folga20+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgaua set folga21 = "'+folga21+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgaua set folga22 = "'+folga22+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgaua set folga23 = "'+folga23+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgaua set folga24 = "'+folga24+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgaua set folga25 = "'+folga25+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgaua set folga26 = "'+folga26+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgaua set folga27 = "'+folga27+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgaua set folga28 = "'+folga28+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgaua set folga29 = "'+folga29+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgaua set folga30 = "'+folga30+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgaua set folga31 = "'+folga31+'" where idfolgaua = "'+valor.idfinal+'"', callback);}
	
}
modelescalaua.prototype.updateescalauatarde = function(valor, callback){
	console.log(valor)
	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgaua set folga1 = "'+folga1+'"  where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgaua set folga2 = "'+folga2+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgaua set folga3 = "'+folga3+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgaua set folga4 = "'+folga4+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgaua set folga5 = "'+folga5+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgaua set folga6 = "'+folga6+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgaua set folga7 = "'+folga7+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgaua set folga8 = "'+folga8+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgaua set folga9 = "'+folga9+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgaua set folga10 = "'+folga10+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgaua set folga11 = "'+folga11+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgaua set folga12 = "'+folga12+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgaua set folga13 = "'+folga13+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgaua set folga14 = "'+folga14+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgaua set folga15 = "'+folga15+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgaua set folga16 = "'+folga16+'" Where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgaua set folga17 = "'+folga17+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgaua set folga18 = "'+folga18+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgaua set folga19 = "'+folga19+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgaua set folga20 = "'+folga20+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgaua set folga21 = "'+folga21+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgaua set folga22 = "'+folga22+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgaua set folga23 = "'+folga23+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgaua set folga24 = "'+folga24+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgaua set folga25 = "'+folga25+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgaua set folga26 = "'+folga26+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgaua set folga27 = "'+folga27+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgaua set folga28 = "'+folga28+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgaua set folga29 = "'+folga29+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgaua set folga30 = "'+folga30+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgaua set folga31 = "'+folga31+'" where idfolgaua = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalaua.prototype.buscarregraescalaunicaua = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaua where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Luizote"', callback);
}

modelescalaua.prototype.buscarescalamensalua = function(valor, callback){
	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "Manhã" and esc.unidade = "Unidade de Acolhimento" and setor = "Gerente"', callback);
}

modelescalaua.prototype.buscarescalamensaluamultiua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.unidade = "Unidade de Acolhimento"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor1ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Manhã" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Gerente"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor2ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Tarde" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Gerente"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor3ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Manhã" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Assistente Social"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor4ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Tarde" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Assistente Social"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor5ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "Manhã" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Auxiliar de Serviços Gerais"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor6ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "SN1" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Conselheiro"', callback);
}

modelescalaua.prototype.buscarescalamanhasetor7ua = function(valor, callback){

	this._conection.query('select * from folgaua f inner join funcionariosua func on f.idfuncionarios=func.idfuncionariosua inner join escalaua esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.turno = "SN2" and esc.unidade = "Unidade de Acolhimento" and func.setor = "Conselheiro"', callback);
}


module.exports = function(){
	return modelescalaua;
}