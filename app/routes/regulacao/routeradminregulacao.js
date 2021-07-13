module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.regulacao.controlleradminregulacao.index(application, req, res);
	
	});
	
	application.get('/relatoriouti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorionull', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorionull(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluti(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centralenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitoanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoanexo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centralanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralanexo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraladmanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraladmanexo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraladmhmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraladmhmu(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/editarleitocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitocim(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.get('/centralcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralcim(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitohmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitohmu(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centralhmu', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centralhmu(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});

		

}


