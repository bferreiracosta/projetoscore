module.exports.escalaco = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaco = new application.app.model.escala.modelescalaco(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaco", {id : result,  msg: ''});
	});
}
module.exports.updateescalaco = function(application, req, res){
	

	var modelescalaco = new application.app.model.escala.modelescalaco(application);
	var valor =  req.query;

	
	modelescalaco.buscarsituacaoco(valor, function(error, resultado){
		modelescalaco.updateescalaco(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaco = new application.app.model.escala.modelescalaco(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaco.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaco = new application.app.model.escala.modelescalaco(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==15){
		var unidade = "CO";
	}
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalaco.buscarregraescalaunicaco(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaco.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaco?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaco", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaco = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaco = new application.app.model.escala.modelescalaco(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==15){
		var unidade = "CO";
	}
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalaco.buscarregraescalaunicaco(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaco.criarescalaco(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalaco.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalaco.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalaco?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaco", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalco = function(application, req, res){
	

	var modelescalaco = new application.app.model.escala.modelescalaco(application);

	var valor = req.query;

	
	modelescalaco.buscarescalamensalco(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


