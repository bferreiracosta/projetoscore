module.exports = function(application) {
	
	
	application.get('/cadastrarpacientetibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllertibery.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacientetibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllertibery.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaistibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sinaisvitaistiberyadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmtibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.relatorioadmtibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriotiberyenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacientetibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatetibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateresptibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllertibery.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixatibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllertibery.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/addpacientetibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientetibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewstibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editresptibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllertibery.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

};