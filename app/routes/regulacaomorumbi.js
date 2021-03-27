module.exports = function(application) {
	
	
	application.get('/cadastrarpacientemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaomorumbi.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaismorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaismorumbiadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	
	application.get('/respiracaomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.relatorioadmmorumbi(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriomorumbienfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomorumbi.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixamorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaomorumbi.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaomorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomorumbi.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomorumbi.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientemorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomorumbi.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomorumbi.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomorumbi.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};