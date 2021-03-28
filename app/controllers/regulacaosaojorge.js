module.exports.cadastrar= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	var unidade = 'SaoJorge';
	var id = req.query;

	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/cadastrarpacientesaojorge", {paciente : resultado, id : result});
		});
	});	
}


module.exports.news= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	var unidade = 'SaoJorge';
	var id = req.query;

	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/newssaojorge", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	var unidade = 'SaoJorge';
	var id = req.query;

	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.buscarpaciente(unidade,function(error, resultado){
			res.render("paciente/respiracaosaojorge", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("paciente/relatoriosaojorge", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmsaojorge= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	
	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/relatorioadmsaojorge", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("paciente/relatoriosaojorgeenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	
	pacienteDAOsaojorge.buscarusuario(id, function(error, result){
		pacienteDAOsaojorge.historico(unidade, function(error, resultado){
			res.render("paciente/historicosaojorge", {paciente : resultado, id : result});
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
	var unidade = 'SaoJorge';
	console.log(id);
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	pacienteDAOsaojorge.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOsaojorge.cadastrarpaciente(paciente, susfacil,prt, idade, leito,exame,unidade,paliativo, ecf,svd, sne, avp,cvc,spict, function(error, result){
			pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientesaojorge", {paciente : resultado, id : resultados});
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
	var unidade = 'SaoJorge';
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	pacienteDAOsaojorge.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOsaojorge.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientesaojorge", {paciente : resultado, id : resultados});
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
	var unidade = 'SaoJorge';
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOcim(application);
	pacienteDAOsaojorge.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOsaojorge.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			pacienteDAOsaojorge.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/cadastrarpacientesaojorge", {paciente : resultado, id : resultados});
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
	var unidade = 'SaoJorge';
	
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	pacienteDAOsaojorge.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOsaojorge.updateresp(idpaciente,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			pacienteDAOsaojorge.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/respiracaosaojorge", {paciente : resultado, id : resultados});
			});
		});
	});	
}
module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var unidade = 'SaoJorge';
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	pacienteDAOsaojorge.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOsaojorge.baixa(idpaciente,baixa, function(error, result){
			pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientesaojorge", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	pacienteDAOsaojorge.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitaissaojorge", {paciente: resultado, id : result});
		});
	});
}
module.exports.addpaciente = function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.query;
	
	pacienteDAOsaojorge.buscarusuario(id, function(error,result){
		res.render("paciente/addpacientesaojorge", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';
	pacienteDAOsaojorge.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editpacientesaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	var unidade = 'SaoJorge';
	var id = req.params.idusuario;
	var idpaciente = req.query;
console.log(idpaciente);
	pacienteDAOsaojorge.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editnewssaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);
	var unidade = 'SaoJorge';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	pacienteDAOsaojorge.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editrespsaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAOsaojorge = new application.app.model.pacienteDAOsaojorge(application);

	var id = req.query;
	var unidade = 'SaoJorge';
	pacienteDAOsaojorge.buscarusuario(id, function(error,result){
		pacienteDAOsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaosaojorge", {paciente: resultado, id : result});
		});
	});
}