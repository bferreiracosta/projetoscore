module.exports.escalaist = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaist", {id : result,  msg: ''});
	});
}
module.exports.updateescalaisttarde = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var valor =  req.query;



		modelescalaist.updateescalaisttarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaist.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaist?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "IST/AIDS";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalaist.buscarregraescalaunicaist(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaist.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaist?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaist", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaist = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "IST/AIDS";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalaist.buscarregraescalaunicaist(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaist.criarescalaist(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalaist.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalaist.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalaist?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaist", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamensalist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalistmulti = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;
	
	modelescalaist.buscarescalamensalistmulti(valor,function(error, resultado){
	
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor1ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor2ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor2ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor3ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor3ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor4ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor4ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor5ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor5ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamanhasetor6ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor6ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamanhasetor7ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor7ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamanhasetor8ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor8ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor9ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor10ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor10ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor11ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor12ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13ist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamanhasetor13ist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


