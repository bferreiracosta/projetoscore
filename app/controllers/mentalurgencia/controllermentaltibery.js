const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modeltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Tibery';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Tibery/justificarpacientetibery", {mental : resultado, id : result});
		});
	});	
}

module.exports.updatecaps= function(application, req, res){
	var idpaciente = req.body.id;
	var vinculo = req.body.vinculo2;
	var motivo = req.body.motivo;
	var articulacao = req.body.articulacoes2;
	var matriciado = req.body.matriciado2;
	var id = req.body.idusuario;
	var unidade = 'Tibery';
		
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentaltibery.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentaltibery.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Tibery/justificarpacientetibery", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modeltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Tibery/edittibery", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.datas;
	var unidade = 'Tibery';
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentaltibery.baixa(idpaciente,baixa, data, function(error, result){
			modelmentaltibery.buscarpacientecaps(unidade, function(error, resultado){
				res.render("mentalurgencia/Tibery/destinomentaltibery", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Tibery';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentaltibery.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Tibery/destinomentaltibery", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Tibery';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentaltibery.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Tibery/cadastrarmentaltibery", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Tibery';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentaltibery.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Tibery/historicomentaltibery", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var data = req.body.dataa;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var id = req.body.idusuario;
	var unidade = 'Tibery';

	
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentaltibery.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentaltibery.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Tibery/cadastrarmentaltibery", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.update= function(application, req, res){
	var idpaciente = req.body.id;
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var id = req.body.idusuario;
	var unidade = 'Tibery';
		
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentaltibery.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentaltibery.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Tibery/cadastrarmentaltibery", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Tibery/addmentaltibery", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentaltibery.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Tibery/editmentaltibery", {mental: resultado, id : result});
		});
	});
}
