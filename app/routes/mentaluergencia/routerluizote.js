<<<<<<< HEAD
module.exports = function(application) {
	application.post('/updatecapsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacienteluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalluizote.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalluizote.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarmentalluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalluizote.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addmentalluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
=======
module.exports = function(application) {
	application.post('/updatecapsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacienteluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalluizote.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalluizote.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarmentalluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalluizote.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalluizote.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addmentalluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalluizote.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};