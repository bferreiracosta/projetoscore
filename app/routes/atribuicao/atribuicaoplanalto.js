module.exports = function(application){
	
	application.get('/atribuicaoplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.atribuicaoplanalto(application, req, res);
		});

	application.post('/adicionarescalaplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.adicionarescalaplanalto(application, req, res);
		});

	application.get('/buscarescalaplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.buscarescalaplanalto(application, req, res);
		});

	application.post('/editarescalaplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.editarescalaplanalto(application, req, res);
		});

	application.post('/adicionandoescalafolgaplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.adicionandoescalafolga(application, req, res);
		});

	application.post('/updateescalaparadaplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.updateescalaparadaplanalto(application, req, res);
		});
	application.post('/updatedescansoplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.updatedescanso(application, req, res);
		});
}


