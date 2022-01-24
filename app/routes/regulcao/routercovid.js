module.exports = function(application) {
	
	
	application.get('/relatoriocovidenf', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllercovid.relatoriocovidenf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidse', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllercovid.relatoriocovidse(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};