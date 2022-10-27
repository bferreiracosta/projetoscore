module.exports.escalasiate = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalasiate", {id : result,  msg: ''});
	});
}
module.exports.updateescalasiate = function(application, req, res){
	

	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);
	var valor =  req.query;

	
	modelescalasiate.buscarsituacaosiate(valor, function(error, resultado){
		modelescalasiate.updateescalasiate(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferiasSIATE = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalasiate.updateferiasSIATE(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "siate";
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
	modelescalasiate.buscarregraescalaunicasiate(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalasiate.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalasiate?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalasiate", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalasiate = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "siate";
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
	modelescalasiate.buscarregraescalaunicasiate(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalasiate.criarescalasiate(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalasiate.buscafuncionario(turno, function(error, resultado2){
						
							modelescalasiate.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						
					res.redirect("/escalasiate?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalasiate", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalsiate = function(application, req, res){
	

	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);

	var valor = req.query;

	
	modelescalasiate.buscarescalamensalsiate(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmedicosiate = function(application, req, res){
	

	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);

	var valor = req.query;

	
	modelescalasiate.buscarescalamensalmedicosiate(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensaltecnicosiate = function(application, req, res){
	

	var modelescalasiate = new application.app.model.escala.modelescalasiate(application);

	var valor = req.query;

	
	modelescalasiate.buscarescalamensaltecnicosiate(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}