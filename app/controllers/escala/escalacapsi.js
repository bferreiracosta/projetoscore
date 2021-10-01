module.exports.escalacapsi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacapsi", {id : result,  msg: ''});
	});
}
module.exports.updateescalacapsi = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);
	var valor =  req.query;



		modelescalacapsi.updateescalacapsi(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalacapsitarde = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);
	var valor =  req.query;



		modelescalacapsi.updateescalacapsitarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsi.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalacapsi?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "Caps I";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacapsi.buscarregraescalaunicacapsi(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsi.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacapsi?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacapsi", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacapsi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "Caps I";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalacapsi.buscarregraescalaunicacapsi(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsi.criarescalacapsi(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalacapsi.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalacapsi.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalacapsi?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacapsi", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalcapsi = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamensalcapsi(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalcapsimulti = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamensalcapsimulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalacapsi = new application.app.model.escala.modelescalacapsi(application);

	var valor = req.query;

	
	modelescalacapsi.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}