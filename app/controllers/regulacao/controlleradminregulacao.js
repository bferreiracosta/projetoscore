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
		modeladminregulacao.buscarleitopampulha(function(error, resultado){
			res.render("gestao/centraluaipampulha", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaipampulharelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitopampulha(function(error, resultado){
			res.render("gestao/centraluaipampulharelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitosaojorge(function(error, resultado){
			res.render("gestao/centraluaisaojorge", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorgerelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitosaojorge(function(error, resultado){
			res.render("gestao/centraluaisaojorgerelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaimorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitomorumbi(function(error, resultado){
			res.render("gestao/centraluaimorumbi", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaimorumbirelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitomorumbi(function(error, resultado){
			res.render("gestao/centraluaimorumbirelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaitibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitotibery(function(error, resultado){
			res.render("gestao/centraluaitibery", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaitiberyrelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitotibery(function(error, resultado){
			res.render("gestao/centraluaitiberyrelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluairoosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoroosevelt(function(error, resultado){
			res.render("gestao/centraluairoosevelt", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluairooseveltrelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoroosevelt(function(error, resultado){
			res.render("gestao/centraluairooseveltrelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaimartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitomartins(function(error, resultado){
			res.render("gestao/centraluaimartins", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaimartinsrelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitomartins(function(error, resultado){
			res.render("gestao/centraluaimartinsrelatorio", {leito : resultado, id : result});
		});
	});	
}
module.exports.centraluailuizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoluizote(function(error, resultado){
			res.render("gestao/centraluailuizote", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluailuizoterelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoluizote(function(error, resultado){
			res.render("gestao/centraluailuizoterelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoplanalto(function(error, resultado){
			res.render("gestao/centraluaiplanalto", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanaltorelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminregulacao.buscarleitoplanalto(function(error, resultado){
			res.render("gestao/centraluaiplanaltorelatorio", {leito : resultado, id : result});
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

module.exports.editarleitoluizote= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var dataatualizacao = req.body.data
	var horaatualizacao= req.body.horas
	var se1ccv= req.body.se1ccv
	var se1cmv= req.body.se1cmv
	var se2ccv= req.body.se2ccv
	var se2cmv= req.body.se2cmv
	var se3ccv= req.body.se3ccv
	var se3cmv= req.body.se3cmv
	var se4ccv= req.body.se4ccv
	var se4cmv= req.body.se4cmv
	var seasccv= req.body.seasccv
	var seascmv= req.body.seascmv
	var enf1ccv= req.body.enf1ccv
	var enf1cmv= req.body.enf1cmv
	var enf2ccv= req.body.enf2ccv
	var enf2cmv= req.body.enf2cmv
	var enf3ccv= req.body.enf3ccv
	var enf3cmv= req.body.enf3cmv
	var enf4ccv= req.body.enf4ccv
	var enf4cmv= req.body.enf4cmv
	var enf5ccv= req.body.enf5ccv
	var enf5cmv= req.body.enf5cmv
	var enf6ccv= req.body.enf6ccv
	var enf6cmv= req.body.enf6cmv
	var enf7ccv= req.body.enf7ccv
	var enf7cmv= req.body.enf7cmv
	var se8ccv= req.body.se8ccv
	var se8cmv= req.body.se8cmv
	var se9ccv= req.body.se9ccv
	var se9cmv= req.body.se9cmv
	var enf10ccv= req.body.enf10ccv
	var enf10cmv= req.body.enf10cmv
	var enf11ccv= req.body.enf11ccv
	var enf11cmv= req.body.enf11cmv
	var enf12ccv= req.body.enf12ccv
	var en12cmv= req.body.en12cmv
	var enf13ccv= req.body.enf13ccv
	var enf13cmv= req.body.enf13cmv
	var enf14ccv= req.body.enf14ccv
	var enf14cmv= req.body.enf14cmv
	var amb1ccv= req.body.amb1ccv
	var amb1cmv= req.body.amb1cmv
	var amb2ccv= req.body.amb2ccv
	var amb2cmv= req.body.amb2cmv
	var amb3ccv= req.body.amb3ccv
	var amb3cmv= req.body.amb3cmv
	var amb4ccv= req.body.amb4ccv
	var amb4cmv= req.body.amb4cmv
	var amb5ccv= req.body.amb5ccv
	var amb5cmv= req.body.amb5cmv
	var amb6ccv= req.body.amb6ccv
	var amb6cmv= req.body.amb6cmv
	var amb7ccv= req.body.amb7ccv
	var amb7cmv= req.body.amb7cmv
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.updateleitosluizote(idleitos,  dataatualizacao,horaatualizacao,se1ccv,se1cmv,se2ccv,se2cmv,se3ccv,se3cmv,se4ccv,se4cmv,seasccv,seascmv,enf1ccv,enf1cmv, enf2ccv,enf2cmv,enf3ccv,enf3cmv,enf4ccv,enf4cmv,enf5ccv,enf5cmv,enf6ccv,enf6cmv,enf7ccv,enf7cmv,se8ccv,se8cmv,se9ccv,se9cmv,enf10ccv,enf10cmv,enf11ccv,enf11cmv,enf12ccv,en12cmv, enf13ccv,enf13cmv, enf14ccv,enf14cmv,amb1ccv,amb1cmv, amb2ccv, amb2cmv, amb3ccv, amb3cmv, amb4ccv, amb4cmv,amb5ccv,amb5cmv,amb6ccv,amb6cmv,amb7ccv,amb7cmv,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitoplanalto= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var senccv = req.body.senccv 
	var sencmv = req.body.sencmv 
	var e1ccv = req.body.e1ccv 
	var e1cmv = req.body.e1cmv 
	var seccv = req.body.seccv 
	var secmv = req.body.secmv 
	var e3ccv = req.body.e3ccv 
	var e3cmv = req.body.e3cmv 
	var e4ccv = req.body.e4ccv 
	var e4cmv = req.body.e4cmv 
	var pediatriabcv = req.body.pediatriabcv 
	var isccv = req.body.isccv 
	var iscmv = req.body.iscmv 
	var emccv = req.body.emccv 
	var emcmv = req.body.emcmv 
	var eaccv = req.body.eaccv 
	var eacmv = req.body.eacmv 
	var saccv = req.body.saccv 
	var sacmv = req.body.sacmv 
	var macasccv = req.body.macasccv 
	var macascmv = req.body.macascmv 
	var macaparada = req.body.mr 
	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.regulacao.modelplanalto(application);
	
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelplanalto.updateleitosplanalto(idleitos,senccv,sencmv,e1ccv,e1cmv,seccv, secmv,e3ccv,e3cmv,e4ccv,e4cmv,pediatriabcv,isccv,iscmv,emccv,emcmv,eaccv,eacmv,saccv,sacmv,macasccv,macascmv,macaparada,dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitomartins= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var senccv= req.body.senccv
	var sencmv= req.body.sencmv
	var seccv= req.body.seccv
	var secmv= req.body.secmv
	var emccv= req.body.emccv
	var emcmv= req.body.emcmv
	var efccv= req.body.efccv
	var efcmv= req.body.efcmv
	var corredorccv= req.body.corredorccv
	var corredorcmv= req.body.corredorcmv
	var pediatriaccv= req.body.pediatriaccv
	var pediatriabcv= req.body.pediatriabcv
	var goccv= req.body.goccv
	var gocmv= req.body.gocmv
	var eaccv= req.body.eaccv
	var eacmv= req.body.eacmv
	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.regulacao.modelmartins(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmartins.updateleitosmartins(idleitos, senccv,sencmv,seccv,secmv,emccv,emcmv,efccv,efcmv,corredorccv,corredorcmv,pediatriaccv,pediatriabcv,goccv,gocmv,eaccv,eacmv,dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitoroosevelt= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var se1ccv = req.body.se1ccv 
	var se1cmv = req.body.se1cmv 
	var se2ccv  = req.body.se2ccv  
	var se2cmv  = req.body.se2cmv  
	var se3ccv  = req.body.se3ccv  
	var se3cmv  = req.body.se3cmv  
	var se4ccv  = req.body.se4ccv  
	var se4cmv  = req.body.se4cmv  
	var se5ccv  = req.body.se5ccv  
	var se5cmv  = req.body.se5cmv  
	var se6ccv  = req.body.se6ccv  
	var se6cmv  = req.body.se6cmv  
	var seccv  = req.body.seccv  
	var secmv  = req.body.secmv  
	var paccv   = req.body.paccv   
	var pacmv  = req.body.pacmv  
	var is1ccv  = req.body.is1ccv  
	var is1cmv  = req.body.is1cmv  
	var is2ccv  = req.body.is2ccv  
	var is2cmv  = req.body.is2cmv  
	var is3ccv   = req.body.is3ccv   
	var is3cmv  = req.body.is3cmv  
	var is4ccv  = req.body.is4ccv  
	var is4cmv  = req.body.is4cmv  
	var is5ccv  = req.body.is5ccv  
	var is5cmv  = req.body.is5cmv  
	var e7ccv  = req.body.e7ccv  
	var e7cmv  = req.body.e7cmv  
	var e8ccv  = req.body.e8ccv  
	var e8cmv  = req.body.e8cmv  
	var e9ccv  = req.body.e9ccv  
	var e9cmv  = req.body.e9cmv   
	var e11ccv  = req.body.e11ccv  
	var e11cmv  = req.body.e11cmv  
	var e12ccv  = req.body.e12ccv  
	var e12cmv   = req.body.e12cmv   
	var e13ccv  = req.body.e13ccv  
	var e13cmv  = req.body.e13cmv  
	var e14ccv  = req.body.e14ccv  
	var e14cmv  = req.body.e14cmv  
	var e15ccv  = req.body.e15ccv  
	var e15cmv  = req.body.e15cmv  
	var e16ccv  = req.body.e16ccv  
	var e16cmv  = req.body.e16cmv  
	var e17ccv  = req.body.e17ccv  
	var e17cmv  = req.body.e17cmv  
	var corredorccv  = req.body.corredorccv  
	var corredorcmv  = req.body.corredorcmv  
	var macaparada  = req.body.mr  
	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updateleitosroosevelt(idleitos, se1ccv ,se1cmv ,se2ccv ,se2cmv, se3ccv ,se3cmv ,se4ccv ,se4cmv ,se5ccv ,se5cmv ,se6ccv ,se6cmv ,seccv ,secmv ,paccv  ,pacmv ,is1ccv ,is1cmv ,is2ccv ,is2cmv ,is3ccv  ,is3cmv ,is4ccv ,is4cmv ,is5ccv ,is5cmv ,e7ccv ,e7cmv ,e8ccv ,e8cmv ,e9ccv ,e9cmv ,e11ccv ,e11cmv ,e12ccv ,e12cmv  ,e13ccv ,e13cmv ,e14ccv ,e14cmv ,e15ccv ,e15cmv ,e16ccv ,e16cmv ,e17ccv ,e17cmv ,corredorccv ,corredorcmv ,macaparada ,dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitotibery= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var senccv= req.body.senccv;
	var sencmv= req.body.sencmv;
	var ca9ccv= req.body.ca9ccv;
	var ca9cmv= req.body.ca9cmv;
	var ca10ccv= req.body.ca10ccv;
	var ca10cmv= req.body.ca10cmv;
	var ca18ccv= req.body.ca18ccv;
	var ca18cmv= req.body.ca18cmv;
	var ca19ccv= req.body.ca19ccv;
	var ca19cmv= req.body.ca19cmv;
	var ca20ccv= req.body.ca20ccv;
	var ca20bcv= req.body.ca20cmv;
	var cfccv= req.body.cfccv;
	var cfcmv= req.body.cfcmv;
	var e1ccv= req.body.e1ccv;
	var e1cmv= req.body.e1cmv;
	var e2ccv= req.body.e2ccv;
	var e2cmv= req.body.e2cmv;
	var e3ccv= req.body.e3ccv;
	var e3cmv= req.body.e3cmv;
	var e4ccv= req.body.e4ccv;
	var e4cmv= req.body.e4cmv;
	var aeccv= req.body.aeccv;
	var aecmv= req.body.aecmv;
	var isccv= req.body.isccv;
	var iscmv= req.body.iscmv; 
	var slcccv= req.body.slcccv; 
	var slccmv= req.body.slccmv;
	var ec1ccv= req.body.ec1ccv;
	var ec1cmv= req.body.ec1cmv;
	var ec2ccv= req.body.ec2ccv;
	var ec2cmv= req.body.ec2cmv;
	var occcv= req.body.occcv;
	var occmv= req.body.occmv;
	var macaparada = req.body.mr;

	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.regulacao.modeltibery(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeltibery.updateleitostibery(idleitos,macaparada, senccv,sencmv,ca9ccv,ca9cmv,ca10ccv,ca10cmv,ca18ccv,ca18cmv,ca19ccv,ca19cmv,ca20ccv,ca20bcv,cfccv,cfcmv,e1ccv,e1cmv,e2ccv,e2cmv,e3ccv,e3cmv,e4ccv,e4cmv,aeccv,aecmv,isccv,iscmv, slcccv, slccmv,ec1ccv,ec1cmv,ec2ccv,ec2cmv,occcv,occmv, dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitomorumbi= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var sec1ccv = req.body.sec1ccv;
	var sec1cmv = req.body.sec1cmv;
	var slcccv = req.body.slcccv;
	var slccmv = req.body.slccmv;
	var emccv = req.body.emccv;
	var emcmv = req.body.emcmv;
	var efcccv = req.body.efcccv;
	var efccmv = req.body.efccmv;
	var segccv = req.body.segccv;
	var segcmv = req.body.segcmv;
	var sogccv = req.body.sogccv;
	var sogcmv = req.body.sogcmv;
	var emncccv = req.body.emncccv;
	var emnccmv = req.body.emnccmv;
	var efccv = req.body.efccv;
	var efcmv = req.body.efcmv;
	var ee1ccv = req.body.ee1ccv;
	var ee1cmv = req.body.ee1cmv;
	var ee2ccv = req.body.ee2ccv;
	var ee2cmv = req.body.ee2cmv;
	var issccv = req.body.issccv;
	var isscmv = req.body.isscmv;
	var macasccv = req.body.macasccv;
	var macascmv = req.body.macascmv;
	var macaparada = req.body.mr;
	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.regulacao.modelmorumbi(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmorumbi.updateleitosmorumbi(idleitos, sec1ccv ,sec1cmv ,slcccv ,slccmv ,emccv ,emcmv ,efcccv ,efccmv ,segccv ,segcmv ,sogccv ,sogcmv ,emncccv ,emnccmv ,efccv ,efcmv ,ee1ccv ,ee1cmv ,ee2ccv ,ee2cmv ,issccv ,isscmv ,macasccv ,macascmv ,macaparada ,dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitosaojorge= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var sec1 = req.body.sec1;
	var sec1cc = req.body.sec1cc;
	var sec1ccv = req.body.sec1ccv;
	var sec1cm = req.body.sec1cm;
	var sec1cmv = req.body.sec1cmv;
	var sec2 = req.body.sec2;
	var sec2cc = req.body.sec2cc;
	var sec2ccv = req.body.sec2ccv;
	var sec2cm = req.body.sec2cm;
	var sec2cmv = req.body.sec2cmv;
	var sec3 = req.body.sec3;
	var sec3cc = req.body.sec3cc;
	var sec3ccv = req.body.sec3ccv;
	var sec3cm = req.body.sec3cm;
	var sec3cmv = req.body.sec3cmv;
	var ec1 = req.body.ec1;
	var ec1cc = req.body.ec1cc;
	var ec1ccv = req.body.ec1ccv;
	var ec1cm = req.body.ec1cm;
	var ec1cmv = req.body.ec1cmv;
	var ec2 = req.body.ec2;
	var ec2cc = req.body.ec2cc;
	var ec2ccv = req.body.ec2ccv;
	var ec2cm = req.body.ec2cm;
	var ec2cmv = req.body.ec2cmv;
	var ec3 = req.body.ec3;
	var ec3cc = req.body.ec3cc;
	var ec3ccv = req.body.ec3ccv;
	var ec3cm = req.body.ec3cm;
	var ec3cmv = req.body.ec3cmv;
	var ec4 = req.body.ec4;
	var ec4cc = req.body.ec4cc;
	var ec4ccv = req.body.ec4ccv;
	var ec4cm = req.body.ec4cm;
	var ec4cmv = req.body.ec4cmv;
	var ec5 = req.body.ec5;
	var ec5cc = req.body.ec5;
	var ec5ccv = req.body.ec5ccv;
	var ec5cm = req.body.ec5ccv;
	var ec5cmv = req.body.ec5cmv;
	var ec6 = req.body.ec6;
	var ec6cc = req.body.ec6cc;
	var ec6ccv = req.body.ec6ccv;
	var ec6cm = req.body.ec6cm;
	var ec6cmv = req.body.ec6cmv;
	var ec7 = req.body.ec7;
	var ec7cc = req.body.ec7cc;
	var ec7ccv = req.body.ec7ccv;
	var ec7cm = req.body.ec7ccv;
	var ec7cmv = req.body.ec7ccv;
	var ec8 = req.body.ec8;
	var ec8cc = req.body.ec8cc;
	var ec8ccv = req.body.ec8cc;
	var ec8cm = req.body.ec8cm;
	var ec8cmv = req.body.ec8cmv;
	var ec9 = req.body.ec9;
	var ec9cc = req.body.ec9cc;
	var ec9ccv = req.body.ec9ccv;
	var ec9cm = req.body.ec9cm;
	var ec9cmv = req.body.ec9cmv;
	var ec10 = req.body.ec10;
	var ec10cc = req.body.ec10cc;
	var ec10ccv = req.body.ec10ccv;
	var ec10cm = req.body.ec10cm
	var ec10cmv = req.body.ec10cmv;
	var se = req.body.se;
	var secc = req.body.secc;
	var seccv = req.body.seccv;
	var secm = req.body.secm;
	var secmv = req.body.secmv;
	var e1 = req.body.e1;
	var e1cc = req.body.e1cc;
	var e1ccv = req.body.e1ccv;
	var e1cm = req.body.e1cm;
	var e1cmv = req.body.e1cmv;
	var e2 = req.body.e2;
	var e2cc = req.body.e2cc;
	var e2ccv = req.body.e2ccv;
	var e2cm = req.body.e2cm;
	var e2cmv = req.body.e2cmv;
	var e3 = req.body.e3;
	var e3cc = req.body.e3cc;
	var e3ccv = req.body.e3ccv;
	var e3cm = req.body.e3cm;
	var e3cmv = req.body.e3cmv;
	var e4 = req.body.e4;
	var e4cc = req.body.e4cc
	var e4ccv = req.body.e4ccv
	var e4cm = req.body.e4cm
	var e4cmv = req.body.e4cmv
	var e5 = req.body.e5
	var e5cc = req.body.e5cc
	var e5ccv = req.body.e5ccv
	var e5cm = req.body.e5cm
	var e5cmv = req.body.e5cmv
	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.regulacao.modelsaojorge(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		
		modelsaojorge.updateleitossaojorge(idleitos, sec1,sec1cc,sec1ccv,sec1cm,sec1cmv,sec2,sec2cc,sec2ccv,sec2cm,sec2cmv,sec3,sec3cc,sec3ccv,sec3cm,sec3cmv,ec1,ec1cc,ec1ccv,ec1cm,ec1cmv,ec2,ec2cc,ec2ccv,ec2cm,ec2cmv,ec3,ec3cc,ec3ccv,ec3cm,ec3cmv,ec4,ec4cc,ec4ccv,ec4cm,ec4cmv,ec5,ec5cc,ec5ccv,ec5cm,ec5cmv,ec6,ec6cc,ec6ccv,ec6cm,ec6cmv,ec7,ec7cc,ec7ccv,ec7cm,ec7cmv,ec8,ec8cc,ec8ccv,ec8cm,ec8cmv,ec9,ec9cc,ec9ccv,ec9cm,ec9cmv,ec10,ec10cc,ec10ccv,ec10cm,ec10cmv,se,secc,seccv,secm,secmv,e1,e1cc,e1ccv,e1cm,e1cmv,e2,e2cc,e2ccv,e2cm,e2cmv,e3,e3cc,e3ccv,e3cm,e3cmv,e4,e4cc,e4ccv,e4cm,e4cmv,e5,e5cc,e5ccv,e5cm,e5cmv,dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
		});
	});	
}
module.exports.editarleitopampulha= function(application, req, res){
	var id = req.body.idusuario;
	var idleitos = '1';
	var sec1 = req.body.sec1;
	var sec1cc = req.body.sec1cc;
	var sec1ccv = req.body.sec1ccv;
	var sec1cm = req.body.sec1cm;
	var sec1cmv = req.body.sec1cmv;
	var sec2 = req.body.sec2;
	var sec2cc = req.body.sec2cc;
	var sec2ccv = req.body.sec2ccv;
	var sec2cm = req.body.sec2cm;
	var sec2cmv = req.body.sec2cmv;
	var sec3 = req.body.sec3;
	var sec3cc = req.body.sec3cc;
	var sec3ccv = req.body.sec3ccv;
	var sec3cm = req.body.sec3cm;
	var sec3cmv = req.body.sec3cmv;
	var ec1 = req.body.ec1;
	var ec1cc = req.body.ec1cc;
	var ec1ccv = req.body.ec1ccv;
	var ec1cm = req.body.ec1cm;
	var ec1cmv = req.body.ec1cmv;
	var ec2 = req.body.ec2;
	var ec2cc = req.body.ec2cc;
	var ec2ccv = req.body.ec2ccv;
	var ec2cm = req.body.ec2cm;
	var ec2cmv = req.body.ec2cmv;
	var ec3 = req.body.ec3;
	var ec3cc = req.body.ec3cc;
	var ec3ccv = req.body.ec3ccv;
	var ec3cm = req.body.ec3cm;
	var ec3cmv = req.body.ec3cmv;
	var ec4 = req.body.ec4;
	var ec4cc = req.body.ec4cc;
	var ec4ccv = req.body.ec4ccv;
	var ec4cm = req.body.ec4cm;
	var ec4cmv = req.body.ec4cmv;
	var ec5 = req.body.ec5;
	var ec5cc = req.body.ec5;
	var ec5ccv = req.body.ec5ccv;
	var ec5cm = req.body.ec5ccv;
	var ec5cmv = req.body.ec5cmv;
	var ec6 = req.body.ec6;
	var ec6cc = req.body.ec6cc;
	var ec6ccv = req.body.ec6ccv;
	var ec6cm = req.body.ec6cm;
	var ec6cmv = req.body.ec6cmv;
	var ec7 = req.body.ec7;
	var ec7cc = req.body.ec7cc;
	var ec7ccv = req.body.ec7ccv;
	var ec7cm = req.body.ec7ccv;
	var ec7cmv = req.body.ec7ccv;
	var se = req.body.se;
	var secc = req.body.secc;
	var seccv = req.body.seccv;
	var secm = req.body.secm;
	var secmv = req.body.secmv;
	var e1 = req.body.e1;
	var e1cc = req.body.e1cc;
	var e1ccv = req.body.e1ccv;
	var e1cm = req.body.e1cm;
	var e1cmv = req.body.e1cmv;
	var e2 = req.body.e2;
	var e2cc = req.body.e2cc;
	var e2ccv = req.body.e2ccv;
	var e2cm = req.body.e2cm;
	var e2cmv = req.body.e2cmv;
	var e3 = req.body.e3;
	var e3cc = req.body.e3cc;
	var e3ccv = req.body.e3ccv;
	var e3cm = req.body.e3cm;
	var e3cmv = req.body.e3cmv;
	var e4 = req.body.e4;
	var e4cc = req.body.e4cc
	var e4ccv = req.body.e4ccv
	var e4cm = req.body.e4cm
	var e4cmv = req.body.e4cmv
	var e5 = req.body.e5
	var e5cc = req.body.e5cc
	var e5ccv = req.body.e5ccv
	var e5cm = req.body.e5cm
	var e5cmv = req.body.e5cmv
	var dataatualizacao= req.body.data
	var horaatualizacao= req.body.horas
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.regulacao.modelpampulha(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		
		modelpampulha.updateleitospampulha(idleitos, sec1,sec1cc,sec1ccv,sec1cm,sec1cmv,sec2,sec2cc,sec2ccv,sec2cm,sec2cmv,sec3,sec3cc,sec3ccv,sec3cm,sec3cmv,ec1,ec1cc,ec1ccv,ec1cm,ec1cmv,ec2,ec2cc,ec2ccv,ec2cm,ec2cmv,ec3,ec3cc,ec3ccv,ec3cm,ec3cmv,ec4,ec4cc,ec4ccv,ec4cm,ec4cmv,ec5,ec5cc,ec5ccv,ec5cm,ec5cmv,ec6,ec6cc,ec6ccv,ec6cm,ec6cmv,ec7,ec7cc,ec7ccv,ec7cm,ec7cmv,se,secc,seccv,secm,secmv,e1,e1cc,e1ccv,e1cm,e1cmv,e2,e2cc,e2ccv,e2cm,e2cmv,e3,e3cc,e3ccv,e3cm,e3cmv,e4,e4cc,e4ccv,e4cm,e4cmv,e5,e5cc,e5ccv,e5cm,e5cmv,dataatualizacao,horaatualizacao,  function(error, result){
			res.render("home/homegestao", {leito : result, id : resultados});
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