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

module.exports.updateescalamorumbimaq = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var valor =  req.query;



		modelescalamorumbi.updateescalamorumbimaq(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.buscarescalamaqmorumbidiurno = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;
	
	modelescalamorumbi.buscarescalamaqmorumbidiurno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqmorumbinoturno = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;
	modelescalamorumbi.buscarescalamaqmorumbinoturno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamorumbi.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamorumbi?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalamorumbitarde = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var valor =  req.query;


		modelescalamorumbi.updateescalamorumbitarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiastarde = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamorumbi.updateferiastarde(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamorumbi?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.updateescalamorumbiSN1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var valor =  req.query;



		modelescalamorumbi.updateescalamorumbiSN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN1 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamorumbi.updateferiasSN1(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamorumbi?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalamorumbiSN2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var valor =  req.query;



		modelescalamorumbi.updateescalamorumbiSN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN2 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalamorumbi.updateferiasSN2(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalamorumbi?id=" + result[0].id_usuario);	
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
	modelescalamorumbi.buscarregraescalaunicamorumbi(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamorumbi.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
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

	modelescalamorumbi.buscarregraescalaunicamorumbi(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalamorumbi.criarescalamorumbi(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
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

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
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
module.exports.buscarescalatardesetor1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;
	
	
	modelescalamorumbi.buscarescalatardesetor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalatardesetor2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor3 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor4 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor5 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor6 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor7 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor8 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor9 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor10 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor11 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor12 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor13 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor14 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalatardesetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalmorumbiSN1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbiSN1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;
	
	
	modelescalamorumbi.buscarescalaSN1setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN1setor2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor3 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor4 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor5 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor6 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor7 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor8 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor9 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor10 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor11 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor12 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor13 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor14 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN1setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalmorumbiSN2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalamensalmorumbiSN2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor1 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;
	
	
	modelescalamorumbi.buscarescalaSN2setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN2setor2 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor3 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor4 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor5 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor6 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor7 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor8 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor9 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor10 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor11 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor12 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor13 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor14 = function(application, req, res){
	

	var modelescalamorumbi = new application.app.model.escala.modelescalamorumbi(application);

	var valor = req.query;

	
	modelescalamorumbi.buscarescalaSN2setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}