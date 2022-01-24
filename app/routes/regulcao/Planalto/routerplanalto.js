module.exports = function(application) {
	
	
	application.get('/relatoriocovidplanaltoenf', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Planalto.controllerplanalto.relatoriocovidplanaltoenf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidplanaltose', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Planalto.controllerplanalto.relatoriocovidplanaltose(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};