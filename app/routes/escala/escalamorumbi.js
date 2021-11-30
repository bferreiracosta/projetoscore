const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.escalamorumbi(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.criarescalamorumbi(application, req, res);
		});
	application.get('/updateescalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateescalamorumbi(application, req, res);
		});
	application.post('/validarescalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.validarescala(application, req, res);
		});
	application.get('/updateferiasmorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalmorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbi(application, req, res);
		});
	application.get('/buscarescalamensalmorumbitarde', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbitarde(application, req, res);
		});
	application.get('/buscarescalamensalmorumbisn1', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbisn1(application, req, res);
		});
	application.get('/buscarescalamensalmorumbisn2', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbisn2(application, req, res);
		});
	application.get('/buscarescalamensalmorumbimaq', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbimaq(application, req, res);
		});
	
}

