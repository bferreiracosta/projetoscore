module.exports = function(application){
	
	application.get('/atribuicaomartins', function(req, res){
		application.app.controllers.atribuicao.atribuicaomartins.atribuicaomartins(application, req, res);
		});
}