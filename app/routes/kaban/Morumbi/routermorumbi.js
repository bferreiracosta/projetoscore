module.exports = function(application) {
	
	
	application.get('/kabanpacientemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/leitosmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriodietasmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.relatoriodietasmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitasmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.relatoriovisitasmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/addexamemorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.addexamemorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/examemorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.examemorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexamemorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.editexamemorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexamemorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.deleteexamemorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexamemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.saveexamemorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexamemorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.updateexamemorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendariomorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.calendariomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendariomorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.montarcalendariomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.atualizarleitomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/buscaracomodacaomorumbi', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.buscaracomodacao(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/buscarleitosmorumbi', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.buscarleitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/buscarsetormorumbi', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.buscarsetor(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.editfugulinmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivomorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.editkabandispositivomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabanmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.editnewsmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittissmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.edittissmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.fugulinmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/newskabanmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.newsmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tissmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.tissmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabanmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.relatorioadmkabanmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabanmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.relatoriokabanmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.dispositivomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacientemorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivomorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.adddispositivomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinmorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.addfugulinmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtissmorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.addtissmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewsmorumbi', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.addnewsmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabanmorumbi/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Morumbi.controllermorumbi.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetissmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewsmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanmorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.updatedispositivokabanmorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabanmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetissmorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Morumbi.controllermorumbi.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/infouaimorumbi', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Morumbi.controllermorumbi.infouaimorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};