module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaoluizote.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaisluizoteadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitais/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.sinaisvitaisid(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisregulacao/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.sinaisvitaisregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/respiracaoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.relatorioadmluizote(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriouti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacienteluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updateluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaoluizote.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixaluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaoluizote.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaoluizote', function(req, res){
		if(req.session.loggedin){
			console.log('Estou em routes');
			application.app.controllers.regulacaoluizote.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacienteluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoluizote.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoluizote.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoluizote.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaoluizote.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};