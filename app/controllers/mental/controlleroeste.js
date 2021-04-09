const { createPool } = require("mysql");

module.exports.cadastrar= function(application, req, res){
	
	var modeloeste = new application.app.model.mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Oeste';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeloeste.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modeloeste = new application.app.model.mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Oeste';
	
	modeladmin.buscarusuario(id, function(error, result){
		modeloeste.historico(unidade, function(error, resultado){
			res.render("mental/CapsOeste/historicooeste", {mental : resultado, id : result});
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
	var unidade = 'Oeste';

	
	var modeloeste = new application.app.model.mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modeloeste.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, function(error, result){
			modeloeste.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : resultados});
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
	var unidade = 'Oeste';
		
	var modeloeste = new application.app.model.mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeloeste.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modeloeste.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mental/CapsOeste/addpacienteoeste", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeloeste = new application.app.model.mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Oeste';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeloeste.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsOeste/editpacienteoeste", {mental: resultado, id : result});
		});
	});
}
