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
		];
	}

	this._conection.query(sql, [values], callback);	

}
modelescalaco.prototype.updateferias = function(valor, callback){

	this._conection.query('update folgaco set folga1="'+valor.folga1+'",folga2="'+valor.folga2+'",folga3="'+valor.folga3+'",folga4="'+valor.folga4+'",folga5="'+valor.folga5+'",folga6="'+valor.folga6+'",folga7="'+valor.folga7+'",folga8="'+valor.folga8+'",folga9="'+valor.folga9+'",folga10="'+valor.folga10+'",folga11="'+valor.folga11+'",folga12="'+valor.folga12+'",folga13="'+valor.folga13+'",folga14="'+valor.folga14+'",folga15="'+valor.folga15+'",folga16="'+valor.folga16+'",folga17="'+valor.folga17+'",folga18="'+valor.folga18+'",folga19="'+valor.folga19+'",folga20="'+valor.folga20+'",folga21="'+valor.folga21+'",folga22="'+valor.folga22+'",folga23="'+valor.folga23+'",folga24="'+valor.folga24+'",folga25="'+valor.folga25+'",folga26="'+valor.folga26+'",folga27="'+valor.folga27+'",folga28="'+valor.folga28+'",folga29="'+valor.folga29+'",folga30="'+valor.folga30+'",folga31="'+valor.folga31+'", situacao = "'+valor.inputsituacao+'", dateiniciosituacao = "'+valor.dateinicialsituacao+'", datefinalsituacao = "'+valor.datefinalsituacao+'" where idfolgaco = "'+valor.idfuncionario+'"', callback);
}


modelescalaco.prototype.criarescalaco = function(unidade, turno, dateinicial, datefinal, ano, callback){
	
	this._conection.query('insert into escalaco set unidade="CO", turno="'+turno+'", dateinicial="'+dateinicial+'", datefinal="'+datefinal+'", dateano= "'+ano+'",rt="false",supervisao="false",cida="false"', callback);
}

modelescalaco.prototype.validarescala = function(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, callback){
	
	this._conection.query('update escalaco set rt="'+rt+'",supervisao="'+supervisao+'",cida="'+cida+'" where  unidade="CO" and turno="'+turno+'" and dateinicial="'+dateinicial+'" and datefinal="'+datefinal+'"', callback);
}

modelescalaco.prototype.buscarsituacaoco = function(valor, callback){

	this._conection.query('select situacao,dateiniciosituacao from folgaco where idfolgaco = "'+valor.idfinal+'"', callback )
}

modelescalaco.prototype.updateescalaco = function(valor,ferias, callback){
	if( ferias[0].situacao == null || new Date(ferias[0].dateiniciosituacao) > 16/11/2021){
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
	else{
		if(valor.coluna ==8){var folga1 = valor.novoConteudo;this._conection.query('update folgaco set folga1 = "'+folga1+'"  where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==9){var folga2 = valor.novoConteudo;this._conection.query('update folgaco set folga2 = "'+folga2+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==10){var folga3 = valor.novoConteudo;this._conection.query('update folgaco set folga3 = "'+folga3+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==11){var folga4 = valor.novoConteudo;this._conection.query('update folgaco set folga4 = "'+folga4+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==12){var folga5 = valor.novoConteudo;this._conection.query('update folgaco set folga5 = "'+folga5+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==13){var folga6 = valor.novoConteudo;this._conection.query('update folgaco set folga6 = "'+folga6+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==14){var folga7 = valor.novoConteudo;this._conection.query('update folgaco set folga7 = "'+folga7+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==15){var folga8 = valor.novoConteudo;this._conection.query('update folgaco set folga8 = "'+folga8+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==16){var folga9 = valor.novoConteudo;this._conection.query('update folgaco set folga9 = "'+folga9+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==17){var folga10 = valor.novoConteudo;this._conection.query('update folgaco set folga10 = "'+folga10+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==18){var folga11 = valor.novoConteudo;this._conection.query('update folgaco set folga11 = "'+folga11+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==19){var folga12 = valor.novoConteudo;this._conection.query('update folgaco set folga12 = "'+folga12+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==20){var folga13 = valor.novoConteudo;this._conection.query('update folgaco set folga13 = "'+folga13+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==21){var folga14 = valor.novoConteudo;this._conection.query('update folgaco set folga14 = "'+folga14+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==22){var folga15 = valor.novoConteudo;this._conection.query('update folgaco set folga15 = "'+folga15+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==23){var folga16 = valor.novoConteudo;this._conection.query('update folgaco set folga16 = "'+folga16+'" Where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==24){var folga17 = valor.novoConteudo;this._conection.query('update folgaco set folga17 = "'+folga17+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==25){var folga18 = valor.novoConteudo;this._conection.query('update folgaco set folga18 = "'+folga18+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==26){var folga19 = valor.novoConteudo;this._conection.query('update folgaco set folga19 = "'+folga19+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==27){var folga20 = valor.novoConteudo;this._conection.query('update folgaco set folga20 = "'+folga20+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==28){var folga21 = valor.novoConteudo;this._conection.query('update folgaco set folga21 = "'+folga21+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==29){var folga22 = valor.novoConteudo;this._conection.query('update folgaco set folga22 = "'+folga22+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==30){var folga23 = valor.novoConteudo;this._conection.query('update folgaco set folga23 = "'+folga23+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==31){var folga24 = valor.novoConteudo;this._conection.query('update folgaco set folga24 = "'+folga24+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==32){var folga25 = valor.novoConteudo;this._conection.query('update folgaco set folga25 = "'+folga25+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==33){var folga26 = valor.novoConteudo;this._conection.query('update folgaco set folga26 = "'+folga26+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==34){var folga27 = valor.novoConteudo;this._conection.query('update folgaco set folga27 = "'+folga27+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==35){var folga28 = valor.novoConteudo;this._conection.query('update folgaco set folga28 = "'+folga28+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==36){var folga29 = valor.novoConteudo;this._conection.query('update folgaco set folga29 = "'+folga29+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==37){var folga30 = valor.novoConteudo;this._conection.query('update folgaco set folga30 = "'+folga30+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	if(valor.coluna ==38){var folga31 = valor.novoConteudo;this._conection.query('update folgaco set folga31 = "'+folga31+'" where idfolgaco = "'+valor.idfinal+'"', callback);}
	}
	
	
}
modelescalaco.prototype.buscarescalaco = function(valor, callback){
	var datainicial = valor.datainicial;
    var datafinal = valor.datafinal;
	var turno = valor.turno;

	this._conection.query('select * from escalaco where datainicial = "'+datainicial+'" and  datafinal = "'+datafinal+'" and turno = "'+turno+'" and unidade = "CO"', callback);
}

modelescalaco.prototype.buscarregraescalaunicaco = function(campo, turno, dateinicial, datefinal, callback){



	this._conection.query('select * from escalaco where dateinicial = "'+dateinicial+'" and  datefinal = "'+datefinal+'" and turno = "'+turno+'" and unidade = "CO"', callback);
}

modelescalaco.prototype.buscarescalamensalco = function(valor, callback){

	this._conection.query('select * from folgaco f inner join funcionariosco func on f.idfuncionarios=func.idfuncionariosco inner join escalaco esc on f.idescala = esc.idescala where esc.dateinicial = "'+valor.datainicial+'" and  esc.datefinal = "'+valor.datafinal+'" and  esc.dateano = "'+valor.ano+'" and esc.turno = "'+valor.turno+'" and esc.unidade = "CO"', callback);
}

module.exports = function(){
	return modelescalaco;
}