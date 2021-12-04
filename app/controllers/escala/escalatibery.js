module.exports.escalatibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalatibery", {id : result,  msg: ''});
	});
}
module.exports.updateescalatibery = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var valor =  req.query;

	
	modelescalatibery.buscarsituacaotibery(valor, function(error, resultado){
		modelescalatibery.updateescalatibery(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalatibery.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "Tibery";
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
		var unidade = "Morumbi";
	} 
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalatibery.buscarregraescalaunicatibery(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalatibery.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalatibery?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalatibery", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalatibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Tibery";
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
		var unidade = "Morumbi";
	} 
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalatibery.buscarregraescalaunicatibery(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalatibery.criarescalatibery(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalatibery.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalatibery.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalatibery?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalatibery", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensaltibery = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltibery(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensaltiberytarde = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberytarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensaltiberysn1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberysn1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensaltiberysn2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberysn2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensaltiberymaq = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberymaq(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

