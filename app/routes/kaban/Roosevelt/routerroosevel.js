module.exports = function(application) {
	
	
	application.get('/kabanpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabanroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};