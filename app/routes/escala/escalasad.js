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
	application.post('/updateferiassad', function(req, res){
		application.app.controllers.escala.escalasad.updateferias(application, req, res);
		});
	application.get('/updateescalasadtarde', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasadtarde(application, req, res);
		});
	application.get('/buscarescalamensalsad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsad(application, req, res);
		});
	application.get('/buscarescalamensalsadmulti', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsadmulti(application, req, res);
		});
		
}

