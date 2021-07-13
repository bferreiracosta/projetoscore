<<<<<<< HEAD
module.exports = function(application) {
	
	application.get('/historicogeral', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentaladmin.historicogeral(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
=======
module.exports = function(application) {
	
	application.get('/historicogeral', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentaladmin.historicogeral(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};