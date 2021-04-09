module.exports = function(application) {
	
	
	application.get('/cadastrarpacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaissaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaissaojorgeadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorioadmsaojorge(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriosaojorgeenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixasaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacao.controllersaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewssaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};