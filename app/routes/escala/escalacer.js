const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalacer', function(req, res){
		application.app.controllers.escala.escalacer.escalacer(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalacer', function(req, res){
		application.app.controllers.escala.escalacer.criarescalacer(application, req, res);
		});
	application.get('/updateescalacer', function(req, res){
		application.app.controllers.escala.escalacer.updateescalacer(application, req, res);
		});
	application.post('/validarescalacer', function(req, res){
		application.app.controllers.escala.escalacer.validarescala(application, req, res);
		});
	application.get('/updateferiascer', function(req, res){
		application.app.controllers.escala.escalacer.updateferiascer(application, req, res);
		});
	application.get('/buscarescalamensalcer', function(req, res){
		application.app.controllers.escala.escalacer.buscarescalamensalcer(application, req, res);
		});	
}

