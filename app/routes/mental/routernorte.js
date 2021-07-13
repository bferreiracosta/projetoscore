<<<<<<< HEAD
module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllernorte.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacientenorte', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllernorte.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historiconorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacientenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addpacientenorte', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientenorte/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.editpaciente(application, req, res);
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
			application.app.controllers.mental.controllernorte.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacientenorte', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllernorte.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historiconorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacientenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addpacientenorte', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientenorte/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};