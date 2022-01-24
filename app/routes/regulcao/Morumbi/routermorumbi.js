module.exports = function(application) {
	
	
	application.get('/relatoriocovidmorumbienf', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Morumbi.controllermorumbi.relatoriocovidmorumbienf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidmorumbise', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Morumbi.controllermorumbi.relatoriocovidmorumbise(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};