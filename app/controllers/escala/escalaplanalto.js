module.exports.escalaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaplanalto", {id : result,  msg: ''});
	});
}
module.exports.updateescalaplanalto = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var valor =  req.query;

	
	modelescalaplanalto.buscarsituacaoplanalto(valor, function(error, resultado){
		modelescalaplanalto.updateescalaplanalto(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaplanalto.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "Planalto";
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
	modelescalaplanalto.buscarregraescalaunicaplanalto(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaplanalto.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaplanalto", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Planalto";
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
	modelescalaplanalto.buscarregraescalaunicaplanalto(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaplanalto.criarescalaplanalto(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalaplanalto.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalaplanalto.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaplanalto", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalplanalto = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanalto(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensalplanaltotarde = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltotarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalplanaltosn1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltosn1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalplanaltosn2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltosn2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalplanaltomaq = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltomaq(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

