module.exports.centraluaipampulharelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitopampulha(function(error, resultado){
			res.render("gestao/centraluaipampulharelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorgerelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitosaojorge(function(error, resultado){
			res.render("gestao/centraluaisaojorgerelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaimorumbirelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitomorumbi(function(error, resultado){
			res.render("gestao/centraluaimorumbirelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaitiberyrelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitotibery(function(error, resultado){
			res.render("gestao/centraluaitiberyrelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluairooseveltrelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitoroosevelt(function(error, resultado){
			res.render("gestao/centraluairooseveltrelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaimartinsrelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitomartins(function(error, resultado){
			console.log(resultado);
			res.render("gestao/centraluaimartinsrelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluailuizoterelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitoluizote(function(error, resultado){
			res.render("gestao/centraluailuizoterelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanaltorelatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladmingestao.buscarleitoplanalto(function(error, resultado){
			
			res.render("gestao/centraluaiplanaltorelatorio", {leito : resultado, id : result});
		});
	});	
}

module.exports.editarleitoluizote= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitosluizote(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitoluizote(function(error, resultado){
				res.render("gestao/centraluailuizoterelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitoplanalto= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitosplanalto(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitoplanalto(function(error, resultado){
				res.render("gestao/centraluaiplanaltorelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitomartins= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitosmartins(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitomartins(function(error, resultado){
				res.render("gestao/centraluaimartinsrelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitoroosevelt= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitosroosevelt(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitoroosevelt(function(error, resultado){
				res.render("gestao/centraluairooseveltrelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitotibery= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitostibery(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitotibery(function(error, resultado){
				res.render("gestao/centraluaitiberyrelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitomorumbi= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitosmorumbi(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitomorumbi(function(error, resultado){
				res.render("gestao/centraluaimorumbirelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitosaojorge= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitossaojorge(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitosaojorge(function(error, resultado){
				res.render("gestao/centraluaisaojorgerelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
module.exports.editarleitopampulha= function(application, req, res){
	var id = req.body.idusuario;
	var cama = req.body.capacidadecamasocupadas;
	var maca = req.body.capacidademacasocupadas;
	var macaparada = req.body.capacidademacasparadavaga;
	var berco = req.body.capacidadebercoocupado;
	var setor = req.body.setor; 
	var data = req.body.data;
	var hora = req.body.hora;
	var bloqueado = req.body.leitos;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladmingestao.updateleitospampulha(cama, maca, macaparada, berco, setor, data, hora,bloqueado, function(error, result){
			modeladmingestao.buscarleitopampulha(function(error, resultado){
				res.render("gestao/centraluaipampulharelatorio", {leito : resultado, id : resultados});
			});
		});
	});	
}
