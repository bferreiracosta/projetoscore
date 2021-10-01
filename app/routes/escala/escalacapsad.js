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
	application.get('/buscarescalamanhasetor1capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12capsad', function(req, res){
		application.app.controllers.escala.escalacapsad.buscarescalamanhasetor12(application, req, res);
		});
}

