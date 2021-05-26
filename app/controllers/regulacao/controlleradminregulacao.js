module.exports.relatorioenfermaria= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);
	

	var id = req.query;
	var leito = 'Enfermaria';
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarpacienteenfermaria(leito, function(error, resultado){
				res.render("regulacao/relatorioenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorionull= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);
	

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarpacientenull( function(error, resultado){
				res.render("regulacao/relatorionull", {id : result, paciente: resultado});
		});
	});		
}

module.exports.relatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);
	

	var id = req.query;
	var leito = 'Sala de Emergência';
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarpacientesaladeemergencia(leito, function(error, resultado){
			res.render("regulacao/relatoriouti", {paciente : resultado, id : result});
		});
	});		
}


module.exports.centraluti= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitouti(function(error, resultado){
			
			res.render("regulacao/centraluti", {leito : resultado, id : result});
		});
	});	
}

module.exports.centralenfermaria= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoenfermaria(function(error, resultado){

			res.render("regulacao/centralenfermaria", {leito : resultado, id : result});
		});
	});	
}
module.exports.centralanexo= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centralanexo", {leito : resultado, id : result});
		});
	});	
}

module.exports.centralcim= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centralcim", {leito : resultado, id : result});
		});
	});	
}

module.exports.centralhmu= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centralhmu", {leito : resultado, id : result});
		});
	});	
}
module.exports.centraladmhmu= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraladmhmu", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraladmanexo= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraladmanexo", {leito : resultado, id : result});
		});
	});	
}

module.exports.editarleitoanexo= function(application, req, res){
	var enfermariamasculina = req.body.enfmasc;
	var enfermariafeminina = req.body.enffem;
	var utimasculina = req.body.utifem;
	var utifeminina = req.body.utimasc;
	var utigeral = req.body.utigeral;
	var leitosenfbloqueado = req.body.bloq2;
	var leitosutibloqueado = req.body.bloq;
	var id = req.body.idusuario;
	var idleitos = '1';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);


	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminregulacao.updateleitosanexo(idleitos, enfermariamasculina,enfermariafeminina,utimasculina,utigeral, utifeminina,leitosenfbloqueado,leitosutibloqueado, function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}

module.exports.editarleitocim= function(application, req, res){
	var enfermariamasculina = req.body.enfmas;
	var enfermariafeminina = req.body.enffem;
	var id = req.body.idusuario;
	var idleitos = '1';
	var leitosenfbloqueado = req.body.bloq;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminregulacao.updateleitoscim(idleitos, enfermariamasculina,enfermariafeminina, leitosenfbloqueado, function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}


module.exports.editarleitohmu= function(application, req, res){
	var uti = req.body.uti;
	var id = req.body.idusuario;
	var leitosutibloqueado = req.body.bloq;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminregulacao.updateleitoshmu(idleitos,uti,leitosutibloqueado,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}

module.exports.centraluaipampulhamateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivopampulha(function(error, resultado){
			res.render("regulacao/centraluaipampulhamateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaipampulharelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivopampulha(function(error, resultado){
			res.render("regulacao/centraluaipampulharelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorgemateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivosaojorge(function(error, resultado){
			res.render("regulacao/centraluaisaojorgemateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorgerelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivosaojorge(function(error, resultado){
			res.render("regulacao/centraluaisaojorgerelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaimorumbimateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivomorumbi(function(error, resultado){
			res.render("regulacao/centraluaimorumbimateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaimorumbirelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivomorumbi(function(error, resultado){
			res.render("regulacao/centraluaimorumbirelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaitiberymateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivotibery(function(error, resultado){
			res.render("regulacao/centraluaitiberymateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaitiberyrelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivotibery(function(error, resultado){
			res.render("regulacao/centraluaitiberyrelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluairooseveltmateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivoroosevelt(function(error, resultado){
			res.render("regulacao/centraluairooseveltmateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluairooseveltrelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivoroosevelt(function(error, resultado){
			res.render("regulacao/centraluairooseveltrelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaimartinsmateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivomartins(function(error, resultado){
			res.render("regulacao/centraluaimartinsmateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaimartinsrelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivomartins(function(error, resultado){
			res.render("regulacao/centraluaimartinsrelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}
module.exports.centraluailuizotemateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivoluizote(function(error, resultado){
			res.render("regulacao/centraluailuizotemateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluailuizoterelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivoluizote(function(error, resultado){
			res.render("regulacao/centraluailuizoterelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanaltomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivoplanalto(function(error, resultado){
			res.render("regulacao/centraluaiplanaltomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanaltorelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscardispositivoplanalto(function(error, resultado){
			res.render("regulacao/centraluaiplanaltorelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}