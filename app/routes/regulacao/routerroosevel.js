module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaisrooseveltadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorioadmroosevelt(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatorioroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriorooseveltenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateresproosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixaroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllerroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editresproosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};