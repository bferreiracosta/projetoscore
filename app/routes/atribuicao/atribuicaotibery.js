module.exports = function(application){
	
	application.get('/atribuicaotibery', function(req, res){
		application.app.controllers.atribuicao.atribuicaotibery.atribuicaotibery(application, req, res);
		});
}