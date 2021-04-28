module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.regulacao.controlleradminregulacao.index(application, req, res);
	
	});
	
	application.get('/relatoriouti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorioenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorioenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/relatorionull', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.relatorionull(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluti', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluti(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaiplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaiplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaiplanaltorelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaiplanaltorelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluailuizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluailuizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluailuizoterelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluailuizoterelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluaimartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaimartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluaimartinsrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaimartinsrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.get('/centraluairoosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluairoosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluairooseveltrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluairooseveltrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaitibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaitibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaitiberyrelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaitiberyrelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaimorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaimorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaimorumbirelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaimorumbirelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaisaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaisaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaisaojorgerelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaisaojorgerelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaipampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaipampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraluaipampulharelatorio', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraluaipampulharelatorio(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centralenfermaria', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralenfermaria(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitoanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoanexo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centralanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralanexo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraladmanexo', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraladmanexo(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.get('/centraladmhmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centraladmhmu(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.post('/editarleitocim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitocim(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoluizote', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoluizote(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitomartins', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitomartins(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitomorumbi', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitomorumbi(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	
	application.post('/editarleitotibery', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitotibery(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoplanalto', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoplanalto(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitoroosevelt', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitoroosevelt(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitosaojorge', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitosaojorge(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});
	application.post('/editarleitopampulha', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitopampulha(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});


	application.get('/centralcim', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.centralcim(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
		}
		
	});

	application.post('/editarleitohmu', function(req, res){
		if(req.session.loggedin){
			
			application.app.controllers.regulacao.controlleradminregulacao.editarleitohmu(application, req, res);
		}
		else{
			var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
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

		application.get('/centraluaiplanaltomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaiplanaltomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaiplanaltorelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaiplanaltorelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
		application.get('/centraluailuizotemateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluailuizotemateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluailuizoterelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluailuizoterelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
		application.get('/centraluaimartinsmateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaimartinsmateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
		application.get('/centraluaimartinsrelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaimartinsrelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
		application.get('/centraluairooseveltmateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluairooseveltmateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluairooseveltrelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluairooseveltrelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaitiberymateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaitiberymateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaitiberyrelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaitiberyrelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaimorumbimateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaimorumbimateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaimorumbirelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaimorumbirelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaisaojorgemateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaisaojorgemateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaisaojorgerelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaisaojorgerelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaipampulhamateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaipampulhamateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});
	
		application.get('/centraluaipampulharelatoriomateriais', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.regulacao.controlleradminregulacao.centraluaipampulharelatoriomateriais(application, req, res);
			}
			else{
				res.send("Faça login!!");
				res.redirect('/')
			}
			
		});

}


