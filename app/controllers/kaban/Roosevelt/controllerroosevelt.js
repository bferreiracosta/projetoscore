module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : result});
		});
	});	
}

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.historico(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/historicokabanroosevelt", {paciente : resultado, id : result});
		});
	});		
}
module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var susfacil = req.body.susfacil;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var leito = req.body.leito;
	var exame = req.body.exame;
	var paliativo = req.body.paliativo;
	var ecf = req.body.ecf;
	var spict = req.body.spcit;
	var svd = req.body.svd3;
	var sne = req.body.sne3;
	var avp = req.body.avp3;
	var cvc = req.body.cvc3;
	var data = req.body.data;
	var dataexame = req.body.dataexame;
	var id = req.body.idusuario;
	var unidade = 'Roosevelt';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, function(error, result){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.update= function(application, req, res){
	var idpaciente = req.body.id;
	var paciente = req.body.paciente;
	var susfacil = req.body.susfacil;
	var prt = req.body.prontuario;
	var idade = req.body.idade;
	var leito = req.body.leito;
	var exame = req.body.exame;
	var paliativo = req.body.paliativo;
	var ecf = req.body.ecf;
	var spict = req.body.spcit;
	var svd = req.body.svd3;
	var sne = req.body.sne3;
	var avp = req.body.avp3;
	var cvc = req.body.cvc3;
	var dataexame = req.body.data;
	var id = req.body.idusuario;
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.update(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.data;
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelroosevelt.baixa(idpaciente,baixa,data, function(error, result){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Roosevelt/addkabanpacienteroosevelt", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Roosevelt/editkabanroosevelt", {paciente: resultado, id : result});
		});
	});
}

