module.exports.atribuicaoplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("atribuicao/atribuicaoplanalto", {id : result,  msg: ''});
	});
}

module.exports.adicionarescalaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatriplanalto = new application.app.model.atribuicao.modelatribuicaoplanalto(application);

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
		var unidade = "Roosevelt";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Morumbi";
	} 
	var enf1 = req.body.enf1;
	var tecenf1 = req.body.tecenf1;
	var enfcme = req.body.enfcme;
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
	var tecenf19 = req.body.tecenf19;
	var tecenf20 = req.body.tecenf20;
	var tecenf21 = req.body.tecenf21;
	var tecenf22 = req.body.tecenf22;
	var enf2 = req.body.enf2;
	var enf3 = req.body.enf3;
	var enf4 = req.body.enf4;
	var enf6 = req.body.enf6;
	modelatriplanalto.buscarregraescalaunicaplanalto(date, turno, unidade,function(error, resultado){
		if(resultado == null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelatriplanalto.adicionarescalaplanalto(unidade, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
					,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15, tecenf16, tecenf17,tecenf18, tecenf19, tecenf20,tecenf21,tecenf22, enf2, enf3, enf4, enf6 , enfcme,function(error, resultado){
						res.redirect("/atribuicaoplanalto?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ja criada, por favor atualize!!";
				res.render("atribuicao/atribuicaoplanalto", {id : result, msg: mensage});
			});
		}
		
	})
	
}

module.exports.adicionandoescalafolga = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatriplanalto = new application.app.model.atribuicao.modelatribuicaoplanalto(application);

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
		var unidade = "Roosevelt";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Morumbi";
	} 
	var enfermeiro1 = req.body.enfermeiro1;
	var enfermeiro2 = req.body.enfermeiro2;
	var enfermeiro3 = req.body.enfermeiro3;
	var enfermeiro4 = req.body.enfermeiro4;
	var tecnico1 = req.body.tecnico1;
	var tecnico2 = req.body.tecnico2;
	var tecnico3 = req.body.tecnico3;
	var tecnico4 = req.body.tecnico4;
	var atestado1 = req.body.atestado1;
	var atestado2 = req.body.atestado2;
	var atestado3 = req.body.atestado3;
	var atestado4 = req.body.atestado4;

	modelatriplanalto.buscarregraescalaunicaplanalto(date, turno, unidade,function(error, resultado){
		if(resultado != null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelatriplanalto.adicionandoescalafolga(unidade, date, turno, enfermeiro1, enfermeiro2, enfermeiro3, enfermeiro4, tecnico1, tecnico2, tecnico3, tecnico4, atestado1,atestado2, atestado3, atestado4,function(error, resultado){
						res.redirect("/atribuicaoplanalto?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ainda nao adicionada.!!";
				res.render("atribuicao/atribuicaoplanalto", {id : result, msg: mensage});
			});
		}
		
	})
	
}

module.exports.updateescalaparadaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatriplanalto = new application.app.model.atribuicao.modelatribuicaoplanalto(application);

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
		var unidade = "Roosevelt";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Morumbi";
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
	

	modelatriplanalto.buscarregraescalaunicaplanalto(date, turno, unidade,function(error, resultado){
		if(resultado != null || resultado==""){
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				modelatriplanalto.updateescalaparadaplanalto(unidade, date, turno, monitorizacao1, monitorizacao2, anotacao1, anotacao2, compressao1, compressao2, ventilacao1, ventilacao2, medicacao1, medicacao2,function(error, resultado){
						res.redirect("/atribuicaoplanalto?id=" + result[0].id_usuario);	
				})
			});
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error,result){
				var mensage = "Escala ainda nao adicionada.!!";
				res.render("atribuicao/atribuicaoplanalto", {id : result, msg: mensage});
			});
		}
		
	})
	
}

module.exports.editarescalaplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelatriplanalto = new application.app.model.atribuicao.modelatribuicaoplanalto(application);

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
		var unidade = "Roosevelt";
	}else 
	if(campo==6){
		var unidade = "Tibery";
	}else 
	if(campo==5){
		var unidade = "Morumbi";
	} 
	var enf1 = req.body.enf1;
	var tecenf1 = req.body.tecenf1;
	var enfcme = req.body.enfcme;
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
	var tecenf19 = req.body.tecenf19;
	var tecenf20 = req.body.tecenf20;
	var tecenf21 = req.body.tecenf21;
	var tecenf22 = req.body.tecenf22;
	var enf2 = req.body.enf2;
	var enf3 = req.body.enf3;
	var enf4 = req.body.enf4;
	var enf6 = req.body.enf6;
	console.log(enf6)
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelatriplanalto.updateescalaplanalto(unidade, date, turno, enf1, tecenf1, maq1, maq2, enfpreposto, tecenf2, tecenf3, tecenf4, tecenf5
			,tecenf6, tecenf7, tecenf8, tecenf9, tecenf10, tecenf11, tecenf12, tecenf13, tecenf14, tecenf15, tecenf16, tecenf17,tecenf18, tecenf19, tecenf20,tecenf21,tecenf22, enf2, enf3, enf4, enf6 , enfcme,function(error, resultado){
				res.redirect("/atribuicaoplanalto?id=" + result[0].id_usuario);	
		})
	});
	
}

module.exports.buscarescalaplanalto = function(application, req, res){
	

	var modelatriplanalto = new application.app.model.atribuicao.modelatribuicaoplanalto(application);

	var valor = req.query;

	
		modelatriplanalto.buscarescalaplanalto(valor,function(error, resultado){
		
			res.send(resultado);
		})
		
	
}