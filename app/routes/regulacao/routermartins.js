module.exports = function(application) {
	
	
	application.get('/cadastrarpacientemartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermartins.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacientemartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermartins.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/newsmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaismartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaismartinsadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/respiracaomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.relatorioadmmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriomartinsenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacientemartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatemartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewsmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updaterespmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixamartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllermartins.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/homeregulacao.controllermartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermartins.homeregulacao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/addpacientemartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermartins.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientemartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermartins.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewsmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermartins.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editrespmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllermartins.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatedispositivomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllermartins.updatedispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
};