module.exports = function(application){
	
	application.get('/atribuicaoroosevelt', function(req, res){
		application.app.controllers.atribuicao.atribuicaoroosevelt.atribuicaoroosevelt(application, req, res);
		});
}