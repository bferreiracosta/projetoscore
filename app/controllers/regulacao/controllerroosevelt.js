module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("regulacao/cadastrarpacienteroosevelt", {paciente : resultado, id : result});
		});
	});	
}
module.exports.news= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);

	var unidade = 'Roosevelt';
	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("regulacao/newsroosevelt", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	
	var unidade = 'Roosevelt';
	var id = req.query;

	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpaciente(unidade,function(error, resultado){
			res.render("regulacao/respiracaoroosevelt", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var id = req.query;
	var leito = 'Enfermaria';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("regulacao/relatoriouti", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("regulacao/relatorioadmroosevelt", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var id = req.query;
	var leito = 'Enfermaria';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("regulacao/relatorioenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.historico(unidade, function(error, resultado){
			res.render("regulacao/historicoroosevelt", {paciente : resultado, id : result});
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
	console.log(id);
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,leito, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,data, function(error, result){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("regulacao/cadastrarpacienteroosevelt", {paciente : resultado, id : resultados});
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
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.update(idpaciente,dataexame, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("regulacao/cadastrarpacienteroosevelt", {paciente : resultado, id : resultados});
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
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			modelroosevelt.buscarpaciente(unidade,function(error, resultado){
				res.render("regulacao/newsroosevelt", {paciente : resultado, id : resultados});
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
	var vazaonora = req.body.vazaonora;
	var vazaoadre = req.body.vazaoadre;
	var vazaobica = req.body.vazaobica;
	var vazaoDormonid = req.body.vazaoDormonid;
	var vazaoFentanil = req.body.vazaoFentanil;
	var vazaoRocuronio = req.body.vazaoRocuronio;
	var vazaoPropofol = req.body.vazaoPropofol;
	var id = req.body.idusuario;
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updateresp(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			modelroosevelt.buscarpaciente(unidade,function(error, resultado){
				res.render("regulacao/respiracaoroosevelt", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.updatedispositivo= function(application, req, res){

	var vmu = req.body.vmu;
	var vmd = req.body.vmd;
	var mu = req.body.mu;
	var md = req.body.md;
	var bicu = req.body.bicu;
	var bicd = req.body.bicd;
	var id = req.body.idusuario;
	var data = req.body.data;
	var hora = req.body.horas;
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	var modeladminregulacao = new application.app.model.regulacao.modeladminregulacao(application);
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updatedispositivo(vmu,vmd,mu,md,bicu,bicd,data, hora,  function(error, result){
			modeladminregulacao.buscardispositivoroosevelt(function(error, resultado){
				res.render("regulacao/centraluairooseveltrelatoriomateriais", {dispositivo : resultado, id : resultados});
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
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	modeladmin.buscarusuarioporid(id, function(error, resultados){
		modelroosevelt.baixa(idpaciente,baixa,data, function(error, result){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("regulacao/cadastrarpacienteroosevelt", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("regulacao/sinaisvitaisroosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.sinaisvitaisid= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	console.log(idpaciente);	

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteregulacao(idpaciente, function(error, resultado){
			console.log(resultado);
			res.render("regulacao/sinaisvitais", {paciente: resultado, id : result});
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("regulacao/addpacienteroosevelt", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("regulacao/editpacienteroosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var unidade = 'Roosevelt';
	var id = req.params.idusuario;
	var idpaciente = req.query;
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("regulacao/editnewsroosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	

	var unidade = 'Roosevelt';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("regulacao/editresproosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	
	
	console.log('estou no controlle');
	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaoroosevelt", {paciente: resultado, id : result});
		});
	});
}