<<<<<<< HEAD
module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaisplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaisplanaltoadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorioadmplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioplanaltoenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacienteplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updaterespplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixaplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewsplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editrespplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
=======
module.exports = function(application) {
	
	
	application.get('/cadastrarpacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaisplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaisplanaltoadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorioadmplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioplanaltoenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacienteplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updaterespplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllerplanalto.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixaplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllerplanalto.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacienteplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacienteplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewsplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editrespplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllerplanalto.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};