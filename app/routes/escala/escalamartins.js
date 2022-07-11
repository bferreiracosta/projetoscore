const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.escalamartins(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.criarescalamartins(application, req, res);
		});
	application.get('/updateescalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.updateescalamartins(application, req, res);
		});
	application.post('/validarescalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.validarescala(application, req, res);
		});
	application.get('/updateferiasmartins', function(req, res){
		application.app.controllers.escala.escalamartins.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalmartins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartins(application, req, res);
		});
	application.get('/buscarescalamensalmartinstarde', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinstarde(application, req, res);
		});
	application.get('/buscarescalamensalmartinssn1', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinssn1(application, req, res);
		});
	application.get('/buscarescalamensalmartinssn2', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinssn2(application, req, res);
		});
	application.get('/buscarescalamensalmartinsmaq', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinsmaq(application, req, res);
		});
	
}

