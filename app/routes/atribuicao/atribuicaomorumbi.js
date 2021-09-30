module.exports = function(application){
	
	application.get('/atribuicaomorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.atribuicaomorumbi(application, req, res);
		});

	application.post('/adicionarescalamorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.adicionarescalamorumbi(application, req, res);
		});

	application.get('/buscarescalamorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.buscarescalamorumbi(application, req, res);
		});

	application.post('/editarescalamorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.editarescalamorumbi(application, req, res);
		});

	application.post('/adicionandoescalafolgamorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.adicionandoescalafolga(application, req, res);
		});

	application.post('/updateescalaparadamorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.updateescalaparadamorumbi(application, req, res);
		});
}

