module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerad.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
		application.get('/cadastrarpacientead', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerad.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centralad', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerad.central(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitoad', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controllerad.editarleito(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/historicoad', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerad.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacientead', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerad.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatead', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controllerad.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacientead', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerad.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientead/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controllerad.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};