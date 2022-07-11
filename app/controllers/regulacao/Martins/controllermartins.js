module.exports.relatoriocovidmartinsenf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Martins.modelmartins(application);

	var unidade = "Martins"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidmartinsenf(unidade, function(error, resultado){
			res.render("regulacao/Martins/relatoriocovidmartinsenf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidmartinsse= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Martins.modelmartins(application);

	var unidade = "Martins"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidmartinsse(unidade, function(error, resultado){
			res.render("regulacao/Martins/relatoriocovidmartinsse", {paciente : resultado, id : result});
		});
	});	
}




			