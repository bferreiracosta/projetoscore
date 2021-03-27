module.exports = function(application) {
	
	
	application.get('/cadastrarpacientepampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaopampulha.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaispampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaispampulhaadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.relatorioadmpampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriopampulhaenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientepampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatepampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updateresppampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaopampulha.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixapampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaopampulha.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaopampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaopampulha.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientepampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaopampulha.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientepampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaopampulha.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewspampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaopampulha.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editresppampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaopampulha.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};