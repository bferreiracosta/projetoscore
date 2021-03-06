
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.data;
	var motivo = req.body.negativo;
	var profissional = req.body.profissional;
	var modeladminmental = new application.app.model.mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modeladminmental.baixa(idpaciente,baixa,motivo,data,profissional, function(error, result){
			modeladminmental.buscarpacientecaps(function(error, resultado){
				res.render("mental/destinopaciente", {mental : resultado, id : resultados});
			});
		});
	});	
}

module.exports.destino= function(application, req, res){
	
	var modeladminmental = new application.app.model.mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminmental.buscarpacientecaps(function(error, resultado){
			res.render("mental/destinopaciente", {mental : resultado, id : result});
		});
	});	
}

module.exports.destinourgencia= function(application, req, res){
	
	var modeladminmental = new application.app.model.mental.modeladminmental(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladminmental.buscarpacientecapsurgencia(function(error, resultado){
			res.render("mental/pacientesurgencia", {mental : resultado, id : result});
		});
	});	
}



