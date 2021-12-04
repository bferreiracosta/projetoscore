module.exports.escalamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalamartins", {id : result,  msg: ''});
	});
}
module.exports.updateescalamartins = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var valor =  req.query;

	
	modelescalamartins.buscarsituacaomartins(valor, function(error, resultado){
		modelescalamartins.updateescalamartins(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamartins.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "Martins";
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

	modelescalamartins.buscarregraescalaunicamartins(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamartins.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalamartins?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalamartins", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Martins";
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
	modelescalamartins.buscarregraescalaunicamartins(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamartins.criarescalamartins(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalamartins.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalamartins.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalamartins?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalamartins", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalmartins = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartins(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensalmartinstarde = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinstarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmartinssn1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinssn1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmartinssn2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinssn2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmartinsmaq = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinsmaq(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

