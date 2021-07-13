module.exports = function(application) {
	application.post('/updatecapsanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalanexo.updatecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/justificarpacienteanexo', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalanexo.justificarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editanexo/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalanexo.editpacientecaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/destinomentalanexo', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalanexo.destino(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamentalanexo', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalanexo.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarmentalanexo', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentalanexo.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomentalanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalanexo.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savementalanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalanexo.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatementalanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mentalurgencia.controllermentalanexo.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addmentalanexo', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalanexo.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editmentalanexo/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mentalurgencia.controllermentalanexo.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};