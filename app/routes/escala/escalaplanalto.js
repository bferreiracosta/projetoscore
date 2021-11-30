const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.escalaplanalto(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.criarescalaplanalto(application, req, res);
		});
	application.get('/updateescalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateescalaplanalto(application, req, res);
		});
	application.post('/validarescalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.validarescala(application, req, res);
		});
	application.get('/updateferiasplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanalto(application, req, res);
		});
	application.get('/buscarescalamensalplanaltotarde', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltotarde(application, req, res);
		});
	application.get('/buscarescalamensalplanaltosn1', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltosn1(application, req, res);
		});
	application.get('/buscarescalamensalplanaltosn2', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltosn2(application, req, res);
		});
	application.get('/buscarescalamensalplanaltomaq', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltomaq(application, req, res);
		});
	
}

