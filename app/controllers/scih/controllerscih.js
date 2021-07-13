module.exports.paciente= function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		res.render("scih/paciente", {id : result});
	});	
}


module.exports.pacientes= function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		res.render("scih/pacientes", {id : result});
	});	
}

module.exports.status = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		
	
		res.render("scih/status", {id : result});
	});
}

module.exports.indicador = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		
		res.render("scih/indicador", {id : result});
	});
}

module.exports.isolamento = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("scih/isolamento", {id : result});
	});
}

module.exports.lixo = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		
		res.render("scih/lixo", {id : result});
	});
}

module.exports.obito = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		
		res.render("scih/obito", {id : result});
	});
}

module.exports.sepse = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		
		res.render("scih/sepse", {id : result});
	});
}

module.exports.rouparia = function(application, req, res){
	
		var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		
		res.render("scih/rouparia", {id : result});
	});
}
