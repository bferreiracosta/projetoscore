module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/kabanpacientesaojorge", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatoriopendencias= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriopendenciassaojorge", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatorioplanoalta= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatorioplanoaltasaojorge", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatoriocovidsaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpacienterelatoriocovid(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriocovidsaojorge", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatoriomentalsaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarpacienterelatoriomental(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriomentalsaojorge", {paciente : resultado, id : result});
		});
	});	
}
module.exports.saveexamesaojorge= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'SaoJorge';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelsaojorge.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelsaojorge.buscarpaciente(unidade, function(error, resultado){
					res.redirect("/kabanpacientesaojorge?id=" + result[0].id_usuario);	
				});
			});	
		});
}

module.exports.calendariosaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelsaojorge.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/SaoJorge/addexamesaojorge", {id : result, paciente: resultado});
		});
	});
}

module.exports.examesaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelsaojorge.deleteexamesaojorge(idevento.id, function(error, resultado){
			modelsaojorge.buscarpaciente(unidade, function(error, resultado){
				res.redirect("/kabanpacientesaojorge?id=" + result[0].id_usuario);	
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
				res.redirect("/examesaojorge?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitosaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var idleito = req.body.idleito;
	var id = req.body.idusuario;
	console.log(idleito)
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelsaojorge.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(nome == "Remover"){
				console.log(nome)
				modelsaojorge.mudarpacienteleito(idleito, function(error,resultado){
					modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
						res.redirect("/leitossaojorge?id=" + result[0].id_usuario);
					});	
				})
			}
			else{
				if(setoresrecuperado == ""){
					modelsaojorge.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
						modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
							res.redirect("/leitossaojorge?id=" + result[0].id_usuario);
						});	
					});
				}
				else{
					modelsaojorge.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
						modelsaojorge.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
							modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
								res.redirect("/leitossaojorge?id=" + result[0].id_usuario);
							});	
						});
					})
				}
			}
		});
	});
}	
	
module.exports.leitos= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarleitospacientes(function(error, resultadosetores){
			res.render("kaban/SaoJorge/leitossaojorge", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.cadastrarleitossaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.cadastrarleitossaojorge(function(error, resultadosetores){
			res.render("kaban/SaoJorge/cadastrarleitossaojorge", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.buscarpacientessaojorge= function(application, req, res){
	
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	
	modelsaojorge.buscarpacientessaojorge(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.buscaridpacientessaojorge= function(application, req, res){
	
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var valor = req.query;
	
	modelsaojorge.buscarpacientesidsaojorge(valor,function(error, resultadoid){
		res.send(resultadoid);
	});
	
}

module.exports.editfugulinsaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'SaoJorge';

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
	var unidade = 'SaoJorge';
	
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriokabansaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriosemleitossaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'SaoJorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpacientesemleitos(unidade, function(error, resultado){
			res.render("kaban/SaoJorge/relatoriosemleitossaojorge", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitassaojorge = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
	modeladmin.buscarusuario(id, function(error,result){
		modelsaojorge.buscarpacienterelatorio(unidade, function(error, resultado){
			modelsaojorge.buscardieta1(unidade, function(error,dieta1){
				modelsaojorge.buscardieta2(unidade, function(error, dieta2){
					modelsaojorge.buscardieta3(unidade, function(error, dieta3){
						modelsaojorge.buscardieta4(unidade, function(error, dieta4){
							modelsaojorge.buscardieta5(unidade, function(error, dieta5){
								modelsaojorge.buscardieta6(unidade, function(error, dieta6){
									modelsaojorge.buscardieta7(unidade, function(error, dieta7){
										modelsaojorge.buscardieta8(unidade, function(error, dieta8){
											modelsaojorge.buscardieta9(unidade, function(error, dieta9){
												modelsaojorge.buscardieta10(unidade, function(error, dieta10){
													modelsaojorge.buscardieta11(unidade, function(error, dieta11){
														modelsaojorge.buscardieta12(unidade,function(error, dieta12){
															modelsaojorge.buscardieta13(unidade,function(error, dieta13){
																modelsaojorge.buscardieta14(unidade,function(error, dieta14){
																	modelsaojorge.buscardieta15(unidade,function(error, dieta15){
																		modelsaojorge.buscardieta16(unidade, function(error, dieta16){
																			modelsaojorge.buscardieta17(unidade, function(error, dieta17){
																				modelsaojorge.buscardieta18(unidade, function(error, dieta18){
																					modelsaojorge.buscardieta19(unidade, function(error, dieta19){
																						modelsaojorge.buscardieta20(unidade, function(error, dieta20){
																							modelsaojorge.buscardieta21(unidade, function(error, dieta21){
																								modelsaojorge.buscardieta22(unidade,function(error, dieta22){
																									modelsaojorge.buscardieta23(unidade,function(error, dieta23){
																										modelsaojorge.buscardieta24(unidade,function(error, dieta24){
																											modelsaojorge.buscardieta25(unidade,function(error, dieta25){
																												modelsaojorge.buscardieta25(unidade,function(error, dieta25){
																													modelsaojorge.buscardieta26(unidade,function(error, dieta26){
																														modelsaojorge.buscardieta27(unidade,function(error, dieta27){
																															modelsaojorge.buscardieta28(unidade,function(error, dieta28){
																																modelsaojorge.buscardieta29(unidade,function(error, dieta29){
																																	modelsaojorge.buscardieta30(unidade,function(error, dieta30){
																																		modelsaojorge.buscardieta31(unidade,function(error, dieta31){
																												res.render("kaban/SaoJorge/relatoriodietassaojorge", {paciente: resultado, id : result,
																													dieta1 : dieta1,
																													dieta2 : dieta2,
																													dieta3 : dieta3,
																													dieta4 : dieta4,
																													dieta5 : dieta5,
																													dieta6 : dieta6,
																													dieta7 : dieta7,
																													dieta8 : dieta8,
																													dieta9 : dieta9,
																													dieta10 : dieta10,
																													dieta11 : dieta11,
																													dieta12 : dieta12,
																													dieta13 : dieta13,
																													dieta14 : dieta14,
																													dieta15 : dieta15,
																													dieta16 : dieta16,
																													dieta17 : dieta17,
																													dieta18 : dieta18,
																													dieta19 : dieta19,
																													dieta20 : dieta20,
																													dieta21 : dieta21,
																													dieta22 : dieta22,
																													dieta23 : dieta23,
																													dieta24 : dieta24,
																													dieta25 : dieta25,
																													dieta26 : dieta26,
																													dieta27 : dieta27,
																													dieta28 : dieta28,
																													dieta29 : dieta29,
																													dieta30 : dieta30,
																													dieta31 : dieta31,
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

module.exports.historico= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	

	var id = req.query;
	var unidade = 'SaoJorge';
	
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	var unidade = 'SaoJorge';
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
	
	var unidade = 'SaoJorge';
	
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
	var round = req.body.round;
	var alta = req.body.alta;
	var metas =  req.body.metas;
	var agenexames = req.body.agenexames;
	var descexame = req.body.descexame;
	var laudo = req.body.laudo;
	var desclaudo = req.body.desclaudo;
	var oxigenios = req.body.oxigenios;
	var casas = req.body.casas;
	var avespecialistas = req.body.avespecialistas;
	var descespecialista = req.body.descespecialista;
	var coletas = req.body.coletas;
	var resultadolabs = req.body.resultadolabs;
	var transferencias = req.body.transferencias;
	var desctransferencia = req.body.desctransferencia;
	var hemos = req.body.hemos;
	var mental = req.body.mental2;
	var referencia = req.body.referencia;
	var covid = req.body.covid2;


	var dataexame = req.body.dataexame;
	var exame = req.body.exame4;
	var dieta = req.body.dieta2;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'SaoJorge';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);

	if(mental == 'true'){
		
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelsaojorge.cadastrarpaciente(paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmentalsaojorge.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
					modelsaojorge.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelsaojorge.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelsaojorge.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelsaojorge.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelsaojorge.buscarpaciente(unidade, function(error, resultado){
										res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);					
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
			modelsaojorge.cadastrarpaciente(paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelsaojorge.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
					modelsaojorge.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
						modelsaojorge.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelsaojorge.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
								modelsaojorge.buscarpaciente(unidade, function(error, resultado){
									res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);					
								});
							});
						});
					});
				});
			});
		});	
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
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var data = req.body.data;
	var id = req.body.campo;
	var unidade = 'SaoJorge';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modelsaojorge.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelsaojorge.buscardispositivo(unidade, function(error, resultado){
						res.redirect("/dispositivosaojorge?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelsaojorge.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelsaojorge.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
						modelsaojorge.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivosaojorge?id=" + result[0].id_usuario);	
						});
					});	
				});
			});	
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
	var unidade = 'SaoJorge';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modelsaojorge.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelsaojorge.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinsaojorge?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelsaojorge.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelsaojorge.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelsaojorge.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinsaojorge?id=" + result[0].id_usuario);	
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
	var tiss = req.body.tiss;
	var data = req.body.data;
	var id = req.body.campo;
	var unidade = 'SaoJorge';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modelsaojorge.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelsaojorge.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelsaojorge.buscartiss(unidade, function(error, resultado){
						res.redirect("/tisssaojorge?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelsaojorge.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelsaojorge.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelsaojorge.buscartiss(unidade, function(error, resultado){
							res.redirect("/tisssaojorge?id=" + result[0].id_usuario);	
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
	var unidade = 'SaoJorge';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	modelsaojorge.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		modelsaojorge.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
			if(resultados[0].dataatualizacao == null){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelsaojorge.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelsaojorge.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabansaojorge?id=" + result[0].id_usuario);	
						});
					});
				});	
			}else{
				modeladmin.buscarusuarioeditavel(id, function(error, result){	
					modelsaojorge.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelsaojorge.updatenewsstatus(resultados[0].idnews, function(error, resulta){
							modelsaojorge.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabansaojorge?id=" + result[0].id_usuario);	
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
	var round = req.body.round;
	var alta = req.body.alta;
	var metas = req.body.metas;
	var agenexames = req.body.agenexames;
	var descexame = req.body.descexame;
	var laudo = req.body.laudo;
	var desclaudo = req.body.desclaudo;
	var oxigenios = req.body.oxigenios;
	var casas = req.body.casas;
	var avespecialistas = req.body.avespecialistas;
	var descespecialista = req.body.descespecialista;
	var coletas = req.body.coletas;
	var resultadolabs = req.body.resultadolabs;
	var transferencias = req.body.transferencias;
	var desctransferencia = req.body.desctransferencia;
	var hemos = req.body.hemos;
	var mental = req.body.mental2;
	var referencia = req.body.referencia;
	var covid = req.body.covid2;

	var dieta =  req.body.dieta2;
	var dataexame = req.body.dataexame;
	var data = req.body.data;
	var baixa = "Erro na inser????o Kaban";
	var exame = req.body.exame4;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'SaoJorge';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);

	modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
		modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modelsaojorge.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelsaojorge.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalsaojorge.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
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
			if(mental == 'false' && idpac[0].mental == "false" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){
					modelsaojorge.update(idpaciente,paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelsaojorge.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelsaojorge.buscardispositivo(unidade, function(error, result){
												modelsaojorge.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
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
			if(mental == 'true' && idpac[0].mental == "false" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){
					modelsaojorge.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelsaojorge.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalsaojorge.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
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
			if(mental == 'false' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modelsaojorge.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelsaojorge.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelsaojorge.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelsaojorge.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelsaojorge.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelsaojorge.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelsaojorge.buscardispositivo(unidade, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
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
			
		})
	})
}

module.exports.baixa= function(application, req, res){
	var idpaciente = req.body.campo;
	var id = req.body.campo2;
	var baixa = req.body.baixa;
	var destino = req.body.destino2;
	var alta = req.body.alta2;
	var data = req.body.data;
	var unidade = 'SaoJorge';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var modelmentalsaojorge = new application.app.model.mentalurgencia.modelmentalsaojorge(application);
	modelsaojorge.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
		console.log(setoresrecuperado);
		if(setoresrecuperado != ''){
			modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){	
					modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelsaojorge.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
															modelsaojorge.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
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
								modelsaojorge.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
										modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
											modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
												modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
													modelsaojorge.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
														});
													});
												});	
											});
										});
									});
								});
							});	
						}	
					})	
					
			})
		}
		else{
			modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
					modelmentalsaojorge.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelsaojorge.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalsaojorge.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
											modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
												modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
													modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
														modelsaojorge.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
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
								modelsaojorge.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelsaojorge.baixadispositivo(idpaciente,baixa, function(error, result){
										modelsaojorge.baixatiss(idpaciente,baixa, function(error, result){
											modelsaojorge.baixanews(idpaciente,baixa, function(error, result){
												modelsaojorge.baixafugulin(idpaciente,baixa, function(error, result){
													modelsaojorge.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientesaojorge?id=" + resultados[0].id_usuario);	
													});
												});	
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
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'SaoJorge';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){

		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelsaojorge.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
				modelsaojorge.buscardispositivo(unidade, function(error, resultado){
					res.redirect("/dispositivosaojorge?id=" + result[0].id_usuario);	
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
	var unidade = 'SaoJorge';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelsaojorge.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelsaojorge.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulinsaojorge?id=" + resultados[0].id_usuario);	
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
	var data = req.body.data;
	var id = req.body.idusuario;
	var unidade = 'SaoJorge';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);

	modelsaojorge.buscarpacienteporid(idpaciente, function(error, idpac){
		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelsaojorge.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
				modelsaojorge.buscarnews(unidade, function(error, resultado){
					res.redirect("/newskabansaojorge?id=" + result[0].id_usuario);	
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
	var unidade = 'SaoJorge';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelsaojorge.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelsaojorge.buscartiss(unidade, function(error, resultado){
				res.redirect("/tisssaojorge?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaisaojorge= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelsaojorge = new application.app.model.kaban.SaoJorge.modelsaojorge(application);
	var unidade = 'SaoJorge';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelsaojorge.buscarinternacaodiasaojorge(unidade, function(error, inter){
			modelsaojorge.buscarevasaosaojorge(unidade, function(error, evasao){
				modelsaojorge.buscarobitosaojorge(unidade, function(error, obito){
					modelsaojorge.buscartransferenciasaojorge(unidade, function(error, transf){
						modelsaojorge.buscarobservacaosaojorge(unidade, function(error, obser){
							modelsaojorge.buscaraltasaojorge(unidade, function(error, alta){
								modelsaojorge.buscarcirurgicosaojorge(unidade, function(error, cirur){
									modelsaojorge.buscarpsquiatriasaojorge(unidade, function(error, psq){
										modelsaojorge.buscarpediatriasaojorge(unidade, function(error, ped){
											modelsaojorge.buscartraumatologiasaojorge(unidade, function(error, tto){
												modelsaojorge.buscarclinicosaojorge(unidade, function(error, clinico){
													modelsaojorge.buscarsetoressaojorge(function(error, setor){
														modelsaojorge.buscarbanhomanhasaojorge(function(error, manha){
															modelsaojorge.buscarbanhotardesaojorge(function(error, tarde){
																modelsaojorge.buscarbanhonoitesaojorge(function(error, noite){
																	res.render("kaban/SaoJorge/infouaisaojorge", {inter : inter,
																		evasao : evasao,
																		obito : obito,
																		transf : transf,
																		obser : obser,
																		alta : alta,
																		cirur : cirur,
																		psq : psq,
																		ped : ped,
																		tto : tto,
																		clinico : clinico,
																		setor : setor,
																		manha : manha,
																		tarde : tarde,
																		noite : noite,
																		id : result});
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
			});
		});
	});
}


			