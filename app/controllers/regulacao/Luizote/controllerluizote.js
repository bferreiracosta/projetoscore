module.exports.relatoriocovidluizoteenf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Luizote.modelluizote(application);

	var unidade = "Luizote"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidluizoteenf(unidade, function(error, resultado){
			res.render("regulacao/Luizote/relatoriocovidluizoteenf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidluizotese= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Luizote.modelluizote(application);

	var unidade = "Luizote"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidluizotese(unidade, function(error, resultado){
			res.render("regulacao/Luizote/relatoriocovidluizotese", {paciente : resultado, id : result});
		});
	});	
}




			