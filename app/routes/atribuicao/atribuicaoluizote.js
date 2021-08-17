module.exports = function(application){
	
	application.get('/atribuicaoluizote', function(req, res){
		application.app.controllers.atribuicao.atribuicaoluizote.atribuicaoluizote(application, req, res);
		});
}