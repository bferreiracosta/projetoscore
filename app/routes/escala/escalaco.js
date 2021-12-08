const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaco', function(req, res){
		application.app.controllers.escala.escalaco.escalaco(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaco', function(req, res){
		application.app.controllers.escala.escalaco.criarescalaco(application, req, res);
		});
	application.get('/updateescalaco', function(req, res){
		application.app.controllers.escala.escalaco.updateescalaco(application, req, res);
		});
	application.post('/validarescalaco', function(req, res){
		application.app.controllers.escala.escalaco.validarescala(application, req, res);
		});
	application.get('/updateferiasco', function(req, res){
		application.app.controllers.escala.escalaco.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalco', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamensalco(application, req, res);
		});	
}

