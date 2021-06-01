module.exports = function(application) {
	
	
	application.get('/kabanpacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/historicokabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/updatekabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabansaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addkabanpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabansaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};