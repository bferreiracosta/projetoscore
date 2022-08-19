
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.data;
	var motivo = req.body.negativo;
	var profissional = req.body.profissional;
	var modeladminmental = new application.app.model.saude_mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modeladminmental.baixa(idpaciente,baixa,motivo,data,profissional, function(error, result){
			modeladminmental.buscarpacientecaps(function(error, resultado){
				res.render("saude_mental/destinopaciente", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modeladminmental = new application.app.model.saude_mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminmental.buscarpacientecaps(function(error, resultado){
			res.render("saude_mental/destinopaciente", {mental : resultado, id : result});
		});
	});	
}

module.exports.destinourgencia= function(application, req, res){
	
	var modeladminmental = new application.app.model.saude_mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminmental.buscarpacientecapsurgencia(function(error, resultado){
			res.render("saude_mental/pacientesurgencia", {mental : resultado, id : result});
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
	var unidade = req.body.unidade;
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
	var modeladminmental = new application.app.model.saude_mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	if(soma == "Excludente"){
	var data = req.body.data;
	var motivo = "Excludente";
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modeladminmental.cadastrarpacienteexcludente(data, motivo,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco,comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, function(error, result){
			res.render('home/homemental', {id : resultados});
		});
	});	
	}else{
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modeladminmental.cadastrarpaciente(dataatu, horas,prt,paciente, idade,diagnostico,referencia,unidade,data,tratamento,risco, internacao, juizo, comportamento,exposicao,autonegligencia,dependencia,terapeutico,social,soma, function(error, result){
				res.render('home/homemental', {id : resultados});
			});
		});	
	}
	
}

module.exports.historico= function(application, req, res){
	
	var modeladminmental = new application.app.model.saude_mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminmental.historico(function(error, resultado){
			res.render("saude_mental/historico", {mental : resultado, id : result});
		});
	});		
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("saude_mental/addpaciente", {id : result});
	});
}