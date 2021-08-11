module.exports = function(application){
	
	application.get('/atribuicaoplanalto', function(req, res){
		application.app.controllers.atribuicao.atribuicaoplanalto.atribuicaoplanalto(application, req, res);
		});
}