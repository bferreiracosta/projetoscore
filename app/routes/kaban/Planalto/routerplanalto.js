module.exports = function(application) {
	
	
	application.get('/kabanpacienteplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriopendenciasplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriopendencias(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioplanoaltaplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatorioplanoalta(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriocovidplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriomentalplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriomentalplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/leitosplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/cadastrarleitosplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrarleitosplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addexameplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.addexameplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/exameplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.exameplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexameplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.editexameplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexameplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.deleteexameplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexameplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.saveexameplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexameplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.updateexameplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendarioplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.calendarioplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendarioplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.montarcalendarioplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.atualizarleitoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.get('/buscarpacientesplanalto', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.buscarpacientesplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/buscaridpacientesplanalto', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.buscaridpacientesplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.editfugulinplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivoplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.editkabandispositivoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabanplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.editnewsplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittissplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.edittissplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.fugulinplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newskabanplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.newsplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tissplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.tissplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabanplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatorioadmkabanplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabanplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriokabanplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriosemleitosplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriosemleitosplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriodietasplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriodietasplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitasplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.relatoriovisitasplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.dispositivoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacienteplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivoplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.adddispositivoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.addfugulinplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtissplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.addtissplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewsplanalto', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.addnewsplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabanplanalto/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Planalto.controllerplanalto.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetissplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewsplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.updatedispositivokabanplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabanplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetissplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Planalto.controllerplanalto.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/infouaiplanalto', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Planalto.controllerplanalto.infouaiplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};