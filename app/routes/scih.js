module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.home.index(application, req, res);
	
	});
	application.get('/sair', function(req, res){
		if(req.session.loggedin){
		req.session.destroy();
		res.redirect('/') 
		}
	});
	
	application.get('/index', function(req, res){
		application.app.controllers.home.index(application, req, res);
	});

	application.post('/auth', function(req, res) {
		application.app.controllers.home.autenticacao(application, req, res);
	});

	application.get('/updatepassword', function(req, res) {
		application.app.controllers.home.updatepassword(application, req, res);
	});

	application.post('/mudarsenha', function(req, res) {
		application.app.controllers.home.mudarsenha(application, req, res);
	});
	
	application.get('/home', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.home.home(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/homeregulacao', function(req, res){
		if(req.session.loggedin){
			console.log('Estou em routes');
			application.app.controllers.home.homeregulacao(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/pacientes', function(req, res){	
		if(req.session.loggedin){
		
			application.app.controllers.home.pacientes(application, req, res);
		}	
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
	});

	application.get('/paciente', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.paciente(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
		
	});
	
	application.get('/status', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.status(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/notifica', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.notifica(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/checkup', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.checkup(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/fast', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.fast(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/epidemiologico', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.epidemiologico(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/obito', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.obito(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/isolamento', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.isolamento(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/sepse', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.sepse(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/indicador', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.indicador(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/lixo', function(req, res){
		if(req.session.loggedin){
		
			application.app.controllers.home.lixo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/rouparia', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.rouparia(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.get('/centraluti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluti(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluai', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluai(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraluaiplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluaiplanalto(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluailuizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluailuizote(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaimartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluaimartins(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluairoosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluairoosevelt(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaitibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluaitibery(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaimorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluaimorumbi(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaisaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluaisaojorge(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.get('/centraluaipampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraluaipampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centralenfermaria(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/editarleitoanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitoanexo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centralanexo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraladmanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraladmanexo(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centraladmhmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centraladmhmu(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});


	application.post('/editarleitocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitocim(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitoluizote(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitomartins(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitomorumbi(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	
	application.post('/editarleitotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitotibery(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitopampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitoplanalto(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitoroosevelt(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitosaojorge(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitopampulha(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.centralcim(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.post('/editarleitohmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.home.editarleitohmu(application, req, res);
		}
		else{
			res.send("Faça login!!");
			res.redirect('/')
		}
		
	});

	application.get('/centralhmu', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.home.centralhmu(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});

}


