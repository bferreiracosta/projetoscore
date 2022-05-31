module.exports = function(application){
	application.get('/homeescalacolorida', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.escalacolorida(application, req, res);
			
	});
		
}
