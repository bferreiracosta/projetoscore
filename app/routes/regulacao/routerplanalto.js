module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/relatoriopacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.relatoriounidade(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisplanaltoadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorioadmplanalto(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatorioplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioplanaltoenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacienteplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixaplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllerplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacienteplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/updatedispositivoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updatedispositivo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};