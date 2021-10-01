module.exports.escalacer = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacer", {id : result,  msg: ''});
	});
}
module.exports.updateescalacertarde = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var valor =  req.query;



		modelescalacer.updateescalacertarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacer.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalacer?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "CENTRO ESPECIALIZADO EM REABILITAÇÃO";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacer.buscarregraescalaunicacer(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacer.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacer?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacer", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacer = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "CENTRO ESPECIALIZADO EM REABILITAÇÃO";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalacer.buscarregraescalaunicacer(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacer.criarescalacer(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalacer.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalacer.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalacer?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacer", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalcer = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);

	var valor = req.query;

	
	modelescalacer.buscarescalamensalcer(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalcermulti = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);

	var valor = req.query;

	
	modelescalacer.buscarescalamensalcermulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1cer = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);

	var valor = req.query;

	
	modelescalacer.buscarescalamanhasetor1cer(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor2cer = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);

	var valor = req.query;

	
	modelescalacer.buscarescalamanhasetor2cer(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

