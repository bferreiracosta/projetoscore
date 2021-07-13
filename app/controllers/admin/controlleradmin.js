<<<<<<< HEAD
module.exports.index = function(application, req, res){
		res.render("home/index", {msg : {}});		
	
}

module.exports.autenticacao = function(application, req, res){
	
	var usuario = req.query.usuario;
	var senha = req.query.senha;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.autenticar(usuario, senha,  req, res);
	
}

module.exports.modulo = function(application, req, res){
	
	var id = req.query.id;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.modulo(id,  req, res);
	
}

module.exports.login = function(application, req, res){

	var usuario = req.body.usuario2;
	var senha = req.body.senha2;
	var funcao = req.body.cargo;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.login(usuario, senha ,funcao,  req, res);
	
}

module.exports.trocarmodulo = function(application, req, res){

	var usuario = req.body.usuario2;
	var senha = req.body.senha2;
	var funcao = req.body.cargo;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.trocarmodulo(usuario, senha ,funcao,  req, res);
	
}

module.exports.updatepassword = function(application, req, res){
	res.render("home/updatepassword");
}

module.exports.mudarsenha = function(application, req, res){
	
	var usuario = req.body.usuario;
	var senha = req.body.senha_antiga;
	var senhaatual = req.body.senha_nova;
	var confirmasenha = req.body.confirme_senha;
	if(senhaatual === confirmasenha){
		var modeladmin = new application.app.model.admin.modeladmin(application);
		modeladmin.updatepassword(usuario, senha, function(error, result){
			modeladmin.mudarsenha(result,senhaatual, function(error, result){
				res.render("home/index", {msg : {}});
			});
	});
	}else{
		res.send('Senhas não confere');
	}
	
	
}

module.exports.home = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/home", {id : result});
	});
}
module.exports.homeregulacao = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/homeregulacao", {id : result});
	});
}

module.exports.homemental = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/homemental", {id : result});
	});
}

module.exports.homemadministrativo = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/homemadministrativo", {id : result});
	});
=======
module.exports.index = function(application, req, res){
		res.render("home/index", {msg : {}});		
	
}

module.exports.autenticacao = function(application, req, res){
	
	var usuario = req.query.usuario;
	var senha = req.query.senha;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.autenticar(usuario, senha,  req, res);
	
}

module.exports.modulo = function(application, req, res){
	
	var id = req.query.id;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.modulo(id,  req, res);
	
}

module.exports.login = function(application, req, res){

	var usuario = req.body.usuario2;
	var senha = req.body.senha2;
	var funcao = req.body.cargo;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.login(usuario, senha ,funcao,  req, res);
	
}

module.exports.trocarmodulo = function(application, req, res){

	var usuario = req.body.usuario2;
	var senha = req.body.senha2;
	var funcao = req.body.cargo;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.trocarmodulo(usuario, senha ,funcao,  req, res);
	
}

module.exports.updatepassword = function(application, req, res){
	res.render("home/updatepassword");
}

module.exports.mudarsenha = function(application, req, res){
	
	var usuario = req.body.usuario;
	var senha = req.body.senha_antiga;
	var senhaatual = req.body.senha_nova;
	var confirmasenha = req.body.confirme_senha;
	if(senhaatual === confirmasenha){
		var modeladmin = new application.app.model.admin.modeladmin(application);
		modeladmin.updatepassword(usuario, senha, function(error, result){
			modeladmin.mudarsenha(result,senhaatual, function(error, result){
				res.render("home/index", {msg : {}});
			});
	});
	}else{
		res.send('Senhas não confere');
	}
	
	
}

module.exports.home = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/home", {id : result});
	});
}
module.exports.homeregulacao = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/homeregulacao", {id : result});
	});
}

module.exports.homemental = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/homemental", {id : result});
	});
}

module.exports.homemadministrativo = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("home/homemadministrativo", {id : result});
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}