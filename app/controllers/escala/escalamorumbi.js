module.exports.escalamorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalamorumbi", {id : result,  msg: ''});
	});
}
module.exports.updateescalamorumbi = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var valor =  req.query;

	
	modelescalamorumbi.buscarsituacaomorumbi(valor, function(error, resultado){
		modelescalamorumbi.updateescalamorumbi(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamorumbi.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==1){
		var unidade = "Morumbi";
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
	modelescalamorumbi.buscarregraescalaunicamorumbi(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamorumbi.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalamorumbi?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalamorumbi", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalamorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Morumbi";
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
	modelescalamorumbi.buscarregraescalaunicamorumbi(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamorumbi.criarescalamorumbi(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalamorumbi.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalamorumbi.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalamorumbi?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalamorumbi", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalmorumbi = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbi(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensalmorumbitarde = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbitarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmorumbisn1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbisn1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmorumbisn2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbisn2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmorumbimaq = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbimaq(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}

