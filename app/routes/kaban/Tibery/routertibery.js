module.exports = function(application) {
	
	
	application.get('/kabanpacientetibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabantibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacientetibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabantibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};