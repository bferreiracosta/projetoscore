module.exports = function(application) {
	
	
	application.get('/cadastrarpacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaosaojorge.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/newssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.news(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/sinaisvitaissaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sinaisvitaissaojorgeadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.sinaisvitais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/respiracaosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.respiracao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatorioadmsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.relatorioadmsaojorge(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatoriosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/relatoriosaojorgeenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/savepacientesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatenewssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.updatenews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updaterespsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacaosaojorge.updateresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/baixasaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacaosaojorge.baixa(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/homeregulacaosaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaosaojorge.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/addpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaosaojorge.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaosaojorge.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editnewssaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaosaojorge.editnews(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/editrespsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacaosaojorge.editresp(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
};