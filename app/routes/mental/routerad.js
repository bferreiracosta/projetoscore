module.exports = function(application) {
		application.get('/cadastrarpacientead', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerad.cadastrar(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});


	application.get('/historicoad', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerad.historico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/savepacientead', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerad.cadastrarpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	

	application.post('/updatead', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerad.update(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});


	application.get('/addpacientead', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerad.addpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/editpacientead/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerad.editpaciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};