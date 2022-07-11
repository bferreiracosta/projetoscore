module.exports.escalacapsnorte = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacapsnorte", {id : result,  msg: ''});
	});
}
module.exports.updateescalacapsnorte = function(application, req, res){
	

	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);
	var valor =  req.query;

	
	modelescalacapsnorte.buscarsituacaocapsnorte(valor, function(error, resultado){
		modelescalacapsnorte.updateescalacapsnorte(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsnorte.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "Caps Norte";
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
		var unidade = "Caps Norte";
	} 
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacapsnorte.buscarregraescalaunicacapsnorte(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsnorte.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacapsnorte?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacapsnorte", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacapsnorte = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Caps Norte";
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
		var unidade = "Caps Norte";
	} 
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalacapsnorte.buscarregraescalaunicacapsnorte(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsnorte.criarescalacapsnorte(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalacapsnorte.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalacapsnorte.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalacapsnorte?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacapsnorte", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalcapsnorte = function(application, req, res){
	

	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);

	var valor = req.query;

	
	modelescalacapsnorte.buscarescalamensalcapsnorte(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensalcapsnortetarde = function(application, req, res){
	

	var modelescalacapsnorte = new application.app.model.escala.modelescalacapsnorte(application);

	var valor = req.query;

	
	modelescalacapsnorte.buscarescalamensalcapsnortetarde(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}


