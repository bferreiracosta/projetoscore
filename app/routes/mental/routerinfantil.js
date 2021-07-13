<<<<<<< HEAD
module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerinfantil.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacienteinfantil', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerinfantil.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicoinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacienteinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updateinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteinfantil', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerinfantil.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteinfantil/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerinfantil.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
=======
module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerinfantil.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacienteinfantil', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerinfantil.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicoinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacienteinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updateinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteinfantil', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerinfantil.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteinfantil/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerinfantil.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};