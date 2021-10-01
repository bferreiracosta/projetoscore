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
	application.get('/updateescalasadSN1', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasadSN1(application, req, res);
		});
	application.get('/updateescalasadSN2', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasadSN2(application, req, res);
		});
	application.get('/updateescalasadtrab', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasadtrab(application, req, res);
		});
	application.get('/updateescalasadmultimanha', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasadmultimanha(application, req, res);
		});
	application.get('/updateescalasadmultitarde', function(req, res){
		application.app.controllers.escala.escalasad.updateescalasadmultitarde(application, req, res);
		});
	application.get('/buscarescalamensalsad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsad(application, req, res);
		});
	application.get('/buscarescalamensalsadmulti', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamensalsadmulti(application, req, res);
		});
	application.get('/buscarescalamanhasetor1sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor1sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor2sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor2sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor3sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor3sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor4sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor4sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor5sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor5sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor6sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor6sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor7sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor7sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor8sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor8sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor9sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor9sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor10sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor10sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor11sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor11sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor12sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor12sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor13sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor13sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor14sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor14sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor15sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor15sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor16sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor16sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor17sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor17sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor18sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor18sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor19sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor19sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor20sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor20sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor21sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor21sad(application, req, res);
		});
	application.get('/buscarescalamanhasetor22sad', function(req, res){
		application.app.controllers.escala.escalasad.buscarescalamanhasetor22sad(application, req, res);
		});
		
}

