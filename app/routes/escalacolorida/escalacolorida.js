module.exports = function(application){
	application.get('/homeescalacolorida', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.escalacolorida(application, req, res);
			
	});
	application.get('/buscarplanalto', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarplanalto(application, req, res);
			
	});
	application.get('/buscarluizote', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarluizote(application, req, res);
			
	});
	application.get('/buscarmartins', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarmartins(application, req, res);
			
	});
	application.get('/buscarroosevelt', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarroosevelt(application, req, res);
			
	});
	application.get('/buscartibery', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscartibery(application, req, res);
			
	});
	application.get('/buscarmorumbi', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarmorumbi(application, req, res);
			
	});
	application.get('/buscarsad', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarsad(application, req, res);
			
	});
	application.get('/buscarcer', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcer(application, req, res);
			
	});
	application.get('/buscarcc', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcc(application, req, res);
			
	});
	application.get('/buscarua', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarua(application, req, res);
			
	});
	application.get('/buscarsiate', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarsiate(application, req, res);
			
	});
	application.get('/buscarcapsad', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcapsad(application, req, res);
			
	});
	application.get('/buscarcapsi', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcapsi(application, req, res);
			
	});
	application.get('/buscarcapsleste', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcapsleste(application, req, res);
			
	});
	application.get('/buscarcapsoeste', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcapsoeste(application, req, res);
			
	});
	application.get('/buscarcapsnorte', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.buscarcapsnorte(application, req, res);
			
	});
	application.post('/savevagasplanalto', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.savevagasplanalto(application, req, res);
			
	});
	application.post('/saveferiasplanalto', function(req, res){
		application.app.controllers.escalacolorida.controllerescalacolorida.saveferiasplanalto(application, req, res);
			
	});
		
}
