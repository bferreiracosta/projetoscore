module.exports = function(application) {
	
	
	application.get('/relatoriocovidmartinsenf', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Martins.controllermartins.relatoriocovidmartinsenf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidmartinsse', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Martins.controllermartins.relatoriocovidmartinsse(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};