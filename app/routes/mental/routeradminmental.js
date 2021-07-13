<<<<<<< HEAD
module.exports = function(application){
		application.get('/destinopaciente', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.mental.controlleradminmental.destino(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});
		application.get('/pacientesurgencia', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.mental.controlleradminmental.destinourgencia(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});

		application.post('/baixa', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.mental.controlleradminmental.baixa(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});

}


=======
module.exports = function(application){
		application.get('/destinopaciente', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.mental.controlleradminmental.destino(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});
		application.get('/pacientesurgencia', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.mental.controlleradminmental.destinourgencia(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});

		application.post('/baixa', function(req, res){
			if(req.session.loggedin){
				application.app.controllers.mental.controlleradminmental.baixa(application, req, res);
			}
			else{
				var mensage = "Faça login!!";
			res.render("home/index", {msg : mensage});
			}
			
		});

}


>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
