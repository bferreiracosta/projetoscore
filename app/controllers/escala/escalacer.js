module.exports.escalacer = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalacer", {id : result,  msg: ''});
	});
}
module.exports.updateescalacer = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var valor =  req.query;

	
	modelescalacer.buscarsituacaocer(valor, function(error, resultado){
		modelescalacer.updateescalacer(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
}

module.exports.updateferiascer = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var idusuario = req.body.idusuario;
	var valor =  req.query;
	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalacer.updateferiascer(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	});
}

module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var id = req.body.idusuario1;
	var campo = req.body.uni;
	var rt = req.body.rt;
	var supervisao = req.body.supervisao;
	var cida = req.body.cida;
	
	if(campo==16665){
		var unidade = "CER";
	}
	var dateinicial = req.body.datainicial;
	var datefinal = req.body.datafinal;
	var dateano = req.body.dataano;
	var turno = req.body.turno;
	modelescalacer.buscarregraescalaunicacer(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacer.validarescala(unidade, turno, dateinicial, datefinal, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalacer?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalacer", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalacer = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalacer = new application.app.model.escala.modelescalacer(application);
	var id = req.body.idusuario;
	var turno = req.body.turno;
	var campo = req.body.campo;

	if(campo==16){
		var unidade = "CER";
	}
	var dateinicial = req.body.dateinicial;
	var datefinal = req.body.datefinal;
	var ano = req.body.inputcriarano;
	modelescalacer.buscarregraescalaunicacer(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalacer.criarescalacer(unidade, turno, dateinicial, datefinal,ano, function(error, resultdoinsert){
					modelescalacer.buscafuncionario(turno, function(error, resultado2){
						// for(var i = 0; i< resultado2.length; i++){
							modelescalacer.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
						// }
					res.redirect("/escalacer?id=" + result[0].id_usuario);	
				})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalacer", {id : result, msg: mensage});
			});
		}
		
	})
}


module.exports.buscarescalamensalcer = function(application, req, res){
	

	var modelescalacer = new application.app.model.escala.modelescalacer(application);

	var valor = req.query;

	
	modelescalacer.buscarescalamensalcer(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}


