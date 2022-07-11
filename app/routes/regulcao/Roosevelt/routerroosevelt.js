module.exports = function(application) {
	
	
	application.get('/relatoriocovidrooseveltenf', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Roosevelt.controllerroosevelt.relatoriocovidrooseveltenf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidrooseveltse', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Roosevelt.controllerroosevelt.relatoriocovidrooseveltse(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};