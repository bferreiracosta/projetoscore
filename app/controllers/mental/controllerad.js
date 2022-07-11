const { createPool } = require("mysql");
module.exports.baixahospitalidade= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var data = req.body.data;
	var motivo = req.body.negativo;
	var unidade = 'AD';
	var profissional = req.body.profissional;
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelad.baixahospitalidade(idpaciente,motivo,data,profissional, function(error, result){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.central= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelad.buscarleito(function(error, resultado){
			res.render("mental/CapsAd/centralad", {leito : resultado, id : result});
		});
	});	
}

module.exports.editarleito= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var leitofemad = req.body.leitofem;
	var leitomascad = req.body.leitomasc;
	var id = req.body.idusuario;
	var unidade = 'AD';
	
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelad.updateleito(leitofemad,leitomascad, function(error, resultado){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : result});
			});
		});
	});	
}

module.exports.cadastrar= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'AD';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelad.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'AD';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelad.historico(unidade, function(error, resultado){
			res.render("mental/CapsAd/historicoad", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var internacao = req.body.internacao;
	var juizo = req.body.juizo;
	var data =  req.body.data;
	var id = req.body.idusuario;
	var unidade = 'AD';
	var tratamento = req.body.tratamento
	var risco= req.body.risco
	var comportamento= req.body.comportamento
	var exposicao= req.body.exposicao
	var autonegligencia= req.body.autonegligencia
	var dependencia= req.body.dependencia
	var terapeutico= req.body.terapeutico
	var social= req.body.social
	var soma = req.body.soma;
	var dataatu = req.body.dataatu;
	var horas = req.body.horas;
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	if(soma == "Excludente"){
	var data = req.body.data;
	var motivo = "Excludente";
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelad.cadastrarpacienteexcludente(data, motivo,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, function(error, result){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : resultados});
			});
		});
	});	
	}else{
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelad.cadastrarpaciente(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco, internacao, juizo, comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, function(error, result){
				modelad.buscarpaciente(unidade, function(error, resultado){
					res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : resultados});
				});
			});
		});	
	}
	
}

module.exports.update= function(application, req, res){
	var idpaciente = req.body.id;
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var id = req.body.idusuario;
	var unidade = 'AD';
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
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelad.update(idpaciente,dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco, internacao, juizo, comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma,  function(error, result){
			modelad.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsAd/cadastrarpacientead", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mental/CapsAd/addpacientead", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelad = new application.app.model.mental.modelad(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'AD';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelad.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsAd/editpacientead", {mental: resultado, id : result});
		});
	});
}
