const { createPool } = require("mysql");

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var motivo = req.body.negativo;

	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var unidade = 'Morumbi';
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalmorumbi.baixa(idpaciente,baixa,motivo, function(error, result){
			modelmentalmorumbi.buscarpacientecaps(unidade, function(error, resultado){
				res.render("mentalurgencia/Morumbi/destinomentalmorumbi", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Morumbi';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalmorumbi.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Morumbi/destinomentalmorumbi", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Morumbi';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Morumbi/cadastrarmentalmorumbi", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Morumbi';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalmorumbi.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Morumbi/historicomentalmorumbi", {mental : resultado, id : result});
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
	var unidade = 'Morumbi';

	
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, function(error, result){
			modelmentalmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Morumbi/cadastrarmentalmorumbi", {mental : resultado, id : resultados});
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
	var unidade = 'Morumbi';
		
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalmorumbi.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Morumbi/cadastrarmentalmorumbi", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Morumbi/addmentalmorumbi", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Morumbi/editmentalmorumbi", {mental: resultado, id : result});
		});
	});
}
