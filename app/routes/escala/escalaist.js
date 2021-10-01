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
	application.post('/updateferiasist', function(req, res){
		application.app.controllers.escala.escalaist.updateferias(application, req, res);
		});
	application.get('/updateescalaisttarde', function(req, res){
		application.app.controllers.escala.escalaist.updateescalaisttarde(application, req, res);
		});
	application.get('/buscarescalamensalist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamensalist(application, req, res);
		});
	application.get('/buscarescalamensalistmulti', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamensalistmulti(application, req, res);
		});
	application.get('/buscarescalamanhasetor1ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor1ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor2ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor2ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor3ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor3ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor4ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor4ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor5ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor5ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor6ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor6ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor7ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor7ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor8ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor8ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor9ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor9ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor10ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor10ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor11ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor11ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor12ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor12ist(application, req, res);
		});
	application.get('/buscarescalamanhasetor13ist', function(req, res){
		application.app.controllers.escala.escalaist.buscarescalamanhasetor13ist(application, req, res);
		});
				
}

