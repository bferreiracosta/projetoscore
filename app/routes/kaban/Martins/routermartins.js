module.exports = function(application) {
	
	
	application.get('/kabanpacientemartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacientemartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabanmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};