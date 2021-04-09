module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("regulacao/cadastrarpacienteluizote", {paciente : resultado, id : result});
		});
	});	
}
module.exports.news= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("regulacao/newsluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	
	var unidade = 'Luizote';
	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpaciente(unidade,function(error, resultado){
			res.render("regulacao/respiracaoluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var id = req.query;
	var leito = 'Enfermaria';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("regulacao/relatoriouti", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("regulacao/relatorioadmluizote", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var id = req.query;
	var leito = 'Enfermaria';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("regulacao/relatorioenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.historico(unidade, function(error, resultado){
			res.render("regulacao/historicoluizote", {paciente : resultado, id : result});
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
	var unidade = 'Luizote';
	console.log(id);
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, function(error, result){
			modelluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("regulacao/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
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
	var id = req.body.idusuario;
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			modelluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("regulacao/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.updatenews= function(application, req, res){
	var idpaciente = req.body.id;
	var news = req.body.news;
	var tempo = req.body.horas;
	var data = req.body.data;
	var id = req.body.idusuario;
	var fc = req.body.fc;
	var sat = req.body.sat;
	var temp = req.body.temp;
	var o2 = req.body.o2;
	var fr = req.body.fr;
	var sistolica = req.body.sistolica;
	var alerta = req.body.covid;
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			modelluizote.buscarpaciente(unidade,function(error, resultado){
				res.render("regulacao/newsluizote", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.updateresp= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var leito = req.body.leito2;
	var dispositivo = req.body.dispositivo2;
	var fluxoo2 = req.body.o2;
	var droga = req.body.droga;
	var fio2 = req.body.fio2;
	var peep = req.body.peep;
	var sedacao = req.body.sedacao;
	var glasgow = req.body.glasgow;
	var nora = req.body.nora;
	var adre = req.body.adre;
	var bica = req.body.bica;
	var dormonid = req.body.Dormonid3;
	var fentanil = req.body.Fentanil3;
	var rocuronio = req.body.Rocuronio3;
	var propofol = req.body.Propofol3;
	var bic = req.body.bics;
	var profissional = req.body.profissional;
	var id = req.body.idusuario;
	var unidade = 'Luizote';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.updateresp(idpaciente,profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			modelluizote.buscarpaciente(unidade,function(error, resultado){
				res.render("regulacao/respiracaoluizote", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.data;
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelluizote.baixa(idpaciente,baixa,data, function(error, result){
			modelluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("regulacao/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("regulacao/sinaisvitaisluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.sinaisvitaisid= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	console.log(idpaciente);	

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteregulacao(idpaciente, function(error, resultado){
			console.log(resultado);
			res.render("regulacao/sinaisvitais", {paciente: resultado, id : result});
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("regulacao/addpacienteluizote", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("regulacao/editpacienteluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var unidade = 'Luizote';
	var id = req.params.idusuario;
	var idpaciente = req.query;
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("regulacao/editnewsluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	

	var unidade = 'Luizote';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("regulacao/editrespluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.regulacao.modelluizote(application);
	
	
	console.log('estou no controlle');
	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaoluizote", {paciente: resultado, id : result});
		});
	});
}