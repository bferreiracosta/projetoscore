module.exports.cadastrar= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	var unidade = 'Martins';
	var id = req.query;

	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/cadastrarpacientemartins", {paciente : resultado, id : result});
		});
	});	
}


module.exports.news= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	var unidade = 'Martins';
	var id = req.query;

	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/newsmartins", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	var unidade = 'Martins';
	var id = req.query;

	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.buscarpaciente(unidade,function(error, resultado){
			res.render("paciente/respiracaomartins", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("paciente/relatoriomartins", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmmartins= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.query;
	var unidade = 'Martins';
	
	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/relatorioadmmartins", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("paciente/relatoriomartinsenfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.query;
	var unidade = 'Martins';
	
	pacienteDAOmartins.buscarusuario(id, function(error, result){
		pacienteDAOmartins.historico(unidade, function(error, resultado){
			res.render("paciente/historicomartins", {paciente : resultado, id : result});
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
	var unidade = 'Martins';
	console.log(id);
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	pacienteDAOmartins.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOmartins.cadastrarpaciente(paciente, susfacil,prt, idade, leito,exame,unidade,paliativo, ecf,svd, sne, avp,cvc,spict, function(error, result){
			pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientemartins", {paciente : resultado, id : resultados});
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
	var unidade = 'Martins';
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	pacienteDAOmartins.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOmartins.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
			pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientemartins", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.updatenews= function(application, req, res){
	var idpaciente = req.body.id;
	var news = req.body.news;
	var tempo = req.body.horas;
	var id = req.body.idusuario;
	var fc = req.body.fc;
	var sat = req.body.sat;
	var temp = req.body.temp;
	var o2 = req.body.o2;
	var fr = req.body.fr;
	var sistolica = req.body.sistolica;
	var alerta = req.body.covid;
	console.log(alerta);
	var unidade = 'Martins';
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	pacienteDAOmartins.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOmartins.updatenews(idpaciente,news,tempo, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			pacienteDAOmartins.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/cadastrarpacientemartins", {paciente : resultado, id : resultados});
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
	var dormonid = req.body.Dormonid3;
	var fentanil = req.body.Fentanil3;
	var rocuronio = req.body.Rocuronio3;
	var propofol = req.body.Propofol3;
	var bic = req.body.bics;
	var id = req.body.idusuario;
	var unidade = 'Martins';
	
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	pacienteDAOmartins.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOmartins.updateresp(idpaciente,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			pacienteDAOmartins.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/respiracaomartins", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var unidade = 'Martins';
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	pacienteDAOmartins.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOmartins.baixa(idpaciente,baixa, function(error, result){
			pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientemartins", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	pacienteDAOmartins.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/sinaisvitaismartins", {paciente: resultado, id : result});
		});
	});
}
module.exports.addpaciente = function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.query;
	
	pacienteDAOmartins.buscarusuario(id, function(error,result){
		res.render("paciente/addpacientemartins", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	pacienteDAOmartins.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editpacientemartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	var unidade = 'Martins';
	var id = req.params.idusuario;
	var idpaciente = req.query;
	pacienteDAOmartins.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editnewsmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);
	var unidade = 'Martins';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	pacienteDAOmartins.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editrespmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAOmartins = new application.app.model.pacienteDAOmartins(application);

	var id = req.query;
	var unidade = 'Martins';
	pacienteDAOmartins.buscarusuario(id, function(error,result){
		pacienteDAOmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaomartins", {paciente: resultado, id : result});
		});
	});
}