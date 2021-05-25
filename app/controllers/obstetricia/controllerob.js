const { createPool } = require("mysql");

module.exports.historico= function(application, req, res){
	
	var modelob = new application.app.model.obstetricia.modelob(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
		
	modeladmin.buscarusuario(id, function(error, result){
		modelob.buscarpaciente(function(error, resultado){
			res.render("obstetricia/historicoob", {obstetricia : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var data =  req.body.dataatendimento;
	var prt = req.body.prontuario;
	var motivo = req.body.motivo;
	var unidade = req.body.unidade;
	var id = req.body.idusuario;
	console.log(prt,data, paciente,motivo,unidade)
	var modelob = new application.app.model.obstetricia.modelob(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelob.cadastrarpaciente(prt,data, paciente,motivo,unidade, function(error, result){
			modelob.buscarpaciente(function(error, resultado){
				res.render("obstetricia/historicoob", {obstetricia : resultado, id : resultados});
			});
		});
	});	
}

module.exports.update= function(application, req, res){
	var idpaciente = req.body.id;
	var paciente = req.body.nome;
	var data =  req.body.data;
	var prt = req.body.prt;
	var motivo = req.body.motivo;
	var unidade = req.body.unidade;
	var id = req.body.idusuario;

	var modelob = new application.app.model.obstetricia.modelob(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelob.update(idpaciente, prt,data, paciente,motivo,unidade,  function(error, result){
			modelob.buscarpaciente( function(error, resultado){
				res.render("obstetricia/historicoob", {obstetricia : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("obstetricia/addpacienteob", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelob = new application.app.model.obstetricia.modelob(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	console.log(idpaciente);
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelob.buscarpacienteid(idpaciente, function(error, resultado){
			res.render("obstetricia/editpacienteob", {obstetricia: resultado, id : result});
		});
	});
}
