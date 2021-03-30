module.exports.cadastrar= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	var unidade = 'CIM';
	var id = req.query;
	
	
	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/cadastrarpacientecim", {paciente : resultado, id : result});
		});
	});	
}
module.exports.news= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	var unidade = 'CIM';
	var id = req.query;

	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/newscim", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	var unidade = 'CIM';
	var id = req.query;

	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.buscarpaciente(unidade,function(error, resultado){
			res.render("paciente/respiracaocim", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("paciente/relatoriouti", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmcim= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	var id = req.query;
	var unidade = 'CIM';
	
	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/relatorioadmcim", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("paciente/relatorioenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	var id = req.query;
	var unidade = 'CIM';
	
	pacienteDAOcim.buscarusuario(id, function(error, result){
		pacienteDAOcim.historico(unidade, function(error, resultado){
			res.render("paciente/historicocim", {paciente : resultado, id : result});
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
	var unidade = 'CIM';
	console.log(id);
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	pacienteDAOcim.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOcim.cadastrarpaciente(paciente, susfacil,prt, idade, leito,exame,unidade,paliativo, ecf,svd, sne, avp,cvc,spict, function(error, result){
			pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientecim", {paciente : resultado, id : resultados});
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
	var unidade = 'CIM';
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	pacienteDAOcim.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOcim.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientecim", {paciente : resultado, id : resultados});
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
	var unidade = 'CIM';
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	pacienteDAOcim.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOcim.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			pacienteDAOcim.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/cadastrarpacientecim", {paciente : resultado, id : resultados});
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
	var unidade = 'CIM';
	
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	pacienteDAOcim.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOcim.updateresp(idpaciente,profissional, dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			pacienteDAOcim.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/respiracaocim", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var unidade = 'CIM';
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	pacienteDAOcim.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOcim.baixa(idpaciente,baixa, function(error, result){
			pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientecim", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'CIM';
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	pacienteDAOcim.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOcim.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitaiscim", {paciente: resultado, id : result});
		});
	});
}

module.exports.sinaisvitaisid= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	console.log(idpaciente);	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	pacienteDAOcim.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOcim.buscarpacienteregulacao(idpaciente, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitais", {paciente: resultado, id : result});
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	var id = req.query;
	
	pacienteDAOcim.buscarusuario(id, function(error,result){
		res.render("paciente/addpacientecim", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'CIM';
	pacienteDAOcim.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOcim.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editpacientecim", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	var unidade = 'CIM';
	var id = req.params.idusuario;
	var idpaciente = req.query;
console.log(idpaciente);
	pacienteDAOcim.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOcim.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editnewscim", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	var unidade = 'CIM';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	pacienteDAOcim.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOcim.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editrespcim", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAOcim = new application.app.model.pacienteDAOcim(application);
	console.log('estou no controlle');
	var id = req.query;
	var unidade = 'CIM';
	pacienteDAOcim.buscarusuario(id, function(error,result){
		pacienteDAOcim.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaocim", {paciente: resultado, id : result});
		});
	});
}