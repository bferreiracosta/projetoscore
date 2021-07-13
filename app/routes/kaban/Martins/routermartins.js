module.exports = function(application) {
	
	
	application.get('/kabanpacientemartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/leitosmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriodietasmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.relatoriodietasmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitasmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.relatoriovisitasmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/addexamemartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.addexamemartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/examemartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.examemartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexamemartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.editexamemartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexamemartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.deleteexamemartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexamemartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.saveexamemartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexamemartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.updateexamemartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendariomartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.calendariomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendariomartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.montarcalendariomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.atualizarleitomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/buscaracomodacaomartins', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.buscaracomodacao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/buscarleitosmartins', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.buscarleitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/buscarsetormartins', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.buscarsetor(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.editfugulinmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivomartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.editkabandispositivomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabanmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.editnewsmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittissmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.edittissmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.fugulinmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/newskabanmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.newsmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tissmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.tissmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabanmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.relatorioadmkabanmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabanmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.relatoriokabanmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.dispositivomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacientemartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivomartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.adddispositivomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinmartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.addfugulinmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtissmartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.addtissmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewsmartins', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.addnewsmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabanmartins/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Martins.controllermartins.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetissmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewsmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanmartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.updatedispositivokabanmartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabanmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetissmartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Martins.controllermartins.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/infouaimartins', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Martins.controllermartins.infouaimartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};