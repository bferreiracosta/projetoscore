<<<<<<< HEAD
module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaisroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sinaisvitaisrooseveltadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorioadmroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriorooseveltenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateresproosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixaroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewsroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editresproosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

=======
module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaisroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sinaisvitaisrooseveltadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorioadmroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriorooseveltenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateresproosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerroosevelt.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixaroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerroosevelt.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewsroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editresproosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerroosevelt.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};