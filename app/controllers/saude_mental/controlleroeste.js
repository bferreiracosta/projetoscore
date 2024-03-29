const { createPool } = require("mysql");
module.exports.baixahospitalidade= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var data = req.body.data;
	var motivo = req.body.negativo;
	var unidade = 'Oeste';
	var profissional = req.body.profissional;
	var modeloeste = new application.app.model.saude_mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modeloeste.baixahospitalidade(idpaciente,motivo,data,profissional, function(error, result){
			modeloeste.buscarpaciente(unidade, function(error, resultado){
				res.render("saude_mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.central= function(application, req, res){
	
	var modeloeste = new application.app.model.saude_mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeloeste.buscarleito(function(error, resultado){
			res.render("saude_mental/CapsOeste/centraloeste", {leito : resultado, id : result});
		});
	});	
}

module.exports.editarleito= function(application, req, res){
	
	var modeloeste = new application.app.model.saude_mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var leitofemad = req.body.leitofem;
	var leitomascad = req.body.leitomasc;
	var id = req.body.idusuario;
	var unidade = 'Oeste';
	
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modeloeste.updateleito(leitofemad,leitomascad, function(error, resultado){
			modeloeste.buscarpaciente(unidade, function(error, resultado){
				res.render("saude_mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : result});
			});
		});
	});	
}

module.exports.cadastrar= function(application, req, res){
	
	var modeloeste = new application.app.model.saude_mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Oeste';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeloeste.buscarpaciente(unidade, function(error, resultado){
			res.render("saude_mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : result});
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
	var unidade = 'Oeste';
	var tratamento = req.body.tratamento
	var risco= req.body.risco
	var internacao = req.body.internacao;
	var juizo = req.body.juizo;
	var comportamento= req.body.comportamento
	var exposicao= req.body.exposicao
	var autonegligencia= req.body.autonegligencia
	var dependencia= req.body.dependencia
	var terapeutico= req.body.terapeutico
	var social= req.body.social
	var soma = req.body.soma;
	var dataatu = req.body.dataatu;
	var horas = req.body.horas;
	var modeloeste = new application.app.model.saude_mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeloeste.update(idpaciente,dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco, internacao, juizo, comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma,  function(error, result){
			modeloeste.buscarpaciente(unidade, function(error, resultado){
				res.render("saude_mental/CapsOeste/cadastrarpacienteoeste", {mental : resultado, id : resultados});
			});
		});
	});	
}


module.exports.editpaciente = function(application, req, res){
	
	var modeloeste = new application.app.model.saude_mental.modeloeste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Oeste';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeloeste.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("saude_mental/CapsOeste/editpacienteoeste", {mental: resultado, id : result});
		});
	});
}
