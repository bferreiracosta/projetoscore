<<<<<<< HEAD
module.exports = function(application){
	application.get('/pacientes', function(req, res){	
		if(req.session.loggedin){
		
			application.app.controllers.scih.controllerscih.pacientes(application, req, res);
		}	
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
	});

	application.get('/paciente', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.paciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
		
	});
	
	application.get('/status', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.status(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/obito', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.obito(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/isolamento', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.isolamento(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sepse', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.sepse(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/indicador', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.indicador(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/lixo', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.scih.controllerscih.lixo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/rouparia', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.rouparia(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
}


=======
module.exports = function(application){
	application.get('/pacientes', function(req, res){	
		if(req.session.loggedin){
		
			application.app.controllers.scih.controllerscih.pacientes(application, req, res);
		}	
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
	});

	application.get('/paciente', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.paciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
		
	});
	
	application.get('/status', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.status(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/obito', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.obito(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/isolamento', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.isolamento(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sepse', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.sepse(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/indicador', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.indicador(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/lixo', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.scih.controllerscih.lixo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/rouparia', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.scih.controllerscih.rouparia(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
}


>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
