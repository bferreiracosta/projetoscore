const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalasiate', function(req, res){
		application.app.controllers.escala.escalasiate.escalasiate(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalasiate', function(req, res){
		application.app.controllers.escala.escalasiate.criarescalasiate(application, req, res);
		});
	application.get('/updateescalasiate', function(req, res){
		application.app.controllers.escala.escalasiate.updateescalasiate(application, req, res);
		});
	application.post('/validarescalasiate', function(req, res){
		application.app.controllers.escala.escalasiate.validarescala(application, req, res);
		});
	application.get('/updateferiasSIATE', function(req, res){
		application.app.controllers.escala.escalasiate.updateferiasSIATE(application, req, res);
		});
	application.get('/buscarescalamensalsiate', function(req, res){
		application.app.controllers.escala.escalasiate.buscarescalamensalsiate(application, req, res);
		});
	application.get('/buscarescalamensalmedicosiate', function(req, res){
		application.app.controllers.escala.escalasiate.buscarescalamensalmedicosiate(application, req, res);
		});
	application.get('/buscarescalamensaltecnicosiate', function(req, res){
		application.app.controllers.escala.escalasiate.buscarescalamensaltecnicosiate(application, req, res);
		});
		
}

