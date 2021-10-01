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
	application.get('/buscarescalamanhasetor1capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14capsi', function(req, res){
		application.app.controllers.escala.escalacapsi.buscarescalamanhasetor14(application, req, res);
		});
}

