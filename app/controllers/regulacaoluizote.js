module.exports.cadastrar= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	var unidade = 'Luizote';
	var id = req.query;

	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/cadastrarpacienteluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.news= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	var unidade = 'Luizote';
	var id = req.query;

	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/newsluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	var unidade = 'Luizote';
	var id = req.query;

	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.buscarpaciente(unidade,function(error, resultado){
			res.render("paciente/respiracaoluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("paciente/relatoriouti", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmluizote= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	var id = req.query;
	var unidade = 'Luizote';
	
	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/relatorioadmluizote", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("paciente/relatorioenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	var id = req.query;
	var unidade = 'Luizote';
	
	pacienteDAOluizote.buscarusuario(id, function(error, result){
		pacienteDAOluizote.historico(unidade, function(error, resultado){
			res.render("paciente/historicoluizote", {paciente : resultado, id : result});
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
	var id = req.body.idusuario;
	var unidade = 'Luizote';
	console.log(id);
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	pacienteDAOluizote.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOluizote.cadastrarpaciente(paciente, susfacil,prt, idade, leito,exame,unidade,paliativo, ecf,svd, sne, avp,cvc,spict, function(error, result){
			pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
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
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	pacienteDAOluizote.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOluizote.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
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
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOcim(application);
	pacienteDAOluizote.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOluizote.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			pacienteDAOluizote.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
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
	var id = req.body.idusuario;
	var unidade = 'Luizote';
	
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	pacienteDAOluizote.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOluizote.updateresp(idpaciente,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			pacienteDAOluizote.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/respiracaoluizote", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var unidade = 'Luizote';
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	pacienteDAOluizote.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOluizote.baixa(idpaciente,baixa, function(error, result){
			pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacienteluizote", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	pacienteDAOluizote.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitaisluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.sinaisvitaisid= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	console.log(idpaciente);	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	pacienteDAOluizote.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOluizote.buscarpacienteregulacao(idpaciente, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitais", {paciente: resultado, id : result});
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	var id = req.query;
	
	pacienteDAOluizote.buscarusuario(id, function(error,result){
		res.render("paciente/addpacienteluizote", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	pacienteDAOluizote.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editpacienteluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	var unidade = 'Luizote';
	var id = req.params.idusuario;
	var idpaciente = req.query;
console.log(idpaciente);
	pacienteDAOluizote.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editnewsluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	var unidade = 'Luizote';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	pacienteDAOluizote.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editrespluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAOluizote = new application.app.model.pacienteDAOluizote(application);
	console.log('estou no controlle');
	var id = req.query;
	var unidade = 'Luizote';
	pacienteDAOluizote.buscarusuario(id, function(error,result){
		pacienteDAOluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaoluizote", {paciente: resultado, id : result});
		});
	});
}