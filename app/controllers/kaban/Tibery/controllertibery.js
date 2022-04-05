module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Tibery/kabanpacientetibery", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriopendencias= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatoriopendenciastibery", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorioplanoalta= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatorioplanoaltatibery", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidtibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarpacienterelatoriocovid(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatoriocovidtibery", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriomentaltibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarpacienterelatoriomental(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatoriomentaltibery", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexametibery= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Tibery';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modeltibery.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modeltibery.buscarpaciente(unidade, function(error, resultado){
					res.redirect("/kabanpacientetibery?id=" + result[0].id_usuario);	
				});
			});	
		});
}

module.exports.calendariotibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Tibery/calendariotibery" ,{id : result});
	});	
}

module.exports.addexametibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Tibery/addexametibery", {id : result, paciente: resultado});
		});
	});
}

module.exports.exametibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var unidade = 'Tibery';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarexames(function(error, resultado){
			res.render("kaban/Tibery/exametibery", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexametibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modeltibery.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Tibery/editexametibery", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexametibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modeltibery.deleteexametibery(idevento.id, function(error, resultado){
			modeltibery.buscarpaciente(unidade, function(error, resultado){
				res.redirect("/kabanpacientetibery?id=" + result[0].id_usuario);	
			});
		});
	});	
}

module.exports.montarcalendariotibery= function(application, req, res){
	
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	modeltibery.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexametibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.updateexametibery(idevento, title, start, paciente, end,  function(error, resultado){
			modeltibery.buscarexames(function(error, resultado){
				res.redirect("/exametibery?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitotibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var idleito = req.body.idleito;
	var id = req.body.idusuario;
	modeladmin.buscarusuarioporid(id, function(error, result){
		modeltibery.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(nome == "Remover"){
				modeltibery.mudarpacienteleito(idleito, function(error,resultado){
					modeltibery.buscarleitospacientes(function(error, resultadosetores){
						res.redirect("/leitostibery?id=" + result[0].id_usuario);
					});	
				})
			}
			else{
				if(setoresrecuperado == ""){
					modeltibery.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
						modeltibery.buscarleitospacientes(function(error, resultadosetores){
							res.redirect("/leitostibery?id=" + result[0].id_usuario);
						});	
					});
				}
				else{
					modeltibery.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
						modeltibery.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
							modeltibery.buscarleitospacientes(function(error, resultadosetores){
								res.redirect("/leitostibery?id=" + result[0].id_usuario);
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
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarleitospacientes(function(error, resultadosetores){
			res.render("kaban/Tibery/leitostibery", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.cadastrarleitostibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.cadastrarleitostibery(function(error, resultadosetores){
			res.render("kaban/Tibery/cadastrarleitostibery", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.buscarpacientestibery= function(application, req, res){
	
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	
	modeltibery.buscarpacientestibery(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.buscaridpacientestibery= function(application, req, res){
	
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	var valor = req.query;
	
	modeltibery.buscarpacientesidtibery(valor,function(error, resultadoid){
		res.send(resultadoid);
	});
	
}

module.exports.editfugulintibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Tibery/editfugulintibery", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivotibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Tibery/editkabandispositivotibery", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewstibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Tibery/editnewskabantibery", {news: resultado, id : result});
		});
	});
}

module.exports.edittisstibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Tibery/edittisstibery", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulintibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Tibery/fugulintibery", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newstibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Tibery/newskabantibery", {news: resultado, id : result});
		});
	});
}

module.exports.tisstibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Tibery/tisstibery", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabantibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatorioadmkabantibery", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabantibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatoriokabantibery", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriosemleitostibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarpacientesemleitos(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatoriosemleitostibery", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitastibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Tibery/relatoriovisitastibery", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietastibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarpacienterelatorio(unidade, function(error, resultado){
			modeltibery.buscardieta1(unidade, function(error,dieta1){
				modeltibery.buscardieta2(unidade, function(error, dieta2){
					modeltibery.buscardieta3(unidade, function(error, dieta3){
						modeltibery.buscardieta4(unidade, function(error, dieta4){
							modeltibery.buscardieta5(unidade, function(error, dieta5){
								modeltibery.buscardieta6(unidade, function(error, dieta6){
									modeltibery.buscardieta7(unidade, function(error, dieta7){
										modeltibery.buscardieta8(unidade, function(error, dieta8){
											modeltibery.buscardieta9(unidade, function(error, dieta9){
												modeltibery.buscardieta10(unidade, function(error, dieta10){
													modeltibery.buscardieta11(unidade, function(error, dieta11){
														modeltibery.buscardieta12(unidade,function(error, dieta12){
															modeltibery.buscardieta13(unidade,function(error, dieta13){
																modeltibery.buscardieta14(unidade,function(error, dieta14){
																	modeltibery.buscardieta15(unidade,function(error, dieta15){
																		modeltibery.buscardieta16(unidade, function(error, dieta16){
																			modeltibery.buscardieta17(unidade, function(error, dieta17){
																				modeltibery.buscardieta18(unidade, function(error, dieta18){
																					modeltibery.buscardieta19(unidade, function(error, dieta19){
																						modeltibery.buscardieta20(unidade, function(error, dieta20){
																							modeltibery.buscardieta21(unidade, function(error, dieta21){
																								modeltibery.buscardieta22(unidade,function(error, dieta22){
																									modeltibery.buscardieta23(unidade,function(error, dieta23){
																										modeltibery.buscardieta24(unidade,function(error, dieta24){
																											modeltibery.buscardieta25(unidade,function(error, dieta25){
																												modeltibery.buscardieta25(unidade,function(error, dieta25){
																													modeltibery.buscardieta26(unidade,function(error, dieta26){
																														modeltibery.buscardieta27(unidade,function(error, dieta27){
																															modeltibery.buscardieta28(unidade,function(error, dieta28){
																																modeltibery.buscardieta29(unidade,function(error, dieta29){
																																	modeltibery.buscardieta30(unidade,function(error, dieta30){
																																		modeltibery.buscardieta31(unidade,function(error, dieta31){
																												res.render("kaban/Tibery/relatoriodietastibery", {paciente: resultado, id : result,
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
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	
	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.historico(unidade, function(error, resultado){
			res.render("kaban/Tibery/historicokabantibery", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivotibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Tibery/dispositivotibery", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Tibery/addkabanpacientetibery", {id : result});
	});
}

module.exports.adddispositivotibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Tibery/adddispositivotibery", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulintibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Tibery/addfugulintibery", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtisstibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Tibery/addtisstibery", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewstibery = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	

	var id = req.query;
	var unidade = 'Tibery';
	modeladmin.buscarusuario(id, function(error,result){
		modeltibery.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Tibery/addnewstibery", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Tibery';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modeltibery.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Tibery/editkabantibery", {paciente: resultado, id : result});
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


	var dataexame = req.body.dataexame;
	var exame = req.body.exame4;
	var Suspeição = req.body.Suspeição2;
	var dieta = req.body.dieta2;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'Tibery';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);

	if(mental == 'true'){
		
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modeltibery.cadastrarpaciente(Suspeição,paciente, round, alta, metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmentaltibery.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
					modeltibery.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modeltibery.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modeltibery.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modeltibery.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modeltibery.buscarpaciente(unidade, function(error, resultado){
										res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);					
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
			modeltibery.cadastrarpaciente(Suspeição,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modeltibery.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
					modeltibery.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
						modeltibery.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modeltibery.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
								modeltibery.buscarpaciente(unidade, function(error, resultado){
									res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);					
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
	var gtt = req.body.gtt3;
	var datagtt = req.body.datagtt;
	var sng = req.body.sng3;
	var datasng = req.body.datasng;
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
	var unidade = 'Tibery';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	modeltibery.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modeltibery.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,gtt,datagtt,sng,datasng,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modeltibery.buscardispositivo(unidade, function(error, resultado){
						res.redirect("/dispositivotibery?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modeltibery.adddispositivo(idpaciente, nome,glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,gtt,datagtt,sng,datasng,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modeltibery.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
						modeltibery.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivotibery?id=" + result[0].id_usuario);	
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
	var unidade = 'Tibery';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	modeltibery.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modeltibery.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modeltibery.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulintibery?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modeltibery.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modeltibery.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modeltibery.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulintibery?id=" + result[0].id_usuario);	
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
	var unidade = 'Tibery';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	modeltibery.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modeltibery.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modeltibery.buscartiss(unidade, function(error, resultado){
						res.redirect("/tisstibery?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modeltibery.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modeltibery.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modeltibery.buscartiss(unidade, function(error, resultado){
							res.redirect("/tisstibery?id=" + result[0].id_usuario);	
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
	var unidade = 'Tibery';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	modeltibery.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		modeltibery.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
			if(resultados[0].dataatualizacao == null){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modeltibery.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modeltibery.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabantibery?id=" + result[0].id_usuario);	
						});
					});
				});	
			}else{
				modeladmin.buscarusuarioeditavel(id, function(error, result){	
					modeltibery.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modeltibery.updatenewsstatus(resultados[0].idnews, function(error, resulta){
							modeltibery.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabantibery?id=" + result[0].id_usuario);	
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
	var baixa = "Erro na inserção Kaban";
	var exame = req.body.exame4;
	var Suspeição = req.body.Suspeição2;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'Tibery';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);

	modeltibery.buscarpacienteporid(idpaciente, function(error, idpac){
		modelmentaltibery.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modeltibery.update(Suspeição,idpaciente,paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modeltibery.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentaltibery.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modeltibery.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modeltibery.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modeltibery.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modeltibery.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modeltibery.buscardispositivo(unidade, function(error, result){
													modeltibery.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
					modeltibery.update(Suspeição,idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modeltibery.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modeltibery.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modeltibery.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modeltibery.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modeltibery.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modeltibery.buscardispositivo(unidade, function(error, result){
												modeltibery.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
					modeltibery.update(Suspeição,idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modeltibery.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentaltibery.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modeltibery.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modeltibery.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modeltibery.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modeltibery.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modeltibery.buscardispositivo(unidade, function(error, result){
													modeltibery.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
					modeltibery.update(Suspeição,idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, result){
						modeltibery.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentaltibery.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modeltibery.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modeltibery.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modeltibery.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modeltibery.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modeltibery.buscardispositivo(unidade, function(error, result){
													modeltibery.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Tibery';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	var modelmentaltibery = new application.app.model.mentalurgencia.modelmentaltibery(application);
	modeltibery.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
		if(setoresrecuperado != ''){
			modeltibery.buscarpacienteporid(idpaciente, function(error, idpac){	
					modelmentaltibery.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modeltibery.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentaltibery.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modeltibery.baixadispositivo(idpaciente,baixa, function(error, result){
											modeltibery.baixatiss(idpaciente,baixa, function(error, result){
												modeltibery.baixanews(idpaciente,baixa, function(error, result){
													modeltibery.baixafugulin(idpaciente,baixa, function(error, result){
														modeltibery.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
															modeltibery.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
								modeltibery.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modeltibery.baixadispositivo(idpaciente,baixa, function(error, result){
										modeltibery.baixatiss(idpaciente,baixa, function(error, result){
											modeltibery.baixanews(idpaciente,baixa, function(error, result){
												modeltibery.baixafugulin(idpaciente,baixa, function(error, result){
													modeltibery.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
														modeltibery.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
			modeltibery.buscarpacienteporid(idpaciente, function(error, idpac){
					modelmentaltibery.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modeltibery.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentaltibery.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modeltibery.baixadispositivo(idpaciente,baixa, function(error, result){
											modeltibery.baixatiss(idpaciente,baixa, function(error, result){
												modeltibery.baixanews(idpaciente,baixa, function(error, result){
													modeltibery.baixafugulin(idpaciente,baixa, function(error, result){
														modeltibery.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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
								modeltibery.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modeltibery.baixadispositivo(idpaciente,baixa, function(error, result){
										modeltibery.baixatiss(idpaciente,baixa, function(error, result){
											modeltibery.baixanews(idpaciente,baixa, function(error, result){
												modeltibery.baixafugulin(idpaciente,baixa, function(error, result){
													modeltibery.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientetibery?id=" + resultados[0].id_usuario);	
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

module.exports.updatedispositivokabantibery= function(application, req, res){
	var idpaciente = req.body.idpaciente;
	var svd = req.body.svd3;
	var datasvd = req.body.datasvd;
	var sne = req.body.sne3;
	var datasne = req.body.datasne;
	var avp = req.body.avp3;
	var dataavp = req.body.dataavp;
	var cvc = req.body.cvc3;
	var datacvc = req.body.datacvc;
	var gtt = req.body.gtt3;
	var datagtt = req.body.datagtt;
	var sng = req.body.sng3;
	var datasng = req.body.datasng;
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
	var unidade = 'Tibery';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	modeltibery.buscarpacienteporid(idpaciente, function(error, idpac){

		modeladmin.buscarusuarioporid(id, function(error, result){	
			modeltibery.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,gtt,datagtt,sng,datasng,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
				modeltibery.buscardispositivo(unidade, function(error, resultado){
					res.redirect("/dispositivotibery?id=" + result[0].id_usuario);	
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
	var unidade = 'Tibery';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeltibery.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modeltibery.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulintibery?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Tibery';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);

	modeltibery.buscarpacienteporid(idpaciente, function(error, idpac){
		modeladmin.buscarusuarioporid(id, function(error, result){	
			modeltibery.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
				modeltibery.buscarnews(unidade, function(error, resultado){
					res.redirect("/newskabantibery?id=" + result[0].id_usuario);	
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
	var unidade = 'Tibery';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modeltibery.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modeltibery.buscartiss(unidade, function(error, resultado){
				res.redirect("/tisstibery?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaitibery= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modeltibery = new application.app.model.kaban.Tibery.modeltibery(application);
	var unidade = 'Tibery';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modeltibery.buscarinternacaodiatibery(unidade, function(error, inter){
			modeltibery.buscarevasaotibery(unidade, function(error, evasao){
				modeltibery.buscarobitotibery(unidade, function(error, obito){
					modeltibery.buscartransferenciatibery(unidade, function(error, transf){
						modeltibery.buscarobservacaotibery(unidade, function(error, obser){
							modeltibery.buscaraltatibery(unidade, function(error, alta){
								modeltibery.buscarcirurgicotibery(unidade, function(error, cirur){
									modeltibery.buscarPsiquiatriatibery(unidade, function(error, psq){
										modeltibery.buscarpediatriatibery(unidade, function(error, ped){
											modeltibery.buscartraumatologiatibery(unidade, function(error, tto){
												modeltibery.buscarclinicotibery(unidade, function(error, clinico){
													modeltibery.buscarsetorestibery(function(error, setor){
														modeltibery.buscarbanhomanhatibery(function(error, manha){
															modeltibery.buscarbanhotardetibery(function(error, tarde){
																modeltibery.buscarbanhonoitetibery(function(error, noite){
																	res.render("kaban/Tibery/infouaitibery", {inter : inter,
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


			