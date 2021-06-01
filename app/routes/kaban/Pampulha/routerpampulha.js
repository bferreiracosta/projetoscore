module.exports = function(application) {
	
	
	application.get('/kabanpacientepampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacientepampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabanpampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};