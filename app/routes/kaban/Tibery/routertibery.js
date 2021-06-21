module.exports = function(application) {
	
	
	application.get('/kabanpacientetibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/leitostibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriodietastibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.relatoriodietastibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitastibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.relatoriovisitastibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/addexametibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.addexametibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/exametibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.exametibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexametibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.editexametibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexametibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.deleteexametibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexametibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.saveexametibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexametibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.updateexametibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendariotibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.calendariotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendariotibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.montarcalendariotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.atualizarleitotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/buscarleitostibery', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.buscarleitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/buscarsetortibery', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.buscarsetor(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulintibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.editfugulintibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivotibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.editkabandispositivotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabantibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.editnewstibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittisstibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.edittisstibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulintibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.fugulintibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/newskabantibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.newstibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tisstibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.tisstibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabantibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.relatorioadmkabantibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabantibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.relatoriokabantibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.dispositivotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacientetibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivotibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.adddispositivotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulintibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.addfugulintibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtisstibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.addtisstibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewstibery', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.addnewstibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabantibery/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Tibery.controllertibery.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulintibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetisstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabantibery', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Tibery.controllertibery.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.updatedispositivokabantibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulintibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabantibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetisstibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Tibery.controllertibery.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};