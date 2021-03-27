module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaoplanalto.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisplanaltoadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.relatorioadmplanalto(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatorioplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioplanaltoenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacienteplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoplanalto.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixaplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaoplanalto.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaoplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoplanalto.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacienteplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoplanalto.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoplanalto.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoplanalto.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoplanalto.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};