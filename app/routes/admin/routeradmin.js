module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.admin.controlleradmin.index(application, req, res);
		res.setHeader('Content-Type', 'text/html');
	
	});
	application.get('/sair', function(req, res){
		if(req.session.loggedin){
			req.session = null;
		res.redirect('/') 
		}
	});
	
	application.get('/index', function(req, res){
		application.app.controllers.admin.controlleradmin.index(application, req, res);
	});

	application.post('/auth', function(req, res) {
		application.app.controllers.admin.controlleradmin.autenticacao(application, req, res);
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
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/admin.controlleradminregulacao', function(req, res){
		if(req.session.loggedin){
			console.log('Estou em routes');
			application.app.controllers.admin.controlleradmin.admin.controlleradminregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});	
}
