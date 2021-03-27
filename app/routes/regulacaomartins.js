module.exports = function(application) {
	
	
	application.get('/cadastrarpacientemartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaomartins.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newsmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaismartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaismartinsadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});


	application.get('/respiracaomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.relatorioadmmartins(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriomartinsenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientemartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatemartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewsmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaomartins.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixamartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaomartins.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaomartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomartins.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientemartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomartins.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientemartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomartins.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewsmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomartins.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaomartins.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	
};