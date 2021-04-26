module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerluizote.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaisluizoteadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitais/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.sinaisvitaisid(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisregulacao/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.sinaisvitaisregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/respiracaoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.relatorioadmluizote(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriouti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacienteluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updateluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixaluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerluizote.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllerluizote', function(req, res){
		if(req.session.loggedin){
			console.log('Estou em routes');
			application.app.controllers.regulacao.controllerluizote.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacienteluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerluizote.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerluizote.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerluizote.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerluizote.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/updatedispositivoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerluizote.updatedispositivo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};