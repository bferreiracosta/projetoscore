module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.regulacao.controlleradminregulacao.index(application, req, res);
	
	});
	
	application.get('/relatoriouti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorio(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/relatorioenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorioenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluti(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluai', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluai(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaiplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaiplanalto(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluailuizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluailuizote(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaimartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaimartins(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluairoosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluairoosevelt(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaitibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaitibery(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaimorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaimorumbi(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaisaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaisaojorge(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaipampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaipampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/editarleitoanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoanexo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralanexo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraladmanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraladmanexo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraladmhmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraladmhmu(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});


	application.post('/editarleitocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitocim(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoluizote(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitomartins(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitomorumbi(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.post('/editarleitotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitotibery(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitopampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoplanalto(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoroosevelt(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitosaojorge(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitopampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralcim(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/editarleitohmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitohmu(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralhmu', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centralhmu(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});

}


