module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaoroosevelt.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaisrooseveltadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.relatorioadmroosevelt(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatorioroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriorooseveltenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateresproosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoroosevelt.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixaroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaoroosevelt.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaoroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoroosevelt.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoroosevelt.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoroosevelt.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoroosevelt.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editresproosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoroosevelt.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};