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
}

