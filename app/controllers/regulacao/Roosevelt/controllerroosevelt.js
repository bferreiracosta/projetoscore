module.exports.relatoriocovidrooseveltenf= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Roosevelt.modelroosevelt(application);

	var unidade = "Roosevelt"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidrooseveltenf(unidade, function(error, resultado){
			res.render("regulacao/Roosevelt/relatoriocovidrooseveltenf", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidrooseveltse= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var model = new application.app.model.regulacao.Roosevelt.modelroosevelt(application);

	var unidade = "Roosevelt"
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		model.relatoriocovidrooseveltse(unidade, function(error, resultado){
			res.render("regulacao/Roosevelt/relatoriocovidrooseveltse", {paciente : resultado, id : result});
		});
	});	
}




			