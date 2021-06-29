module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexameroosevelt= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Roosevelt';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelroosevelt.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelroosevelt.buscarpaciente(unidade, function(error, resultado){
					res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente: resultado, id : result});
				});
			});	
		});
}

module.exports.calendarioroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Roosevelt/calendarioroosevelt" ,{id : result});
	});	
}

module.exports.addexameroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Roosevelt/addexameroosevelt", {id : result, paciente: resultado});
		});
	});
}

module.exports.exameroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var unidade = 'Roosevelt';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarexames(function(error, resultado){
			res.render("kaban/Roosevelt/exameroosevelt", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexameroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelroosevelt.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Roosevelt/editexameroosevelt", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexameroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelroosevelt.deleteexameroosevelt(idevento.id, function(error, resultado){
			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
				res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente: resultado, id : result});
			});
		});
	});	
}

module.exports.montarcalendarioroosevelt= function(application, req, res){
	
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	modelroosevelt.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexameroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.updateexameroosevelt(idevento, title, start, paciente, end,  function(error, resultado){
			modelroosevelt.buscarexames(function(error, resultado){
				res.render("kaban/Roosevelt/exameroosevelt", {id : result, evento: resultado});
			});
		});
	});
}

module.exports.atualizarleitoroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor2;
	var leito = req.body.leito2;
	var id = req.body.idusuario;

	
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelroosevelt.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			modelroosevelt.buscarleitosid(setoresrecuperado, function(error, idleito){
				modelroosevelt.atualizarleitokaban(idpaciente, setor, leito, function(error, resultado){
					modelroosevelt.buscarsetoresid(setor, function(error, resultado){
						modelroosevelt.buscarleitoativo(resultado,leito, function(error, idleitos){
							modelroosevelt.updateleitos(idleitos, function(error, resultado){
								if(setoresrecuperado[0].leito == null){
									if(leito == "Maca"){
										modeladmingestao.updateleitosrooseveltmacamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
												});
											}else{
												modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
													modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}else{
										modeladmingestao.updateleitosrooseveltcamamais(setor, function(error, resulta){
											if(setoresrecuperado[0].setor == null){
												modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
													res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
												});
											}else{
												modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
													modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
													});
												});
											}
										});	
									}		
								}
								if(setoresrecuperado[0].leito == "Maca"){
									modeladmingestao.updateleitosrooseveltmaca(setoresrecuperado[0].setor, function(error, resulta){
										if(leito == "Maca"){
											modeladmingestao.updateleitosrooseveltmacamais(setor, function(error, resulta){
												if(setoresrecuperado[0].setor == null){
													modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
													});
												}else{
													modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
														modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
															res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
														});
													});
												}
											});	
										}else{
											modeladmingestao.updateleitosrooseveltcamamais(setor, function(error, resulta){
												if(setoresrecuperado[0].setor == null){
													modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
													});
												}else{
													modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
														modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
															res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
														});
													});
												}
											});	
										}
									});		
								}
								if(setoresrecuperado[0].leito == "Cama"){
									modeladmingestao.updateleitosrooseveltcama(setoresrecuperado[0].setor, function(error, resulta){
										if(leito == "Maca"){
											modeladmingestao.updateleitosrooseveltmacamais(setor, function(error, resulta){
												if(setoresrecuperado[0].setor == null){
													modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
													});
												}else{
													modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
														modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
															res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
														});
													});
												}
											});	
										}else{
											modeladmingestao.updateleitosrooseveltcamamais(setor, function(error, resulta){
												if(setoresrecuperado[0].setor == null){
													modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
														res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
													});
												}else{
													modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
														modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
															res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores, id : result});
														});
													});
												}
											});	
										}
									});			
								}
							});
						})
					});	
				});	
			});		
		});
	});	
}

module.exports.leitos= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarleitospacientes(function(error, resultadosetores){
			modelroosevelt.buscarsetores(function(error, resultadosetor){
				res.render("kaban/Roosevelt/leitosroosevelt", {leito : resultadosetores,setor : resultadosetor, id : result});
			});
		});
	});	
}


module.exports.buscarleitos= function(application, req, res){
	
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	var valor = req.query;
	modelroosevelt.buscarleitos(valor, function(error, resultadoleito){
		res.send(resultadoleito);
	});
	
}

module.exports.buscarsetor= function(application, req, res){
	
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	
	modelroosevelt.buscarsetores(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.editfugulinroosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Roosevelt/editfugulinroosevelt", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivoroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Roosevelt/editkabandispositivoroosevelt", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewsroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Roosevelt/editnewskabanroosevelt", {news: resultado, id : result});
		});
	});
}

module.exports.edittissroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Roosevelt/edittissroosevelt", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/fugulinroosevelt", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newsroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result});
		});
	});
}

module.exports.tissroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/tissroosevelt", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/relatorioadmkabanroosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/relatoriokabanroosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitasroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/relatoriovisitasroosevelt", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietasroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarpacienterelatorio(unidade, function(error, resultado){
			modelroosevelt.buscardieta1(unidade, function(error,dieta1){
				modelroosevelt.buscardieta2(unidade, function(error, dieta2){
					modelroosevelt.buscardieta3(unidade, function(error, dieta3){
						modelroosevelt.buscardieta4(unidade, function(error, dieta4){
							modelroosevelt.buscardieta5(unidade, function(error, dieta5){
								modelroosevelt.buscardieta6(unidade, function(error, dieta6){
									modelroosevelt.buscardieta7(unidade, function(error, dieta7){
										modelroosevelt.buscardieta8(unidade, function(error, dieta8){
											modelroosevelt.buscardieta9(unidade, function(error, dieta9){
												modelroosevelt.buscardieta10(unidade, function(error, dieta10){
													modelroosevelt.buscardieta11(unidade, function(error, dieta11){
														modelroosevelt.buscardieta12(unidade,function(error, dieta12){
															modelroosevelt.buscardieta13(unidade,function(error, dieta13){
																modelroosevelt.buscardieta14(unidade,function(error, dieta14){
																	modelroosevelt.buscardieta15(unidade,function(error, dieta15){
																		modelroosevelt.buscardieta16(unidade, function(error, dieta16){
																			modelroosevelt.buscardieta17(unidade, function(error, dieta17){
																				modelroosevelt.buscardieta18(unidade, function(error, dieta18){
																					modelroosevelt.buscardieta19(unidade, function(error, dieta19){
																						modelroosevelt.buscardieta20(unidade, function(error, dieta20){
																							modelroosevelt.buscardieta21(unidade, function(error, dieta21){
																								modelroosevelt.buscardieta22(unidade,function(error, dieta22){
																									modelroosevelt.buscardieta23(unidade,function(error, dieta23){
																										modelroosevelt.buscardieta24(unidade,function(error, dieta24){
																											modelroosevelt.buscardieta25(unidade,function(error, dieta25){
																												res.render("kaban/Roosevelt/relatoriodietasroosevelt", {paciente: resultado, id : result,
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
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.historico(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/historicokabanroosevelt", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivoroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Roosevelt/dispositivoroosevelt", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Roosevelt/addkabanpacienteroosevelt", {id : result});
	});
}

module.exports.adddispositivoroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Roosevelt/adddispositivoroosevelt", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Roosevelt/addfugulinroosevelt", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtissroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Roosevelt/addtissroosevelt", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewsroosevelt = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	

	var id = req.query;
	var unidade = 'Roosevelt';
	modeladmin.buscarusuario(id, function(error,result){
		modelroosevelt.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Roosevelt/addnewsroosevelt", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Roosevelt';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelroosevelt.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Roosevelt/editkabanroosevelt", {paciente: resultado, id : result});
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


	var dataexame = req.body.dataexame;
	var exame = req.body.exame4;
	var dieta = req.body.dieta2;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'Roosevelt';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);

	if(mental == 'true'){
		
		if(covid == 'true'){
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelroosevelt.cadastrarpaciente(paciente,medico, dieta, exame, dataexame, mental, referencia, covid,  setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalroosevelt.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelcovidroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
							modelroosevelt.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
								modelroosevelt.addfugulinid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
									modelroosevelt.addtissid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
										modelroosevelt.addnewsid(resultdoinsert.insertId,setor,paciente, unidade,function(error, results){
											modelroosevelt.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
												modelroosevelt.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});				
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
				modelroosevelt.cadastrarpaciente(paciente,medico, dieta, exame, dataexame, mental, referencia, covid,  setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalroosevelt.cadastrarpaciente(prt,  paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelroosevelt.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelroosevelt.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelroosevelt.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelroosevelt.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelroosevelt.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelroosevelt.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});				
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
				modelroosevelt.cadastrarpaciente(paciente,medico, dieta, exame, dataexame, mental, referencia, covid,  setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelroosevelt.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelroosevelt.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelroosevelt.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelroosevelt.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelroosevelt.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
										modelroosevelt.buscarpaciente(unidade, function(error, resultado){
											res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});				
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
				modelroosevelt.cadastrarpaciente(paciente,medico, dieta, exame, dataexame, mental, referencia, covid,  setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelcovidroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
						modelroosevelt.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelroosevelt.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelroosevelt.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelroosevelt.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelroosevelt.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelroosevelt.buscarpaciente(unidade, function(error, resultado){
												res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});				
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
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var profissional = "Enfermeiro";
	var data = req.body.data;
	var id = req.body.campo;
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	modelroosevelt.buscardispositivoporid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].covid == 'false'){
			modelroosevelt.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelroosevelt.updatedispositivo(idpaciente,glasgow, bic, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelroosevelt.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/Roosevelt/dispositivoroosevelt", {dispositivo: resultado, id : result });
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelroosevelt.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelroosevelt.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
								modelroosevelt.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/Roosevelt/dispositivoroosevelt", {dispositivo: resultado, id : result});
								});
							});	
						});
					});	
				}
			})
		
		}
		else{
			modelcovidroosevelt.buscarpacientepornome(nome, function(error, idcovid){
			modelroosevelt.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelroosevelt.updatedispositivo(idpaciente,glasgow, bic, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidroosevelt.updaterespkaban(idcovid[0].id_paciente,glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelroosevelt.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/Roosevelt/dispositivoroosevelt", {dispositivo: resultado, id : result });
								});
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelroosevelt.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidroosevelt.updaterespkaban(idcovid[0].id_paciente,glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelroosevelt.updatedispositivostatus(json[0].iddispositivo, function(error, resulta){
									modelroosevelt.buscardispositivo(unidade, function(error, resultado){
										res.render("kaban/Roosevelt/dispositivoroosevelt", {dispositivo: resultado, id : result});
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
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	modelroosevelt.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);

		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelroosevelt.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelroosevelt.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/Roosevelt/fugulinroosevelt", {fugulin: resultado, id : result });
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelroosevelt.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelroosevelt.updatefugulinstatus(json[0].idfugulin, function(error, resulta){
						modelroosevelt.buscarfugulin(unidade, function(error, resultado){
							res.render("kaban/Roosevelt/fugulinroosevelt", {fugulin: resultado, id : result});
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
	var unidade = 'Roosevelt';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	modelroosevelt.buscartissdataid(idpaciente, unidade, function(error, resultados){
		var string=JSON.stringify(resultados);
		var json =  JSON.parse(string);
	
		if(json[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelroosevelt.updatetiss(idpaciente, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelroosevelt.buscartiss(unidade, function(error, resultado){
							res.render("kaban/Roosevelt/tissroosevelt", {tiss: resultado, id : result });
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelroosevelt.addtiss(idpaciente, setor, nome, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss ,data,unidade,  function(error, resulta){
					modelroosevelt.updatetissstatus(json[0].idtiss, function(error, resulta){
						modelroosevelt.buscartiss(unidade, function(error, resultado){
							res.render("kaban/Roosevelt/tissroosevelt", {tiss: resultado, id : result});
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
	var unidade = 'Roosevelt';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	modelroosevelt.buscardispositivoporid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].covid == 'false'){
			modelroosevelt.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
				var string=JSON.stringify(resultados);
				var json =  JSON.parse(string);
				if(json[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelroosevelt.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
							modelroosevelt.buscarnews(unidade, function(error, resultado){
									res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result });
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelroosevelt.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
							modelroosevelt.updatenewsstatus(json[0].idnews, function(error, resulta){
								modelroosevelt.buscarnews(unidade, function(error, resultado){
										res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result });
								});
							});	
						});
					});	
				}
			})
		}
		else{
			modelcovidroosevelt.buscarpacientepornome( nome, function(error, idcovid){
				modelroosevelt.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
					var string=JSON.stringify(resultados);
					var json =  JSON.parse(string);
					if(json[0].dataatualizacao == null){
						modeladmin.buscarusuarioporid(id, function(error, result){	
							modelroosevelt.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
								modelcovidroosevelt.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
									modelroosevelt.buscarnews(unidade, function(error, resultado){
											res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result });
									});
								});
							});
						});	
					}else{
						modeladmin.buscarusuarioeditavel(id, function(error, result){	
							modelroosevelt.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
								modelroosevelt.updatenewsstatus(json[0].idnews, function(error, resulta){
									modelcovidroosevelt.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
										modelroosevelt.buscarnews(unidade, function(error, resultado){
												res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result });
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

	var dieta =  req.body.dieta2;
	var dataexame = req.body.dataexame;
	var data = req.body.data;
	var baixa = "Erro na inserção Kaban";
	var exame = req.body.exame4;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'Roosevelt';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);

	modelroosevelt.buscarpacienteporid(idpaciente, function(error, idpac){
	modelcovidroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
		modelmentalroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				if(covid == 'true' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidroosevelt.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmentalroosevelt.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmentalroosevelt.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelroosevelt.buscardispositivo(unidade, function(error, result){
													modelroosevelt.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmentalroosevelt.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelroosevelt.buscardispositivo(unidade, function(error, result){
												modelroosevelt.buscarpaciente(unidade, function(error, resultado){
													res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidroosevelt.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelroosevelt.buscardispositivo(unidade, function(error, result){
													modelroosevelt.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelroosevelt.buscardispositivo(unidade, function(error, result){
													modelroosevelt.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelroosevelt.buscardispositivo(unidade, function(error, result){
													modelroosevelt.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelroosevelt.buscardispositivo(unidade, function(error, result){
													modelroosevelt.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidroosevelt.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelroosevelt.buscardispositivo(unidade, function(error, result){
													modelroosevelt.buscarpaciente(unidade, function(error, resultado){
														res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidroosevelt.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidroosevelt.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
						modelroosevelt.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelroosevelt.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelroosevelt.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelroosevelt.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelroosevelt.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelroosevelt.buscardispositivo(unidade, function(error, result){
														modelroosevelt.buscarpaciente(unidade, function(error, resultado){
															res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados, dispositivo: result});
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
	var destino = req.body.destino2;
	var alta = req.body.alta2;
	var data = req.body.data;
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);
	var modelmentalroosevelt = new application.app.model.mentalurgencia.modelmentalroosevelt(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	modelroosevelt.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
	modelroosevelt.buscarleitosid(setoresrecuperado, function(error, idleito){
		if(setoresrecuperado[0].leito == "Maca"){	
			modeladmingestao.updateleitosrooseveltmaca(setoresrecuperado[0].setor, function(error, resulta){
	modelroosevelt.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			modelmentalroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idmental){
				if(idpac[0].mental == 'true'){
					if(idpac[0].covid == 'true'){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
											modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
												modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
													modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
														modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
															modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																
			
																	modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
							modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
									modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
										modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
											modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
												modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
													modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
														modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
															
																
																modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
							modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
									modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
										modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
											modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
												modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
													modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
														
															
															modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																	res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
							modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
										modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
											modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
												modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
													modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
														modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
															
														
																modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
	modeladmingestao.updateleitosrooseveltcama(setoresrecuperado[0].setor, function(error, resulta){
		modelroosevelt.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
												modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
													modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
														modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
															modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
																modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																	
				
																		modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																				res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
											modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
												modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
													modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
														modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
															modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																
																	
																	modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
										modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
											modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
												modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
													modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
														modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
															
																
																modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
											modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
												modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
													modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
														modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
															modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																
															
																	modelroosevelt.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																			res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
		
		modelroosevelt.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
												modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
													modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
														modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
															modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
																modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																		res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalroosevelt.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
											modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
												modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
													modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
														modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
															modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																	res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
										modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
											modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
												modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
													modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
														modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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
								modelroosevelt.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidroosevelt.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelroosevelt.baixadispositivo(idpaciente,baixa, function(error, result){
											modelroosevelt.baixatiss(idpaciente,baixa, function(error, result){
												modelroosevelt.baixanews(idpaciente,baixa, function(error, result){
													modelroosevelt.baixafugulin(idpaciente,baixa, function(error, result){
														modelroosevelt.baixacentral(idpaciente,baixa, function(error, result){
															modelroosevelt.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelroosevelt.buscarpaciente(unidade, function(error, resultado){
																	res.render("kaban/Roosevelt/kabanpacienteroosevelt", {paciente : resultado, id : resultados});
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

module.exports.updatedispositivokabanroosevelt= function(application, req, res){
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
	var unidade = 'Roosevelt';
	var profissional = "Enfermeiro";
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);

	modelroosevelt.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			if(idpac[0].covid == 'true'){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelroosevelt.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
						modelcovidroosevelt.updaterespkaban(idcovid[0].id_paciente,glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
							modelroosevelt.buscardispositivo(unidade, function(error, resultado){
									res.render("kaban/Roosevelt/dispositivoroosevelt", {dispositivo: resultado, id : result });
							});
						});
					});
				});	
			}
			else{
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelroosevelt.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
						modelroosevelt.buscardispositivo(unidade, function(error, resultado){
								res.render("kaban/Roosevelt/dispositivoroosevelt", {dispositivo: resultado, id : result });
						});	
					});
				});	
			}
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
	var unidade = 'Roosevelt';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updatefugulindados(idpaciente,data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelroosevelt.buscarfugulin(unidade, function(error, resultado){
				res.render("kaban/Roosevelt/fugulinroosevelt", {fugulin : resultado, id : resultados});
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
	var unidade = 'Roosevelt';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var modelcovidroosevelt = new application.app.model.regulacao.modelroosevelt(application);

	modelroosevelt.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidroosevelt.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			if(idpac[0].covid == 'true'){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelroosevelt.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelcovidroosevelt.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
							modelroosevelt.buscarnews(unidade, function(error, resultado){
									res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result });
							});
						});
					});
				});	
			}
			else{
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelroosevelt.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelroosevelt.buscarnews(unidade, function(error, resultado){
								res.render("kaban/Roosevelt/newskabanroosevelt", {news: resultado, id : result });
						});
					});
				});	
			}
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
	var unidade = 'Roosevelt';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelroosevelt.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelroosevelt.buscartiss(unidade, function(error, resultado){
				res.render("kaban/Roosevelt/tissroosevelt", {tiss : resultado, id : resultados});
			});
		});
	});	
}

module.exports.infouairoosevelt= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelroosevelt = new application.app.model.kaban.Roosevelt.modelroosevelt(application);
	var unidade = 'Roosevelt';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelroosevelt.buscarinternacaodiaroosevelt(unidade, function(error, inter){
			modelroosevelt.buscarevasaoroosevelt(unidade, function(error, evasao){
				modelroosevelt.buscarobitoroosevelt(unidade, function(error, obito){
					modelroosevelt.buscartransferenciaroosevelt(unidade, function(error, transf){
						modelroosevelt.buscarobservacaoroosevelt(unidade, function(error, obser){
							modelroosevelt.buscaraltaroosevelt(unidade, function(error, alta){
								modelroosevelt.buscarcirurgicoroosevelt(unidade, function(error, cirur){
									modelroosevelt.buscarpsquiatriaroosevelt(unidade, function(error, psq){
										modelroosevelt.buscarpediatriaroosevelt(unidade, function(error, ped){
											modelroosevelt.buscartraumatologiaroosevelt(unidade, function(error, tto){
												modelroosevelt.buscarclinicoroosevelt(unidade, function(error, clinico){
													modelroosevelt.buscarsetoresroosevelt(function(error, setor){
														modelroosevelt.buscarbanhomanharoosevelt(function(error, manha){
															modelroosevelt.buscarbanhotarderoosevelt(function(error, tarde){
																modelroosevelt.buscarbanhonoiteroosevelt(function(error, noite){
																	res.render("kaban/Roosevelt/infouairoosevelt", {inter : inter,
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
