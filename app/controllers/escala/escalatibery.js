module.exports.escalatibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalatibery", {id : result,  msg: ''});
	});
}
module.exports.updateescalatibery = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var valor =  req.query;



		modelescalatibery.updateescalatibery(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalatiberymaq = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var valor =  req.query;



		modelescalatibery.updateescalatiberymaq(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.buscarescalamaqtiberydiurno = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;
	
	modelescalatibery.buscarescalamaqtiberydiurno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqtiberynoturno = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;
	modelescalatibery.buscarescalamaqtiberynoturno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalatibery.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalatibery?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalatiberytarde = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var valor =  req.query;


		modelescalatibery.updateescalatiberytarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiastarde = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalatibery.updateferiastarde(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalatibery?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.updateescalatiberySN1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var valor =  req.query;



		modelescalatibery.updateescalatiberySN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN1 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalatibery.updateferiasSN1(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalatibery?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalatiberySN2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var valor =  req.query;



		modelescalatibery.updateescalatiberySN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN2 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalatibery.updateferiasSN2(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalatibery?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
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

	modelescalatibery.buscarregraescalaunicatibery(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalatibery.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalatibery?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalatibery", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalatibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);
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

	modelescalatibery.buscarregraescalaunicatibery(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalatibery.criarescalatibery(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalatibery.buscafuncionario(turno, function(error, resultado2){
			// for(var i = 0; i< resultado2.length; i++){
				modelescalatibery.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
				// }
			res.redirect("/escalatibery?id=" + result[0].id_usuario);	
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalatibery", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensaltibery = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltibery(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensaltiberytarde = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberytarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;
	
	
	modelescalatibery.buscarescalatardesetor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalatardesetor2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor3 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor4 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor5 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor6 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor7 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor8 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor9 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor10 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor11 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor12 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor13 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor14 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalatardesetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensaltiberySN1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberySN1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;
	
	
	modelescalatibery.buscarescalaSN1setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN1setor2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor3 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor4 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor5 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor6 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor7 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor8 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor9 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor10 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor11 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor12 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor13 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor14 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN1setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensaltiberySN2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalamensaltiberySN2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor1 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;
	
	
	modelescalatibery.buscarescalaSN2setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN2setor2 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor3 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor4 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor5 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor6 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor7 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor8 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor9 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor10 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor11 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor12 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor13 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor14 = function(application, req, res){
	

	var modelescalatibery = new application.app.model.escala.modelescalatibery(application);

	var valor = req.query;

	
	modelescalatibery.buscarescalaSN2setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}