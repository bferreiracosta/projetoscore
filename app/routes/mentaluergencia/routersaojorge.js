module.exports = function(application) {
	application.post('/updatecapssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalsaojorge.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalsaojorge.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalsaojorge.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalsaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalsaojorge.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalsaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalsaojorge.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarmentalsaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalsaojorge.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalsaojorge.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalsaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalsaojorge.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addmentalsaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalsaojorge.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalsaojorge.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};