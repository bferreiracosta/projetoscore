module.exports = function(application) {
	application.post('/baixahospitalidade', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controllernorte.baixahospitalidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/cadastrarpacientenorte', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.saude_mental.controllernorte.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenorte', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.saude_mental.controllernorte.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientenorte/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.saude_mental.controllernorte.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};