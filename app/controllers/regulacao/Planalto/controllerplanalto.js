module.exports.relatoriocovidplanaltoenf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Planalto.modelplanalto(application);

	var unidade = "Planalto"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidplanaltoenf(unidade, function(error, resultado){
			res.render("regulacao/Planalto/relatoriocovidplanaltoenf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidplanaltose= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Planalto.modelplanalto(application);

	var unidade = "Planalto"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidplanaltose(unidade, function(error, resultado){
			res.render("regulacao/Planalto/relatoriocovidplanaltose", {paciente : resultado, id : result});
		});
	});	
}




			