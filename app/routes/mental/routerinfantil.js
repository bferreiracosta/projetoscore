module.exports = function(application) {
	
	application.get('/cadastrarpacienteinfantil', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerinfantil.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/historicoinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/savepacienteinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updateinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerinfantil.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});


	application.get('/addpacienteinfantil', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerinfantil.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacienteinfantil/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerinfantil.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};