const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalasad', function(req, res){
		application.app.controllers.escala.escalasad.escalasad(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalasad', function(req, res){
		application.app.controllers.escala.escalasad.criarescalasad(application, req, res);
		});
	application.get('/updateescalasad', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasad(application, req, res);
		});
	application.post('/validarescalasad', function(req, res){
		application.app.controllers.escala.escalasad.validarescala(application, req, res);
		});
	application.get('/updateferiassad', function(req, res){
		application.app.controllers.escala.escalasad.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalsad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsad(application, req, res);
		});
	application.get('/buscarescalamensalsadtarde', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsadtarde(application, req, res);
		});
	application.get('/buscarescalamensalsadsn1', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsadsn1(application, req, res);
		});
	application.get('/buscarescalamensalsadsn2', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsadsn2(application, req, res);
		});
	application.get('/buscarescalamensalsadmaq', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsadmaq(application, req, res);
		});
	
}

