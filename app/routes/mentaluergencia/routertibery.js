module.exports = function(application) {
	application.post('/updatecapstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentaltibery.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacientetibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentaltibery.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentaltibery.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentaltibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentaltibery.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentaltibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentaltibery.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarmentaltibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentaltibery.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentaltibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentaltibery.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementaltibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentaltibery.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementaltibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentaltibery.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addmentaltibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentaltibery.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentaltibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentaltibery.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};