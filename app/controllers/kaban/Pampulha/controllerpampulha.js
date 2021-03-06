module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Pampulha/kabanpacientepampulha", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatoriopendencias= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatoriopendenciaspampulha", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatorioplanoalta= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatorioplanoaltapampulha", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatoriocovidpampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarpacienterelatoriocovid(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatoriocovidpampulha", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriomentalpampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarpacienterelatoriomental(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatoriomentalpampulha", {paciente : resultado, id : result});
		});
	});	
}


module.exports.saveexamepampulha= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Pampulha';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelpampulha.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelpampulha.buscarpaciente(unidade, function(error, resultado){
					res.redirect("/kabanpacientepampulha?id=" + result[0].id_usuario);	
				});
			});	
		});
}

module.exports.calendariopampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Pampulha/calendariopampulha" ,{id : result});
	});	
}

module.exports.addexamepampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Pampulha/addexamepampulha", {id : result, paciente: resultado});
		});
	});
}

module.exports.examepampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var unidade = 'Pampulha';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarexames(function(error, resultado){
			res.render("kaban/Pampulha/examepampulha", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexamepampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelpampulha.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Pampulha/editexamepampulha", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexamepampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelpampulha.deleteexamepampulha(idevento.id, function(error, resultado){
			modelpampulha.buscarpaciente(unidade, function(error, resultado){
				res.redirect("/kabanpacientepampulha?id=" + result[0].id_usuario);	
			});
		});
	});	
}

module.exports.montarcalendariopampulha= function(application, req, res){
	
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	modelpampulha.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexamepampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.updateexamepampulha(idevento, title, start, paciente, end,  function(error, resultado){
			modelpampulha.buscarexames(function(error, resultado){
				res.redirect("/examepampulha?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitopampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var idleito = req.body.idleito;
	var id = req.body.idusuario;
	console.log(idleito)
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelpampulha.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(nome == "Remover"){
				console.log(nome)
				modelpampulha.mudarpacienteleito(idleito, function(error,resultado){
					modelpampulha.buscarleitospacientes(function(error, resultadosetores){
						res.redirect("/leitospampulha?id=" + result[0].id_usuario);
					});	
				})
			}
			else{
				if(setoresrecuperado == ""){
					modelpampulha.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
						modelpampulha.buscarleitospacientes(function(error, resultadosetores){
							res.redirect("/leitospampulha?id=" + result[0].id_usuario);
						});	
					});
				}
				else{
					modelpampulha.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
						modelpampulha.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
							modelpampulha.buscarleitospacientes(function(error, resultadosetores){
								res.redirect("/leitospampulha?id=" + result[0].id_usuario);
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
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarleitospacientes(function(error, resultadosetores){
			res.render("kaban/Pampulha/leitospampulha", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.cadastrarleitospampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.cadastrarleitospampulha(function(error, resultadosetores){
			res.render("kaban/Pampulha/cadastrarleitospampulha", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.buscarpacientespampulha= function(application, req, res){
	
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	
	modelpampulha.buscarpacientespampulha(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.buscaridpacientespampulha= function(application, req, res){
	
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	var valor = req.query;
	
	modelpampulha.buscarpacientesidpampulha(valor,function(error, resultadoid){
		res.send(resultadoid);
	});
	
}

module.exports.editfugulinpampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Pampulha/editfugulinpampulha", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivopampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Pampulha/editkabandispositivopampulha", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Pampulha/editnewskabanpampulha", {news: resultado, id : result});
		});
	});
}

module.exports.edittisspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Pampulha/edittisspampulha", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinpampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Pampulha/fugulinpampulha", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Pampulha/newskabanpampulha", {news: resultado, id : result});
		});
	});
}

module.exports.tisspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Pampulha/tisspampulha", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanpampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatorioadmkabanpampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanpampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatoriokabanpampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriosemleitospampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarpacientesemleitos(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatoriosemleitospampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitaspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Pampulha/relatoriovisitaspampulha", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietaspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarpacienterelatorio(unidade, function(error, resultado){
			modelpampulha.buscardieta1(unidade, function(error,dieta1){
				modelpampulha.buscardieta2(unidade, function(error, dieta2){
					modelpampulha.buscardieta3(unidade, function(error, dieta3){
						modelpampulha.buscardieta4(unidade, function(error, dieta4){
							modelpampulha.buscardieta5(unidade, function(error, dieta5){
								modelpampulha.buscardieta6(unidade, function(error, dieta6){
									modelpampulha.buscardieta7(unidade, function(error, dieta7){
										modelpampulha.buscardieta8(unidade, function(error, dieta8){
											modelpampulha.buscardieta9(unidade, function(error, dieta9){
												modelpampulha.buscardieta10(unidade, function(error, dieta10){
													modelpampulha.buscardieta11(unidade, function(error, dieta11){
														modelpampulha.buscardieta12(unidade,function(error, dieta12){
															modelpampulha.buscardieta13(unidade,function(error, dieta13){
																modelpampulha.buscardieta14(unidade,function(error, dieta14){
																	modelpampulha.buscardieta15(unidade,function(error, dieta15){
																		modelpampulha.buscardieta16(unidade, function(error, dieta16){
																			modelpampulha.buscardieta17(unidade, function(error, dieta17){
																				modelpampulha.buscardieta18(unidade, function(error, dieta18){
																					modelpampulha.buscardieta19(unidade, function(error, dieta19){
																						modelpampulha.buscardieta20(unidade, function(error, dieta20){
																							modelpampulha.buscardieta21(unidade, function(error, dieta21){
																								modelpampulha.buscardieta22(unidade,function(error, dieta22){
																									modelpampulha.buscardieta23(unidade,function(error, dieta23){
																										modelpampulha.buscardieta24(unidade,function(error, dieta24){
																											modelpampulha.buscardieta25(unidade,function(error, dieta25){
																												modelpampulha.buscardieta25(unidade,function(error, dieta25){
																													modelpampulha.buscardieta26(unidade,function(error, dieta26){
																														modelpampulha.buscardieta27(unidade,function(error, dieta27){
																															modelpampulha.buscardieta28(unidade,function(error, dieta28){
																																modelpampulha.buscardieta29(unidade,function(error, dieta29){
																																	modelpampulha.buscardieta30(unidade,function(error, dieta30){
																																		modelpampulha.buscardieta31(unidade,function(error, dieta31){
																												res.render("kaban/Pampulha/relatoriodietaspampulha", {paciente: resultado, id : result,
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
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.historico(unidade, function(error, resultado){
			res.render("kaban/Pampulha/historicokabanpampulha", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivopampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Pampulha/dispositivopampulha", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Pampulha/addkabanpacientepampulha", {id : result});
	});
}

module.exports.adddispositivopampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Pampulha/adddispositivopampulha", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinpampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Pampulha/addfugulinpampulha", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtisspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Pampulha/addtisspampulha", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewspampulha = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	

	var id = req.query;
	var unidade = 'Pampulha';
	modeladmin.buscarusuario(id, function(error,result){
		modelpampulha.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Pampulha/addnewspampulha", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Pampulha';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelpampulha.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Pampulha/editkabanpampulha", {paciente: resultado, id : result});
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
	var dieta = req.body.dieta2;
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'Pampulha';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);

	if(mental == 'true'){
		
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelpampulha.cadastrarpaciente(paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmentalpampulha.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
					modelpampulha.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelpampulha.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelpampulha.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelpampulha.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelpampulha.buscarpaciente(unidade, function(error, resultado){
										res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);					
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
			modelpampulha.cadastrarpaciente(paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelpampulha.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
					modelpampulha.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
						modelpampulha.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelpampulha.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
								modelpampulha.buscarpaciente(unidade, function(error, resultado){
									res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);					
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
	var unidade = 'Pampulha';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	modelpampulha.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelpampulha.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelpampulha.buscardispositivo(unidade, function(error, resultado){
						res.redirect("/dispositivopampulha?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelpampulha.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelpampulha.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
						modelpampulha.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivopampulha?id=" + result[0].id_usuario);	
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
	var unidade = 'Pampulha';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	modelpampulha.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelpampulha.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelpampulha.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinpampulha?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelpampulha.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelpampulha.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelpampulha.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinpampulha?id=" + result[0].id_usuario);	
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
	var unidade = 'Pampulha';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	modelpampulha.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelpampulha.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelpampulha.buscartiss(unidade, function(error, resultado){
						res.redirect("/tisspampulha?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelpampulha.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelpampulha.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelpampulha.buscartiss(unidade, function(error, resultado){
							res.redirect("/tisspampulha?id=" + result[0].id_usuario);	
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
	var unidade = 'Pampulha';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	modelpampulha.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		modelpampulha.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
			if(resultados[0].dataatualizacao == null){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelpampulha.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelpampulha.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabanpampulha?id=" + result[0].id_usuario);	
						});
					});
				});	
			}else{
				modeladmin.buscarusuarioeditavel(id, function(error, result){	
					modelpampulha.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelpampulha.updatenewsstatus(resultados[0].idnews, function(error, resulta){
							modelpampulha.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanpampulha?id=" + result[0].id_usuario);	
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
	var unidade = 'Pampulha';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);

	modelpampulha.buscarpacienteporid(idpaciente, function(error, idpac){
		modelmentalpampulha.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modelpampulha.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelpampulha.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalpampulha.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelpampulha.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelpampulha.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelpampulha.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelpampulha.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelpampulha.buscardispositivo(unidade, function(error, result){
													modelpampulha.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
													});
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
					modelpampulha.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelpampulha.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelpampulha.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelpampulha.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelpampulha.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelpampulha.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelpampulha.buscardispositivo(unidade, function(error, result){
												modelpampulha.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
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
					modelpampulha.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelpampulha.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalpampulha.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelpampulha.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelpampulha.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelpampulha.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelpampulha.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelpampulha.buscardispositivo(unidade, function(error, result){
													modelpampulha.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
													});
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
					modelpampulha.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, result){
						modelpampulha.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalpampulha.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelpampulha.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelpampulha.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelpampulha.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelpampulha.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelpampulha.buscardispositivo(unidade, function(error, result){
													modelpampulha.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
													});
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
	var unidade = 'Pampulha';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	var modelmentalpampulha = new application.app.model.mentalurgencia.modelmentalpampulha(application);
	modelpampulha.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
		console.log(setoresrecuperado);
		if(setoresrecuperado != ''){
			modelpampulha.buscarpacienteporid(idpaciente, function(error, idpac){	
					modelmentalpampulha.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelpampulha.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalpampulha.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelpampulha.baixadispositivo(idpaciente,baixa, function(error, result){
											modelpampulha.baixatiss(idpaciente,baixa, function(error, result){
												modelpampulha.baixanews(idpaciente,baixa, function(error, result){
													modelpampulha.baixafugulin(idpaciente,baixa, function(error, result){
														modelpampulha.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
															modelpampulha.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
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
								modelpampulha.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelpampulha.baixadispositivo(idpaciente,baixa, function(error, result){
										modelpampulha.baixatiss(idpaciente,baixa, function(error, result){
											modelpampulha.baixanews(idpaciente,baixa, function(error, result){
												modelpampulha.baixafugulin(idpaciente,baixa, function(error, result){
													modelpampulha.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
														modelpampulha.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
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
			modelpampulha.buscarpacienteporid(idpaciente, function(error, idpac){
					modelmentalpampulha.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelpampulha.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalpampulha.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelpampulha.baixadispositivo(idpaciente,baixa, function(error, result){
											modelpampulha.baixatiss(idpaciente,baixa, function(error, result){
												modelpampulha.baixanews(idpaciente,baixa, function(error, result){
													modelpampulha.baixafugulin(idpaciente,baixa, function(error, result){
														modelpampulha.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
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
								modelpampulha.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelpampulha.baixadispositivo(idpaciente,baixa, function(error, result){
										modelpampulha.baixatiss(idpaciente,baixa, function(error, result){
											modelpampulha.baixanews(idpaciente,baixa, function(error, result){
												modelpampulha.baixafugulin(idpaciente,baixa, function(error, result){
													modelpampulha.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientepampulha?id=" + resultados[0].id_usuario);	
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

module.exports.updatedispositivokabanpampulha= function(application, req, res){
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
	var unidade = 'Pampulha';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	modelpampulha.buscarpacienteporid(idpaciente, function(error, idpac){

		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelpampulha.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
				modelpampulha.buscardispositivo(unidade, function(error, resultado){
					res.redirect("/dispositivopampulha?id=" + result[0].id_usuario);	
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
	var unidade = 'Pampulha';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelpampulha.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelpampulha.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulinpampulha?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Pampulha';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);

	modelpampulha.buscarpacienteporid(idpaciente, function(error, idpac){
		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelpampulha.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
				modelpampulha.buscarnews(unidade, function(error, resultado){
					res.redirect("/newskabanpampulha?id=" + result[0].id_usuario);	
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
	var unidade = 'Pampulha';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelpampulha.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelpampulha.buscartiss(unidade, function(error, resultado){
				res.redirect("/tisspampulha?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaipampulha= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelpampulha = new application.app.model.kaban.Pampulha.modelpampulha(application);
	var unidade = 'Pampulha';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelpampulha.buscarinternacaodiapampulha(unidade, function(error, inter){
			modelpampulha.buscarevasaopampulha(unidade, function(error, evasao){
				modelpampulha.buscarobitopampulha(unidade, function(error, obito){
					modelpampulha.buscartransferenciapampulha(unidade, function(error, transf){
						modelpampulha.buscarobservacaopampulha(unidade, function(error, obser){
							modelpampulha.buscaraltapampulha(unidade, function(error, alta){
								modelpampulha.buscarcirurgicopampulha(unidade, function(error, cirur){
									modelpampulha.buscarpsquiatriapampulha(unidade, function(error, psq){
										modelpampulha.buscarpediatriapampulha(unidade, function(error, ped){
											modelpampulha.buscartraumatologiapampulha(unidade, function(error, tto){
												modelpampulha.buscarclinicopampulha(unidade, function(error, clinico){
													modelpampulha.buscarsetorespampulha(function(error, setor){
														modelpampulha.buscarbanhomanhapampulha(function(error, manha){
															modelpampulha.buscarbanhotardepampulha(function(error, tarde){
																modelpampulha.buscarbanhonoitepampulha(function(error, noite){
																	res.render("kaban/Pampulha/infouaipampulha", {inter : inter,
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


			