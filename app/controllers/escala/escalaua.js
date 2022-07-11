module.exports.escalaua = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaua = new application.app.model.escala.modelescalaua(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaua", {id : result,  msg: ''});
	});
}
module.exports.updateescalaua = function(application, req, res){
	

	var modelescalaua = new application.app.model.escala.modelescalaua(application);
	var valor =  req.query;

	
	modelescalaua.buscarsituacaoua(valor, function(error, resultado){
		modelescalaua.updateescalaua(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
}

module.exports.updateferiasua = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaua = new application.app.model.escala.modelescalaua(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;
	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaua.updateferiasua(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaua = new application.app.model.escala.modelescalaua(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==16665){
		var unidade = "UA";
	}
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalaua.buscarregraescalaunicaua(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaua.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaua?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaua", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaua = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaua = new application.app.model.escala.modelescalaua(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==16){
		var unidade = "UA";
	}
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalaua.buscarregraescalaunicaua(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaua.criarescalaua(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalaua.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalaua.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalaua?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaua", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalua = function(application, req, res){
	

	var modelescalaua = new application.app.model.escala.modelescalaua(application);

	var valor = req.query;

	
	modelescalaua.buscarescalamensalua(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


