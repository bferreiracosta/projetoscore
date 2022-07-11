module.exports.centraluaipampulhamateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivopampulha(function(error, resultado){
			res.render("equipamentos/centraluaipampulhamateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaipampulharelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivopampulha(function(error, resultado){
			res.render("equipamentos/centraluaipampulharelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivopampulha= function(application, req, res){
	
	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivopampulha(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivopampulha(function(error, resultado){
				res.render("equipamentos/centraluaipampulharelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}

module.exports.centraluaisaojorgemateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivosaojorge(function(error, resultado){
			res.render("equipamentos/centraluaisaojorgemateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaisaojorgerelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivosaojorge(function(error, resultado){
			res.render("equipamentos/centraluaisaojorgerelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivosaojorge= function(application, req, res){

	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivosaojorge(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivosaojorge(function(error, resultado){
				res.render("equipamentos/centraluaisaojorgerelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}


module.exports.centraluaimorumbimateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivomorumbi(function(error, resultado){
			res.render("equipamentos/centraluaimorumbimateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaimorumbirelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivomorumbi(function(error, resultado){
			res.render("equipamentos/centraluaimorumbirelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivomorumbi= function(application, req, res){

	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivomorumbi(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivomorumbi(function(error, resultado){
				res.render("equipamentos/centraluaimorumbirelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}

module.exports.centraluaitiberymateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivotibery(function(error, resultado){
			res.render("equipamentos/centraluaitiberymateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaitiberyrelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivotibery(function(error, resultado){
			res.render("equipamentos/centraluaitiberyrelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivotibery= function(application, req, res){
	
	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivotibery(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivotibery(function(error, resultado){
				res.render("equipamentos/centraluaitiberyrelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}

module.exports.centraluairooseveltmateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivoroosevelt(function(error, resultado){
			res.render("equipamentos/centraluairooseveltmateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluairooseveltrelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivoroosevelt(function(error, resultado){
			res.render("equipamentos/centraluairooseveltrelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivoroosevelt= function(application, req, res){

	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);

	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivoroosevelt(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivoroosevelt(function(error, resultado){
				res.render("equipamentos/centraluairooseveltrelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}


module.exports.centraluaimartinsmateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivomartins(function(error, resultado){
			res.render("equipamentos/centraluaimartinsmateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaimartinsrelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivomartins(function(error, resultado){
			res.render("equipamentos/centraluaimartinsrelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivomartins= function(application, req, res){
	
	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivomartins(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivomartins(function(error, resultado){
				res.render("equipamentos/centraluaimartinsrelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}

module.exports.centraluailuizotemateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivoluizote(function(error, resultado){
			res.render("equipamentos/centraluailuizotemateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluailuizoterelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivoluizote(function(error, resultado){
			res.render("equipamentos/centraluailuizoterelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.updatedispositivoluizote= function(application, req, res){
	
	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivoluizote(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora,  function(error, result){
			modeladminequipamentos.buscardispositivoluizote(function(error, resultado){
				res.render("equipamentos/centraluailuizoterelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}

module.exports.centraluaiplanaltomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivoplanalto(function(error, resultado){
			res.render("equipamentos/centraluaiplanaltomateriais", {dispositivo : resultado, id : result});
		});
	});	
}

module.exports.centraluaiplanaltorelatoriomateriais= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);

	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modeladminequipamentos.buscardispositivoplanalto(function(error, resultado){
			res.render("equipamentos/centraluaiplanaltorelatoriomateriais", {dispositivo : resultado, id : result});
		});
	});	
}
module.exports.updatedispositivoplanalto= function(application, req, res){

	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var vmde = req.body.vmde;
	var mu = req.body.mu;
	var md = req.body.md;
	var mde = req.body.mde;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var bicde = req.body.bicde;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	var modeladminequipamentos = new application.app.model.equipamentos.modeladminequipamentos(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeladminequipamentos.updatedispositivoplanalto(vmu,vmd, vmde, mu,md, mde, bicu,bicd,bicde, data, hora, function(error, result){
			modeladminequipamentos.buscardispositivoplanalto(function(error, resultado){
				res.render("equipamentos/centraluaiplanaltorelatoriomateriais", {dispositivo : resultado, id : resultados});
			});
		});
	});	
}
