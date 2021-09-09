function modelescalaroosevelt(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

modelescalaroosevelt.prototype.buscafuncionario = function(turno, callback){
	
	this._conection.query('select idfuncionariosroosevelt from funcionariosroosevelt where turno = "'+turno+'"', callback);
}

modelescalaroosevelt.prototype.criarfolga = function(funcionarios, escala, callback){

	this._conection.query('insert into folgaroosevelt set idfuncionarios="'+funcionarios+'", idescala="'+escala+'", folga1="",folga2="",folga3="",folga4="",folga5="",folga6="",folga7="",folga8="",folga9="",folga10="",folga11="",folga12="",folga13="",folga14="",folga15="",folga16="",folga17="",folga18="",folga19="",folga20="",folga21="",folga22="",folga23="",folga24="",folga25="",folga26="",folga27="",folga28="",folga29="",folga30="",folga31=""', callback);
	
}

modelescalaroosevelt.prototype.updateferias = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaroosevelt set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaroosevelt = "'+idfuncionario+'"', callback);
}
modelescalaroosevelt.prototype.updateferiastarde = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaroosevelt set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaroosevelt = "'+idfuncionario+'"', callback);
}

modelescalaroosevelt.prototype.updateferiasSN1 = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaroosevelt set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaroosevelt = "'+idfuncionario+'"', callback);
}

modelescalaroosevelt.prototype.updateferiasSN2 = function(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, callback){

	this._conection.query('update folgaroosevelt set situacao = "'+inputsituacao+'", dateiniciosituacao = "'+dateinicialsituacao+'", datefinalsituacao = "'+datefinalsituacao+'" where idfolgaroosevelt = "'+idfuncionario+'"', callback);
}

modelescalaroosevelt.prototype.criarescalaroosevelt = function(unidade, turno, dateinicial, datefinal, callback){
	
	this._conection.query('insert into escalaroosevelt set unidade="Roosevelt", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaroosevelt.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaroosevelt set dateano="'+dateano+'",rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="Roosevelt" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaroosevelt.prototype.updateescalaroosevelt = function(valor, callback){

	if(valor.coluna ==9){var folga1 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga1 = "'+folga1+'"  where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga2 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga2 = "'+folga2+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga3 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga3 = "'+folga3+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga4 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga4 = "'+folga4+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga5 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga5 = "'+folga5+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga6 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga6 = "'+folga6+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga7 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga7 = "'+folga7+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga8 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga8 = "'+folga8+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga9 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga9 = "'+folga9+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga10 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga10 = "'+folga10+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga11 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga11 = "'+folga11+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga12 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga12 = "'+folga12+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga13 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga13 = "'+folga13+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga14 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga14 = "'+folga14+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga15 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga15 = "'+folga15+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga16 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga16 = "'+folga16+'" Where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga17 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga17 = "'+folga17+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga18 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga18 = "'+folga18+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga19 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga19 = "'+folga19+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga20 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga20 = "'+folga20+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga21 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga21 = "'+folga21+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga22 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga22 = "'+folga22+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga23 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga23 = "'+folga23+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga24 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga24 = "'+folga24+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga25 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga25 = "'+folga25+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga26 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga26 = "'+folga26+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga27 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga27 = "'+folga27+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga28 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga28 = "'+folga28+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga29 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga29 = "'+folga29+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga30 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga30 = "'+folga30+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==39){var folga31 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga31 = "'+folga31+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	
}
modelescalaroosevelt.prototype.updateescalaroosevelttarde = function(valor, callback){

	if(valor.colunatarde ==9){var folga1 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga1 = "'+folga1+'"  where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==10){var folga2 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga2 = "'+folga2+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==11){var folga3 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga3 = "'+folga3+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==12){var folga4 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga4 = "'+folga4+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==13){var folga5 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga5 = "'+folga5+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==14){var folga6 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga6 = "'+folga6+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==15){var folga7 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga7 = "'+folga7+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==16){var folga8 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga8 = "'+folga8+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==17){var folga9 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga9 = "'+folga9+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==18){var folga10 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga10 = "'+folga10+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==19){var folga11 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga11 = "'+folga11+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==20){var folga12 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga12 = "'+folga12+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==21){var folga13 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga13 = "'+folga13+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==22){var folga14 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga14 = "'+folga14+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==23){var folga15 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga15 = "'+folga15+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==24){var folga16 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga16 = "'+folga16+'" Where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==25){var folga17 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga17 = "'+folga17+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==26){var folga18 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga18 = "'+folga18+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==27){var folga19 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga19 = "'+folga19+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==28){var folga20 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga20 = "'+folga20+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==29){var folga21 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga21 = "'+folga21+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==30){var folga22 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga22 = "'+folga22+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==31){var folga23 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga23 = "'+folga23+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==32){var folga24 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga24 = "'+folga24+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==33){var folga25 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga25 = "'+folga25+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==34){var folga26 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga26 = "'+folga26+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==35){var folga27 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga27 = "'+folga27+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==36){var folga28 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga28 = "'+folga28+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==37){var folga29 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga29 = "'+folga29+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==38){var folga30 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga30 = "'+folga30+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	if(valor.colunatarde ==39){var folga31 = valor.novoConteudotarde;this._conection.query('update folgaroosevelt set folga31 = "'+folga31+'" where idfolgaroosevelt = "'+valor.idfinaltarde+'"', callback);}
	
}
modelescalaroosevelt.prototype.updateescalarooseveltSN1 = function(valor, callback){

	if(valor.colunaSN1 ==9){var folga1 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga1 = "'+folga1+'"  where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==10){var folga2 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga2 = "'+folga2+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==11){var folga3 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga3 = "'+folga3+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==12){var folga4 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga4 = "'+folga4+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==13){var folga5 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga5 = "'+folga5+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==14){var folga6 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga6 = "'+folga6+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==15){var folga7 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga7 = "'+folga7+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==16){var folga8 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga8 = "'+folga8+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==17){var folga9 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga9 = "'+folga9+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==18){var folga10 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga10 = "'+folga10+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==19){var folga11 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga11 = "'+folga11+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==20){var folga12 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga12 = "'+folga12+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==21){var folga13 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga13 = "'+folga13+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==22){var folga14 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga14 = "'+folga14+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==23){var folga15 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga15 = "'+folga15+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==24){var folga16 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga16 = "'+folga16+'" Where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==25){var folga17 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga17 = "'+folga17+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==26){var folga18 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga18 = "'+folga18+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==27){var folga19 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga19 = "'+folga19+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==28){var folga20 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga20 = "'+folga20+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==29){var folga21 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga21 = "'+folga21+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==30){var folga22 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga22 = "'+folga22+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==31){var folga23 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga23 = "'+folga23+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==32){var folga24 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga24 = "'+folga24+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==33){var folga25 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga25 = "'+folga25+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==34){var folga26 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga26 = "'+folga26+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==35){var folga27 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga27 = "'+folga27+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==36){var folga28 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga28 = "'+folga28+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==37){var folga29 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga29 = "'+folga29+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==38){var folga30 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga30 = "'+folga30+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	if(valor.colunaSN1 ==39){var folga31 = valor.novoConteudoSN1;this._conection.query('update folgaroosevelt set folga31 = "'+folga31+'" where idfolgaroosevelt = "'+valor.idfinalSN1+'"', callback);}
	
}
modelescalaroosevelt.prototype.updateescalarooseveltSN2 = function(valor, callback){

	if(valor.colunaSN2 ==9){var folga1 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga1 = "'+folga1+'"  where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==10){var folga2 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga2 = "'+folga2+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==11){var folga3 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga3 = "'+folga3+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==12){var folga4 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga4 = "'+folga4+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==13){var folga5 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga5 = "'+folga5+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==14){var folga6 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga6 = "'+folga6+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==15){var folga7 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga7 = "'+folga7+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==16){var folga8 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga8 = "'+folga8+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==17){var folga9 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga9 = "'+folga9+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==18){var folga10 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga10 = "'+folga10+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==19){var folga11 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga11 = "'+folga11+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==20){var folga12 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga12 = "'+folga12+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==21){var folga13 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga13 = "'+folga13+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==22){var folga14 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga14 = "'+folga14+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==23){var folga15 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga15 = "'+folga15+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==24){var folga16 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga16 = "'+folga16+'" Where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==25){var folga17 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga17 = "'+folga17+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==26){var folga18 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga18 = "'+folga18+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==27){var folga19 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga19 = "'+folga19+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==28){var folga20 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga20 = "'+folga20+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==29){var folga21 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga21 = "'+folga21+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==30){var folga22 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga22 = "'+folga22+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==31){var folga23 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga23 = "'+folga23+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==32){var folga24 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga24 = "'+folga24+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==33){var folga25 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga25 = "'+folga25+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==34){var folga26 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga26 = "'+folga26+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==35){var folga27 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga27 = "'+folga27+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==36){var folga28 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga28 = "'+folga28+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==37){var folga29 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga29 = "'+folga29+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==38){var folga30 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga30 = "'+folga30+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	if(valor.colunaSN2 ==39){var folga31 = valor.novoConteudoSN2;this._conection.query('update folgaroosevelt set folga31 = "'+folga31+'" where idfolgaroosevelt = "'+valor.idfinalSN2+'"', callback);}
	
}
modelescalaroosevelt.prototype.updateescalarooseveltmaq = function(valor, callback){

	if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga1 = "'+folga1+'"  where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga2 = "'+folga2+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga3 = "'+folga3+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga4 = "'+folga4+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga5 = "'+folga5+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga6 = "'+folga6+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga7 = "'+folga7+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga8 = "'+folga8+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga9 = "'+folga9+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga10 = "'+folga10+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga11 = "'+folga11+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga12 = "'+folga12+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga13 = "'+folga13+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga14 = "'+folga14+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga15 = "'+folga15+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga16 = "'+folga16+'" Where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga17 = "'+folga17+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga18 = "'+folga18+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga19 = "'+folga19+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga20 = "'+folga20+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga21 = "'+folga21+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga22 = "'+folga22+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga23 = "'+folga23+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga24 = "'+folga24+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga25 = "'+folga25+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga26 = "'+folga26+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga27 = "'+folga27+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga28 = "'+folga28+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga29 = "'+folga29+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga30 = "'+folga30+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgaroosevelt set folga31 = "'+folga31+'" where idfolgaroosevelt = "'+valor.idfinal+'"', callback);}
	
}
modelescalaroosevelt.prototype.buscarescalamaqrooseveltdiurno = function(valor, callback){



	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.categoria = "'+valor.categoria+'" and esc.unidade = "Roosevelt" and func.setor = "'+valor.setor1+'"', callback);
}

modelescalaroosevelt.prototype.buscarescalamaqrooseveltnoturno = function(valor, callback){

	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and func.categoria = "'+valor.categoria+'" and esc.unidade = "Roosevelt" and func.setor = "'+valor.setor2+'"', callback);
}
modelescalaroosevelt.prototype.buscarescalaroosevelt = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalaroosevelt where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "Roosevelt"', callback);
}

modelescalaroosevelt.prototype.buscarregraescalaunicaroosevelt = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaroosevelt where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "Roosevelt"', callback);
}

modelescalaroosevelt.prototype.buscarescalamensalroosevelt = function(valor, callback){



	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt"', callback);
}

modelescalaroosevelt.prototype.buscarescalamensalroosevelttarde = function(valor, callback){



	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt"', callback);
}


modelescalaroosevelt.prototype.buscarescalatardesetor1 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Enfermeiro RT"', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor2 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="SCIH" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor3 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Acolhimento com Classificação" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor4 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Emergência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor5 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Azul" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor6 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Bordô" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor7 = function(valor, callback){



	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Apoio" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor8 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Gesso/Sutura" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor9 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Pediatria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor10 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Enfermaria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor11 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="CME" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor12 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Transporte" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor13 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Contigência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalatardesetor14 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialtarde+'" and  esc.datefinal = "'+valor.datafinaltarde+'" and esc.turno = "'+valor.turnotarde+'" and esc.unidade = "Roosevelt" and func.setor="Folguista" order by func.categoria asc', callback);
}
modelescalaroosevelt.prototype.buscarescalamanhasetor1 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Enfermeiro RT"', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor2 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="SCIH" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor3 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Acolhimento com Classificação" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor4 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Emergência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor5 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Azul" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor6 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Bordô" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor7 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Apoio" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor8 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Gesso/Sutura" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor9 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Pediatria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor10 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Enfermaria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor11 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="CME" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor12 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Transporte" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor13 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Contigência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalamanhasetor14 = function(valor, callback){


 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "Roosevelt" and func.setor="Folguista" order by func.categoria asc', callback);
}
modelescalaroosevelt.prototype.buscarescalamensalrooseveltSN1 = function(valor, callback){


  


	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt"', callback);
}


modelescalaroosevelt.prototype.buscarescalaSN1setor1 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Enfermeiro RT"', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor2 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="SCIH" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor3 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Acolhimento com Classificação" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor4 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Emergência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor5 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Azul" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor6 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Bordô" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor7 = function(valor, callback){


  


	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Apoio" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor8 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Gesso/Sutura" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor9 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Pediatria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor10 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Enfermaria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor11 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="CME" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor12 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Transporte" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor13 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Contigência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN1setor14 = function(valor, callback){


  

 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN1+'" and  esc.datefinal = "'+valor.datafinalSN1+'" and esc.turno = "'+valor.turnoSN1+'" and esc.unidade = "Roosevelt" and func.setor="Folguista" order by func.categoria asc', callback);
}
modelescalaroosevelt.prototype.buscarescalamensalrooseveltSN2 = function(valor, callback){


  
 

	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt"', callback);
}


modelescalaroosevelt.prototype.buscarescalaSN2setor1 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Enfermeiro RT"', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor2 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="SCIH" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor3 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Acolhimento com Classificação" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor4 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Emergência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor5 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Azul" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor6 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Equipe de Referência Bordô" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor7 = function(valor, callback){


  
 

	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Apoio" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor8 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Sala de Gesso/Sutura" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor9 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Pediatria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor10 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Enfermaria" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor11 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="CME" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor12 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Transporte" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor13 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Contigência" order by func.categoria asc', callback);
}

modelescalaroosevelt.prototype.buscarescalaSN2setor14 = function(valor, callback){


  
 
 
	this._conection.query('select * from folgaroosevelt f inner join funcionariosroosevelt func on f.idfuncionarios=func.idfuncionariosroosevelt inner join escalaroosevelt esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicialSN2+'" and  esc.datefinal = "'+valor.datafinalSN2+'" and esc.turno = "'+valor.turnoSN2+'" and esc.unidade = "Roosevelt" and func.setor="Folguista" order by func.categoria asc', callback);
}
module.exports = function(){
	return modelescalaroosevelt;
}