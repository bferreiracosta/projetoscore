module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.admin.controlleradmin.index(application, req, res);
			
	});
	application.get('/sair', function(req, res){
		if(req.session.loggedin){
			req.session = null;
			var mensage = "Você saiu!!!";
			res.render("home/index", {msg : mensage});
		}
	});
	
	application.get('/index', function(req, res){
		application.app.controllers.admin.controlleradmin.index(application, req, res);
	});

	application.get('/auth', function(req, res) {
		application.app.controllers.admin.controlleradmin.autenticacao(application, req, res);
	});

	application.get('/modulo', function(req, res) {
		application.app.controllers.admin.controlleradmin.modulo(application, req, res);
	});
	application.post('/login', function(req, res) {
		application.app.controllers.admin.controlleradmin.login(application, req, res);
	});
	application.post('/trocarmodulo', function(req, res) {

		application.app.controllers.admin.controlleradmin.trocarmodulo(application, req, res);
	});
	application.get('/updatepassword', function(req, res) {
		application.app.controllers.admin.controlleradmin.updatepassword(application, req, res);
	});

	application.post('/mudarsenha', function(req, res) {
		application.app.controllers.admin.controlleradmin.mudarsenha(application, req, res);
	});
	
	application.get('/admin.controlleradmin', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.admin.controlleradmin.admin.controlleradmin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/admin.controlleradminregulacao', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.admin.controlleradmin.admin.controlleradminregulacao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});	
}
