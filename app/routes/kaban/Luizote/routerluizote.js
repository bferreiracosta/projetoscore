module.exports = function(application) {
	
	
	application.get('/kabanpacienteluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacienteluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabanluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};