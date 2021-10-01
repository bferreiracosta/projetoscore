module.exports.escalacapsleste = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacapsleste", {id : result,  msg: ''});
	});
}
module.exports.updateescalacapsleste = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);
	var valor =  req.query;



		modelescalacapsleste.updateescalacapsleste(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalacapslestetarde = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);
	var valor =  req.query;



		modelescalacapsleste.updateescalacapslestetarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsleste.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalacapsleste?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "Caps Leste";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacapsleste.buscarregraescalaunicacapsleste(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsleste.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacapsleste?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacapsleste", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacapsleste = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "Caps Leste";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalacapsleste.buscarregraescalaunicacapsleste(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsleste.criarescalacapsleste(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalacapsleste.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalacapsleste.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalacapsleste?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacapsleste", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalcapsleste = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamensalcapsleste(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalcapslestemulti = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamensalcapslestemulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor15 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor16 = function(application, req, res){
	

	var modelescalacapsleste = new application.app.model.escala.modelescalacapsleste(application);

	var valor = req.query;

	
	modelescalacapsleste.buscarescalamanhasetor16(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}