module.exports = function(application){
	
	application.get('/atribuicaoluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.atribuicaoluizote(application, req, res);
		});

	application.post('/adicionarescalaluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.adicionarescalaluizote(application, req, res);
		});

	application.get('/buscarescalaluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.buscarescalaluizote(application, req, res);
		});

	application.post('/editarescalaluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.editarescalaluizote(application, req, res);
		});

	application.post('/adicionandoescalafolgaluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.adicionandoescalafolga(application, req, res);
		});

	application.post('/updateescalaparadaluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.updateescalaparadaluizote(application, req, res);
		});
	application.post('/updatedescansoluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.updatedescanso(application, req, res);
		});
}


