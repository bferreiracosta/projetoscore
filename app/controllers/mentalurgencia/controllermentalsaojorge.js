<<<<<<< HEAD
const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/justificarpacientesaojorge", {mental : resultado, id : result});
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
	var unidade = 'SaoJorge';
		
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalsaojorge.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/justificarpacientesaojorge", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/editsaojorge", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var datas = req.body.data;
	var unidade = 'SaoJorge';
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalsaojorge.baixa(idpaciente,baixa, datas, function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/destinomentalsaojorge", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalsaojorge.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/destinomentalsaojorge", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/cadastrarmentalsaojorge", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalsaojorge.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/historicomentalsaojorge", {mental : resultado, id : result});
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
	var unidade = 'SaoJorge';

	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/cadastrarmentalsaojorge", {mental : resultado, id : resultados});
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
	var unidade = 'SaoJorge';
		
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalsaojorge.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/cadastrarmentalsaojorge", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/SaoJorge/addmentalsaojorge", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/editmentalsaojorge", {mental: resultado, id : result});
		});
	});
}
=======
const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/justificarpacientesaojorge", {mental : resultado, id : result});
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
	var unidade = 'SaoJorge';
		
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalsaojorge.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/justificarpacientesaojorge", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/editsaojorge", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var datas = req.body.data;
	var unidade = 'SaoJorge';
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalsaojorge.baixa(idpaciente,baixa, datas, function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/destinomentalsaojorge", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalsaojorge.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/destinomentalsaojorge", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/cadastrarmentalsaojorge", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalsaojorge.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/historicomentalsaojorge", {mental : resultado, id : result});
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
	var unidade = 'SaoJorge';

	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/cadastrarmentalsaojorge", {mental : resultado, id : resultados});
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
	var unidade = 'SaoJorge';
		
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalsaojorge.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/SaoJorge/cadastrarmentalsaojorge", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/SaoJorge/addmentalsaojorge", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/SaoJorge/editmentalsaojorge", {mental: resultado, id : result});
		});
	});
}
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
