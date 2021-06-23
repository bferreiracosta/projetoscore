module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexameluizote= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Luizote';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelluizote.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelluizote.buscarpaciente(unidade, function(error, resultado){
					res.render("kaban/Luizote/kabanpacienteluizote", {paciente: resultado, id : result});
				});
			});	
		});
}

module.exports.calendarioluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Luizote/calendarioluizote" ,{id : result});
	});	
}

module.exports.addexameluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Luizote/addexameluizote", {id : result, paciente: resultado});
		});
	});
}

module.exports.exameluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarexames(function(error, resultado){
			res.render("kaban/Luizote/exameluizote", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexameluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelluizote.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Luizote/editexameluizote", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexameluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelluizote.deleteexameluizote(idevento.id, function(error, resultado){
			modelluizote.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Luizote/kabanpacienteluizote", {paciente: resultado, id : result});
			});
		});
	});	
}

module.exports.montarcalendarioluizote= function(application, req, res){
	
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modelluizote.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexameluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.updateexameluizote(idevento, title, start, paciente, end,  function(error, resultado){
			modelluizote.buscarexames(function(error, resultado){
				res.render("kaban/Luizote/exameluizote", {id : result, evento: resultado});
			});
		});
	});
}

module.exports.atualizarleitoluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor2;
	var leito = req.body.leito2;
	var id = req.body.idusuario;

	
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelluizote.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			modelluizote.buscarleitosid(setoresrecuperado, function(error, idleito){
				if(setoresrecuperado[0].leito == null){
					modelluizote.atualizarleitoluizote(idpaciente, setor, leito, function(error, resultado){
						modelluizote.buscarsetoresid(setor, function(error, resultado){
							modelluizote.updateleitos(resultado, leito, function(error, resultado){
								if(leito == "Maca"){
									modeladmingestao.updateleitosluizotemacamais(setor, function(error, resulta){
										if(setoresrecuperado[0].setor == null){
											modelluizote.buscarleitospacientes(function(error, resultadosetores){
												res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
											});
										}else{
											modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
												modelluizote.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
												});
											});
										}
									});	
								}else{
									modeladmingestao.updateleitosluizotecamamais(setor, function(error, resulta){
										if(setoresrecuperado[0].setor == null){
											modelluizote.buscarleitospacientes(function(error, resultadosetores){
												res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
											});
										}else{
											modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
												modelluizote.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
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
					modeladmingestao.updateleitosluizotemaca(setoresrecuperado[0].setor, function(error, resulta){
						modelluizote.atualizarleitoluizote(idpaciente, setor, leito, function(error, resultado){
							modelluizote.buscarsetoresid(setor, function(error, resultado){
								modelluizote.updateleitos(resultado, leito, function(error, resultado){
									if(leito == "Maca"){
										modeladmingestao.updateleitosluizotemacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelluizote.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
												});
											}else{
												modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelluizote.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitosluizotecamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelluizote.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
												});
											}else{
												modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelluizote.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
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
					modeladmingestao.updateleitosluizotecama(setoresrecuperado[0].setor, function(error, resulta){
						modelluizote.atualizarleitoluizote(idpaciente, setor, leito, function(error, resultado){
							modelluizote.buscarsetoresid(setor, function(error, resultado){
								modelluizote.updateleitos(resultado, leito, function(error, resultado){
									if(leito == "Maca"){
										modeladmingestao.updateleitosluizotemacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelluizote.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
												});
											}else{
												modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelluizote.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitosluizotecamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelluizote.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
												});
											}else{
												modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelluizote.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
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
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarleitospacientes(function(error, resultadosetores){
			modelluizote.buscarsetores(function(error, resultadosetor){
				res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores,setor : resultadosetor, id : result});
			});
		});
	});	
}


module.exports.buscarleitos= function(application, req, res){
	
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	var valor = req.query;
	modelluizote.buscarleitos(valor, function(error, resultadoleito){
		res.send(resultadoleito);
	});
	
}

module.exports.buscarsetor= function(application, req, res){
	
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	
	modelluizote.buscarsetores(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.editfugulinluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Luizote/editfugulinluizote", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivoluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Luizote/editkabandispositivoluizote", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewsluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Luizote/editnewskabanluizote", {news: resultado, id : result});
		});
	});
}

module.exports.edittissluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Luizote/edittissluizote", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Luizote/fugulinluizote", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newsluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Luizote/newskabanluizote", {news: resultado, id : result});
		});
	});
}

module.exports.tissluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Luizote/tissluizote", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatorioadmkabanluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatoriokabanluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitasluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatoriovisitasluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietasluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatoriodietasluizote", {paciente: resultado, id : result});
		});
	});
}

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.historico(unidade, function(error, resultado){
			res.render("kaban/Luizote/historicokabanluizote", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivoluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Luizote/dispositivoluizote", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Luizote/addkabanpacienteluizote", {id : result});
	});
}

module.exports.adddispositivoluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Luizote/adddispositivoluizote", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Luizote/addfugulinluizote", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtissluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Luizote/addtissluizote", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewsluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Luizote/addnewsluizote", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Luizote';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelluizote.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Luizote/editkabanluizote", {paciente: resultado, id : result});
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
	var unidade = 'Luizote';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);

	if(mental == 'true'){
		
		if(covid == 'true'){
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelluizote.cadastrarpaciente(paciente,dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalluizote.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelcovidluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
							modelluizote.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
								modelluizote.addfugulinid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
									modelluizote.addtissid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
										modelluizote.addnewsid(resultdoinsert.insertId,setor,paciente, unidade,function(error, results){
											modelluizote.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
												modelluizote.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});				
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
				modelluizote.cadastrarpaciente(paciente,dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalluizote.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelluizote.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelluizote.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelluizote.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelluizote.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelluizote.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelluizote.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});				
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
				modelluizote.cadastrarpaciente(paciente, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelluizote.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelluizote.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelluizote.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelluizote.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelluizote.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
										modelluizote.buscarpaciente(unidade, function(error, resultado){
											res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});				
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
				modelluizote.cadastrarpaciente(paciente, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelcovidluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
						modelluizote.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelluizote.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelluizote.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelluizote.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelluizote.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelluizote.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});				
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
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);
	modelluizote.buscardispositivoporid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].covid == false){
			modelluizote.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelluizote.updatedispositivo(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelluizote.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/luizote/dispositivoluizote", {dispositivo: resultado, id : result });
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelluizote.adddispositivo(idpaciente, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelluizote.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
								modelluizote.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/luizote/dispositivoluizote", {dispositivo: resultado, id : result});
								});
							});	
						});
					});	
				}
			})
		
		}
		else{
			modelcovidluizote.buscarpacientepornome(nome, function(error, idcovid){
				console.log(idcovid)
			modelluizote.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelluizote.updatedispositivo(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidluizote.updaterespkaban(idcovid[0].id_paciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelluizote.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/luizote/dispositivoluizote", {dispositivo: resultado, id : result });
								});
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelluizote.adddispositivo(idpaciente, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidluizote.updaterespkaban(idcovid[0].id_paciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelluizote.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
									modelluizote.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/luizote/dispositivoluizote", {dispositivo: resultado, id : result});
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
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modelluizote.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);

		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelluizote.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/Luizote/fugulinluizote", {fugulin: resultado, id : result });
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelluizote.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelluizote.updatefugulinstatus(json[0].idfugulin, function(error, resulta){
						modelluizote.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/Luizote/fugulinluizote", {fugulin: resultado, id : result});
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
	var unidade = 'Luizote';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modelluizote.buscartissdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
	
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatetiss(idpaciente, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelluizote.buscartiss(unidade, function(error, resultado){
							res.render("kaban/Luizote/tissluizote", {tiss: resultado, id : result });
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelluizote.addtiss(idpaciente, setor, nome, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelluizote.updatetissstatus(json[0].idtiss, function(error, resulta){
						modelluizote.buscartiss(unidade, function(error, resultado){
							res.render("kaban/Luizote/tissluizote", {tiss: resultado, id : result});
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
	var unidade = 'Luizote';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);
	modelcovidluizote.buscarpacientepornome(nome, function(error, idcovid){
		console.log(idcovid)
	modelluizote.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
		console.log(json[0].dataatualizacao, json[0].idnews);
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelcovidluizote.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
						modelluizote.buscarnews(unidade, function(error, resultado){
								res.render("kaban/Luizote/newskabanluizote", {news: resultado, id : result });
						});
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelluizote.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelluizote.updatenewsstatus(json[0].idnews, function(error, resulta){
						modelcovidluizote.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
							modelluizote.buscarnews(unidade, function(error, resultado){
									res.render("kaban/Luizote/newskabanluizote", {news: resultado, id : result });
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
	var unidade = 'Luizote';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);

	modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
	modelcovidluizote.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
		modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				if(covid == 'true' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelluizote.update(idpaciente, dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidluizote.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmentalluizote.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmentalluizote.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmentalluizote.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelluizote.buscardispositivo(unidade, function(error, result){
												modelluizote.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidluizote.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidluizote.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidluizote.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidluizote.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelluizote.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelluizote.buscardispositivo(unidade, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados, dispositivo: result});
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
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	modelluizote.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
	modelluizote.buscarleitosid(setoresrecuperado, function(error, idleito){
		if(setoresrecuperado[0].leito == "Maca"){	
			modeladmingestao.updateleitosluizotemaca(setoresrecuperado[0].setor, function(error, resulta){
	modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidluizote.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){
				if(idpac[0].mental == 'true'){
					if(idpac[0].covid == 'true'){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelluizote.baixa(idpaciente,baixa,data, function(error, result){
								modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.baixacentral(idpaciente,baixa, function(error, result){
															modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelluizote.buscarleitosnome(nome, function(error, idleito){
			
																	modelluizote.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelluizote.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
							modelluizote.baixa(idpaciente,baixa,data, function(error, result){
								modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
									modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
										modelluizote.baixatiss(idpaciente,baixa, function(error, result){
											modelluizote.baixanews(idpaciente,baixa, function(error, result){
												modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
													modelluizote.baixacentral(idpaciente,baixa, function(error, result){
														modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelluizote.buscarleitosnome(nome, function(error, idleito){
																
																modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelluizote.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
							modelluizote.baixa(idpaciente,baixa,data, function(error, result){
								modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
									modelluizote.baixatiss(idpaciente,baixa, function(error, result){
										modelluizote.baixanews(idpaciente,baixa, function(error, result){
											modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
												modelluizote.baixacentral(idpaciente,baixa, function(error, result){
													modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
														modelluizote.buscarleitosnome(nome, function(error, idleito){
															
															modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																modelluizote.buscarpaciente(unidade, function(error, resultado){
																	res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
							modelluizote.baixa(idpaciente,baixa,data, function(error, result){
								modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
										modelluizote.baixatiss(idpaciente,baixa, function(error, result){
											modelluizote.baixanews(idpaciente,baixa, function(error, result){
												modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
													modelluizote.baixacentral(idpaciente,baixa, function(error, result){
														modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelluizote.buscarleitosnome(nome, function(error, idleito){
														
																modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelluizote.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
	modeladmingestao.updateleitosluizotecama(setoresrecuperado[0].setor, function(error, resulta){
		modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidluizote.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
												modelluizote.baixatiss(idpaciente,baixa, function(error, result){
													modelluizote.baixanews(idpaciente,baixa, function(error, result){
														modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
															modelluizote.baixacentral(idpaciente,baixa, function(error, result){
																modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelluizote.buscarleitosnome(nome, function(error, idleito){
				
																		modelluizote.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelluizote.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.baixacentral(idpaciente,baixa, function(error, result){
															modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelluizote.buscarleitosnome(nome, function(error, idleito){
																	
																	modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelluizote.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
										modelluizote.baixatiss(idpaciente,baixa, function(error, result){
											modelluizote.baixanews(idpaciente,baixa, function(error, result){
												modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
													modelluizote.baixacentral(idpaciente,baixa, function(error, result){
														modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelluizote.buscarleitosnome(nome, function(error, idleito){
																
																modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelluizote.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.baixacentral(idpaciente,baixa, function(error, result){
															modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelluizote.buscarleitosnome(nome, function(error, idleito){
															
																	modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelluizote.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
		
		modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidluizote.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
												modelluizote.baixatiss(idpaciente,baixa, function(error, result){
													modelluizote.baixanews(idpaciente,baixa, function(error, result){
														modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
															modelluizote.baixacentral(idpaciente,baixa, function(error, result){
																modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelluizote.buscarleitosnome(nome, function(error, idleito){
				
																		modelluizote.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelluizote.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.baixacentral(idpaciente,baixa, function(error, result){
															modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelluizote.buscarleitosnome(nome, function(error, idleito){
																	
																	modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelluizote.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
										modelluizote.baixatiss(idpaciente,baixa, function(error, result){
											modelluizote.baixanews(idpaciente,baixa, function(error, result){
												modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
													modelluizote.baixacentral(idpaciente,baixa, function(error, result){
														modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelluizote.buscarleitosnome(nome, function(error, idleito){
																
																modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelluizote.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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
								modelluizote.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidluizote.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.baixacentral(idpaciente,baixa, function(error, result){
															modelluizote.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelluizote.buscarleitosnome(nome, function(error, idleito){
															
																	modelluizote.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelluizote.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : resultados});
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

module.exports.updatedispositivokabanluizote= function(application, req, res){
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
	var unidade = 'Luizote';
	var profissional = "Enfermeiro";
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);

	modeladmin.buscarusuarioporid(id, function(error, result){	
		modelluizote.updatedispositivodados(idpaciente,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
			modelcovidluizote.updaterespkaban(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
				modelluizote.buscardispositivo(unidade, function(error, resultado){
						res.render("kaban/Luizote/dispositivoluizote", {dispositivo: resultado, id : result });
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
	var unidade = 'Luizote';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelluizote.buscarfugulin(unidade, function(error, resultado){
				res.render("kaban/Luizote/fugulinluizote", {fugulin : resultado, id : resultados});
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
	var data = req.body.data;
	var id = req.body.idusuario;
	var unidade = 'Luizote';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelcovidluizote = new application.app.model.regulacao.modelluizote(application);

			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelcovidluizote.updatenews(idpaciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
						modelluizote.buscarnews(unidade, function(error, resultado){
								res.render("kaban/Luizote/newskabanluizote", {news: resultado, id : result });
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
	var unidade = 'Luizote';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelluizote.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelluizote.buscartiss(unidade, function(error, resultado){
				res.render("kaban/Luizote/tissluizote", {tiss : resultado, id : resultados});
			});
		});
	});	
}

