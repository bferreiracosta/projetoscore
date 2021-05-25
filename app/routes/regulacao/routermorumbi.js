module.exports = function(application) {
	
	
	application.get('/cadastrarpacientemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermorumbi.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacientemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermorumbi.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaismorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaismorumbiadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/respiracaomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.relatorioadmmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriomorumbienfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacientemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updaterespmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermorumbi.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientemorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewsmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editrespmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};