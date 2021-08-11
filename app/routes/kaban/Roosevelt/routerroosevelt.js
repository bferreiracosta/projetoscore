module.exports = function(application) {
	
	
	application.get('/kabanpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriopendenciasroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.relatoriopendencias(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/leitosroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/cadastrarleitosroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrarleitosroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addexameroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.addexameroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/exameroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.exameroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexameroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.editexameroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexameroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.deleteexameroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexameroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.saveexameroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexameroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.updateexameroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendarioroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.calendarioroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendarioroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.montarcalendarioroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.atualizarleitoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.get('/buscarpacientesroosevelt', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.buscarpacientesroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/buscaridpacientesroosevelt', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.buscaridpacientesroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.editfugulinroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivoroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.editkabandispositivoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabanroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.editnewsroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittissroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.edittissroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.fugulinroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newskabanroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.newsroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tissroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.tissroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabanroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.relatorioadmkabanroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabanroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.relatoriokabanroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriosemleitosroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.relatoriosemleitosroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriodietasroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.relatoriodietasroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitasroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.relatoriovisitasroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.dispositivoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacienteroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivoroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.adddispositivoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.addfugulinroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtissroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.addtissroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewsroosevelt', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.addnewsroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabanroosevelt/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetissroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewsroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanroosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.updatedispositivokabanroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabanroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetissroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/infouairoosevelt', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Roosevelt.controllerroosevelt.infouairoosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};