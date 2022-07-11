const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaist', function(req, res){
		application.app.controllers.escala.escalaist.escalaist(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaist', function(req, res){
		application.app.controllers.escala.escalaist.criarescalaist(application, req, res);
		});
	application.get('/updateescalaist', function(req, res){
		application.app.controllers.escala.escalaist.updateescalaist(application, req, res);
		});
	application.post('/validarescalaist', function(req, res){
		application.app.controllers.escala.escalaist.validarescala(application, req, res);
		});
	application.get('/updateferiasist', function(req, res){
		application.app.controllers.escala.escalaist.updateferiasist(application, req, res);
		});
	application.get('/buscarescalamensalist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamensalist(application, req, res);
		});	
}

