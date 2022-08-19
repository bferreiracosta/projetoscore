module.exports = function(application){
		application.get('/destinopaciente', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.saude_mental.controlleradminmental.destino(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});
		application.get('/pacientesurgencia', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.saude_mental.controlleradminmental.destinourgencia(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});

		application.post('/baixa', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.saude_mental.controlleradminmental.baixa(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});
		application.get('/historico', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.saude_mental.controlleradminmental.historico(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
				res.render("home/index", {msg : mensage});
			}
			
		});
		application.post('/savepaciente', function(req, res){
			if(req.session.loggedin){
				
				application.app.controllers.saude_mental.controlleradminmental.cadastrarpaciente(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
				res.render("home/index", {msg : mensage});
			}
			
		});
		application.get('/addpaciente', function(req, res){
			if(req.session.loggedin){
			
				application.app.controllers.saude_mental.controlleradminmental.addpaciente(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
				res.render("home/index", {msg : mensage});
			}
			
		});

}


