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
	application.get('/buscarescalamanhasetor1capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12capsnorte', function(req, res){
		application.app.controllers.escala.escalacapsnorte.buscarescalamanhasetor12(application, req, res);
		});
}

