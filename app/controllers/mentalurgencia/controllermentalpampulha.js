const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Pampulha';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Pampulha/justificarpacientepampulha", {mental : resultado, id : result});
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
	var unidade = 'Pampulha';
		
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalpampulha.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalpampulha.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Pampulha/justificarpacientepampulha", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Pampulha/editpampulha", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.datas;
	var unidade = 'Pampulha';
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalpampulha.baixa(idpaciente,baixa, data, function(error, result){
			modelmentalpampulha.buscarpacientecaps(unidade, function(error, resultado){
				res.render("mentalurgencia/Pampulha/destinomentalpampulha", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Pampulha';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalpampulha.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Pampulha/destinomentalpampulha", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Pampulha';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Pampulha/cadastrarmentalpampulha", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Pampulha';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalpampulha.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Pampulha/historicomentalpampulha", {mental : resultado, id : result});
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
	var unidade = 'Pampulha';

	
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalpampulha.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalpampulha.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Pampulha/cadastrarmentalpampulha", {mental : resultado, id : resultados});
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
	var unidade = 'Pampulha';
		
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalpampulha.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalpampulha.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Pampulha/cadastrarmentalpampulha", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Pampulha/addmentalpampulha", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Pampulha/editmentalpampulha", {mental: resultado, id : result});
		});
	});
}
