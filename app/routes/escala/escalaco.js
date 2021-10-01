const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaco', function(req, res){
		application.app.controllers.escala.escalaco.escalaco(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaco', function(req, res){
		application.app.controllers.escala.escalaco.criarescalaco(application, req, res);
		});
	application.get('/updateescalaco', function(req, res){
		application.app.controllers.escala.escalaco.updateescalaco(application, req, res);
		});
	application.post('/validarescalaco', function(req, res){
		application.app.controllers.escala.escalaco.validarescala(application, req, res);
		});
	application.post('/updateferiasco', function(req, res){
		application.app.controllers.escala.escalaco.updateferias(application, req, res);
		});
	application.get('/updateescalacotarde', function(req, res){
		application.app.controllers.escala.escalaco.updateescalacotarde(application, req, res);
		});
	application.get('/buscarescalamensalco', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamensalco(application, req, res);
		});
	application.get('/buscarescalamensalcomulti', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamensalcomulti(application, req, res);
		});
	application.get('/buscarescalamanhasetor1co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor1co(application, req, res);
		});
	application.get('/buscarescalamanhasetor2co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor2co(application, req, res);
		});
	application.get('/buscarescalamanhasetor3co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor3co(application, req, res);
		});
	application.get('/buscarescalamanhasetor4co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor4co(application, req, res);
		});
	application.get('/buscarescalamanhasetor5co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor5co(application, req, res);
		});
	application.get('/buscarescalamanhasetor6co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor6co(application, req, res);
		});
	application.get('/buscarescalamanhasetor7co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor7co(application, req, res);
		});
	application.get('/buscarescalamanhasetor8co', function(req, res){
		application.app.controllers.escala.escalaco.buscarescalamanhasetor8co(application, req, res);
		});
			
				
}

