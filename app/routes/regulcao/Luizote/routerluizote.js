module.exports = function(application) {
	
	
	application.get('/relatoriocovidluizoteenf', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Luizote.controllerluizote.relatoriocovidluizoteenf(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidluizotese', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.Luizote.controllerluizote.relatoriocovidluizotese(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};