module.exports.atribuicaomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("atribuicao/atribuicaomartins", {id : result,  msg: ''});
	});
}
module.exports.updatedescanso = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatrimartins = new application.app.model.atribuicao.modelatribuicaomartins(application);

	var id = req.body.idusuario;
	var date = req.body.dataparada1;
	var turno = req.body.turnoparada1;
	var unidade = req.body.unidadeparada1;
	var desc1 = req.body.desc1;
	var desc2 = req.body.desc2;
	var desc3 = req.body.desc3;
	var desc4 = req.body.desc4;
	var desc5 = req.body.desc5;
	var desc6 = req.body.desc6;
	var desc7 = req.body.desc7;
	var desc8 = req.body.desc8;
	var desc9 = req.body.desc9;
	var desc10 = req.body.desc10;
	var desc11 = req.body.desc11;
	var desc12 = req.body.desc12;
	var desc13 = req.body.desc13;
	var desc14 = req.body.desc14;
	var desc15 = req.body.desc15;

	console.log(date)
	modelatrimartins.buscarregraescalaunicamartins(date, turno, unidade,function(error, resultado){
		if(resultado != null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
		
				modelatrimartins.updatedescanso(unidade, date, turno, desc1,desc2,desc3,desc4,desc5,desc6,desc7,desc8,desc9,desc10,desc11,desc12,desc13,desc14,desc15,function(error, resultado){
						res.redirect("/atribuicaomartins?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("atribuicao/atribuicaomartins", {id : result, msg: mensage});
			});
		}
		
	})
	
}
module.exports.adicionarescalamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatrimartins = new application.app.model.atribuicao.modelatribuicaomartins(application);

	var id = req.body.idusuario;

	var date = req.body.date;
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
		var unidade = "Martins";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Martins";
	} 
	var enf1 = req.body.enf1;
	var tecenf1 = req.body.tecenf1;
	var enfcme = req.body.enfcme;
	var teccme = req.body.tecenfcme;
	var maq1 = req.body.maq1;
	var maq2 = req.body.maq2;
	var enfpreposto = req.body.enfpreposto;
	var tecenf2 = req.body.tecenf2;
	var tecenf3 = req.body.tecenf3;
	var tecenf4 = req.body.tecenf4;
	var tecenf5 = req.body.tecenf5;
	var tecenf6 = req.body.tecenf6;
	var tecenf7 = req.body.tecenf7;
	var tecenf8 = req.body.tecenf8;
	var tecenf9 = req.body.tecenf9;
	var tecenf10 = req.body.tecenf10;
	var tecenf11 = req.body.tecenf11;
	var tecenf12 = req.body.tecenf12;
	var tecenf13 = req.body.tecenf13;
	var tecenf14 = req.body.tecenf14;
	var tecenf15 = req.body.tecenf15;
	var tecenf16 = req.body.tecenf16;
	var tecenf17 = req.body.tecenf17;
	var tecenf18 = req.body.tecenf18;
	var enf2 = req.body.enf2;
	var enf3 = req.body.enf3;
	var enf4 = req.body.enf4;
	var enf5 = req.body.enf5;
	var enf6 = req.body.enf6;
	var enf7 = req.body.enf7;
	var enf8 = req.body.enf8;
	var enf9 = req.body.enf9;
	var enf10 = req.body.enf10;
	var enf11 = req.body.enf11;
	modelatrimartins.buscarregraescalaunicamartins(date, turno, unidade,function(error, resultado){
		if(resultado == null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelatrimartins.adicionarescalamartins(unidade, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
					,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15,tecenf16,tecenf17,tecenf18,
					 enf2, enf3, enf4, enf5, enf6 , enf7 ,enf8 ,enf9 ,enf10 ,enf11 ,enfcme, teccme,function(error, resultado){
						res.redirect("/atribuicaomartins?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("atribuicao/atribuicaomartins", {id : result, msg: mensage});
			});
		}
		
	})
	
}

module.exports.adicionandoescalafolga = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatrimartins = new application.app.model.atribuicao.modelatribuicaomartins(application);

	var id = req.body.idusuario;

	var date = req.body.dataparada;
	var turno = req.body.turnoparada;
	var campo = req.body.unidadeparada;
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
		var unidade = "Martins";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Martins";
	} 
	var enfermeiro1 = req.body.enfermeiro1;
	var enfermeiro2 = req.body.enfermeiro2;
	var enfermeiro3 = req.body.enfermeiro3;
	var tecnico1 = req.body.tecnico1;
	var tecnico2 = req.body.tecnico2;
	var tecnico3 = req.body.tecnico3;
	var atestado1 = req.body.atestado1;
	var atestado2 = req.body.atestado2;
	var atestado3 = req.body.atestado3;

	modelatrimartins.buscarregraescalaunicamartins(date, turno, unidade,function(error, resultado){
		if(resultado != null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelatrimartins.adicionandoescalafolga(unidade, date, turno, enfermeiro1, enfermeiro2, enfermeiro3, tecnico1, tecnico2, tecnico3, atestado1,atestado2, atestado3, function(error, resultado){
						res.redirect("/atribuicaomartins?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ainda nao adicionada.!!";
				res.render("atribuicao/atribuicaomartins", {id : result, msg: mensage});
			});
		}
		
	})
	
}

module.exports.updateescalaparadamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatrimartins = new application.app.model.atribuicao.modelatribuicaomartins(application);

	var id = req.body.idusuario;

	var date = req.body.dataparadas;
	var turno = req.body.turnoparadas;
	var campo = req.body.unidadeparadas;
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
		var unidade = "Martins";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Martins";
	} 
	var monitorizacao1 = req.body.monitorizacao1;
	var monitorizacao2 = req.body.monitorizacao2;
	var anotacao1 = req.body.anotacao1;
	var anotacao2 = req.body.anotacao2;
	var compressao1 = req.body.compressao1;
	var compressao2 = req.body.compressao2;
	var ventilacao1 = req.body.ventilacao1;
	var ventilacao2 = req.body.ventilacao2;
	var medicacao1 = req.body.medicacao1;
	var medicacao2 = req.body.medicacao2;
	

	modelatrimartins.buscarregraescalaunicamartins(date, turno, unidade,function(error, resultado){
		if(resultado != null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelatrimartins.updateescalaparadamartins(unidade, date, turno, monitorizacao1, monitorizacao2, anotacao1, anotacao2, compressao1, compressao2, ventilacao1, ventilacao2, medicacao1, medicacao2,function(error, resultado){
						res.redirect("/atribuicaomartins?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ainda nao adicionada.!!";
				res.render("atribuicao/atribuicaomartins", {id : result, msg: mensage});
			});
		}
		
	})
	
}

module.exports.editarescalamartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatrimartins = new application.app.model.atribuicao.modelatribuicaomartins(application);

	var id = req.body.idusuario;

	var date = req.body.date;
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
		var unidade = "Martins";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Martins";
	} 
	var enf1 = req.body.enf1;
	var tecenf1 = req.body.tecenf1;
	var enfcme = req.body.enfcme;
	var teccme = req.body.tecenfcme;
	var maq1 = req.body.maq1;
	var maq2 = req.body.maq2;
	var enfpreposto = req.body.enfpreposto;
	var tecenf2 = req.body.tecenf2;
	var tecenf3 = req.body.tecenf3;
	var tecenf4 = req.body.tecenf4;
	var tecenf5 = req.body.tecenf5;
	var tecenf6 = req.body.tecenf6;
	var tecenf7 = req.body.tecenf7;
	var tecenf8 = req.body.tecenf8;
	var tecenf9 = req.body.tecenf9;
	var tecenf10 = req.body.tecenf10;
	var tecenf11 = req.body.tecenf11;
	var tecenf12 = req.body.tecenf12;
	var tecenf13 = req.body.tecenf13;
	var tecenf14 = req.body.tecenf14;
	var tecenf15 = req.body.tecenf15;
	var tecenf16 = req.body.tecenf16;
	var tecenf17 = req.body.tecenf17;
	var tecenf18 = req.body.tecenf18;
	var enf2 = req.body.enf2;
	var enf3 = req.body.enf3;
	var enf4 = req.body.enf4;
	var enf5 = req.body.enf5;
	var enf6 = req.body.enf6;
	var enf7 = req.body.enf7;
	var enf8 = req.body.enf8;
	var enf9 = req.body.enf9;
	var enf10 = req.body.enf10;
	var enf11 = req.body.enf11;
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelatrimartins.updateescalamartins(unidade, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
			,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15,tecenf16,tecenf17,tecenf18,
			 enf2, enf3, enf4, enf5, enf6 , enf7 ,enf8 ,enf9 ,enf10 ,enf11 , enfcme, teccme,function(error, resultado){
				res.redirect("/atribuicaomartins?id=" + result[0].id_usuario);	
		})
	});
	
}

module.exports.buscarescalamartins = function(application, req, res){
	

	var modelatrimartins = new application.app.model.atribuicao.modelatribuicaomartins(application);

	var valor = req.query;

	
		modelatrimartins.buscarescalamartins(valor,function(error, resultado){
		
			res.send(resultado);
		})
		
	
}