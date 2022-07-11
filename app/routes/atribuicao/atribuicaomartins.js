module.exports = function(application){
	
	application.get('/atribuicaomartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.atribuicaomartins(application, req, res);
		});

	application.post('/adicionarescalamartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.adicionarescalamartins(application, req, res);
		});

	application.get('/buscarescalamartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.buscarescalamartins(application, req, res);
		});

	application.post('/editarescalamartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.editarescalamartins(application, req, res);
		});

	application.post('/adicionandoescalafolgamartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.adicionandoescalafolga(application, req, res);
		});

	application.post('/updateescalaparadamartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.updateescalaparadamartins(application, req, res);
		});
	application.post('/updatedescansomartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.updatedescanso(application, req, res);
		});
}


