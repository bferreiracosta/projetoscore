module.exports.escalamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalamartins", {id : result,  msg: ''});
	});
}
module.exports.updateescalamartins = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var valor =  req.query;

	
	modelescalamartins.buscarsituacaomartins(valor, function(error, resultado){
		modelescalamartins.updateescalamartins(valor,resultado, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	})
	
}

module.exports.updateescalamartinsmaq = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var valor =  req.query;



		modelescalamartins.updateescalamartinsmaq(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.buscarescalamaqmartinsdiurno = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;
	
	modelescalamartins.buscarescalamaqmartinsdiurno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqmartinsnoturno = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;
	modelescalamartins.buscarescalamaqmartinsnoturno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamartins.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamartins?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalamartinstarde = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var valor =  req.query;


		modelescalamartins.updateescalamartinstarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiastarde = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamartins.updateferiastarde(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamartins?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.updateescalamartinsSN1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var valor =  req.query;



		modelescalamartins.updateescalamartinsSN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN1 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamartins.updateferiasSN1(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamartins?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalamartinsSN2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var valor =  req.query;



		modelescalamartins.updateescalamartinsSN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN2 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamartins.updateferiasSN2(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamartins?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
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
	modelescalamartins.buscarregraescalaunicamartins(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamartins.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalamartins?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalamartins", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);
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

	modelescalamartins.buscarregraescalaunicamartins(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamartins.criarescalamartins(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalamartins.buscafuncionario(turno, function(error, resultado2){
			// for(var i = 0; i< resultado2.length; i++){
				modelescalamartins.criarfolga(resultado2,resultdoinsert.insertId, turno, function(error, resultado3){})
				// }
			res.redirect("/escalamartins?id=" + result[0].id_usuario);	
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalamartins", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor15 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor16 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamanhasetor16(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalmartins = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartins(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalmartinstarde = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinstarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;
	
	
	modelescalamartins.buscarescalatardesetor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalatardesetor2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor3 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor4 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor5 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor6 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor7 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor8 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor9 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor10 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor11 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor12 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor13 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor14 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor15 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor16 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalatardesetor16(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalmartinsSN1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinsSN1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;
	
	
	modelescalamartins.buscarescalaSN1setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN1setor2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor3 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor4 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor5 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor6 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor7 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor8 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor9 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor10 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor11 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor12 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor13 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor14 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor15 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor16 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN1setor16(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalmartinsSN2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalamensalmartinsSN2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor1 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;
	
	
	modelescalamartins.buscarescalaSN2setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN2setor2 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor3 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor4 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor5 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor6 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor7 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor8 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor9 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor10 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor11 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor12 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor13 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor14 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor15 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor15(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor16 = function(application, req, res){
	

	var modelescalamartins = new application.app.model.escala.modelescalamartins(application);

	var valor = req.query;

	
	modelescalamartins.buscarescalaSN2setor16(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}