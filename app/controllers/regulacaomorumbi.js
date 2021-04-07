module.exports.cadastrar= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	var unidade = 'Morumbi';
	var id = req.query;

	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/cadastrarpacientemorumbi", {paciente : resultado, id : result});
		});
	});	
}


module.exports.news= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	var unidade = 'Morumbi';
	var id = req.query;

	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/newsmorumbi", {paciente : resultado, id : result});
		});
	});	
}

module.exports.respiracao= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	var unidade = 'Morumbi';
	var id = req.query;

	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.buscarpaciente(unidade,function(error, resultado){
			res.render("paciente/respiracaomorumbi", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorio= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.buscarpacienteporordemprioridadeemergencia(leito, function(error, resultado){
			res.render("paciente/relatoriomorumbi", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioadmmorumbi= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.query;
	var unidade = 'Morumbi';
	
	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("paciente/relatorioadmmorumbi", {paciente : resultado, id : result});
		});
	});		
}

module.exports.relatorioenfermaria= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.query;
	var leito = 'Enfermaria';
	
	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.buscarpacienteporordemprioridadeenfermaria(leito, function(error, resultado){
			res.render("paciente/relatoriomorumbienfermaria", {paciente : resultado, id : result});
		});
	});		
}

module.exports.historico= function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.query;
	var unidade = 'Morumbi';
	
	pacienteDAOmorumbi.buscarusuario(id, function(error, result){
		pacienteDAOmorumbi.historico(unidade, function(error, resultado){
			res.render("paciente/historicomorumbi", {paciente : resultado, id : result});
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
	var data = req.body.data;
	var unidade = 'Morumbi';
	console.log(id);
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	pacienteDAOmorumbi.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOmorumbi.cadastrarpaciente(paciente, susfacil,prt, idade, leito,exame,unidade,paliativo, ecf,svd, sne, avp,cvc,spict,data, function(error, result){
			pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientemorumbi", {paciente : resultado, id : resultados});
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
	var data = req.body.data;
	var id = req.body.idusuario;
	var unidade = 'Morumbi';
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	pacienteDAOmorumbi.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOmorumbi.update(idpaciente, susfacil,prt,paciente, leito, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,data,  function(error, result){
			pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientemorumbi", {paciente : resultado, id : resultados});
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
	var unidade = 'Morumbi';
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOcim(application);
	pacienteDAOmorumbi.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOmorumbi.updatenews(idpaciente,news,tempo, data, fr, sat, temp, o2, sistolica, fc, alerta, function(error, result){
			pacienteDAOmorumbi.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/newsmorumbi", {paciente : resultado, id : resultados});
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
	var unidade = 'Morumbi';
	
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	pacienteDAOmorumbi.buscarusuarioporid(id, function(error, resultados){	
		pacienteDAOmorumbi.updateresp(idpaciente,profissional,dispositivo,fluxoo2, droga, fio2, peep, sedacao, glasgow,leito,nora, adre,bica,dormonid,fentanil,rocuronio,propofol,bic,  function(error, result){
			pacienteDAOmorumbi.buscarpaciente(unidade,function(error, resultado){
				res.render("paciente/respiracaomorumbi", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var unidade = 'Morumbi';
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	pacienteDAOmorumbi.buscarusuarioporid(id, function(error, resultados){
		pacienteDAOmorumbi.baixa(idpaciente,baixa, function(error, result){
			pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("paciente/cadastrarpacientemorumbi", {paciente : resultado, id : resultados});
			});
		});
	});	
}

module.exports.sinaisvitais= function(application, req, res){
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	pacienteDAOmorumbi.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			console.log(resultado);
			res.render("paciente/sinaisvitaismorumbi", {paciente: resultado, id : result});
		});
	});
}
module.exports.addpaciente = function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.query;
	
	pacienteDAOmorumbi.buscarusuario(id, function(error,result){
		res.render("paciente/addpacientemorumbi", {id : result});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	pacienteDAOmorumbi.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editpacientemorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.editnews = function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	var unidade = 'Morumbi';
	var id = req.params.idusuario;
	var idpaciente = req.query;
console.log(idpaciente);
	pacienteDAOmorumbi.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editnewsmorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.editresp = function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);
	var unidade = 'Morumbi';
	var id = req.params.idusuario;
	var idpaciente = req.query;

	pacienteDAOmorumbi.buscarusuarioeditavel(id, function(error,result){
		pacienteDAOmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("paciente/editrespmorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.homeregulacao = function(application, req, res){
	
	var pacienteDAOmorumbi = new application.app.model.pacienteDAOmorumbi(application);

	var id = req.query;
	var unidade = 'Morumbi';
	pacienteDAOmorumbi.buscarusuario(id, function(error,result){
		pacienteDAOmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("home/homeregulacaomorumbi", {paciente: resultado, id : result});
		});
	});
}