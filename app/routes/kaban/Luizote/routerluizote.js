module.exports = function(application) {
	
	
	application.get('/kabanpacienteluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/leitosluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addexameluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.addexameluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/exameluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.exameluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexameluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.editexameluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexameluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.deleteexameluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexameluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.saveexameluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexameluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.updateexameluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendarioluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.calendarioluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendarioluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.montarcalendarioluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.atualizarleitoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/buscaracomodacaoluizote', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.buscaracomodacao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/buscarleitosluizote', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.buscarleitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/buscarsetorluizote', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.buscarsetor(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.editfugulinluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivoluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.editkabandispositivoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabanluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.editnewsluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittissluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.edittissluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.fugulinluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newskabanluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.newsluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tissluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.tissluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabanluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.relatorioadmkabanluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabanluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.relatoriokabanluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriodietasluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.relatoriodietasluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitasluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.relatoriovisitasluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.dispositivoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacienteluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivoluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.adddispositivoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.addfugulinluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtissluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.addtissluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewsluizote', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.addnewsluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabanluizote/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Luizote.controllerluizote.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetissluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewsluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanluizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.updatedispositivokabanluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabanluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetissluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Luizote.controllerluizote.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/infouailuizote', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Luizote.controllerluizote.infouailuizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};