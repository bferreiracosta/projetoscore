module.exports = function(application) {
	application.post('/updatecapsnorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.updatecapsnorte(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/justificarpacientenorte', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllernorte.justificarpacientenorte(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editnorte/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.editnorte(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/cadastrarpacientenorte', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllernorte.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historiconorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/savepacientenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updatenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllernorte.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/addpacientenorte', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientenorte/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllernorte.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};