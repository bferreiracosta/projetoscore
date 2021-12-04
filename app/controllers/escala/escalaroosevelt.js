module.exports.escalaroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaroosevelt", {id : result,  msg: ''});
	});
}
module.exports.updateescalaroosevelt = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var valor =  req.query;

	
	modelescalaroosevelt.buscarsituacaoroosevelt(valor, function(error, resultado){
		modelescalaroosevelt.updateescalaroosevelt(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaroosevelt.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "Roosevelt";
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
	modelescalaroosevelt.buscarregraescalaunicaroosevelt(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaroosevelt.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaroosevelt?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaroosevelt", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Roosevelt";
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
	modelescalaroosevelt.buscarregraescalaunicaroosevelt(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaroosevelt.criarescalaroosevelt(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalaroosevelt.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalaroosevelt.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalaroosevelt?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaroosevelt", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalroosevelt = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalroosevelt(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensalroosevelttarde = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalroosevelttarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalrooseveltsn1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalrooseveltsn1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalrooseveltsn2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalrooseveltsn2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalrooseveltmaq = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalrooseveltmaq(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

