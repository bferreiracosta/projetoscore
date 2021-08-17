module.exports = function(application){
	
	application.get('/atribuicaomorumbi', function(req, res){
		application.app.controllers.atribuicao.atribuicaomorumbi.atribuicaomorumbi(application, req, res);
		});
}