const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.escalatibery(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.criarescalatibery(application, req, res);
		});
	application.get('/updateescalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.updateescalatibery(application, req, res);
		});
	application.post('/validarescalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.validarescala(application, req, res);
		});
	application.get('/updateferiastibery', function(req, res){
		application.app.controllers.escala.escalatibery.updateferias(application, req, res);
		});
	application.get('/buscarescalamensaltibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltibery(application, req, res);
		});
	application.get('/buscarescalamensaltiberytarde', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberytarde(application, req, res);
		});
	application.get('/buscarescalamensaltiberysn1', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberysn1(application, req, res);
		});
	application.get('/buscarescalamensaltiberysn2', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberysn2(application, req, res);
		});
	application.get('/buscarescalamensaltiberymaq', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberymaq(application, req, res);
		});
	
}

