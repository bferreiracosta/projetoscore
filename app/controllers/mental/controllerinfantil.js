const { createPool } = require("mysql");
module.exports.justificarpacienteinfantil= function(application, req, res){
	
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Infantil';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelinfantil.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsInfantil/justificarpacienteinfantil", {mental : resultado, id : result});
		});
	});	
}

module.exports.updatecapsinfantil= function(application, req, res){
	var idpaciente = req.body.id;
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var vinculo = req.body.vinculo2;
	var motivo = req.body.motivo;
	var articulacoes = req.body.articulacoes2;
	var matriciado = req.body.matriciado2;
	var id = req.body.idusuario;
	var unidade = 'Infantil';
		
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelinfantil.updatecaps(idpaciente,prt,paciente, vinculo,motivo,articulacoes,matriciado, unidade,  function(error, result){
			modelinfantil.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsInfantil/justificarpacienteinfantil", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.editinfantil = function(application, req, res){
	
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Infantil';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelinfantil.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsInfantil/editinfantil", {mental: resultado, id : result});
		});
	});
}

module.exports.cadastrar= function(application, req, res){
	
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Infantil';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelinfantil.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsInfantil/cadastrarpacienteinfantil", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Infantil';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelinfantil.historico(unidade, function(error, resultado){
			res.render("mental/CapsInfantil/historicoinfantil", {mental : resultado, id : result});
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
	var unidade = 'Infantil';

	
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelinfantil.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, function(error, result){
			modelinfantil.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsInfantil/cadastrarpacienteinfantil", {mental : resultado, id : resultados});
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
	var unidade = 'Infantil';
		
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelinfantil.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelinfantil.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsInfantil/cadastrarpacienteinfantil", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mental/CapsInfantil/addpacienteinfantil", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelinfantil = new application.app.model.mental.modelinfantil(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Infantil';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelinfantil.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsInfantil/editpacienteinfantil", {mental: resultado, id : result});
		});
	});
}
