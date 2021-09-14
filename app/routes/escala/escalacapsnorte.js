const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacapsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.escalacapsnorte(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacapsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.criarescalacapsnorte(application, req, res);
		});
	application.get('/updateescalacapsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.updateescalacapsnorte(application, req, res);
		});
	application.post('/validarescalacapsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.validarescala(application, req, res);
		});
	application.post('/updateferiascapsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.updateferias(application, req, res);
		});
	application.get('/updateescalacapsnortetarde', function(req, res){
		application.app.controllers.escala.escalacapsnorte.updateescalacapsnortetarde(application, req, res);
		});
	application.get('/buscarescalamensalcapsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamensalcapsnorte(application, req, res);
		});
	application.get('/buscarescalamensalcapsnortemulti', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamensalcapsnortemulti(application, req, res);
		});
		
}

