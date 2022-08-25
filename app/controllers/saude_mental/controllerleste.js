const { createPool } = require("mysql");
module.exports.baixahospitalidade= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var data = req.body.data;
	var motivo = req.body.negativo;
	var unidade = 'Leste';
	var profissional = req.body.profissional;
	var modelleste = new application.app.model.saude_mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelleste.baixahospitalidade(idpaciente,motivo,data,profissional, function(error, result){
			modelleste.buscarpaciente(unidade, function(error, resultado){
				res.render("saude_mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.central= function(application, req, res){
	
	var modelleste = new application.app.model.saude_mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelleste.buscarleito(function(error, resultado){
			res.render("saude_mental/CapsLeste/centralad", {leito : resultado, id : result});
		});
	});	
}

module.exports.editarleito= function(application, req, res){
	
	var modelleste = new application.app.model.saude_mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var leitofemad = req.body.leitofem;
	var leitomascad = req.body.leitomasc;
	var id = req.body.idusuario;
	var unidade = 'Leste';
	
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelleste.updateleito(leitofemad,leitomascad, function(error, resultado){
			modelleste.buscarpaciente(unidade, function(error, resultado){
				res.render("saude_mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : result});
			});
		});
	});	
}

module.exports.cadastrar= function(application, req, res){
	
	var modelleste = new application.app.model.saude_mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Leste';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelleste.buscarpaciente(unidade, function(error, resultado){
			res.render("saude_mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : result});
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
	var unidade = 'Leste';
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
	var modelleste = new application.app.model.saude_mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelleste.update(idpaciente,dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco, internacao, juizo, comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma,  function(error, result){
			modelleste.buscarpaciente(unidade, function(error, resultado){
				res.render("saude_mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.editpaciente = function(application, req, res){
	
	var modelleste = new application.app.model.saude_mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Leste';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelleste.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("saude_mental/CapsLeste/editpacienteleste", {mental: resultado, id : result});
		});
	});
}