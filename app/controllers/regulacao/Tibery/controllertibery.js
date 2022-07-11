module.exports.relatoriocovidtiberyenf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Tibery.modeltibery(application);

	var unidade = "Tibery"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidtiberyenf(unidade, function(error, resultado){
			res.render("regulacao/Tibery/relatoriocovidtiberyenf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidtiberyse= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Tibery.modeltibery(application);

	var unidade = "Tibery"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidtiberyse(unidade, function(error, resultado){
			res.render("regulacao/Tibery/relatoriocovidtiberyse", {paciente : resultado, id : result});
		});
	});	
}




			