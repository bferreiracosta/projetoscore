const { createPool } = require("mysql");

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var motivo = req.body.negativo;
	var unidade = 'Martins';
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalmartins.baixa(idpaciente,baixa,motivo, function(error, result){
			modelmentalmartins.buscarpacientecaps(unidade, function(error, resultado){
				res.render("mentalurgencia/Martins/destinomentalmartins", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalmartins.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Martins/destinomentalmartins", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Martins';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Martins/cadastrarmentalmartins", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalmartins.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Martins/historicomentalmartins", {mental : resultado, id : result});
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
	var unidade = 'Martins';

	
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, function(error, result){
			modelmentalmartins.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Martins/cadastrarmentalmartins", {mental : resultado, id : resultados});
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
	var unidade = 'Martins';
		
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalmartins.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalmartins.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Martins/cadastrarmentalmartins", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Martins/addmentalmartins", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Martins/editmentalmartins", {mental: resultado, id : result});
		});
	});
}
