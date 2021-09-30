const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacapsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.escalacapsleste(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacapsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.criarescalacapsleste(application, req, res);
		});
	application.get('/updateescalacapsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.updateescalacapsleste(application, req, res);
		});
	application.post('/validarescalacapsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.validarescala(application, req, res);
		});
	application.post('/updateferiascapsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.updateferias(application, req, res);
		});
	application.get('/updateescalacapslestetarde', function(req, res){
		application.app.controllers.escala.escalacapsleste.updateescalacapslestetarde(application, req, res);
		});
	application.get('/buscarescalamensalcapsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamensalcapsleste(application, req, res);
		});
	application.get('/buscarescalamensalcapslestemulti', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamensalcapslestemulti(application, req, res);
		});
		
}

