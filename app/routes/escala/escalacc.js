const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacc', function(req, res){
		application.app.controllers.escala.escalacc.escalacc(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacc', function(req, res){
		application.app.controllers.escala.escalacc.criarescalacc(application, req, res);
		});
	application.get('/updateescalacc', function(req, res){
		application.app.controllers.escala.escalacc.updateescalacc(application, req, res);
		});
	application.post('/validarescalacc', function(req, res){
		application.app.controllers.escala.escalacc.validarescala(application, req, res);
		});
	application.post('/updateferiascc', function(req, res){
		application.app.controllers.escala.escalacc.updateferias(application, req, res);
		});
	application.get('/updateescalacctarde', function(req, res){
		application.app.controllers.escala.escalacc.updateescalacctarde(application, req, res);
		});
	application.get('/buscarescalamensalcc', function(req, res){
		application.app.controllers.escala.escalacc.buscarescalamensalcc(application, req, res);
		});
	application.get('/buscarescalamensalccmulti', function(req, res){
		application.app.controllers.escala.escalacc.buscarescalamensalccmulti(application, req, res);
		});
		
}

