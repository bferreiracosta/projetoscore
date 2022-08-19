module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controlleroeste.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraloeste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controlleroeste.central(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitooeste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controlleroeste.editarleito(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/cadastrarpacienteoeste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controlleroeste.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updateoeste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.saude_mental.controlleroeste.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteoeste/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.saude_mental.controlleroeste.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};