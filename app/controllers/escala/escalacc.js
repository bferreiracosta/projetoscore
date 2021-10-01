module.exports.escalacc = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacc = new application.app.model.escala.modelescalacc(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacc", {id : result,  msg: ''});
	});
}
module.exports.updateescalacctarde = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);
	var valor =  req.query;



		modelescalacc.updateescalacctarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacc = new application.app.model.escala.modelescalacc(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacc.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalacc?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacc = new application.app.model.escala.modelescalacc(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "Centro de Convivência";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacc.buscarregraescalaunicacc(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacc.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacc?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacc", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacc = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacc = new application.app.model.escala.modelescalacc(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "Centro de Convivência";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalacc.buscarregraescalaunicacc(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacc.criarescalacc(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalacc.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalacc.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalacc?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacc", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalcc = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamensalcc(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalccmulti = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamensalccmulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1cc = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamanhasetor1cc(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor2cc = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamanhasetor2cc(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor3cc = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamanhasetor3cc(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor4cc = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamanhasetor4cc(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor5cc = function(application, req, res){
	

	var modelescalacc = new application.app.model.escala.modelescalacc(application);

	var valor = req.query;

	
	modelescalacc.buscarescalamanhasetor5cc(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

