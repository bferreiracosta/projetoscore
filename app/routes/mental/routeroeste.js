module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controlleroeste.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraloeste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controlleroeste.central(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitooeste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controlleroeste.editarleito(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarpacienteoeste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mental.controlleroeste.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicooeste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controlleroeste.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/savepacienteoeste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controlleroeste.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updateoeste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.mental.controlleroeste.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addpacienteoeste', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controlleroeste.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteoeste/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.mental.controlleroeste.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};