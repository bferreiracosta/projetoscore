module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : result});
		});
	});	
}

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.historico(unidade, function(error, resultado){
			res.render("kaban/Morumbi/historicokabanmorumbi", {paciente : resultado, id : result});
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
	var unidade = 'Morumbi';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, function(error, result){
			modelmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
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
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmorumbi.update(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			modelmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.data;
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
			modelmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Morumbi/addkabanpacientemorumbi", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Morumbi/editkabanmorumbi", {paciente: resultado, id : result});
		});
	});
}

