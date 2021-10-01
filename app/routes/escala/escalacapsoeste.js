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
	application.post('/updateferiascapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.updateferias(application, req, res);
		});
	application.get('/updateescalacapsoestetarde', function(req, res){
		application.app.controllers.escala.escalacapsoeste.updateescalacapsoestetarde(application, req, res);
		});
	application.get('/buscarescalamensalcapsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamensalcapsoeste(application, req, res);
		});
	application.get('/buscarescalamensalcapsoestemulti', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamensalcapsoestemulti(application, req, res);
		});
	application.get('/buscarescalamanhasetor1capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12capsoeste', function(req, res){
		application.app.controllers.escala.escalacapsoeste.buscarescalamanhasetor12(application, req, res);
		});
}

