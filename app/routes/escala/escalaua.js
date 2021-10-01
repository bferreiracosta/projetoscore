const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaua', function(req, res){
		application.app.controllers.escala.escalaua.escalaua(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaua', function(req, res){
		application.app.controllers.escala.escalaua.criarescalaua(application, req, res);
		});
	application.get('/updateescalaua', function(req, res){
		application.app.controllers.escala.escalaua.updateescalaua(application, req, res);
		});
	application.post('/validarescalaua', function(req, res){
		application.app.controllers.escala.escalaua.validarescala(application, req, res);
		});
	application.post('/updateferiasua', function(req, res){
		application.app.controllers.escala.escalaua.updateferias(application, req, res);
		});
	application.get('/updateescalauatarde', function(req, res){
		application.app.controllers.escala.escalaua.updateescalauatarde(application, req, res);
		});
	application.get('/buscarescalamensalua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamensalua(application, req, res);
		});
	application.get('/buscarescalamensaluamultiua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamensaluamultiua(application, req, res);
		});
	application.get('/buscarescalamanhasetor1ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor1ua(application, req, res);
		});
	application.get('/buscarescalamanhasetor2ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor2ua(application, req, res);
		});
	application.get('/buscarescalamanhasetor3ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor3ua(application, req, res);
		});
	application.get('/buscarescalamanhasetor4ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor4ua(application, req, res);
		});
	application.get('/buscarescalamanhasetor5ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor5ua(application, req, res);
		});
	application.get('/buscarescalamanhasetor6ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor6ua(application, req, res);
		});
	application.get('/buscarescalamanhasetor7ua', function(req, res){
		application.app.controllers.escala.escalaua.buscarescalamanhasetor7ua(application, req, res);
		});
}

