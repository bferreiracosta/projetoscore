module.exports = function(application) {
	
	
	application.get('/kabanpacientemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabanmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};