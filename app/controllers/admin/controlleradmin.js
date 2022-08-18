module.exports.index = function(application, req, res){
		res.render("home/index", {msg : {}});		
	
}

module.exports.trocarmodulo = function(application, req, res){

	var usuario = req.body.usuario2;
	var senha = req.body.senha2;
	var funcao = req.body.cargo;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.trocarmodulo(usuario, senha ,funcao,  req, res);
	
}

module.exports.modulo = function(application, req, res){
	
	var id = req.query.id;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.modulo(id,  req, res);
	
}

module.exports.autenticacao = function(application, req, res){
	
	var usuario = req.query.usuario;
	var senha = req.query.senha;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.autenticar(usuario, senha,  req, res);
	
}

module.exports.login = function(application, req, res){

	var usuario = req.body.usuario2;
	var senha = req.body.senha2;
	var funcao = req.body.cargo;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	modeladmin.login(usuario, senha ,funcao,  req, res);
	
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

