module.exports = function(application) {
	
	
	application.get('/kabanpacientesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriopendenciassaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatoriopendencias(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatorioplanoaltasaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatorioplanoalta(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/leitossaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/cadastrarleitossaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrarleitossaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addexamesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.addexamesaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/examesaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.examesaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexamesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.editexamesaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexamesaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.deleteexamesaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexamesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.saveexamesaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexamesaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.updateexamesaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendariosaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.calendariosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendariosaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.montarcalendariosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.atualizarleitosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.get('/buscarpacientessaojorge', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.buscarpacientessaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/buscaridpacientessaojorge', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.buscaridpacientessaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinsaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.editfugulinsaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivosaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.editkabandispositivosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabansaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.editnewssaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittisssaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.edittisssaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinsaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.fugulinsaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newskabansaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.newssaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tisssaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.tisssaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabansaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatorioadmkabansaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabansaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatoriokabansaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriosemleitossaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatoriosemleitossaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriodietassaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatoriodietassaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitassaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.relatoriovisitassaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.dispositivosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacientesaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivosaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.adddispositivosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinsaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.addfugulinsaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtisssaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.addtisssaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewssaojorge', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.addnewssaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabansaojorge/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.SaoJorge.controllersaojorge.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetisssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabansaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.updatedispositivokabansaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinsaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabansaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetisssaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.SaoJorge.controllersaojorge.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/infouaisaojorge', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.SaoJorge.controllersaojorge.infouaisaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};