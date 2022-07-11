module.exports.relatoriocovidenf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.modelcovid(application);

	
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidenf(function(error, resultado){
		
			res.render("regulacao/relatoriocovidenf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidse= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.modelcovid(application);

	
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidse(function(error, resultado){
			res.render("regulacao/relatoriocovidse", {paciente : resultado, id : result});
		});
	});	
}




			