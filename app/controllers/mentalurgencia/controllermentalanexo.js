<<<<<<< HEAD
const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Anexo';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelanexo.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/justificarpacienteanexo", {mental : resultado, id : result});
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
	var unidade = 'Anexo';
		
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalanexo.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/justificarpacienteanexo", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Anexo';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelanexo.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/editanexo", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var datas = req.body.data;
	var unidade = 'Anexo';
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalanexo.baixa(idpaciente,baixa, datas, function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/destinomentalanexo", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Anexo';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalanexo.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/destinomentalanexo", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Anexo';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/cadastrarmentalanexo", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Anexo';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalanexo.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/historicomentalanexo", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var data = req.body.dataa;
	var id = req.body.idusuario;
	var unidade = 'Anexo';

	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalanexo.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/cadastrarmentalanexo", {mental : resultado, id : resultados});
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
	var unidade = 'Anexo';
		
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalanexo.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/cadastrarmentalanexo", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Anexo/addmentalanexo", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Anexo';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalanexo.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/editmentalanexo", {mental: resultado, id : result});
		});
	});
}
=======
const { createPool } = require("mysql");
module.exports.justificarpaciente= function(application, req, res){
	
	var modelanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Anexo';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelanexo.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/justificarpacienteanexo", {mental : resultado, id : result});
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
	var unidade = 'Anexo';
		
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalanexo.updatecaps(idpaciente,vinculo,motivo, articulacao, matriciado, unidade,  function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/justificarpacienteanexo", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpacientecaps = function(application, req, res){
	
	var modelanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Anexo';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelanexo.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/editanexo", {mental: resultado, id : result});
		});
	});
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var datas = req.body.data;
	var unidade = 'Anexo';
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalanexo.baixa(idpaciente,baixa, datas, function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/destinomentalanexo", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Anexo';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalanexo.buscarpacientecaps(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/destinomentalanexo", {mental : resultado, id : result});
		});
	});	
}




module.exports.cadastrar= function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Anexo';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/cadastrarmentalanexo", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Anexo';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentalanexo.historico(unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/historicomentalanexo", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var data = req.body.dataa;
	var id = req.body.idusuario;
	var unidade = 'Anexo';

	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmentalanexo.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,data, function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/cadastrarmentalanexo", {mental : resultado, id : resultados});
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
	var unidade = 'Anexo';
		
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmentalanexo.update(idpaciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
			modelmentalanexo.buscarpaciente(unidade, function(error, resultado){
				res.render("mentalurgencia/Anexo/cadastrarmentalanexo", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mentalurgencia/Anexo/addmentalanexo", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelmentalanexo = new application.app.model.mentalurgencia.modelmentalanexo(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Anexo';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmentalanexo.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mentalurgencia/Anexo/editmentalanexo", {mental: resultado, id : result});
		});
	});
}
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
