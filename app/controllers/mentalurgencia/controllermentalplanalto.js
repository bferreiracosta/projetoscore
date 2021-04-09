const { createPool } = require("mysql");

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var motivo = req.body.negativo;
	var unidade = 'Planalto';
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalplanalto.baixa(idpaciente,baixa,motivo, function(error, result){
			modelmentalplanalto.buscarpacientecaps(unidade, function(error, resultado){
				res.render("mentalurgencia/Planalto/destinomentalplanalto", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Planalto';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalplanalto.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Planalto/destinomentalplanalto", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Planalto';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalplanalto.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Planalto/cadastrarmentalplanalto", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Planalto';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalplanalto.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Planalto/historicomentalplanalto", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var id = req.body.idusuario;
	var unidade = 'Planalto';

	
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalplanalto.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, function(error, result){
			modelmentalplanalto.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Planalto/cadastrarmentalplanalto", {mental : resultado, id : resultados});
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
	var unidade = 'Planalto';
		
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalplanalto.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalplanalto.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Planalto/cadastrarmentalplanalto", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Planalto/addmentalplanalto", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Planalto';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalplanalto.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Planalto/editmentalplanalto", {mental: resultado, id : result});
		});
	});
}
