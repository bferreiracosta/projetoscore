module.exports = function(application) {
	
	
	application.get('/cadastrarpacientepampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerpampulha.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacientepampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerpampulha.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaispampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaispampulhaadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.relatorioadmpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriopampulhaenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacientepampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatepampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateresppampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixapampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerpampulha.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addpacientepampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerpampulha.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientepampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerpampulha.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewspampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerpampulha.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editresppampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerpampulha.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatedispositivopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerpampulha.updatedispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};