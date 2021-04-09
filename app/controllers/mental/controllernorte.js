const { createPool } = require("mysql");

module.exports.cadastrar= function(application, req, res){
	
	var modelnorte = new application.app.model.mental.modelnorte(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Norte';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelnorte.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsNorte/cadastrarpacientenorte", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelnorte = new application.app.model.mental.modelnorte(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Norte';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelnorte.historico(unidade, function(error, resultado){
			res.render("mental/CapsNorte/historiconorte", {mental : resultado, id : result});
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
	var unidade = 'Norte';

	
	var modelnorte = new application.app.model.mental.modelnorte(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelnorte.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, function(error, result){
			modelnorte.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsNorte/cadastrarpacientenorte", {mental : resultado, id : resultados});
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
	var unidade = 'Norte';
		
	var modelnorte = new application.app.model.mental.modelnorte(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelnorte.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelnorte.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsNorte/cadastrarpacientenorte", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mental/CapsNorte/addpacientenorte", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelnorte = new application.app.model.mental.modelnorte(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Norte';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelnorte.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsNorte/editpacientenorte", {mental: resultado, id : result});
		});
	});
}
