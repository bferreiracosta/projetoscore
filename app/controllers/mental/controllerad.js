const { createPool } = require("mysql");
module.exports.central= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelad.buscarleito(function(error, resultado){
			res.render("mental/CapsAd/centralad", {leito : resultado, id : result});
		});
	});	
}

module.exports.editarleito= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var leitofemad = req.body.leitofem;
	var leitomascad = req.body.leitomasc;
	var id = req.body.idusuario;
	var unidade = 'AD';
	
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelad.updateleito(leitofemad,leitomascad, function(error, resultado){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : result});
			});
		});
	});	
}

module.exports.cadastrar= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'AD';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelad.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'AD';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelad.historico(unidade, function(error, resultado){
			res.render("mental/CapsAd/historicoad", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var data =  req.body.data;
	var id = req.body.idusuario;
	var unidade = 'AD';

	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelad.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : resultados});
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
	var unidade = 'AD';
		
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelad.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mental/CapsAd/addpacientead", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'AD';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelad.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsAd/editpacientead", {mental: resultado, id : result});
		});
	});
}
