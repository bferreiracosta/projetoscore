module.exports = function(application) {
	
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerleste.baixahospitalidade(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/cadastrarpacienteleste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerleste.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoleste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerleste.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/savepacienteleste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerleste.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updateleste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerleste.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/addpacienteleste', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerleste.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteleste/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerleste.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};