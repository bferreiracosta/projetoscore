module.exports.index = function(application, req, res){
		res.render("home/index", {msg : {}});		
	
}


module.exports.autenticacao = function(application, req, res){
	
	var usuario = req.body.usuario;
	var senha = req.body.senha;
	var funcao = req.body.cargo;
	var unidade = req.body.local;
	
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.autenticar(usuario, senha ,unidade, funcao,  req, res);
	
}

module.exports.updatepassword = function(application, req, res){
	res.render("home/updatepassword");
}

module.exports.mudarsenha = function(application, req, res){
	
	var usuario = req.body.usuario;
	var senha = req.body.senha_antiga;
	var senhaatual = req.body.senha_nova;
	var confirmasenha = req.body.confirme_senha;
	if(senhaatual === confirmasenha){
		var pacienteDAO = new application.app.model.pacienteDAO(application);
		pacienteDAO.updatepassword(usuario, senha, function(error, result){
			pacienteDAO.mudarsenha(result,senhaatual, function(error, result){
				res.render("home/index");
			});
	});
	}else{
		res.send('Senhas não confere');
	}
	
	
}

module.exports.paciente= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		res.render("paciente/paciente", {id : result});
	});	
}


module.exports.pacientes= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		res.render("paciente/pacientes", {id : result});
	});	
}


module.exports.home = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
	
		res.render("home/home", {id : result});
	});
}
module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
	
		res.render("home/homeregulacao", {id : result});
	});
}



module.exports.status = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
	
		res.render("paciente/status", {id : result});
	});
}


module.exports.notifica = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/enotifica", {id : result});
	});
}

module.exports.checkup = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/checkup", {id : result});
	});
}

module.exports.fast = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/fast", {id : result});
	});
}
module.exports.epidemiologico = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/epidemiologico", {id : result});
	});
}

module.exports.indicador = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/indicador", {id : result});
	});
}

module.exports.isolamento = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
	
		res.render("paciente/isolamento", {id : result});
	});
}

module.exports.lixo = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/lixo", {id : result});
	});
}

module.exports.obito = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/obito", {id : result});
	});
}

module.exports.sepse = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/sepse", {id : result});
	});
}

module.exports.rouparia = function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);

	var id = req.query;
	
	pacienteDAO.buscarusuario(id, function(error,result){
		
		res.render("paciente/rouparia", {id : result});
	});
}

module.exports.centraluti= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleitouti(function(error, resultado){
			
			res.render("paciente/centraluti", {leito : resultado, id : result});
		});
	});	
}

module.exports.centralenfermaria= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleitoenfermaria(function(error, resultado){

			res.render("paciente/centralenfermaria", {leito : resultado, id : result});
		});
	});	
}
module.exports.centralanexo= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centralanexo", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaipampulha= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluaipampulha", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorge= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluaisaojorge", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluaimorumbi= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluaimorumbi", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluaitibery= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluaitibery", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluairoosevelt= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluairoosevelt", {leito : resultado, id : result});
		});
	});	
}


module.exports.centraluaimartins= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluaimartins", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluailuizote= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluailuizote", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanalto= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluaiplanalto", {leito : resultado, id : result});
		});
	});	
}



module.exports.centralcim= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centralcim", {leito : resultado, id : result});
		});
	});	
}

module.exports.centralhmu= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centralhmu", {leito : resultado, id : result});
		});
	});	
}
module.exports.centraladmhmu= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraladmhmu", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraladmanexo= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraladmanexo", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluai= function(application, req, res){
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	var id = req.query;

	pacienteDAO.buscarusuario(id, function(error, result){
		pacienteDAO.buscarleito(function(error, resultado){
			res.render("paciente/centraluai", {leito : resultado, id : result});
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
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitosanexo(idleitos, enfermariamasculina,enfermariafeminina,utimasculina,utigeral, utifeminina,leitosenfbloqueado,leitosutibloqueado, function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}

module.exports.editarleitocim= function(application, req, res){
	var enfermariamasculina = req.body.enfmas;
	var enfermariafeminina = req.body.enfem;
	var id = req.body.idusuario;
	var idleitos = '1';
	var leitosenfbloqueado = req.body.bloq;
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitoscim(idleitos, enfermariamasculina,enfermariafeminina, leitosenfbloqueado, function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}


module.exports.editarleitohmu= function(application, req, res){
	var uti = req.body.uti;
	var id = req.body.idusuario;
	var leitosutibloqueado = req.body.bloq;
	var idleitos = '1';
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitoshmu(idleitos,uti,leitosutibloqueado,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitosluizote(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitosplanalto(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitosmartins(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitosroosevelt(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitostibery(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitosmorumbi(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitossaojorge(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
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
	
	var pacienteDAO = new application.app.model.pacienteDAO(application);
	pacienteDAO.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAO.updateleitospampulha(idleitos,enffem,enfmasc,leitosdispo,macasdispo,se,  function(error, result){
			res.render("home/homeregulacao", {leito : result, id : resultados});
		});
	});	
}



