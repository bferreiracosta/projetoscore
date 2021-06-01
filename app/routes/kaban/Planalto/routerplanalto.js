module.exports = function(application) {
	
	
	application.get('/kabanpacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacienteplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabanplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};