module.exports = function(application) {
	
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controllerleste.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacienteleste', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controllerleste.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateleste', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.saude_mental.controllerleste.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteleste/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.saude_mental.controllerleste.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};