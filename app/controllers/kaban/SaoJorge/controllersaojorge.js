module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'Sao Jorge';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexamesaojorge= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Sao Jorge';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelsaojorge.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelsaojorge.buscarpaciente(unidade, function(error, resultado){
					res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente: resultado, id : result});
				});
			});	
		});
}

module.exports.calendariosaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'Sao Jorge';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/SaoJorge/calendariosaojorge" ,{id : result});
	});	
}

module.exports.addexamesaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Sao Jorge';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/SaoJorge/addexamesaojorge", {id : result, paciente: resultado});
		});
	});
}

module.exports.examesaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'Sao Jorge';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarexames(function(error, resultado){
			res.render("kaban/SaoJorge/examesaojorge", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexamesaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelsaojorge.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/SaoJorge/editexamesaojorge", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexamesaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelsaojorge.deleteexamesaojorge(idevento.id, function(error, resultado){
			modelsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente: resultado, id : result});
			});
		});
	});	
}

module.exports.montarcalendariosaojorge= function(application, req, res){
	
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modelsaojorge.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexamesaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.updateexamesaojorge(idevento, title, start, paciente, end,  function(error, resultado){
			modelsaojorge.buscarexames(function(error, resultado){
				res.render("kaban/SaoJorge/examesaojorge", {id : result, evento: resultado});
			});
		});
	});
}

module.exports.atualizarleitosaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor2;
	var leito = req.body.leito2;
	var id = req.body.idusuario;

	
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelsaojorge.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			modelsaojorge.buscarleitosid(setoresrecuperado, function(error, idleito){
				if(setoresrecuperado[0].leito == null){
					modelsaojorge.atualizarleitosaojorge(idpaciente, setor, leito, function(error, resultado){
						modelsaojorge.buscarsetoresid(setor, function(error, resultado){
							modelsaojorge.updateleitos(resultado, leito, function(error, resultado){
								if(leito == "Maca"){
									modeladmingestao.updateleitossaojorgemacamais(setor, function(error, resulta){
										if(setoresrecuperado[0].setor == null){
											modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
												res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
											});
										}else{
											modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
												modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
												});
											});
										}
									});	
								}else{
									modeladmingestao.updateleitossaojorgecamamais(setor, function(error, resulta){
										if(setoresrecuperado[0].setor == null){
											modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
												res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
											});
										}else{
											modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
												modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
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
					modeladmingestao.updateleitossaojorgemaca(setoresrecuperado[0].setor, function(error, resulta){
						modelsaojorge.atualizarleitosaojorge(idpaciente, setor, leito, function(error, resultado){
							modelsaojorge.buscarsetoresid(setor, function(error, resultado){
								modelsaojorge.updateleitos(resultado, leito, function(error, resultado){
									if(leito == "Maca"){
										modeladmingestao.updateleitossaojorgemacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
												});
											}else{
												modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitossaojorgecamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
												});
											}else{
												modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
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
					modeladmingestao.updateleitossaojorgecama(setoresrecuperado[0].setor, function(error, resulta){
						modelsaojorge.atualizarleitosaojorge(idpaciente, setor, leito, function(error, resultado){
							modelsaojorge.buscarsetoresid(setor, function(error, resultado){
								modelsaojorge.updateleitos(resultado, leito, function(error, resultado){
									if(leito == "Maca"){
										modeladmingestao.updateleitossaojorgemacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
												});
											}else{
												modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitossaojorgecamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
												});
											}else{
												modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
													modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
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
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
			modelsaojorge.buscarsetores(function(error, resultadosetor){
				res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores,setor : resultadosetor, id : result});
			});
		});
	});	
}


module.exports.buscarleitos= function(application, req, res){
	
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	var valor = req.query;
	modelsaojorge.buscarleitos(valor, function(error, resultadoleito){
		res.send(resultadoleito);
	});
	
}

module.exports.buscarsetor= function(application, req, res){
	
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	
	modelsaojorge.buscarsetores(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.editfugulinsaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Sao Jorge';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/SaoJorge/editfugulinsaojorge", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivosaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Sao Jorge';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/SaoJorge/editkabandispositivosaojorge", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewssaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/SaoJorge/editnewskabansaojorge", {news: resultado, id : result});
		});
	});
}

module.exports.edittisssaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/SaoJorge/edittisssaojorge", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinsaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/fugulinsaojorge", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newssaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarnews(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/newskabansaojorge", {news: resultado, id : result});
		});
	});
}

module.exports.tisssaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscartiss(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/tisssaojorge", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabansaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatorioadmkabansaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabansaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			console.log(resultado);
			res.render("kaban/SaoJorge/relatoriokabansaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitassaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriovisitassaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietassaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriodietassaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.historico(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/historicokabansaojorge", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivosaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/dispositivosaojorge", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/SaoJorge/addkabanpacientesaojorge", {id : result});
	});
}

module.exports.adddispositivosaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/SaoJorge/adddispositivosaojorge", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinsaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/SaoJorge/addfugulinsaojorge", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtisssaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/SaoJorge/addtisssaojorge", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewssaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'Sao Jorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/SaoJorge/addnewssaojorge", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Sao Jorge';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/SaoJorge/editkabansaojorge", {paciente: resultado, id : result});
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
	var unidade = 'Sao Jorge';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);

	if(mental == 'true'){
		
		if(covid == 'true'){
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelsaojorge.cadastrarpaciente(paciente,dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalsaojorge.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelcovidsaojorge.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
							modelsaojorge.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
								modelsaojorge.addfugulinid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
									modelsaojorge.addtissid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
										modelsaojorge.addnewsid(resultdoinsert.insertId,setor,paciente, unidade,function(error, results){
											modelsaojorge.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
												modelsaojorge.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});				
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
				modelsaojorge.cadastrarpaciente(paciente, dieta,exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalsaojorge.cadastrarpaciente(prt,  paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelsaojorge.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelsaojorge.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelsaojorge.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelsaojorge.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelsaojorge.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelsaojorge.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});				
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
				modelsaojorge.cadastrarpaciente(paciente, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelsaojorge.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelsaojorge.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelsaojorge.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelsaojorge.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelsaojorge.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
										modelsaojorge.buscarpaciente(unidade, function(error, resultado){
											res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});				
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
				modelsaojorge.cadastrarpaciente(paciente, dieta, exame, dataexame, mental, referencia, covid, glasgow, bic, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelcovidsaojorge.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
						modelsaojorge.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelsaojorge.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelsaojorge.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelsaojorge.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelsaojorge.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelsaojorge.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});				
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
	var unidade = 'Sao Jorge';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);
	modelsaojorge.buscardispositivoporid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].covid == false){
			modelsaojorge.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelsaojorge.updatedispositivo(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelsaojorge.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/saojorge/dispositivosaojorge", {dispositivo: resultado, id : result });
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelsaojorge.adddispositivo(idpaciente, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelsaojorge.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
								modelsaojorge.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/saojorge/dispositivosaojorge", {dispositivo: resultado, id : result});
								});
							});	
						});
					});	
				}
			})
		
		}
		else{
			modelcovidsaojorge.buscarpacientepornome(nome, function(error, idcovid){
				console.log(idcovid)
			modelsaojorge.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelsaojorge.updatedispositivo(idpaciente, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidsaojorge.updaterespkaban(idcovid[0].id_paciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelsaojorge.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/saojorge/dispositivosaojorge", {dispositivo: resultado, id : result });
								});
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelsaojorge.adddispositivo(idpaciente, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidsaojorge.updaterespkaban(idcovid[0].id_paciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelsaojorge.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
									modelsaojorge.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/saojorge/dispositivosaojorge", {dispositivo: resultado, id : result});
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
	var unidade = 'Sao Jorge';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modelsaojorge.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);

		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelsaojorge.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/SaoJorge/fugulinsaojorge", {fugulin: resultado, id : result });
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelsaojorge.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelsaojorge.updatefugulinstatus(json[0].idfugulin, function(error, resulta){
						modelsaojorge.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/SaoJorge/fugulinsaojorge", {fugulin: resultado, id : result});
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
	var unidade = 'Sao Jorge';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modelsaojorge.buscartissdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
	
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatetiss(idpaciente, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelsaojorge.buscartiss(unidade, function(error, resultado){
							res.render("kaban/SaoJorge/tisssaojorge", {tiss: resultado, id : result });
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelsaojorge.addtiss(idpaciente, setor, nome, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelsaojorge.updatetissstatus(json[0].idtiss, function(error, resulta){
						modelsaojorge.buscartiss(unidade, function(error, resultado){
							res.render("kaban/SaoJorge/tisssaojorge", {tiss: resultado, id : result});
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
	var unidade = 'Sao Jorge';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);
	modelcovidsaojorge.buscarpacientepornome(nome, function(error, idcovid){
		console.log(idcovid)
	modelsaojorge.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
		console.log(json[0].dataatualizacao, json[0].idnews);
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelcovidsaojorge.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
						modelsaojorge.buscarnews(unidade, function(error, resultado){
								res.render("kaban/SaoJorge/newskabansaojorge", {news: resultado, id : result });
						});
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelsaojorge.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelsaojorge.updatenewsstatus(json[0].idnews, function(error, resulta){
						modelcovidsaojorge.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
							modelsaojorge.buscarnews(unidade, function(error, resultado){
									res.render("kaban/SaoJorge/newskabansaojorge", {news: resultado, id : result });
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
	var unidade = 'Sao Jorge';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);

	modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
	modelcovidsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
		modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				if(covid == 'true' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelsaojorge.update(idpaciente, dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidsaojorge.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmentalsaojorge.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidsaojorge.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmentalsaojorge.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmentalsaojorge.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelsaojorge.buscardispositivo(unidade, function(error, result){
												modelsaojorge.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidsaojorge.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidsaojorge.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidsaojorge.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidsaojorge.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidsaojorge.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidsaojorge.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelsaojorge.update(idpaciente,dieta, dataexame, exame, mental, referencia, covid, glasgow, bic, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelsaojorge.buscardispositivo(unidade, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados, dispositivo: result});
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
	var unidade = 'SaoJorge';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	modelsaojorge.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
	modelsaojorge.buscarleitosid(setoresrecuperado, function(error, idleito){
		if(setoresrecuperado[0].leito == "Maca"){	
			modeladmingestao.updateleitossaojorgemaca(setoresrecuperado[0].setor, function(error, resulta){
	modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){
				if(idpac[0].mental == 'true'){
					if(idpac[0].covid == 'true'){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
								modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
															modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelsaojorge.buscarleitosnome(nome, function(error, idleito){
			
																	modelsaojorge.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
							modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
								modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
									modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
										modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
											modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
												modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
													modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
														modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelsaojorge.buscarleitosnome(nome, function(error, idleito){
																
																modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
							modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
								modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
									modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
										modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
											modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
												modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
													modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
														modelsaojorge.buscarleitosnome(nome, function(error, idleito){
															
															modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																	res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
							modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
								modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
										modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
											modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
												modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
													modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
														modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelsaojorge.buscarleitosnome(nome, function(error, idleito){
														
																modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
	modeladmingestao.updateleitossaojorgecama(setoresrecuperado[0].setor, function(error, resulta){
		modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
												modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
													modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
														modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
															modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
																modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelsaojorge.buscarleitosnome(nome, function(error, idleito){
				
																		modelsaojorge.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
															modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelsaojorge.buscarleitosnome(nome, function(error, idleito){
																	
																	modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
										modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
											modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
												modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
													modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
														modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelsaojorge.buscarleitosnome(nome, function(error, idleito){
																
																modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
															modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelsaojorge.buscarleitosnome(nome, function(error, idleito){
															
																	modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
		
		modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
												modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
													modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
														modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
															modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
																modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelsaojorge.buscarleitosnome(nome, function(error, idleito){
				
																		modelsaojorge.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
															modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelsaojorge.buscarleitosnome(nome, function(error, idleito){
																	
																	modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
										modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
											modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
												modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
													modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
														modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelsaojorge.buscarleitosnome(nome, function(error, idleito){
																
																modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																	modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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
								modelsaojorge.baixa(idpaciente,baixa,data, function(error, result){
									modelcovidsaojorge.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.baixacentral(idpaciente,baixa, function(error, result){
															modelsaojorge.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelsaojorge.buscarleitosnome(nome, function(error, idleito){
															
																	modelsaojorge.updateleitosativo(idleito[0].idleitos, function(error, resultado){
																		modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : resultados});
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

module.exports.updatedispositivokabansaojorge= function(application, req, res){
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
	var unidade = 'Sao Jorge';
	var profissional = "Enfermeiro";
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);

	modeladmin.buscarusuarioporid(id, function(error, result){	
		modelsaojorge.updatedispositivodados(idpaciente,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
			modelcovidsaojorge.updaterespkaban(idpaciente,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
				modelsaojorge.buscardispositivo(unidade, function(error, resultado){
						res.render("kaban/SaoJorge/dispositivosaojorge", {dispositivo: resultado, id : result });
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
	var unidade = 'Sao Jorge';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelsaojorge.updatefugulindados(idpaciente,data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelsaojorge.buscarfugulin(unidade, function(error, resultado){
				res.render("kaban/SaoJorge/fugulinsaojorge", {fugulin : resultado, id : resultados});
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
	var unidade = 'Sao Jorge';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelcovidsaojorge = new application.app.model.regulacao.modelsaojorge(application);

			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatenewsdados(idpaciente,data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
					modelcovidsaojorge.updatenews(idpaciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
						modelsaojorge.buscarnews(unidade, function(error, resultado){
								res.render("kaban/SaoJorge/newskabansaojorge", {news: resultado, id : result });
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
	var unidade = 'Sao Jorge';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelsaojorge.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelsaojorge.buscartiss(unidade, function(error, resultado){
				res.render("kaban/SaoJorge/tisssaojorge", {tiss : resultado, id : resultados});
			});
		});
	});	
}

