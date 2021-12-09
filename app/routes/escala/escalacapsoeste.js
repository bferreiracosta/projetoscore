const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.escalacapsoeste(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.criarescalacapsoeste(application, req, res);
		});
	application.get('/updateescalacapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.updateescalacapsoeste(application, req, res);
		});
	application.post('/validarescalacapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.validarescala(application, req, res);
		});
	application.get('/updateferiascapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalcapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamensalcapsoeste(application, req, res);
		});
	application.get('/buscarescalamensalcapsoestetarde', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamensalcapsoestetarde(application, req, res);
		});	
}

