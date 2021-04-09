module.exports = function(application) {
	
	
	application.get('/cadastrarpacientecim', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllercim.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/newscim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	
	application.get('/sinaisvitaiscim/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaiscimadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitais/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.sinaisvitaisid(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaisregulacao/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.sinaisvitaisregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/respiracaocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.relatorioadmcim(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	
	application.get('/historicocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	

	application.post('/savepacientecim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updatecim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewscim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllercim.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixacim', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllercim.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllercim', function(req, res){
		if(req.session.loggedin){
			console.log('Estou em routes');
			application.app.controllers.regulacao.controllercim.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientecim', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllercim.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientecim/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllercim.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewscim/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllercim.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespcim/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllercim.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};