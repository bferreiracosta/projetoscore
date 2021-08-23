module.exports = function(application){
	
	application.get('/atribuicaotibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.atribuicaotibery(application, req, res);
		});

	application.post('/adicionarescalatibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.adicionarescalatibery(application, req, res);
		});

	application.get('/buscarescalatibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.buscarescalatibery(application, req, res);
		});

	application.post('/editarescalatibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.editarescalatibery(application, req, res);
		});

	application.post('/adicionandoescalafolgatibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.adicionandoescalafolga(application, req, res);
		});

	application.post('/updateescalaparadatibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.updateescalaparadatibery(application, req, res);
		});
}

