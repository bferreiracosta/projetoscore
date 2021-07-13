const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Luizote';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Luizote/justificarpacienteluizote", {mental : resultado, id : result});
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
	var unidade = 'Luizote';
		
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalluizote.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Luizote/justificarpacienteluizote", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Luizote/editluizote", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var datas = req.body.data;
	var unidade = 'Luizote';
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalluizote.baixa(idpaciente,baixa, datas, function(error, result){
			modelmentalluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Luizote/destinomentalluizote", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalluizote.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Luizote/destinomentalluizote", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Luizote';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Luizote/cadastrarmentalluizote", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalluizote.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Luizote/historicomentalluizote", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var data = req.body.dataa;
	var id = req.body.idusuario;
	var unidade = 'Luizote';

	
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalluizote.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Luizote/cadastrarmentalluizote", {mental : resultado, id : resultados});
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
	var unidade = 'Luizote';
		
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalluizote.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Luizote/cadastrarmentalluizote", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Luizote/addmentalluizote", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Luizote/editmentalluizote", {mental: resultado, id : result});
		});
	});
}
