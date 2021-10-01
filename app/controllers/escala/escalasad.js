module.exports.escalasad = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalasad", {id : result,  msg: ''});
	});
}
module.exports.updateescalasad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasad(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalasad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasad(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalasadtarde = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasadtarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalasadSN1 = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasadSN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalasadSN2 = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasadSN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalasadmultimanha = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasadmultimanha(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalasadmultitarde = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var valor =  req.query;



		modelescalasad.updateescalasadmultitarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalasad.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalasad?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "Melhor em Casa";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalasad.buscarregraescalaunicasad(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalasad.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalasad?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalasad", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalasad = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "Melhor em Casa";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalasad.buscarregraescalaunicasad(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalasad.criarescalasad(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalasad.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalasad.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalasad?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalasad", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalsad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamensalsad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalsadmulti = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamensalsadmulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamanhasetor1sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor1sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor2sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor3sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor4sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor5sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor6sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor7sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor8sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor9sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor10sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor11sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor12sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor13sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor14sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor15sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor15sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor16sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor16sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor17sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor17sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor18sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor18sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor19sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor19sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor20sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor20sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor21sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor21sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor22sad = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamanhasetor22sad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

