const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Roosevelt/justificarpacienteroosevelt", {mental : resultado, id : result});
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
	var unidade = 'Roosevelt';
		
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalroosevelt.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Roosevelt/justificarpacienteroosevelt", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Roosevelt/editroosevelt", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.datas;
	var unidade = 'Roosevelt';
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalroosevelt.baixa(idpaciente,baixa, data, function(error, result){
			modelmentalroosevelt.buscarpacientecaps(unidade, function(error, resultado){
				res.render("mentalurgencia/Roosevelt/destinomentalroosevelt", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalroosevelt.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Roosevelt/destinomentalroosevelt", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Roosevelt/cadastrarmentalroosevelt", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalroosevelt.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Roosevelt/historicomentalroosevelt", {mental : resultado, id : result});
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
	var unidade = 'Roosevelt';

	
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalroosevelt.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Roosevelt/cadastrarmentalroosevelt", {mental : resultado, id : resultados});
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
	var unidade = 'Roosevelt';
		
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalroosevelt.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Roosevelt/cadastrarmentalroosevelt", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Roosevelt/addmentalroosevelt", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Roosevelt/editmentalroosevelt", {mental: resultado, id : result});
		});
	});
}
