module.exports = function(application) {
	
	
	application.get('/cadastrarpacientemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermorumbi.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaismorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaismorumbiadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	
	application.get('/respiracaomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.relatorioadmmorumbi(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriomorumbienfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermorumbi.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixamorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermorumbi.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllermorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientemorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermorumbi.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};