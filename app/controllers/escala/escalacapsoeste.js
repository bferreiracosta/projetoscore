module.exports.escalacapsoeste = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacapsoeste", {id : result,  msg: ''});
	});
}
module.exports.updateescalacapsoeste = function(application, req, res){
	

	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);
	var valor =  req.query;



		modelescalacapsoeste.updateescalacapsoeste(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsoeste.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalacapsoeste?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var unidade = "Caps Oeste";
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacapsoeste.buscarregraescalaunicacapsoeste(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsoeste.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacapsoeste?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacapsoeste", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacapsoeste = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

		var unidade = "Caps Oeste";

	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;

	modelescalacapsoeste.buscarregraescalaunicacapsoeste(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsoeste.criarescalacapsoeste(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalacapsoeste.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalacapsoeste.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalacapsoeste?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacapsoeste", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamensalcapsoeste = function(application, req, res){
	

	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);

	var valor = req.query;

	
	modelescalacapsoeste.buscarescalamensalcapsoeste(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalcapsoestemulti = function(application, req, res){
	

	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);

	var valor = req.query;

	
	modelescalacapsoeste.buscarescalamensalcapsoestemulti(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
