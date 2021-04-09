module.exports = function(application) {
	
	application.get('/historicogeral', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.mentalurgencia.controllermentaladmin.historicogeral(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
};