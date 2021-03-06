const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Morumbi';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Morumbi/justificarpacientemorumbi", {mental : resultado, id : result});
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
	var unidade = 'Morumbi';
		
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalmorumbi.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Morumbi/justificarpacientemorumbi", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Morumbi/editmorumbi", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var datas = req.body.data;

	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var unidade = 'Morumbi';
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalmorumbi.baixa(idpaciente,baixa, datas, function(error, result){
			modelmentalmorumbi.buscarpaciente(unidade, function(error, resultado){
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
	var data = req.body.dataa;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var id = req.body.idusuario;
	var unidade = 'Morumbi';

	
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade, data,function(error, result){
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
