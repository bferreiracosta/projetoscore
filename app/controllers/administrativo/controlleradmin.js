module.exports.admplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("/administrativo/adminuaiplanaltorelatorio", {id : result});
	});
}

module.exports.admluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuailuizoterelatorio", {id : result});
	});
}

module.exports.admmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuaimartinsrelatorio", {id : result});
	});
}

module.exports.admroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuairooseveltrelatorio", {id : result});
	});
}

module.exports.admtibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuaitiberyrelatorio", {id : result});
	});
}

module.exports.admpampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuaimorumbirelatorio", {id : result});
	});
}

module.exports.admmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuaipampulharelatorio", {id : result});
	});
}

module.exports.admsaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("administrativo/adminuaisaojorgerelatorio", {id : result});
	});
}
