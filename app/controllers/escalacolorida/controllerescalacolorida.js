module.exports.escalacolorida = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescala(function(error,result){
			res.render("escalacolorida/homeescalacolorida", {planalto:result});
		});

}


