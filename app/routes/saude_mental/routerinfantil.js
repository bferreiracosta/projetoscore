module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controllerinfantil.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacienteinfantil', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controllerinfantil.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateinfantil', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.saude_mental.controllerinfantil.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteinfantil/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.saude_mental.controllerinfantil.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};