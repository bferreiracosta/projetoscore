const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.escalaroosevelt(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.criarescalaroosevelt(application, req, res);
		});
	application.get('/updateescalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateescalaroosevelt(application, req, res);
		});
	application.post('/validarescalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.validarescala(application, req, res);
		});
	application.get('/updateferiasroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalroosevelt(application, req, res);
		});
	application.get('/buscarescalamensalroosevelttarde', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalroosevelttarde(application, req, res);
		});
	application.get('/buscarescalamensalrooseveltsn1', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalrooseveltsn1(application, req, res);
		});
	application.get('/buscarescalamensalrooseveltsn2', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalrooseveltsn2(application, req, res);
		});
	application.get('/buscarescalamensalrooseveltmaq', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalrooseveltmaq(application, req, res);
		});
	
}

