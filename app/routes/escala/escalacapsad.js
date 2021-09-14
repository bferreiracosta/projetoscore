const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacapsad', function(req, res){
		application.app.controllers.escala.escalacapsad.escalacapsad(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacapsad', function(req, res){
		application.app.controllers.escala.escalacapsad.criarescalacapsad(application, req, res);
		});
	application.get('/updateescalacapsad', function(req, res){
		application.app.controllers.escala.escalacapsad.updateescalacapsad(application, req, res);
		});
	application.post('/validarescalacapsad', function(req, res){
		application.app.controllers.escala.escalacapsad.validarescala(application, req, res);
		});
	application.post('/updateferiascapsad', function(req, res){
		application.app.controllers.escala.escalacapsad.updateferias(application, req, res);
		});
	application.get('/updateescalacapsadtarde', function(req, res){
		application.app.controllers.escala.escalacapsad.updateescalacapsadtarde(application, req, res);
		});
	application.get('/buscarescalamensalcapsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamensalcapsad(application, req, res);
		});
	application.get('/buscarescalamensalcapsadmulti', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamensalcapsadmulti(application, req, res);
		});
		
}

