module.exports.atribuicaomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
	
		res.render("atribuicao/atribuicaomartins", {id : result});
	});
}