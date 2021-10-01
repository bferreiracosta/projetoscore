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
	application.get('/buscarescalamanhasetor1capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamanhasetor15capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor15(application, req, res);
		});
	application.get('/buscarescalamanhasetor16capsleste', function(req, res){
		application.app.controllers.escala.escalacapsleste.buscarescalamanhasetor16(application, req, res);
		});
}


