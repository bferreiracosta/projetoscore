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

module.exports.saveexamemorumbi= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Morumbi';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelmorumbi.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelmorumbi.buscarpaciente(unidade, function(error, resultado){
					res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente: resultado, id : result});
				});
			});	
		});
}

module.exports.calendariomorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Morumbi/calendariomorumbi" ,{id : result});
	});	
}

module.exports.addexamemorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Morumbi/addexamemorumbi", {id : result, paciente: resultado});
		});
	});
}

module.exports.examemorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarexames(function(error, resultado){
			res.render("kaban/Morumbi/examemorumbi", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexamemorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelmorumbi.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Morumbi/editexamemorumbi", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexamemorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelmorumbi.deleteexamemorumbi(idevento.id, function(error, resultado){
			modelmorumbi.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente: resultado, id : result});
			});
		});
	});	
}

module.exports.montarcalendariomorumbi= function(application, req, res){
	
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modelmorumbi.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexamemorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.updateexamemorumbi(idevento, title, start, paciente, end,  function(error, resultado){
			modelmorumbi.buscarexames(function(error, resultado){
				res.render("kaban/Morumbi/examemorumbi", {id : result, evento: resultado});
			});
		});
	});
}

module.exports.atualizarleitomorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor2;
	var leito = req.body.leito2;
	var id = req.body.idusuario;

	
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelmorumbi.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			modelmorumbi.buscarleitosid(setoresrecuperado, function(error, idleito){
				if(setoresrecuperado[0].leito == null){
					modelmorumbi.atualizarleitomorumbi(idpaciente, setor, leito, function(error, resultado){
						modelmorumbi.buscarsetoresid(setor, function(error, resultado){
							modelmorumbi.updateleitos(resultado, leito, function(error, resultado){
								if(leito == "Maca"){
									modeladmingestao.updateleitosmorumbimacamais(setor, function(error, resulta){
										if(setoresrecuperado[0].setor == null){
											modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
												res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
											});
										}else{
											modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
												modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
												});
											});
										}
									});	
								}else{
									modeladmingestao.updateleitosmorumbicamamais(setor, function(error, resulta){
										if(setoresrecuperado[0].setor == null){
											modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
												res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
											});
										}else{
											modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
												modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
												});
											});
										}
									});	
								}
							});	
						});	
					});	
				}
				if(setoresrecuperado[0].leito == "Maca"){
					modeladmingestao.updateleitosmorumbimaca(setoresrecuperado[0].setor, function(error, resulta){
						modelmorumbi.atualizarleitomorumbi(idpaciente, setor, leito, function(error, resultado){
							modelmorumbi.buscarsetoresid(setor, function(error, resultado){
								modelmorumbi.updateleitos(resultado, leito, function(error, resultado){
									if(leito == "Maca"){
										modeladmingestao.updateleitosmorumbimacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
												});
											}else{
												modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitosmorumbicamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
												});
											}else{
												modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}
								});	
							});	
						});	
					});	
				}
				if(setoresrecuperado[0].leito == "Cama"){
					modeladmingestao.updateleitosmorumbicama(setoresrecuperado[0].setor, function(error, resulta){
						modelmorumbi.atualizarleitomorumbi(idpaciente, setor, leito, function(error, resultado){
							modelmorumbi.buscarsetoresid(setor, function(error, resultado){
								modelmorumbi.updateleitos(resultado, leito, function(error, resultado){
									if(leito == "Maca"){
										modeladmingestao.updateleitosmorumbimacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
												});
											}else{
												modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitosmorumbicamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
												});
											}else{
												modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}
								});	
							});	
						});	
					});	
				}
			});	
		});
	});	
}

module.exports.leitos= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
			modelmorumbi.buscarsetores(function(error, resultadosetor){
				res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores,setor : resultadosetor, id : result});
			});
		});
	});	
}


module.exports.buscarleitos= function(application, req, res){
	
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	var valor = req.query;
	modelmorumbi.buscarleitos(valor, function(error, resultadoleito){
		res.send(resultadoleito);
	});
	
}

module.exports.buscarsetor= function(application, req, res){
	
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	
	modelmorumbi.buscarsetores(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.editfugulinmorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Morumbi/editfugulinmorumbi", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivomorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Morumbi/editkabandispositivomorumbi", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewsmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Morumbi/editnewskabanmorumbi", {news: resultado, id : result});
		});
	});
}

module.exports.edittissmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmorumbi.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Morumbi/edittissmorumbi", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Morumbi/fugulinmorumbi", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newsmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Morumbi/newskabanmorumbi", {news: resultado, id : result});
		});
	});
}

module.exports.tissmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Morumbi/tissmorumbi", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatorioadmkabanmorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarpacienterelatorio(unidade, function(error, resultado){
			console.log(resultado);
			res.render("kaban/Morumbi/relatoriokabanmorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitasmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatoriovisitasmorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietasmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatoriodietasmorumbi", {paciente: resultado, id : result});
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

module.exports.dispositivomorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Morumbi/dispositivomorumbi", {id : result, dispositivo: resultado });
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

module.exports.adddispositivomorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Morumbi/adddispositivomorumbi", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Morumbi/addfugulinmorumbi", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtissmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Morumbi/addtissmorumbi", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewsmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Morumbi/addnewsmorumbi", {id : result, news: resultados });
		});
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

module.exports.cadastrarpaciente= function(application, req, res){
	var paciente = req.body.paciente;
	var susfacil = req.body.susfacil;
	var prt = req.body.prontuario;
	var setor = req.body.setor2;
	var dn = req.body.dn;
	var idade = req.body.idade;
	var da = req.body.da;
	var qtdi = req.body.qtdi;
	var ecf = req.body.ecf;
	var spict = req.body.spcit;
	var paliativo = req.body.paliativo;
	var diagnostico = req.body.diagnostico;
	var especialidade = req.body.especialidade;
	var observacao = req.body.observacao;
	var banho = req.body.banho;
	var mobilidade = req.body.mobilidade;
	var pendencias = req.body.pendencias;
	var mental = req.body.mental2;
	var referencia = req.body.referencia;
	var covid = req.body.covid2;
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var dataexame = req.body.dataexame;
	var exame = req.body.exame4;
	var dieta = req.body.dieta2;
	var id = req.body.idusuario;
	var unidade = 'Morumbi';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);

	if(mental == 'true'){
		
		if(covid == 'true'){
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelmorumbi.cadastrarpaciente(paciente,dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalmorumbi.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelcovidmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
							modelmorumbi.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
								modelmorumbi.addfugulinid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
									modelmorumbi.addtissid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
										modelmorumbi.addnewsid(resultdoinsert.insertId,setor,paciente, unidade,function(error, results){
											modelmorumbi.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
												modelmorumbi.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});				
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});	
		}
		else{
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelmorumbi.cadastrarpaciente(paciente,dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalmorumbi.cadastrarpaciente(prt,  paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelmorumbi.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelmorumbi.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmorumbi.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelmorumbi.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelmorumbi.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelmorumbi.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});				
											});
										});
									});
								});
							});
						});
					});
				});
			});	
		}
	}
	else{
	
		if(covid == "false"){
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelmorumbi.cadastrarpaciente(paciente, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmorumbi.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelmorumbi.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelmorumbi.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmorumbi.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelmorumbi.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
										modelmorumbi.buscarpaciente(unidade, function(error, resultado){
											res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});				
										});
									});
								});
							});
						});
					});
				});
			});	
		}
		else{
			
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelmorumbi.cadastrarpaciente(paciente, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelcovidmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
						modelmorumbi.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelmorumbi.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmorumbi.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelmorumbi.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelmorumbi.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelmorumbi.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});				
											});
										});
									});
								});
							});
						});
					});
				});
			});	
		}
	}	
}

module.exports.cadastrardispositivo= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var svd = req.body.svd3;
	var datasvd = req.body.datasvd;
	var sne = req.body.sne3;
	var datasne = req.body.datasne;
	var avp = req.body.avp3;
	var dataavp = req.body.dataavp;
	var cvc = req.body.cvc3;
	var datacvc = req.body.datacvc;
	var dispositivoventilatorio = req.body.dispositivo2;
	var fluxoo2 = req.body.o2;
	var fio2 = req.body.fio2;
	var peep = req.body.peep;
	var drogas = req.body.drogas;
	var nora = req.body.nora;
	var vazaonora = req.body.vazaonora;
	var adre = req.body.adre;
	var vazaoadre = req.body.vazaoadre;
	var bica = req.body.bica;
	var vazaobica = req.body.vazaobica;
	var sedacao = req.body.sedacao3;
	var dormonid3 = req.body.Dormonid3;
	var vazaoDormonid = req.body.vazaoDormonid;
	var fentanil3 = req.body.Fentanil3;
	var vazaoFentanil = req.body.vazaoFentanil;
	var rocuronio3 = req.body.Rocuronio3;
	var vazaoRocuronio = req.body.vazaoRocuronio;
	var propofol3 = req.body.Propofol3;
	var vazaoPropofol = req.body.vazaoPropofol;
	var profissional = "Enfermeiro";
	var data = req.body.data;
	var id = req.body.campo;
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);
	modelmorumbi.buscardispositivoporid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].covid == false){
			modelmorumbi.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmorumbi.updatedispositivo(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelmorumbi.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/morumbi/dispositivomorumbi", {dispositivo: resultado, id : result });
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmorumbi.adddispositivo(idpaciente, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelmorumbi.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
								modelmorumbi.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/morumbi/dispositivomorumbi", {dispositivo: resultado, id : result});
								});
							});	
						});
					});	
				}
			})
		
		}
		else{
			modelcovidmorumbi.buscarpacientepornome(nome, function(error, idcovid){
				console.log(idcovid)
			modelmorumbi.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmorumbi.updatedispositivo(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidmorumbi.updaterespkaban(idcovid[0].id_paciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelmorumbi.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/morumbi/dispositivomorumbi", {dispositivo: resultado, id : result });
								});
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmorumbi.adddispositivo(idpaciente, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidmorumbi.updaterespkaban(idcovid[0].id_paciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelmorumbi.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
									modelmorumbi.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/morumbi/dispositivomorumbi", {dispositivo: resultado, id : result});
									});
								});	
							});	
						});
					});	
				}
			})
		})
		}
	
})	
}
module.exports.cadastrarfugulin= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var setor = req.body.setor;
	var mental2 = req.body.mental2;
	var oxigenacao2 = req.body.oxigenacao2;
	var sinaisvitais2 = req.body.sinaisvitais2;
	var motilidade2 = req.body.motilidade2;
	var deambulacao2 = req.body.deambulacao2;
	var alimentacao2 = req.body.alimentacao2;
	var cuidado2 = req.body.cuidado2;
	var eliminacao2 = req.body.eliminacao2;
	var terapeutica2 = req.body.terapeutica2;
	var integridade2 = req.body.integridade2;
	var curativo2 = req.body.curativo2;
	var tempo2 = req.body.tempo2;
	var fugulin = req.body.fugulin;
	var data = req.body.data;
	var id = req.body.campo;
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modelmorumbi.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);

		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmorumbi.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/Morumbi/fugulinmorumbi", {fugulin: resultado, id : result });
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmorumbi.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmorumbi.updatefugulinstatus(json[0].idfugulin, function(error, resulta){
						modelmorumbi.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/Morumbi/fugulinmorumbi", {fugulin: resultado, id : result});
						});
					});	
				});
			});	
		}
	})
	
}

module.exports.cadastrartiss= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var setor = req.body.setor;
	var atividades = req.body.atividades2;
	var ventilatorio = req.body.ventilatorio2;
	var cardiovascular = req.body.cardiovascular2;
	var renal = req.body.renal2;
	var neurologico = req.body.neurologico2;
	var metabolico = req.body.metabolico2;
	var intervencoes = req.body.intervencoes2;
	var tiss = req.body.tiss;
	var data = req.body.data;
	var id = req.body.campo;
	var unidade = 'Morumbi';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modelmorumbi.buscartissdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
	
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatetiss(idpaciente, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelmorumbi.buscartiss(unidade, function(error, resultado){
							res.render("kaban/Morumbi/tissmorumbi", {tiss: resultado, id : result });
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmorumbi.addtiss(idpaciente, setor, nome, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelmorumbi.updatetissstatus(json[0].idtiss, function(error, resulta){
						modelmorumbi.buscartiss(unidade, function(error, resultado){
							res.render("kaban/Morumbi/tissmorumbi", {tiss: resultado, id : result});
						});
					});	
				});
			});	
		}
	})
	
}

module.exports.cadastrarnews= function(application, req, res){
	var nome = req.body.nome;
	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor;
	var news = req.body.news;
	var data = req.body.data;
	var id = req.body.campo;
	var fc = req.body.fc;
	var sat = req.body.sat;
	var temp = req.body.temp;
	var o2 = req.body.o2;
	var fr = req.body.fr;
	var sistolica = req.body.sistolica;
	var alerta = req.body.covid;
	var horasreg = req.body.horas;
	var datareg = req.body.datareg;
	var unidade = 'Morumbi';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);
	modelcovidmorumbi.buscarpacientepornome(nome, function(error, idcovid){
		console.log(idcovid)
	modelmorumbi.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
		console.log(json[0].dataatualizacao, json[0].idnews);
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelcovidmorumbi.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
						modelmorumbi.buscarnews(unidade, function(error, resultado){
								res.render("kaban/Morumbi/newskabanmorumbi", {news: resultado, id : result });
						});
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmorumbi.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelmorumbi.updatenewsstatus(json[0].idnews, function(error, resulta){
						modelcovidmorumbi.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
							modelmorumbi.buscarnews(unidade, function(error, resultado){
									res.render("kaban/Morumbi/newskabanmorumbi", {news: resultado, id : result });
							});
						});
					});	
				});
			});	
		}
	})
})	
}

module.exports.update= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var paciente = req.body.paciente;
	var susfacil = req.body.susfacil;
	var prt = req.body.prontuario;
	var dn = req.body.dn;
	var idade = req.body.idade;
	var da = req.body.da;
	var qtdi = req.body.qtdi;
	var ecf = req.body.ecf;
	var spict = req.body.spcit;
	var setor = req.body.setor2;
	var paliativo = req.body.paliativo;
	var diagnostico = req.body.diagnostico;
	var especialidade = req.body.especialidade;
	var observacao = req.body.observacao;
	var banho = req.body.banho;
	var mobilidade = req.body.mobilidade;
	var pendencias = req.body.pendencias;
	var mental = req.body.mental2;
	var referencia = req.body.referencia;
	var covid = req.body.covid2;
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var dieta =  req.body.dieta2;
	var dataexame = req.body.dataexame;
	var data = req.body.data;
	var baixa = "Erro na inserção Kaban";
	var exame = req.body.exame4;
	var id = req.body.idusuario;
	var unidade = 'Morumbi';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);

	modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
	modelcovidmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
		modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				if(covid == 'true' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente, dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmorumbi.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmentalmorumbi.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == 'true' && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmentalmorumbi.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == 'false' && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == 'false' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmentalmorumbi.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
			}
			if(mental == 'false' && idpac[0].mental == "false" ){
				if(covid == "false" && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelmorumbi.buscardispositivo(unidade, function(error, result){
												modelmorumbi.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "true" && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmorumbi.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "true" && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "false" && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
			}	
			if(mental == 'true' && idpac[0].mental == "false" ){
				if(covid == "false" && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "true" && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmorumbi.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "true" && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "false" && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
			}	
			if(mental == 'false' && idpac[0].mental == "true" ){
				if(covid == "false" && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "true" && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmorumbi.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "true" && idpac[0].covid == "false"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmorumbi.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
				if(covid == "false" && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmorumbi.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmorumbi.buscardispositivo(unidade, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados, dispositivo: result});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				}
			}
			
		})
	})
})
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var data = req.body.data;
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	modelmorumbi.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
	modelmorumbi.buscarleitosid(setoresrecuperado, function(error, idleito){
		if(setoresrecuperado[0].leito == "Maca"){	
			modeladmingestao.updateleitosmorumbimaca(setoresrecuperado[0].setor, function(error, resulta){
	modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){
				if(idpac[0].mental == 'true'){
					if(idpac[0].covid == 'true'){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
								modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
															modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmorumbi.buscarleitosnome(nome, function(error, idleito){
			
																	modelmorumbi.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																		});
																	});
																});	
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});	
					}
					else{
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
								modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
									modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
											modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
												modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
													modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
														modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelmorumbi.buscarleitosnome(nome, function(error, idleito){
																
																modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																	});
																});
															});	
														});
													});
												});
											});
										});
									});
								});
							});
						});	
					}
				}
				else{
					if(idpac[0].covid == "false"){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
								modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
									modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
										modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
											modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
												modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
													modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
														modelmorumbi.buscarleitosnome(nome, function(error, idleito){
															
															modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																	res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																});
															});
														});	
													});
												});
											});
										});
									});
								});
							});
						});	
					}
					else{
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
								modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
											modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
												modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
													modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
														modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelmorumbi.buscarleitosnome(nome, function(error, idleito){
														
																modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																	});
																});
															});	
														});
													});
												});
											});
										});
									});
								});
							});
						});	
					}
				}	
			})	
		})	
	})
})
}	if(setoresrecuperado[0].leito == "Cama"){
	modeladmingestao.updateleitosmorumbicama(setoresrecuperado[0].setor, function(error, resulta){
		modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
												modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
													modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
														modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
															modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
																modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelmorumbi.buscarleitosnome(nome, function(error, idleito){
				
																		modelmorumbi.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																			});
																		});
																	});	
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});	
						}
						else{
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
															modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmorumbi.buscarleitosnome(nome, function(error, idleito){
																	
																	modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																		});
																	});
																});	
															});
														});
													});
												});
											});
										});
									});
								});
							});	
						}
					}
					else{
						if(idpac[0].covid == "false"){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
											modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
												modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
													modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
														modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelmorumbi.buscarleitosnome(nome, function(error, idleito){
																
																modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																	});
																});
															});	
														});
													});
												});
											});
										});
									});
								});
							});	
						}
						else{
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
															modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmorumbi.buscarleitosnome(nome, function(error, idleito){
															
																	modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																		});
																	});
																});	
															});
														});
													});
												});
											});
										});
									});
								});
							});	
						}
					}	
				})	
			})	
		})
	})
	}	
	if(setoresrecuperado[0].leito == null){
		
		modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
												modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
													modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
														modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
															modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
																modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelmorumbi.buscarleitosnome(nome, function(error, idleito){
				
																		modelmorumbi.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																			});
																		});
																	});	
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});	
						}
						else{
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
															modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmorumbi.buscarleitosnome(nome, function(error, idleito){
																	
																	modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																		});
																	});
																});	
															});
														});
													});
												});
											});
										});
									});
								});
							});	
						}
					}
					else{
						if(idpac[0].covid == "false"){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
											modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
												modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
													modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
														modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelmorumbi.buscarleitosnome(nome, function(error, idleito){
																
																modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																	});
																});
															});	
														});
													});
												});
											});
										});
									});
								});
							});	
						}
						else{
							console.log("Estou aqui")
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidmorumbi.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.baixacentral(idpaciente,baixa, function(error, result){
															modelmorumbi.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmorumbi.buscarleitosnome(nome, function(error, idleito){
															
																	modelmorumbi.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : resultados});
																		});
																	});
																});	
															});
														});
													});
												});
											});
										});
									});
								});
							});	
						}
					}	
				})	
			})	
		})
	
	}	
})
})
}

module.exports.updatedispositivokabanmorumbi= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var svd = req.body.svd3;
	var datasvd = req.body.datasvd;
	var sne = req.body.sne3;
	var datasne = req.body.datasne;
	var avp = req.body.avp3;
	var dataavp = req.body.dataavp;
	var cvc = req.body.cvc3;
	var datacvc = req.body.datacvc;
	var dispositivoventilatorio = req.body.dispositivo2;
	var fluxoo2 = req.body.o2;
	var fio2 = req.body.o2;
	var peep = req.body.peep;
	var drogas = req.body.drogas;
	var nora = req.body.nora;
	var vazaonora = req.body.vazaonora;
	var adre = req.body.adre;
	var vazaoadre = req.body.vazaoadre;
	var bica = req.body.bica;
	var vazaobica = req.body.vazaobica;
	var sedacao = req.body.sedacao3;
	var dormonid3 = req.body.Dormonid3;
	var vazaoDormonid = req.body.vazaoDormonid;
	var fentanil3 = req.body.Fentanil3;
	var vazaoFentanil = req.body.vazaoFentanil;
	var rocuronio3 = req.body.Rocuronio3;
	var vazaoRocuronio = req.body.vazaoRocuronio;
	var propofol3 = req.body.Propofol3;
	var vazaoPropofol = req.body.vazaoPropofol;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'Morumbi';
	var profissional = "Enfermeiro";
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);

	modeladmin.buscarusuarioporid(id, function(error, result){	
		modelmorumbi.updatedispositivodados(idpaciente,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
			modelcovidmorumbi.updaterespkaban(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
				modelmorumbi.buscardispositivo(unidade, function(error, resultado){
						res.render("kaban/Morumbi/dispositivomorumbi", {dispositivo: resultado, id : result });
				});
			});
		});
	});	
}

module.exports.updatefugulin= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var mental2 = req.body.mental2;
	var oxigenacao2 = req.body.oxigenacao2;
	var sinaisvitais2 = req.body.sinaisvitais2;
	var motilidade2 = req.body.motilidade2;
	var deambulacao2 = req.body.deambulacao2;
	var alimentacao2 = req.body.alimentacao2;
	var cuidado2 = req.body.cuidado2;
	var eliminacao2 = req.body.eliminacao2;
	var terapeutica2 = req.body.terapeutica2;
	var integridade2 = req.body.integridade2;
	var curativo2 = req.body.curativo2;
	var tempo2 = req.body.tempo2;
	var fugulin = req.body.fugulin;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmorumbi.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelmorumbi.buscarfugulin(unidade, function(error, resultado){
				res.render("kaban/Morumbi/fugulinmorumbi", {fugulin : resultado, id : resultados});
			});
		});
	});	
}

module.exports.updatenews= function(application, req, res){
	var nome = req.body.nome;
	var idpaciente = req.body.id;
	var setor = req.body.setor;
	var news = req.body.news;
	var data = req.body.data;
	var id = req.body.campo;
	var fc = req.body.fc;
	var sat = req.body.sat;
	var temp = req.body.temp;
	var o2 = req.body.o2;
	var fr = req.body.fr;
	var sistolica = req.body.sistolica;
	var alerta = req.body.covid;
	var horasreg = req.body.horas;
	var datareg = req.body.datareg;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'Morumbi';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelcovidmorumbi = new application.app.model.regulacao.modelmorumbi(application);

			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelcovidmorumbi.updatenews(idpaciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
						modelmorumbi.buscarnews(unidade, function(error, resultado){
								res.render("kaban/Morumbi/newskabanmorumbi", {news: resultado, id : result });
						});
					});
				});
			});		
}

module.exports.updatetiss= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var atividades = req.body.atividades2;
	var ventilatorio = req.body.ventilatorio2;
	var cardiovascular = req.body.cardiovascular2;
	var renal = req.body.renal2;
	var neurologico = req.body.neurologico2;
	var metabolico = req.body.metabolico2;
	var intervencoes = req.body.intervencoes2;
	var tiss = req.body.tiss;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'Morumbi';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmorumbi.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelmorumbi.buscartiss(unidade, function(error, resultado){
				res.render("kaban/Morumbi/tissmorumbi", {tiss : resultado, id : resultados});
			});
		});
	});	
}

