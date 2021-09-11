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



		modelescalaroosevelt.updateescalaroosevelt(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalarooseveltmaq = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var valor =  req.query;



		modelescalaroosevelt.updateescalarooseveltmaq(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.buscarescalamaqrooseveltdiurno = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;
	
	modelescalaroosevelt.buscarescalamaqrooseveltdiurno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqrooseveltnoturno = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;
	modelescalaroosevelt.buscarescalamaqrooseveltnoturno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaroosevelt.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaroosevelt?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalaroosevelttarde = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var valor =  req.query;


		modelescalaroosevelt.updateescalaroosevelttarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiastarde = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaroosevelt.updateferiastarde(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaroosevelt?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.updateescalarooseveltSN1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var valor =  req.query;



		modelescalaroosevelt.updateescalarooseveltSN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN1 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaroosevelt.updateferiasSN1(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaroosevelt?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalarooseveltSN2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var valor =  req.query;



		modelescalaroosevelt.updateescalarooseveltSN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN2 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaroosevelt.updateferiasSN2(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaroosevelt?id=" + result[0].id_usuario);	
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

	modelescalaroosevelt.buscarregraescalaunicaroosevelt(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaroosevelt.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
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

	modelescalaroosevelt.buscarregraescalaunicaroosevelt(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaroosevelt.criarescalaroosevelt(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
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

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
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
module.exports.buscarescalatardesetor1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;
	
	
	modelescalaroosevelt.buscarescalatardesetor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalatardesetor2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor3 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor4 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor5 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor6 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor7 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor8 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor9 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor10 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor11 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor12 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor13 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor14 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalatardesetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalrooseveltSN1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalrooseveltSN1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;
	
	
	modelescalaroosevelt.buscarescalaSN1setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN1setor2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor3 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor4 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor5 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor6 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor7 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor8 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor9 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor10 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor11 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor12 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor13 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor14 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN1setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalrooseveltSN2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalamensalrooseveltSN2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor1 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;
	
	
	modelescalaroosevelt.buscarescalaSN2setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN2setor2 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor3 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor4 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor5 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor6 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor7 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor8 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor9 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor10 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor11 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor12 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor13 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor14 = function(application, req, res){
	

	var modelescalaroosevelt = new application.app.model.escala.modelescalaroosevelt(application);

	var valor = req.query;

	
	modelescalaroosevelt.buscarescalaSN2setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}