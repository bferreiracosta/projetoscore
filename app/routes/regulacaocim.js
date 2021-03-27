module.exports = function(application) {
	
	
	application.get('/cadastrarpacientecim', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaocim.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/newscim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	
	application.get('/sinaisvitaiscim/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaiscimadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitais/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.sinaisvitaisid(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisregulacao/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.sinaisvitaisregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/respiracaocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.relatorioadmcim(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriouti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientecim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updatecim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewscim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaocim.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixacim', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaocim.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaocim', function(req, res){
		if(req.session.loggedin){
			console.log('Estou em routes');
			application.app.controllers.regulacaocim.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientecim', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaocim.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientecim/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaocim.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewscim/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaocim.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespcim/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaocim.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};