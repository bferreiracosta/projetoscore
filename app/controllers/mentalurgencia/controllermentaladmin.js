<<<<<<< HEAD
const { createPool } = require("mysql");


module.exports.historicogeral= function(application, req, res){
	
	var modelmentaladmin = new application.app.model.mentalurgencia.modelmentaladmin(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentaladmin.historico(function(error, resultado){
			res.render("mentalurgencia/historicogeral", {mental : resultado, id : result});
		});
	});		
}

=======
const { createPool } = require("mysql");


module.exports.historicogeral= function(application, req, res){
	
	var modelmentaladmin = new application.app.model.mentalurgencia.modelmentaladmin(application);
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmentaladmin.historico(function(error, resultado){
			res.render("mentalurgencia/historicogeral", {mental : resultado, id : result});
		});
	});		
}

>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
