const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.escalaplanalto(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('/home/bruno/Área de Trabalho/Sites/ProjetoSCIH - Original/app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

}

