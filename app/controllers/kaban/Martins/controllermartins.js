<<<<<<< HEAD
module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var unidade = 'Martins';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Martins/kabanpacientemartins", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexamemartins= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Martins';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelmartins.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelmartins.buscarpaciente(unidade, function(error, resultado){
					res.redirect("/kabanpacientemartins?id=" + result[0].id_usuario);	
				});
			});	
		});
}

module.exports.calendariomartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var unidade = 'Martins';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Martins/calendariomartins" ,{id : result});
	});	
}

module.exports.addexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/addexamemartins", {id : result, paciente: resultado});
		});
	});
}

module.exports.examemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var unidade = 'Martins';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarexames(function(error, resultado){
			res.render("kaban/Martins/examemartins", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelmartins.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Martins/editexamemartins", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelmartins.deleteexamemartins(idevento.id, function(error, resultado){
			modelmartins.buscarpaciente(unidade, function(error, resultado){
				res.redirect("/kabanpacientemartins?id=" + result[0].id_usuario);	
			});
		});
	});	
}

module.exports.montarcalendariomartins= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modelmartins.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.updateexamemartins(idevento, title, start, paciente, end,  function(error, resultado){
			modelmartins.buscarexames(function(error, resultado){
				res.redirect("/examemartins?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitomartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor2;
	var leito = req.body.leito2;
	var acomodacao = req.body.acomodacao2;
	var id = req.body.idusuario;
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelmartins.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(setoresrecuperado[0].acomodacao == null){
				modelmartins.atualizarleitokaban(idpaciente, setor, leito, acomodacao,  function(error, resultado){
					modelmartins.buscarsetoresid(setor, function(error, resultado){
						modelmartins.buscarleitoativo(resultado,leito, function(error, idleitos){
							modelmartins.updateleitos(idleitos, function(error, resultado){
								modelmartins.buscarleitospacientes(function(error, resultadosetores){
									if(acomodacao == "Maca"){
										modeladmingestao.updateleitosmartinsmacamais(setor, function(error, resulta){
											res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
										});
									}else{
										modeladmingestao.updateleitosmartinscamamais(setor, function(error, resulta){
											res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
										});
									}
								});
							});
						});
					});
				});
			}
			if(setoresrecuperado[0].acomodacao == "Cama"){
				modelmartins.buscarleitosid(setoresrecuperado, function(error, idleito){
					modelmartins.atualizarleitokaban(idpaciente, setor, leito, acomodacao,  function(error, resultado){
						modelmartins.buscarsetoresid(setor, function(error, resultado){
							modelmartins.buscarleitoativo(resultado,leito, function(error, idleitos){
								modelmartins.updateleitos(idleitos, function(error, resultado){
									modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
										modelmartins.buscarleitospacientes(function(error, resultadosetores){
											if(acomodacao == "Maca"){
												modeladmingestao.updateleitosmartinsmacamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinscama(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}else{
												modeladmingestao.updateleitosmartinscamamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinscama(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}
										});
									});	
								});
							});
						});
					});
				});
			}
			if(setoresrecuperado[0].acomodacao == "Maca"){
				modelmartins.buscarleitosid(setoresrecuperado, function(error, idleito){
					modelmartins.atualizarleitokaban(idpaciente, setor, leito, acomodacao,  function(error, resultado){
						modelmartins.buscarsetoresid(setor, function(error, resultado){
							modelmartins.buscarleitoativo(resultado,leito, function(error, idleitos){
								modelmartins.updateleitos(idleitos, function(error, resultado){
									modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
										modelmartins.buscarleitospacientes(function(error, resultadosetores){
											if(acomodacao == "Maca"){
												modeladmingestao.updateleitosmartinsmacamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinsmaca(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}else{
												modeladmingestao.updateleitosmartinscamamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinsmaca(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}
										});
									});	
								});
							});
						});
					});
				});

			}
			
		});
	});
}	
	
module.exports.leitos= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarleitospacientes(function(error, resultadosetores){
			modelmartins.buscarsetores(function(error, resultadosetor){
				res.render("kaban/Martins/leitosmartins", {leito : resultadosetores,setor : resultadosetor, id : result});
			});
		});
	});	
}


module.exports.buscarleitos= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var valor = req.query;
	modelmartins.buscarleitos(valor, function(error, resultadoleito){
		res.send(resultadoleito);
	});
	
}


module.exports.buscaracomodacao= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var valorleito = req.query;
	modelmartins.buscaracomodacao(valorleito, function(error, resultadoacomodacao){
		res.send(resultadoacomodacao);
	});
	
}

module.exports.buscarsetor= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	
	modelmartins.buscarsetores(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.editfugulinmartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Martins/editfugulinmartins", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Martins/editkabandispositivomartins", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewsmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/editnewskabanmartins", {news: resultado, id : result});
		});
	});
}

module.exports.edittissmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/edittissmartins", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Martins/fugulinmartins", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newsmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Martins/newskabanmartins", {news: resultado, id : result});
		});
	});
}

module.exports.tissmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Martins/tissmartins", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Martins/relatorioadmkabanmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Martins/relatoriokabanmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitasmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Martins/relatoriovisitasmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietasmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			modelmartins.buscardieta1(unidade, function(error,dieta1){
				modelmartins.buscardieta2(unidade, function(error, dieta2){
					modelmartins.buscardieta3(unidade, function(error, dieta3){
						modelmartins.buscardieta4(unidade, function(error, dieta4){
							modelmartins.buscardieta5(unidade, function(error, dieta5){
								modelmartins.buscardieta6(unidade, function(error, dieta6){
									modelmartins.buscardieta7(unidade, function(error, dieta7){
										modelmartins.buscardieta8(unidade, function(error, dieta8){
											modelmartins.buscardieta9(unidade, function(error, dieta9){
												modelmartins.buscardieta10(unidade, function(error, dieta10){
													modelmartins.buscardieta11(unidade, function(error, dieta11){
														modelmartins.buscardieta12(unidade,function(error, dieta12){
															modelmartins.buscardieta13(unidade,function(error, dieta13){
																modelmartins.buscardieta14(unidade,function(error, dieta14){
																	modelmartins.buscardieta15(unidade,function(error, dieta15){
																		modelmartins.buscardieta16(unidade, function(error, dieta16){
																			modelmartins.buscardieta17(unidade, function(error, dieta17){
																				modelmartins.buscardieta18(unidade, function(error, dieta18){
																					modelmartins.buscardieta19(unidade, function(error, dieta19){
																						modelmartins.buscardieta20(unidade, function(error, dieta20){
																							modelmartins.buscardieta21(unidade, function(error, dieta21){
																								modelmartins.buscardieta22(unidade,function(error, dieta22){
																									modelmartins.buscardieta23(unidade,function(error, dieta23){
																										modelmartins.buscardieta24(unidade,function(error, dieta24){
																											modelmartins.buscardieta25(unidade,function(error, dieta25){
																												res.render("kaban/Martins/relatoriodietasmartins", {paciente: resultado, id : result,
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
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.historico(unidade, function(error, resultado){
			res.render("kaban/Martins/historicokabanmartins", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Martins/dispositivomartins", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Martins/addkabanpacientemartins", {id : result});
	});
}

module.exports.adddispositivomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Martins/adddispositivomartins", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Martins/addfugulinmartins", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtissmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Martins/addtissmartins", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewsmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Martins/addnewsmartins", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Martins';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/editkabanmartins", {paciente: resultado, id : result});
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
	var unidade = 'Martins';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);

	if(mental == 'true'){
		
		if(covid == 'true'){
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelmartins.cadastrarpaciente(paciente, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalmartins.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
							modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
								modelmartins.addfugulinid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
									modelmartins.addtissid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
										modelmartins.addnewsid(resultdoinsert.insertId,setor,paciente, unidade,function(error, results){
											modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
												modelmartins.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);					
												});
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
				modelmartins.cadastrarpaciente(paciente, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalmartins.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelmartins.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmartins.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelmartins.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelmartins.buscarpaciente(unidade, function(error, resultado){
												res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);					
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
				modelmartins.cadastrarpaciente(paciente, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelmartins.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelmartins.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmartins.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
										modelmartins.buscarpaciente(unidade, function(error, resultado){
											res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);				
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
				modelmartins.cadastrarpaciente(paciente, medico,  dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
						modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelmartins.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmartins.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelmartins.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelmartins.buscarpaciente(unidade, function(error, resultado){
												res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);					
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
	var unidade = 'Martins';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	modelmartins.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		if(resultadoscovid[0].covid == 'false'){
			modelmartins.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				if(resultados[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmartins.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelmartins.buscardispositivo(unidade, function(error, resultado){
								res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmartins.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelmartins.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
								modelmartins.buscardispositivo(unidade, function(error, resultado){
									res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
								});
							});	
						});
					});	
				}
			})
		
		}
		else{
			modelcovidmartins.buscarpacientepornome(nome, function(error, idcovid){
			modelmartins.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				if(resultados[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmartins.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidmartins.updaterespkaban(idcovid[0].id_paciente,svd, sne, avp, cvc, glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelmartins.buscardispositivo(unidade, function(error, resultado){
									res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
								});
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmartins.adddispositivo(idpaciente, glasgow, bic,nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidmartins.updaterespkaban(idcovid[0].id_paciente,svd, sne, avp, cvc, glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelmartins.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
									modelmartins.buscardispositivo(unidade, function(error, resultado){
										res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modelmartins.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmartins.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmartins.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinmartins?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmartins.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmartins.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelmartins.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	console.log(tiss);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modelmartins.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmartins.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelmartins.buscartiss(unidade, function(error, resultado){
						res.redirect("/tissmartins?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmartins.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelmartins.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelmartins.buscartiss(unidade, function(error, resultado){
							res.redirect("/tissmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	modelmartins.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		if(resultadoscovid[0].covid == 'false'){
			modelmartins.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
				if(resultados[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmartins.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
							modelmartins.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmartins.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
							modelmartins.updatenewsstatus(resultados[0].idnews, function(error, resulta){
								modelmartins.buscarnews(unidade, function(error, resultado){
									res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
								});
							});	
						});
					});	
				}
			})
		}
		else{
			modelcovidmartins.buscarpacientepornome( nome, function(error, idcovid){
				modelmartins.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
					if(resultados[0].dataatualizacao == null){
						modeladmin.buscarusuarioporid(id, function(error, result){	
							modelmartins.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
								modelcovidmartins.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
									modelmartins.buscarnews(unidade, function(error, resultado){
										res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
									});
								});
							});
						});	
					}else{
						modeladmin.buscarusuarioeditavel(id, function(error, result){	
							modelmartins.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
								modelmartins.updatenewsstatus(resultados[0].idnews, function(error, resulta){
									modelcovidmartins.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
										modelmartins.buscarnews(unidade, function(error, resultado){
											res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);

	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
	modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
		modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				if(covid == 'true' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmartins.update(idpaciente, medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);		
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelmartins.buscardispositivo(unidade, function(error, result){
												modelmartins.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
	var unidade = 'Martins';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	modelmartins.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
	modelmartins.buscarleitosid(setoresrecuperado, function(error, idleito){
		if(setoresrecuperado[0].acomodacao == "Maca"){	
			modeladmingestao.updateleitosmartinsmaca(setoresrecuperado[0].setor, function(error, resulta){
	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){
				if(idpac[0].mental == 'true'){
					if(idpac[0].covid == 'true'){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelmartins.baixa(iidpaciente,baixa, destino, alta,data, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																
			
																	modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmartins.buscarpaciente(unidade, function(error, resultado){
																			res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																		});
																	});
																	
															});
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
							modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															
																
																modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
																});
																
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
							modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
									modelmartins.baixatiss(idpaciente,baixa, function(error, result){
										modelmartins.baixanews(idpaciente,baixa, function(error, result){
											modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
												modelmartins.baixacentral(idpaciente,baixa, function(error, result){
													modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
														
															
															modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																modelmartins.buscarpaciente(unidade, function(error, resultado){
																	res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																});
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
							modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															
														
																modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
																});
																
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
}	if(setoresrecuperado[0].acomodacao == "Cama"){
	modeladmingestao.updateleitosmartinscama(setoresrecuperado[0].setor, function(error, resulta){
		modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
												modelmartins.baixatiss(idpaciente,baixa, function(error, result){
													modelmartins.baixanews(idpaciente,baixa, function(error, result){
														modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
															modelmartins.baixacentral(idpaciente,baixa, function(error, result){
																modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																	
				
																		modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelmartins.buscarpaciente(unidade, function(error, resultado){
																				res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																			});
																		});
																		
																});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																
																	
																	modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmartins.buscarpaciente(unidade, function(error, resultado){
																			res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																		});
																	});
																
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															
																
																modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																
															
																	modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmartins.buscarpaciente(unidade, function(error, resultado){
																			res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																		});
																	});
																	
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
	if(setoresrecuperado[0].acomodacao == null){
		
		modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
												modelmartins.baixatiss(idpaciente,baixa, function(error, result){
													modelmartins.baixanews(idpaciente,baixa, function(error, result){
														modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
															modelmartins.baixacentral(idpaciente,baixa, function(error, result){
																modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
																});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmartins.buscarpaciente(unidade, function(error, resultado){
																	res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelmartins.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmartins.buscarpaciente(unidade, function(error, resultado){
																	res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																});
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

module.exports.updatedispositivokabanmartins= function(application, req, res){
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
	var unidade = 'Martins';
	var profissional = "Enfermeiro";
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			if(idpac[0].covid == 'true'){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
						modelcovidmartins.updaterespkaban(idcovid[0].id_paciente,vglasgow, bic,azaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
							modelmartins.buscardispositivo(unidade, function(error, resultado){
								res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
							});
						});
					});
				});	
			}
			else{
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
						modelmartins.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmartins.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelmartins.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulinmartins?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Martins';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);

	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			if(idpac[0].covid == 'true'){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelcovidmartins.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
							modelmartins.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
							});
						});
					});
				});	
			}
			else{
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelmartins.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmartins.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelmartins.buscartiss(unidade, function(error, resultado){
				res.redirect("/tissmartins?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaimartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var unidade = 'Martins';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarinternacaodiamartins(unidade, function(error, inter){
			modelmartins.buscarevasaomartins(unidade, function(error, evasao){
				modelmartins.buscarobitomartins(unidade, function(error, obito){
					modelmartins.buscartransferenciamartins(unidade, function(error, transf){
						modelmartins.buscarobservacaomartins(unidade, function(error, obser){
							modelmartins.buscaraltamartins(unidade, function(error, alta){
								modelmartins.buscarcirurgicomartins(unidade, function(error, cirur){
									modelmartins.buscarpsquiatriamartins(unidade, function(error, psq){
										modelmartins.buscarpediatriamartins(unidade, function(error, ped){
											modelmartins.buscartraumatologiamartins(unidade, function(error, tto){
												modelmartins.buscarclinicomartins(unidade, function(error, clinico){
													modelmartins.buscarsetoresmartins(function(error, setor){
														modelmartins.buscarbanhomanhamartins(function(error, manha){
															modelmartins.buscarbanhotardemartins(function(error, tarde){
																modelmartins.buscarbanhonoitemartins(function(error, noite){
																	modelmartins.buscartransfegomartins(function(error, obst){
																		modelmartins.buscargomartins(unidade, function(error, obstint){
																	res.render("kaban/Martins/infouaimartins", {inter : inter,
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
																		obst : obst,
																		obstint : obstint,
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
		});
	});
}


=======
module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var unidade = 'Martins';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Martins/kabanpacientemartins", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexamemartins= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Martins';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelmartins.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelmartins.buscarpaciente(unidade, function(error, resultado){
					res.redirect("/kabanpacientemartins?id=" + result[0].id_usuario);	
				});
			});	
		});
}

module.exports.calendariomartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var unidade = 'Martins';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Martins/calendariomartins" ,{id : result});
	});	
}

module.exports.addexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/addexamemartins", {id : result, paciente: resultado});
		});
	});
}

module.exports.examemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var unidade = 'Martins';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarexames(function(error, resultado){
			res.render("kaban/Martins/examemartins", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelmartins.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Martins/editexamemartins", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelmartins.deleteexamemartins(idevento.id, function(error, resultado){
			modelmartins.buscarpaciente(unidade, function(error, resultado){
				res.redirect("/kabanpacientemartins?id=" + result[0].id_usuario);	
			});
		});
	});	
}

module.exports.montarcalendariomartins= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modelmartins.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexamemartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.updateexamemartins(idevento, title, start, paciente, end,  function(error, resultado){
			modelmartins.buscarexames(function(error, resultado){
				res.redirect("/examemartins?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitomartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);

	var idpaciente = req.body.idpaciente;
	var setor = req.body.setor2;
	var leito = req.body.leito2;
	var acomodacao = req.body.acomodacao2;
	var id = req.body.idusuario;
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelmartins.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(setoresrecuperado[0].acomodacao == null){
				modelmartins.atualizarleitokaban(idpaciente, setor, leito, acomodacao,  function(error, resultado){
					modelmartins.buscarsetoresid(setor, function(error, resultado){
						modelmartins.buscarleitoativo(resultado,leito, function(error, idleitos){
							modelmartins.updateleitos(idleitos, function(error, resultado){
								modelmartins.buscarleitospacientes(function(error, resultadosetores){
									if(acomodacao == "Maca"){
										modeladmingestao.updateleitosmartinsmacamais(setor, function(error, resulta){
											res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
										});
									}else{
										modeladmingestao.updateleitosmartinscamamais(setor, function(error, resulta){
											res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
										});
									}
								});
							});
						});
					});
				});
			}
			if(setoresrecuperado[0].acomodacao == "Cama"){
				modelmartins.buscarleitosid(setoresrecuperado, function(error, idleito){
					modelmartins.atualizarleitokaban(idpaciente, setor, leito, acomodacao,  function(error, resultado){
						modelmartins.buscarsetoresid(setor, function(error, resultado){
							modelmartins.buscarleitoativo(resultado,leito, function(error, idleitos){
								modelmartins.updateleitos(idleitos, function(error, resultado){
									modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
										modelmartins.buscarleitospacientes(function(error, resultadosetores){
											if(acomodacao == "Maca"){
												modeladmingestao.updateleitosmartinsmacamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinscama(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}else{
												modeladmingestao.updateleitosmartinscamamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinscama(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}
										});
									});	
								});
							});
						});
					});
				});
			}
			if(setoresrecuperado[0].acomodacao == "Maca"){
				modelmartins.buscarleitosid(setoresrecuperado, function(error, idleito){
					modelmartins.atualizarleitokaban(idpaciente, setor, leito, acomodacao,  function(error, resultado){
						modelmartins.buscarsetoresid(setor, function(error, resultado){
							modelmartins.buscarleitoativo(resultado,leito, function(error, idleitos){
								modelmartins.updateleitos(idleitos, function(error, resultado){
									modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
										modelmartins.buscarleitospacientes(function(error, resultadosetores){
											if(acomodacao == "Maca"){
												modeladmingestao.updateleitosmartinsmacamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinsmaca(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}else{
												modeladmingestao.updateleitosmartinscamamais(setor, function(error, resulta){
													modeladmingestao.updateleitosmartinsmaca(setoresrecuperado[0].setor, function(error, resulta){
														res.redirect("/leitosmartins?id=" + result[0].id_usuario);	
													});
												});
											}
										});
									});	
								});
							});
						});
					});
				});

			}
			
		});
	});
}	
	
module.exports.leitos= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarleitospacientes(function(error, resultadosetores){
			modelmartins.buscarsetores(function(error, resultadosetor){
				res.render("kaban/Martins/leitosmartins", {leito : resultadosetores,setor : resultadosetor, id : result});
			});
		});
	});	
}


module.exports.buscarleitos= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var valor = req.query;
	modelmartins.buscarleitos(valor, function(error, resultadoleito){
		res.send(resultadoleito);
	});
	
}


module.exports.buscaracomodacao= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var valorleito = req.query;
	modelmartins.buscaracomodacao(valorleito, function(error, resultadoacomodacao){
		res.send(resultadoacomodacao);
	});
	
}

module.exports.buscarsetor= function(application, req, res){
	
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	
	modelmartins.buscarsetores(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.editfugulinmartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Martins/editfugulinmartins", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Martins/editkabandispositivomartins", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewsmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/editnewskabanmartins", {news: resultado, id : result});
		});
	});
}

module.exports.edittissmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/edittissmartins", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Martins/fugulinmartins", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newsmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Martins/newskabanmartins", {news: resultado, id : result});
		});
	});
}

module.exports.tissmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Martins/tissmartins", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Martins/relatorioadmkabanmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Martins/relatoriokabanmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitasmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Martins/relatoriovisitasmartins", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietasmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarpacienterelatorio(unidade, function(error, resultado){
			modelmartins.buscardieta1(unidade, function(error,dieta1){
				modelmartins.buscardieta2(unidade, function(error, dieta2){
					modelmartins.buscardieta3(unidade, function(error, dieta3){
						modelmartins.buscardieta4(unidade, function(error, dieta4){
							modelmartins.buscardieta5(unidade, function(error, dieta5){
								modelmartins.buscardieta6(unidade, function(error, dieta6){
									modelmartins.buscardieta7(unidade, function(error, dieta7){
										modelmartins.buscardieta8(unidade, function(error, dieta8){
											modelmartins.buscardieta9(unidade, function(error, dieta9){
												modelmartins.buscardieta10(unidade, function(error, dieta10){
													modelmartins.buscardieta11(unidade, function(error, dieta11){
														modelmartins.buscardieta12(unidade,function(error, dieta12){
															modelmartins.buscardieta13(unidade,function(error, dieta13){
																modelmartins.buscardieta14(unidade,function(error, dieta14){
																	modelmartins.buscardieta15(unidade,function(error, dieta15){
																		modelmartins.buscardieta16(unidade, function(error, dieta16){
																			modelmartins.buscardieta17(unidade, function(error, dieta17){
																				modelmartins.buscardieta18(unidade, function(error, dieta18){
																					modelmartins.buscardieta19(unidade, function(error, dieta19){
																						modelmartins.buscardieta20(unidade, function(error, dieta20){
																							modelmartins.buscardieta21(unidade, function(error, dieta21){
																								modelmartins.buscardieta22(unidade,function(error, dieta22){
																									modelmartins.buscardieta23(unidade,function(error, dieta23){
																										modelmartins.buscardieta24(unidade,function(error, dieta24){
																											modelmartins.buscardieta25(unidade,function(error, dieta25){
																												res.render("kaban/Martins/relatoriodietasmartins", {paciente: resultado, id : result,
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
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.historico(unidade, function(error, resultado){
			res.render("kaban/Martins/historicokabanmartins", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Martins/dispositivomartins", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Martins/addkabanpacientemartins", {id : result});
	});
}

module.exports.adddispositivomartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Martins/adddispositivomartins", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Martins/addfugulinmartins", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtissmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Martins/addtissmartins", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewsmartins = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	

	var id = req.query;
	var unidade = 'Martins';
	modeladmin.buscarusuario(id, function(error,result){
		modelmartins.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Martins/addnewsmartins", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Martins';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelmartins.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Martins/editkabanmartins", {paciente: resultado, id : result});
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
	var unidade = 'Martins';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);

	if(mental == 'true'){
		
		if(covid == 'true'){
		
			modeladmin.buscarusuarioporid(id, function(error, resultados){
				modelmartins.cadastrarpaciente(paciente, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalmartins.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
							modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
								modelmartins.addfugulinid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
									modelmartins.addtissid(resultdoinsert.insertId,setor,paciente,unidade, function(error, results){
										modelmartins.addnewsid(resultdoinsert.insertId,setor,paciente, unidade,function(error, results){
											modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
												modelmartins.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);					
												});
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
				modelmartins.cadastrarpaciente(paciente, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmentalmartins.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
						modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelmartins.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmartins.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelmartins.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelmartins.buscarpaciente(unidade, function(error, resultado){
												res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);					
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
				modelmartins.cadastrarpaciente(paciente, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelmartins.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelmartins.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmartins.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
										modelmartins.buscarpaciente(unidade, function(error, resultado){
											res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);				
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
				modelmartins.cadastrarpaciente(paciente, medico,  dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
					modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
						modelmartins.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
							modelmartins.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmartins.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
									modelmartins.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
										modelmartins.addcentralid(resultdoinsert.insertId,paciente, unidade,function(error, results){
											modelmartins.buscarpaciente(unidade, function(error, resultado){
												res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);					
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
	var unidade = 'Martins';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	modelmartins.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		if(resultadoscovid[0].covid == 'false'){
			modelmartins.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				if(resultados[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmartins.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelmartins.buscardispositivo(unidade, function(error, resultado){
								res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmartins.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelmartins.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
								modelmartins.buscardispositivo(unidade, function(error, resultado){
									res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
								});
							});	
						});
					});	
				}
			})
		
		}
		else{
			modelcovidmartins.buscarpacientepornome(nome, function(error, idcovid){
			modelmartins.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
				if(resultados[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmartins.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidmartins.updaterespkaban(idcovid[0].id_paciente,svd, sne, avp, cvc, glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelmartins.buscardispositivo(unidade, function(error, resultado){
									res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
								});
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmartins.adddispositivo(idpaciente, glasgow, bic,nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
							modelcovidmartins.updaterespkaban(idcovid[0].id_paciente,svd, sne, avp, cvc, glasgow, bic,vazaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
								modelmartins.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
									modelmartins.buscardispositivo(unidade, function(error, resultado){
										res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modelmartins.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmartins.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmartins.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinmartins?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmartins.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmartins.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelmartins.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	console.log(tiss);
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modelmartins.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmartins.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelmartins.buscartiss(unidade, function(error, resultado){
						res.redirect("/tissmartins?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmartins.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelmartins.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelmartins.buscartiss(unidade, function(error, resultado){
							res.redirect("/tissmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	modelmartins.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		if(resultadoscovid[0].covid == 'false'){
			modelmartins.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
				if(resultados[0].dataatualizacao == null){
					modeladmin.buscarusuarioporid(id, function(error, result){	
						modelmartins.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
							modelmartins.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
							});
						});
					});	
				}else{
					modeladmin.buscarusuarioeditavel(id, function(error, result){	
						modelmartins.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
							modelmartins.updatenewsstatus(resultados[0].idnews, function(error, resulta){
								modelmartins.buscarnews(unidade, function(error, resultado){
									res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
								});
							});	
						});
					});	
				}
			})
		}
		else{
			modelcovidmartins.buscarpacientepornome( nome, function(error, idcovid){
				modelmartins.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
					if(resultados[0].dataatualizacao == null){
						modeladmin.buscarusuarioporid(id, function(error, result){	
							modelmartins.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
								modelcovidmartins.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
									modelmartins.buscarnews(unidade, function(error, resultado){
										res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
									});
								});
							});
						});	
					}else{
						modeladmin.buscarusuarioeditavel(id, function(error, result){	
							modelmartins.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
								modelmartins.updatenewsstatus(resultados[0].idnews, function(error, resulta){
									modelcovidmartins.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
										modelmartins.buscarnews(unidade, function(error, resultado){
											res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);

	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
	modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
		modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				if(covid == 'true' && idpac[0].covid == "true"){
					modeladmin.buscarusuarioporid(id, function(error, resultados){	
						modelmartins.update(idpaciente, medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);		
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid, setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmentalmartins.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelmartins.buscardispositivo(unidade, function(error, result){
												modelmartins.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmartins.buscardispositivo(unidade, function(error, result){
													modelmartins.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmartins.update(idcovid[0].id_paciente,dataexame, susfacil,prt,paciente, setor, idade, exame,paliativo, ecf,svd, sne, avp,cvc,spict,  function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmartins.cadastrarpaciente(dataexame, susfacil, prt, paciente,setor, idade,exame, unidade,paliativo,ecf,svd, sne, avp,cvc, spict,da, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
						modelmartins.update(idpaciente,medico, dieta, dataexame, exame, mental, referencia, covid,  setor, paciente,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
							modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmartins.updatetissnome(idpaciente,paciente,setor,  function(error, result){
										modelmartins.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
											modelmartins.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
												modelmartins.updatedispositivonome(idpaciente,paciente,  function(error, result){
													modelmartins.buscardispositivo(unidade, function(error, result){
														modelmartins.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
														});
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
	var unidade = 'Martins';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	var modelmentalmartins = new application.app.model.mentalurgencia.modelmentalmartins(application);
	var modeladmingestao = new application.app.model.gestao.modeladmingestao(application);
	modelmartins.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
	modelmartins.buscarleitosid(setoresrecuperado, function(error, idleito){
		if(setoresrecuperado[0].acomodacao == "Maca"){	
			modeladmingestao.updateleitosmartinsmaca(setoresrecuperado[0].setor, function(error, resulta){
	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){
				if(idpac[0].mental == 'true'){
					if(idpac[0].covid == 'true'){
						modeladmin.buscarusuarioporid(id, function(error, resultados){
							modelmartins.baixa(iidpaciente,baixa, destino, alta,data, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																
			
																	modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmartins.buscarpaciente(unidade, function(error, resultado){
																			res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																		});
																	});
																	
															});
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
							modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															
																
																modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
																});
																
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
							modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
									modelmartins.baixatiss(idpaciente,baixa, function(error, result){
										modelmartins.baixanews(idpaciente,baixa, function(error, result){
											modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
												modelmartins.baixacentral(idpaciente,baixa, function(error, result){
													modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
														
															
															modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																modelmartins.buscarpaciente(unidade, function(error, resultado){
																	res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																});
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
							modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
								modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															
														
																modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
																});
																
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
}	if(setoresrecuperado[0].acomodacao == "Cama"){
	modeladmingestao.updateleitosmartinscama(setoresrecuperado[0].setor, function(error, resulta){
		modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
												modelmartins.baixatiss(idpaciente,baixa, function(error, result){
													modelmartins.baixanews(idpaciente,baixa, function(error, result){
														modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
															modelmartins.baixacentral(idpaciente,baixa, function(error, result){
																modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																	
				
																		modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																			modelmartins.buscarpaciente(unidade, function(error, resultado){
																				res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																			});
																		});
																		
																});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																
																	
																	modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmartins.buscarpaciente(unidade, function(error, resultado){
																			res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																		});
																	});
																
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															
																
																modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																
															
																	modelmartins.updateleitosativo(idleito[0].idleito, function(error, resultado){
																		modelmartins.buscarpaciente(unidade, function(error, resultado){
																			res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																		});
																	});
																	
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
	if(setoresrecuperado[0].acomodacao == null){
		
		modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
			modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
				modelmentalmartins.buscarpacientepornome(idpac[0].nome, function(error, idmental){
					if(idpac[0].mental == 'true'){
						if(idpac[0].covid == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
											modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
												modelmartins.baixatiss(idpaciente,baixa, function(error, result){
													modelmartins.baixanews(idpaciente,baixa, function(error, result){
														modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
															modelmartins.baixacentral(idpaciente,baixa, function(error, result){
																modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																	modelmartins.buscarpaciente(unidade, function(error, resultado){
																		res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																	});
																});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalmartins.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmartins.buscarpaciente(unidade, function(error, resultado){
																	res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																});
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmartins.baixatiss(idpaciente,baixa, function(error, result){
											modelmartins.baixanews(idpaciente,baixa, function(error, result){
												modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
													modelmartins.baixacentral(idpaciente,baixa, function(error, result){
														modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
															modelmartins.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
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
								modelmartins.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelcovidmartins.baixa(idcovid[0].id_paciente,baixa,data, function(error, result){
										modelmartins.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmartins.baixatiss(idpaciente,baixa, function(error, result){
												modelmartins.baixanews(idpaciente,baixa, function(error, result){
													modelmartins.baixafugulin(idpaciente,baixa, function(error, result){
														modelmartins.baixacentral(idpaciente,baixa, function(error, result){
															modelmartins.buscarleitospacientespornome(idpaciente, function(error, nome){
																modelmartins.buscarpaciente(unidade, function(error, resultado){
																	res.redirect("/kabanpacientemartins?id=" + resultados[0].id_usuario);	
																});
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

module.exports.updatedispositivokabanmartins= function(application, req, res){
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
	var unidade = 'Martins';
	var profissional = "Enfermeiro";
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);
	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			if(idpac[0].covid == 'true'){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
						modelcovidmartins.updaterespkaban(idcovid[0].id_paciente,vglasgow, bic,azaoDormonid,vazaoFentanil,vazaoRocuronio,vazaoPropofol,vazaonora,vazaoadre,vazaobica, profissional, dispositivoventilatorio,fluxoo2, drogas, fio2, peep, sedacao,nora, adre,bica,dormonid3,fentanil3,rocuronio3,propofol3,  function(error, resulta){
							modelmartins.buscardispositivo(unidade, function(error, resultado){
								res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
							});
						});
					});
				});	
			}
			else{
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
						modelmartins.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivomartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmartins.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelmartins.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulinmartins?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Martins';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var modelcovidmartins = new application.app.model.regulacao.modelmartins(application);

	modelmartins.buscarpacienteporid(idpaciente, function(error, idpac){
		modelcovidmartins.buscarpacientepornome(idpac[0].nome, function(error, idcovid){	
			if(idpac[0].covid == 'true'){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelcovidmartins.updatenews(idcovid[0].id_paciente,news,horasreg, datareg, fr, sat, temp, o2, sistolica, fc, alerta, function(error, resulta){
							modelmartins.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
							});
						});
					});
				});	
			}
			else{
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmartins.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelmartins.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabanmartins?id=" + result[0].id_usuario);	
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
	var unidade = 'Martins';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmartins.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelmartins.buscartiss(unidade, function(error, resultado){
				res.redirect("/tissmartins?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaimartins= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmartins = new application.app.model.kaban.Martins.modelmartins(application);
	var unidade = 'Martins';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmartins.buscarinternacaodiamartins(unidade, function(error, inter){
			modelmartins.buscarevasaomartins(unidade, function(error, evasao){
				modelmartins.buscarobitomartins(unidade, function(error, obito){
					modelmartins.buscartransferenciamartins(unidade, function(error, transf){
						modelmartins.buscarobservacaomartins(unidade, function(error, obser){
							modelmartins.buscaraltamartins(unidade, function(error, alta){
								modelmartins.buscarcirurgicomartins(unidade, function(error, cirur){
									modelmartins.buscarpsquiatriamartins(unidade, function(error, psq){
										modelmartins.buscarpediatriamartins(unidade, function(error, ped){
											modelmartins.buscartraumatologiamartins(unidade, function(error, tto){
												modelmartins.buscarclinicomartins(unidade, function(error, clinico){
													modelmartins.buscarsetoresmartins(function(error, setor){
														modelmartins.buscarbanhomanhamartins(function(error, manha){
															modelmartins.buscarbanhotardemartins(function(error, tarde){
																modelmartins.buscarbanhonoitemartins(function(error, noite){
																	modelmartins.buscartransfegomartins(function(error, obst){
																		modelmartins.buscargomartins(unidade, function(error, obstint){
																	res.render("kaban/Martins/infouaimartins", {inter : inter,
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
																		obst : obst,
																		obstint : obstint,
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
		});
	});
}


>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
			