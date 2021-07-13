module.exports = function(application) {
	application.get('/historicoob', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.obstetricia.controllerob.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioaps', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.obstetricia.controllerob.relatorioaps(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacienteob', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.obstetricia.controllerob.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updateob', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.obstetricia.controllerob.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteob', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.obstetricia.controllerob.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteob/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.obstetricia.controllerob.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};