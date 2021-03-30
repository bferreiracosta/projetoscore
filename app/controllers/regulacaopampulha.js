module.exports.cadastrar= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	var unidade = 'Pampulha';
	var id = req.query;

	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/cadastrarpacientepampulha", {paciente : resultado, id : result});
		});
	});	
}


module.exports.news= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	var unidade = 'Pampulha';
	var id = req.query;

	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/newspampulha", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	var unidade = 'Pampulha';
	var id = req.query;

	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.buscarpaciente(unidade,function(error, resultado){
			res.render("paciente/respiracaopampulha", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("paciente/relatoriopampulha", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmpampulha= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.query;
	var unidade = 'Pampulha';
	
	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/relatorioadmpampulha", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("paciente/relatoriopampulhaenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.query;
	var unidade = 'Pampulha';
	
	pacienteDAOpampulha.buscarusuario(id, function(error, result){
		pacienteDAOpampulha.historico(unidade, function(error, resultado){
			res.render("paciente/historicopampulha", {paciente : resultado, id : result});
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
	var unidade = 'Pampulha';
	console.log(id);
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	pacienteDAOpampulha.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOpampulha.cadastrarpaciente(paciente, susfacil,prt, idade, leito,exame,unidade,paliativo, ecf,svd, sne, avp,cvc,spict, function(error, result){
			pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientepampulha", {paciente : resultado, id : resultados});
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
	var unidade = 'Pampulha';
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	pacienteDAOpampulha.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOpampulha.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientepampulha", {paciente : resultado, id : resultados});
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
	var unidade = 'Pampulha';
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOcim(application);
	pacienteDAOpampulha.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOpampulha.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			pacienteDAOpampulha.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/cadastrarpacientepampulha", {paciente : resultado, id : resultados});
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
	var unidade = 'Pampulha';
	
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	pacienteDAOpampulha.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOpampulha.updateresp(idpaciente,profissional,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			pacienteDAOpampulha.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/respiracaopampulha", {paciente : resultado, id : resultados});
			});
		});
	});	
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var unidade = 'Pampulha';
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	pacienteDAOpampulha.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOpampulha.baixa(idpaciente,baixa, function(error, result){
			pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientepampulha", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	pacienteDAOpampulha.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitaispampulha", {paciente: resultado, id : result});
		});
	});
}
module.exports.addpaciente = function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.query;
	
	pacienteDAOpampulha.buscarusuario(id, function(error,result){
		res.render("paciente/addpacientepampulha", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';
	pacienteDAOpampulha.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editpacientepampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	var unidade = 'Pampulha';
	var id = req.params.idusuario;
	var idpaciente = req.query;
console.log(idpaciente);
	pacienteDAOpampulha.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editnewspampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);
	var unidade = 'Pampulha';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	pacienteDAOpampulha.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editresppampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAOpampulha = new application.app.model.pacienteDAOpampulha(application);

	var id = req.query;
	var unidade = 'Pampulha';
	pacienteDAOpampulha.buscarusuario(id, function(error,result){
		pacienteDAOpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaopampulha", {paciente: resultado, id : result});
		});
	});
}