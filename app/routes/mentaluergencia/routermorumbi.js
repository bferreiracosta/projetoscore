<<<<<<< HEAD
module.exports = function(application) {
	application.post('/updatecapsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmorumbi.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmorumbi.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/cadastrarmentalmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmorumbi.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addmentalmorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
=======
module.exports = function(application) {
	application.post('/updatecapsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmorumbi.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmorumbi.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/cadastrarmentalmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalmorumbi.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalmorumbi.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addmentalmorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalmorumbi.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};