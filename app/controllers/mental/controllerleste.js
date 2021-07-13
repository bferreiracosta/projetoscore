const { createPool } = require("mysql");
module.exports.baixahospitalidade= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var data = req.body.data;
	var motivo = req.body.negativo;
	var unidade = 'Leste';
	var profissional = req.body.profissional;
	var modelleste = new application.app.model.mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelleste.baixahospitalidade(idpaciente,motivo,data,profissional, function(error, result){
			modelleste.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : resultados});
			});
		});
	});	
}
module.exports.cadastrar= function(application, req, res){
	
	var modelleste = new application.app.model.mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var unidade = 'Leste';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelleste.buscarpaciente(unidade, function(error, resultado){
			res.render("mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : result});
		});
	});	
}


module.exports.historico= function(application, req, res){
	
	var modelleste = new application.app.model.mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	var unidade = 'Leste';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelleste.historico(unidade, function(error, resultado){
			res.render("mental/CapsLeste/historicoleste", {mental : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var diagnostico = req.body.diagnostico;
	var referencia = req.body.referencia;
	var data =  req.body.data;
	var id = req.body.idusuario;
	var unidade = 'Leste';
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
	var modelleste = new application.app.model.mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	if(soma == "Excludente"){
		var data = req.body.data;
		var motivo = "Excludente";
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelleste.cadastrarpacienteexcludente(data, motivo,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, function(error, result){
				modelleste.buscarpaciente(unidade, function(error, resultado){
					res.render("mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : resultados});
				});
			});
		});	
		}else{
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelleste.cadastrarpaciente(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, function(error, result){
					modelleste.buscarpaciente(unidade, function(error, resultado){
						res.render("mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : resultados});
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
	var unidade = 'Leste';
	var tratamento = req.body.tratamento
	var risco= req.body.risco
	var comportamento= req.body.comportamento
	var exposicao= req.body.exposicao
	var autonegligencia= req.body.autonegligencia
	var dependencia= req.body.dependencia
	var terapeutico= req.body.terapeutico
	var social= req.body.social
	var soma = req.body.soma;	
	var modelleste = new application.app.model.mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var dataatu = req.body.dataatu;
	var horas = req.body.horas;
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelleste.update(idpaciente,dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma,  function(error, result){
			modelleste.buscarpaciente(unidade, function(error, resultado){
				res.render("mental/CapsLeste/cadastrarpacienteleste", {mental : resultado, id : resultados});
			});
		});
	});	
}



module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("mental/CapsLeste/addpacienteleste", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modelleste = new application.app.model.mental.modelleste(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Leste';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelleste.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("mental/CapsLeste/editpacienteleste", {mental: resultado, id : result});
		});
	});
}
