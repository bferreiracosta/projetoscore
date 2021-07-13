<<<<<<< HEAD
module.exports = function(application){
	application.get('/centraluaiplanaltorelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaiplanaltorelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluailuizoterelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluailuizoterelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/centraluaimartinsrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaimartinsrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/centraluairooseveltrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluairooseveltrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaitiberyrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaitiberyrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaimorumbirelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaimorumbirelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaisaojorgerelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaisaojorgerelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaipampulharelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaipampulharelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.post('/editarleitoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.post('/editarleitotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
=======
module.exports = function(application){
	application.get('/centraluaiplanaltorelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaiplanaltorelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluailuizoterelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluailuizoterelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.get('/centraluaimartinsrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaimartinsrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.get('/centraluairooseveltrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluairooseveltrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaitiberyrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaitiberyrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaimorumbirelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaimorumbirelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaisaojorgerelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaisaojorgerelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	

	application.get('/centraluaipampulharelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.centraluaipampulharelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	
	application.post('/editarleitoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.post('/editarleitotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.gestao.controlleradmingestao.editarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}