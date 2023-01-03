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

	
	modelescalasad.buscarsituacaosad(valor, function(error, resultado){
		modelescalasad.updateescalasad(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalasad = new application.app.model.escala.modelescalasad(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalasad.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
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
	
	if(campo==1){
		var unidade = "SAD";
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
		var unidade = "SAD";
	} 
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var ano = req.body.dataano;
	var turno = req.body.turno;
	modelescalasad.buscarregraescalaunicasad(unidade, turno, dateinicial, datefinal,ano,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalasad.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
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

	if(campo==1){
		var unidade = "SAD";
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
		var unidade = "SAD";
	} 
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalasad.buscarregraescalaunicasad(unidade, turno, dateinicial, datefinal,ano,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalasad.criarescalasad(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
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


module.exports.buscarescalamensalsadtarde = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamensalsadtarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalsadsn1 = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamensalsadsn1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalsadsn2 = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamensalsadsn2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalsadmaq = function(application, req, res){
	

	var modelescalasad = new application.app.model.escala.modelescalasad(application);

	var valor = req.query;

	
	modelescalasad.buscarescalamensalsadmaq(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

