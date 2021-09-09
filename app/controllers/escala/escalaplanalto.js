module.exports.escalaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("escala/escalaplanalto", {id : result,  msg: ''});
	});
}
module.exports.updateescalaplanalto = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var valor =  req.query;



		modelescalaplanalto.updateescalaplanalto(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateescalaplanaltomaq = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var valor =  req.query;



		modelescalaplanalto.updateescalaplanaltomaq(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}
module.exports.updateferias = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaplanalto.updateferias(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalaplanaltotarde = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var valor =  req.query;


		modelescalaplanalto.updateescalaplanaltotarde(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiastarde = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaplanalto.updateferiastarde(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
		})
	});
}

module.exports.updateescalaplanaltoSN1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var valor =  req.query;



		modelescalaplanalto.updateescalaplanaltoSN1(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN1 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaplanalto.updateferiasSN1(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.updateescalaplanaltoSN2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var valor =  req.query;



		modelescalaplanalto.updateescalaplanaltoSN2(valor, function(error, resultdoinsert){
			res.send(resultdoinsert);
		})
	
}

module.exports.updateferiasSN2 = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
	var idusuario = req.body.idusuario;
	var idfuncionario = req.body.campo;
	var inputsituacao = req.body.inputsituacao;
	var dateinicialsituacao = req.body.dateinicialsituacao;
	var datefinalsituacao = req.body.datefinalsituacao;

	modeladmin.buscarusuarioeditavel(idusuario, function(error,result){
		modelescalaplanalto.updateferiasSN2(idfuncionario, inputsituacao, dateinicialsituacao, datefinalsituacao, function(error, resultdoinsert){
			res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
		})
	});
}
module.exports.validarescala = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
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
	modelescalaplanalto.buscarregraescalaunicaplanalto(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado != null || resultado != ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaplanalto.validarescala(unidade, turno, dateinicial, datefinal, dateano, rt, supervisao, cida, function(error, resultdoinsert){
					res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala não criada!!";
				res.render("escala/escalaplanalto", {id : result, msg: mensage});
			});
		}
		
	})
}
module.exports.criarescalaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);
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

	modelescalaplanalto.buscarregraescalaunicaplanalto(unidade, turno, dateinicial, datefinal,function(error, resultado){

		if(resultado == null || resultado == ""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelescalaplanalto.criarescalaplanalto(unidade, turno, dateinicial, datefinal, function(error, resultdoinsert){
					modelescalaplanalto.buscafuncionario(turno, function(error, resultado2){
							for(var i = 0; i< resultado2.length; i++){
								modelescalaplanalto.criarfolga(resultado2[i].idfuncionariosplanalto,resultdoinsert.insertId, function(error, resultado3){})
							}
						res.redirect("/escalaplanalto?id=" + result[0].id_usuario);	
					})
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("escala/escalaplanalto", {id : result, msg: mensage});
			});
		}
		
	})
}

module.exports.buscarescalamanhasetor1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor1(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor3 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor4 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor5 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor6 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor7 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor8 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor9 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor10 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor11 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor12 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor13 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamanhasetor14 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamanhasetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalplanalto = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanalto(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqplanaltodiurno = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;
	
	modelescalaplanalto.buscarescalamaqplanaltodiurno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamaqplanaltonoturno = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;
	modelescalaplanalto.buscarescalamaqplanaltonoturno(valor,function(error, resultado){
			res.send(resultado);
		})
		
	
}

module.exports.buscarescalamensalplanaltotarde = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltotarde(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;
	
	
	modelescalaplanalto.buscarescalatardesetor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalatardesetor2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor3 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor4 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor5 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor6 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor7 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor8 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor9 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor10 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor11 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor12 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor13 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalatardesetor14 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalatardesetor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalplanaltoSN1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltoSN1(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;
	
	
	modelescalaplanalto.buscarescalaSN1setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN1setor2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor3 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor4 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor5 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor6 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor7 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor8 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor9 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor10 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor11 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor12 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor13 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN1setor14 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN1setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalamensalplanaltoSN2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalamensalplanaltoSN2(valor,function(error, resultado){
			
			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor1 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;
	
	
	modelescalaplanalto.buscarescalaSN2setor1(valor,function(error, resultado){

			res.send(resultado);
			
		})
		
	
}
module.exports.buscarescalaSN2setor2 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor2(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor3 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor3(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor4 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor4(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor5 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor5(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor6 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor6(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor7 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor7(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor8 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor8(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor9 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor9(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor10 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor10(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor11 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor11(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor12 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor12(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor13 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor13(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}
module.exports.buscarescalaSN2setor14 = function(application, req, res){
	

	var modelescalaplanalto = new application.app.model.escala.modelescalaplanalto(application);

	var valor = req.query;

	
	modelescalaplanalto.buscarescalaSN2setor14(valor,function(error, resultado){

			res.send(resultado);
		})
		
	
}