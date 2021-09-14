const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacapsi', function(req, res){
		application.app.controllers.escala.escalacapsi.escalacapsi(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacapsi', function(req, res){
		application.app.controllers.escala.escalacapsi.criarescalacapsi(application, req, res);
		});
	application.get('/updateescalacapsi', function(req, res){
		application.app.controllers.escala.escalacapsi.updateescalacapsi(application, req, res);
		});
	application.post('/validarescalacapsi', function(req, res){
		application.app.controllers.escala.escalacapsi.validarescala(application, req, res);
		});
	application.post('/updateferiascapsi', function(req, res){
		application.app.controllers.escala.escalacapsi.updateferias(application, req, res);
		});
	application.get('/updateescalacapsitarde', function(req, res){
		application.app.controllers.escala.escalacapsi.updateescalacapsitarde(application, req, res);
		});
	application.get('/buscarescalamensalcapsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamensalcapsi(application, req, res);
		});
	application.get('/buscarescalamensalcapsimulti', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamensalcapsimulti(application, req, res);
		});
		
}

