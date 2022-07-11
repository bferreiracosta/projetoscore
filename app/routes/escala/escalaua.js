const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaua', function(req, res){
		application.app.controllers.escala.escalaua.escalaua(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaua', function(req, res){
		application.app.controllers.escala.escalaua.criarescalaua(application, req, res);
		});
	application.get('/updateescalaua', function(req, res){
		application.app.controllers.escala.escalaua.updateescalaua(application, req, res);
		});
	application.post('/validarescalaua', function(req, res){
		application.app.controllers.escala.escalaua.validarescala(application, req, res);
		});
	application.get('/updateferiasua', function(req, res){
		application.app.controllers.escala.escalaua.updateferiasua(application, req, res);
		});
	application.get('/buscarescalamensalua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamensalua(application, req, res);
		});	
}

