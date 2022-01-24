module.exports = function(application) {
	
	
	application.get('/relatoriocovidtiberyenf', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Tibery.controllertibery.relatoriocovidtiberyenf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidtiberyse', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Tibery.controllertibery.relatoriocovidtiberyse(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};