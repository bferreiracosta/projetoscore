module.exports.escalacapsad = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacapsad", {id : result,  msg: ''});
	});
}
module.exports.updateescalacapsad = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var valor =  req.query;



		modelescalacapsad.updateescalacapsad(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalacapsadtarde = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var valor =  req.query;



		modelescalacapsad.updateescalacapsadtarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsad.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalacapsad?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "Caps AD";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacapsad.buscarregraescalaunicacapsad(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsad.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacapsad?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacapsad", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacapsad = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "Caps AD";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalacapsad.buscarregraescalaunicacapsad(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsad.criarescalacapsad(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalacapsad.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalacapsad.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalacapsad?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacapsad", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalcapsad = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamensalcapsad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalcapsadmulti = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamensalcapsadmulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}