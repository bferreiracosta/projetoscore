module.exports = function(application){
	
	application.get('/atribuicaoroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.atribuicaoroosevelt(application, req, res);
		});

	application.post('/adicionarescalaroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.adicionarescalaroosevelt(application, req, res);
		});

	application.get('/buscarescalaroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.buscarescalaroosevelt(application, req, res);
		});

	application.post('/editarescalaroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.editarescalaroosevelt(application, req, res);
		});

	application.post('/adicionandoescalafolgaroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.adicionandoescalafolga(application, req, res);
		});

	application.post('/updateescalaparadaroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.updateescalaparadaroosevelt(application, req, res);
		});
}

