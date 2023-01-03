module.exports.escalacapsad = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacapsad", {id : result,  msg: ''});
	});
}
module.exports.updateescalacapsad = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var valor =  req.query;

	
	modelescalacapsad.buscarsituacaocapsad(valor, function(error, resultado){
		modelescalacapsad.updateescalacapsad(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacapsad.updateferias(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var id = req.body.idusuario1;
	var unidade = "Caps AD";
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var ano = req.body.dataano;
	var turno = req.body.turno;

	modelescalacapsad.buscarregraescalaunicacapsad(unidade, turno, dateinicial, datefinal,ano,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsad.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacapsad?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacapsad", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacapsad = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==1){
		var unidade = "Caps AD";
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
		var unidade = "Caps AD";
	} 
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalacapsad.buscarregraescalaunicacapsad(unidade, turno, dateinicial, datefinal, ano, function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacapsad.criarescalacapsad(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalacapsad.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalacapsad.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalacapsad?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacapsad", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalcapsad = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamensalcapsad(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


module.exports.buscarescalamensalcapsadtarde = function(application, req, res){
	

	var modelescalacapsad = new application.app.model.escala.modelescalacapsad(application);

	var valor = req.query;

	
	modelescalacapsad.buscarescalamensalcapsadtarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}


