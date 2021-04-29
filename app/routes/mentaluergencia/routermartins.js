module.exports = function(application) {
	application.post('/updatecapsmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmartins.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacientemartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmartins.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmartins.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmartins.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmartins.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarmentalmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmartins.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmartins.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmartins.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmartins.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addmentalmartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmartins.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmartins.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};