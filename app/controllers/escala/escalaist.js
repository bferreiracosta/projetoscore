module.exports.escalaist = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaist", {id : result,  msg: ''});
	});
}
module.exports.updateescalaist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var valor =  req.query;

	
	modelescalaist.buscarsituacaoist(valor, function(error, resultado){
		modelescalaist.updateescalaist(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
}

module.exports.updateferiasist = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;
	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaist.updateferiasist(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==16665){
		var unidade = "IST";
	}
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalaist.buscarregraescalaunicaist(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaist.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaist?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaist", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaist = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaist = new application.app.model.escala.modelescalaist(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==16){
		var unidade = "IST";
	}
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalaist.buscarregraescalaunicaist(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaist.criarescalaist(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalaist.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalaist.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalaist?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaist", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalist = function(application, req, res){
	

	var modelescalaist = new application.app.model.escala.modelescalaist(application);

	var valor = req.query;

	
	modelescalaist.buscarescalamensalist(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


