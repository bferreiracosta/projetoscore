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

	
	modelescalacapsoeste.buscarsituacaocapsoeste(valor, function(error, resultado){
		modelescalacapsoeste.updateescalacapsoeste(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsoeste.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
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
	
	if(campo==1){
		var unidade = "Caps Oeste";
	}else 
	if(campo==2){
		var unidade = "Luizote";
	}else 
	if(campo==3){
		var unidade = "Martins";
	}else 
	if(campo==4){
		var unidade = "Roosevelt";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Caps Oeste";
	} 
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacapsoeste.buscarregraescalaunicacapsoeste(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsoeste.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
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

	if(campo==1){
		var unidade = "Caps Oeste";
	}else 
	if(campo==2){
		var unidade = "Luizote";
	}else 
	if(campo==3){
		var unidade = "Martins";
	}else 
	if(campo==4){
		var unidade = "Roosevelt";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Caps Oeste";
	} 
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalacapsoeste.buscarregraescalaunicacapsoeste(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsoeste.criarescalacapsoeste(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
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


module.exports.buscarescalamensalcapsoestetarde = function(application, req, res){
	

	var modelescalacapsoeste = new application.app.model.escala.modelescalacapsoeste(application);

	var valor = req.query;

	
	modelescalacapsoeste.buscarescalamensalcapsoestetarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}


