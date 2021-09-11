module.exports.escalaluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaluizote", {id : result,  msg: ''});
	});
}
module.exports.updateescalaluizote = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var valor =  req.query;



		modelescalaluizote.updateescalaluizote(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaluizote.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaluizote?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalaluizotetarde = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var valor =  req.query;


		modelescalaluizote.updateescalaluizotetarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalaluizotemaq = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var valor =  req.query;



		modelescalaluizote.updateescalaluizotemaq(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateescalaluizotecentro = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var valor =  req.query;



		modelescalaluizote.updateescalaluizotecentro(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.buscarescalamaqluizotediurno = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	
	modelescalaluizote.buscarescalamaqluizotediurno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqluizotenoturno = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	modelescalaluizote.buscarescalamaqluizotenoturno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalacentroluizotemanha = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	
	modelescalaluizote.buscarescalacentroluizotemanha(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalacentroluizotetarde = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	modelescalaluizote.buscarescalacentroluizotetarde(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.updateferiastarde = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaluizote.updateferiastarde(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaluizote?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.updateescalaluizoteSN1 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var valor =  req.query;



		modelescalaluizote.updateescalaluizoteSN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN1 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaluizote.updateferiasSN1(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaluizote?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalaluizoteSN2 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var valor =  req.query;



		modelescalaluizote.updateescalaluizoteSN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN2 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaluizote.updateferiasSN2(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaluizote?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
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
	modelescalaluizote.buscarregraescalaunicaluizote(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaluizote.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaluizote?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaluizote", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);
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

	modelescalaluizote.buscarregraescalaunicaluizote(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaluizote.criarescalaluizote(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalaluizote.buscafuncionario(turno, function(error, resultado2){
							// for(var i = 0; i< resultado2.length; i++){
								modelescalaluizote.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
								// }
							res.redirect("/escalaluizote?id=" + result[0].id_usuario);		
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaluizote", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor15 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamanhasetor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalluizote = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamensalluizote(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalluizotetarde = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamensalluizotetarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor1 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	
	
	modelescalaluizote.buscarescalatardesetor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalatardesetor2 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor3 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor4 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor5 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor6 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor7 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor8 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor9 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor10 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor11 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor12 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor13 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor14 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor15 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalatardesetor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalluizoteSN1 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamensalluizoteSN1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor1 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	
	
	modelescalaluizote.buscarescalaSN1setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN1setor2 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor3 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor4 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor5 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor6 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor7 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor8 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor9 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor10 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor11 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor12 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor13 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor14 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor15 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN1setor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalluizoteSN2 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalamensalluizoteSN2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor1 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;
	
	
	modelescalaluizote.buscarescalaSN2setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN2setor2 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor3 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor4 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor5 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor6 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor7 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor8 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor9 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor10 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor11 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor12 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor13 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor14 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor15 = function(application, req, res){
	

	var modelescalaluizote = new application.app.model.escala.modelescalaluizote(application);

	var valor = req.query;

	
	modelescalaluizote.buscarescalaSN2setor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}