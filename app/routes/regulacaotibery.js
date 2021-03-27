module.exports = function(application) {
	
	
	application.get('/cadastrarpacientetibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaotibery.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaistibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaistiberyadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmtibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.relatorioadmtibery(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriotiberyenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientetibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatetibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateresptibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaotibery.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixatibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaotibery.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaotibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaotibery.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientetibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaotibery.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientetibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaotibery.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewstibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaotibery.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editresptibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaotibery.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};