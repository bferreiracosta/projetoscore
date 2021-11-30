const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.escalaluizote(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.criarescalaluizote(application, req, res);
		});
	application.get('/updateescalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizote(application, req, res);
		});
	application.post('/validarescalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.validarescala(application, req, res);
		});
	application.get('/updateferiasluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.updateferias(application, req, res);
		});
	application.get('/buscarescalamensalluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizote(application, req, res);
		});
	application.get('/buscarescalamensalluizotetarde', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizotetarde(application, req, res);
		});
	application.get('/buscarescalamensalluizotesn1', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizotesn1(application, req, res);
		});
	application.get('/buscarescalamensalluizotesn2', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizotesn2(application, req, res);
		});
	application.get('/buscarescalamensalluizotemaq', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizotemaq(application, req, res);
		});
	
}

