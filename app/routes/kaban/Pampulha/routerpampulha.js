module.exports = function(application) {
	
	
	application.get('/kabanpacientepampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrar(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriopendenciaspampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriopendencias(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioplanoaltapampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatorioplanoalta(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriocovidpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriocovidpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/relatoriomentalpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriomentalpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/leitospampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.leitos(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/cadastrarleitospampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrarleitospampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addexamepampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.addexamepampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/examepampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.examepampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editexamepampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.editexamepampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/deleteexamepampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.deleteexamepampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/saveexamepampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.saveexamepampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/updateexamepampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.updateexamepampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/calendariopampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.calendariopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/montarcalendariopampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.montarcalendariopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/atualizarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.atualizarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.get('/buscarpacientespampulha', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.buscarpacientespampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/buscaridpacientespampulha', function(req, res){
		
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.buscaridpacientespampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editfugulinpampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.editfugulinpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editkabandispositivopampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.editkabandispositivopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/editnewskabanpampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.editnewspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/edittisspampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.edittisspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/fugulinpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.fugulinpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/newskabanpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.newspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/tisspampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.tisspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioadmkabanpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatorioadmkabanpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriokabanpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriokabanpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriosemleitospampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriosemleitospampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriodietaspampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriodietaspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatoriovisitaspampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.relatoriovisitaspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/historicokabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.historico(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/dispositivopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.dispositivopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addkabanpacientepampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.addpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/adddispositivopampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.adddispositivopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addfugulinpampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.addfugulinpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addtisspampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.addtisspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/addnewspampulha', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.addnewspampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/editkabanpampulha/:idusuario/', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.kaban.Pampulha.controllerpampulha.editpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savekabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrarpaciente(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savedispositivopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrardispositivo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savefugulinpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrarfugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savetisspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrartiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/savenewspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.cadastrarnews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	

	application.post('/updatekabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.update(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.post('/baixakabanpampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.baixa(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/updatedispositivokabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.updatedispositivokabanpampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatefugulinpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.updatefugulin(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatenewskabanpampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.updatenews(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/updatetisspampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.kaban.Pampulha.controllerpampulha.updatetiss(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/infouaipampulha', function(req, res){
		if(req.session.loggedin){
			application.app.controllers.kaban.Pampulha.controllerpampulha.infouaipampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
};