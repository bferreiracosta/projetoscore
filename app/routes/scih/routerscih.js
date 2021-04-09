module.exports = function(application){
	application.get('/pacientes', function(req, res){	
		if(req.session.loggedin){
		
			application.app.controllers.scih.controllerscih.pacientes(application, req, res);
		}	
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
	});

	application.get('/paciente', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.paciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
		
	});
	
	application.get('/status', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.status(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/obito', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.obito(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/isolamento', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.isolamento(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sepse', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.sepse(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/indicador', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.indicador(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/lixo', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.scih.controllerscih.lixo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/rouparia', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.rouparia(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
}


