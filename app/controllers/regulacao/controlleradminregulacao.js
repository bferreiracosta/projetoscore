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

module.exports.centraluaipampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluaipampulha", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluaisaojorge", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluaimorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluaimorumbi", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluaitibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluaitibery", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluairoosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluairoosevelt", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluaimartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluaimartins", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluailuizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluailuizote", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluaiplanalto", {leito : resultado, id : result});
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

module.exports.centraluai= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleito(function(error, resultado){
			res.render("regulacao/centraluai", {leito : resultado, id : result});
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

module.exports.editarleitoluizote= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.updateleitosluizote(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitoplanalto= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.regulacao.modelplanalto(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelplanalto.updateleitosplanalto(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitomartins= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.regulacao.modelmartins(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmartins.updateleitosmartins(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitoroosevelt= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updateleitosroosevelt(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitotibery= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.regulacao.modeltibery(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeltibery.updateleitostibery(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitomorumbi= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.regulacao.modelmorumbi(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmorumbi.updateleitosmorumbi(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitosaojorge= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.regulacao.modelsaojorge(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelsaojorge.updateleitossaojorge(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitopampulha= function(application, req, res){
	var leitosdispo = req.body.leitosdispo;
	var macasdispo = req.body.macasdispo;
	var enffem = req.body.enffem;
	var enfmasc = req.body.enfmasc;
	var se = req.body.se;
	var id = req.body.idusuario;
	var idleitos = '1';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.regulacao.modelpampulha(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelpampulha.updateleitospampulha(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}
