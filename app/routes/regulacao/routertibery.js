module.exports = function(application) {
	
	
	application.get('/cadastrarpacientetibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllertibery.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaistibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaistiberyadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmtibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.relatorioadmtibery(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriotiberyenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientetibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatetibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateresptibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixatibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllertibery.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllertibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientetibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientetibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewstibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editresptibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/updatedispositivotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.updatedispositivo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};