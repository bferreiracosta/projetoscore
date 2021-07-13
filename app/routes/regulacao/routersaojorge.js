<<<<<<< HEAD
module.exports = function(application) {
	
	
	application.get('/cadastrarpacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaissaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sinaisvitaissaojorgeadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorioadmsaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriosaojorgeenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacientesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updaterespsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixasaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewssaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editrespsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

=======
module.exports = function(application) {
	
	
	application.get('/cadastrarpacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/relatoriopacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.relatoriounidade(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.news(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/sinaisvitaissaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/sinaisvitaissaojorgeadm/:idusuario/', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.sinaisvitais(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/respiracaosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.respiracao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioadmsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorioadmsaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriosaojorgeenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savepacientesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updatenewssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updaterespsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controllersaojorge.updateresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/baixasaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.regulacao.controllersaojorge.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/addpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editpacientesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editnewssaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/editrespsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.regulacao.controllersaojorge.editresp(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
};