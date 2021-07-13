module.exports = function(application){
	application.get('/centraluaiplanaltomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaiplanaltomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaiplanaltorelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaiplanaltorelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluailuizotemateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluailuizotemateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluailuizoterelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluailuizoterelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaimartinsmateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaimartinsmateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaimartinsrelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaimartinsrelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/centraluairooseveltmateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluairooseveltmateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluairooseveltrelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluairooseveltrelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaitiberymateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaitiberymateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaitiberyrelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaitiberyrelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaimorumbimateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaimorumbimateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaimorumbirelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaimorumbirelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaisaojorgemateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaisaojorgemateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaisaojorgerelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaisaojorgerelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaipampulhamateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaipampulhamateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaipampulharelatoriomateriais', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.centraluaipampulharelatoriomateriais(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/updatedispositivopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.equipamentos.controlleradminequipamentos.updatedispositivopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

}


