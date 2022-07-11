module.exports.relatoriocovidmorumbienf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Morumbi.modelmorumbi(application);

	var unidade = "Morumbi"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidmorumbienf(unidade, function(error, resultado){
			res.render("regulacao/Morumbi/relatoriocovidmorumbienf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidmorumbise= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Morumbi.modelmorumbi(application);

	var unidade = "Morumbi"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidmorumbise(unidade, function(error, resultado){
			res.render("regulacao/Morumbi/relatoriocovidmorumbise", {paciente : resultado, id : result});
		});
	});	
}




			