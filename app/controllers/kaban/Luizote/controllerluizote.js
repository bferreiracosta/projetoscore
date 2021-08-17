module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Luizote/kabanpacienteluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriopendencias= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatoriopendenciasluizote", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorioplanoalta= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var unidade = 'Luizote';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatorioplanoaltaluizote", {paciente : resultado, id : result});
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
					res.redirect("/kabanpacienteluizote?id=" + result[0].id_usuario);	
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
				res.redirect("/kabanpacienteluizote?id=" + result[0].id_usuario);	
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
				res.redirect("/exameluizote?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitoluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var idleito = req.body.idleito;
	var id = req.body.idusuario;
	console.log(idleito)
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelluizote.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(nome == "Remover"){
				console.log(nome)
				modelluizote.mudarpacienteleito(idleito, function(error,resultado){
					modelluizote.buscarleitospacientes(function(error, resultadosetores){
						res.redirect("/leitosluizote?id=" + result[0].id_usuario);
					});	
				})
			}
			else{
				if(setoresrecuperado == ""){
					modelluizote.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
						modelluizote.buscarleitospacientes(function(error, resultadosetores){
							res.redirect("/leitosluizote?id=" + result[0].id_usuario);
						});	
					});
				}
				else{
					modelluizote.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
						modelluizote.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
							modelluizote.buscarleitospacientes(function(error, resultadosetores){
								res.redirect("/leitosluizote?id=" + result[0].id_usuario);
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
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarleitospacientes(function(error, resultadosetores){
			res.render("kaban/Luizote/leitosluizote", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.cadastrarleitosluizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.cadastrarleitosluizote(function(error, resultadosetores){
			res.render("kaban/Luizote/cadastrarleitosluizote", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.buscarpacientesluizote= function(application, req, res){
	
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	
	modelluizote.buscarpacientesluizote(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.buscaridpacientesluizote= function(application, req, res){
	
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var valor = req.query;
	
	modelluizote.buscarpacientesidluizote(valor,function(error, resultadoid){
		res.send(resultadoid);
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

module.exports.relatoriosemleitosluizote = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	

	var id = req.query;
	var unidade = 'Luizote';
	modeladmin.buscarusuario(id, function(error,result){
		modelluizote.buscarpacientesemleitos(unidade, function(error, resultado){
			res.render("kaban/Luizote/relatoriosemleitosluizote", {paciente: resultado, id : result});
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
			modelluizote.buscardieta1(unidade, function(error,dieta1){
				modelluizote.buscardieta2(unidade, function(error, dieta2){
					modelluizote.buscardieta3(unidade, function(error, dieta3){
						modelluizote.buscardieta4(unidade, function(error, dieta4){
							modelluizote.buscardieta5(unidade, function(error, dieta5){
								modelluizote.buscardieta6(unidade, function(error, dieta6){
									modelluizote.buscardieta7(unidade, function(error, dieta7){
										modelluizote.buscardieta8(unidade, function(error, dieta8){
											modelluizote.buscardieta9(unidade, function(error, dieta9){
												modelluizote.buscardieta10(unidade, function(error, dieta10){
													modelluizote.buscardieta11(unidade, function(error, dieta11){
														modelluizote.buscardieta12(unidade,function(error, dieta12){
															modelluizote.buscardieta13(unidade,function(error, dieta13){
																modelluizote.buscardieta14(unidade,function(error, dieta14){
																	modelluizote.buscardieta15(unidade,function(error, dieta15){
																		modelluizote.buscardieta16(unidade, function(error, dieta16){
																			modelluizote.buscardieta17(unidade, function(error, dieta17){
																				modelluizote.buscardieta18(unidade, function(error, dieta18){
																					modelluizote.buscardieta19(unidade, function(error, dieta19){
																						modelluizote.buscardieta20(unidade, function(error, dieta20){
																							modelluizote.buscardieta21(unidade, function(error, dieta21){
																								modelluizote.buscardieta22(unidade,function(error, dieta22){
																									modelluizote.buscardieta23(unidade,function(error, dieta23){
																										modelluizote.buscardieta24(unidade,function(error, dieta24){
																											modelluizote.buscardieta25(unidade,function(error, dieta25){
																												modelluizote.buscardieta25(unidade,function(error, dieta25){
																													modelluizote.buscardieta26(unidade,function(error, dieta26){
																														modelluizote.buscardieta27(unidade,function(error, dieta27){
																															modelluizote.buscardieta28(unidade,function(error, dieta28){
																																modelluizote.buscardieta29(unidade,function(error, dieta29){
																																	modelluizote.buscardieta30(unidade,function(error, dieta30){
																																		modelluizote.buscardieta31(unidade,function(error, dieta31){
																												res.render("kaban/Luizote/relatoriodietasluizote", {paciente: resultado, id : result,
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
	var unidade = 'Luizote';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);

	if(mental == 'true'){
		
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelluizote.cadastrarpaciente(paciente, round, alta, metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmentalluizote.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
					modelluizote.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelluizote.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelluizote.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelluizote.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelluizote.buscarpaciente(unidade, function(error, resultado){
										res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);					
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
			modelluizote.cadastrarpaciente(paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelluizote.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
					modelluizote.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
						modelluizote.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelluizote.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
								modelluizote.buscarpaciente(unidade, function(error, resultado){
									res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);					
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
	var unidade = 'Luizote';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modelluizote.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelluizote.buscardispositivo(unidade, function(error, resultado){
						res.redirect("/dispositivoluizote?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelluizote.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelluizote.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
						modelluizote.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivoluizote?id=" + result[0].id_usuario);	
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
	var unidade = 'Luizote';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modelluizote.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelluizote.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinluizote?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelluizote.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelluizote.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelluizote.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinluizote?id=" + result[0].id_usuario);	
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
	var unidade = 'Luizote';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	
	modelluizote.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelluizote.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelluizote.buscartiss(unidade, function(error, resultado){
						res.redirect("/tissluizote?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelluizote.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelluizote.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelluizote.buscartiss(unidade, function(error, resultado){
							res.redirect("/tissluizote?id=" + result[0].id_usuario);	
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
	modelluizote.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		modelluizote.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
			if(resultados[0].dataatualizacao == null){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelluizote.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelluizote.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabanluizote?id=" + result[0].id_usuario);	
						});
					});
				});	
			}else{
				modeladmin.buscarusuarioeditavel(id, function(error, result){	
					modelluizote.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelluizote.updatenewsstatus(resultados[0].idnews, function(error, resulta){
							modelluizote.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanluizote?id=" + result[0].id_usuario);	
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
	var medico = req.body.medico;
	var id = req.body.idusuario;
	var unidade = 'Luizote';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);

	modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
		modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modelluizote.update(idpaciente,paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelluizote.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalluizote.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
													});
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
					modelluizote.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelluizote.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelluizote.buscardispositivo(unidade, function(error, result){
												modelluizote.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
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
					modelluizote.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelluizote.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalluizote.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
													});
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
					modelluizote.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, result){
						modelluizote.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelluizote.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelluizote.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelluizote.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelluizote.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelluizote.buscardispositivo(unidade, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
													});
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
	var unidade = 'Luizote';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var modelmentalluizote = new application.app.model.mentalurgencia.modelmentalluizote(application);
	modelluizote.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
		console.log(setoresrecuperado);
		if(setoresrecuperado != ''){
			modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){	
					modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelluizote.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
															modelluizote.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
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
								modelluizote.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
										modelluizote.baixatiss(idpaciente,baixa, function(error, result){
											modelluizote.baixanews(idpaciente,baixa, function(error, result){
												modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
													modelluizote.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
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
			modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
					modelmentalluizote.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelluizote.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalluizote.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
											modelluizote.baixatiss(idpaciente,baixa, function(error, result){
												modelluizote.baixanews(idpaciente,baixa, function(error, result){
													modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
														modelluizote.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
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
								modelluizote.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelluizote.baixadispositivo(idpaciente,baixa, function(error, result){
										modelluizote.baixatiss(idpaciente,baixa, function(error, result){
											modelluizote.baixanews(idpaciente,baixa, function(error, result){
												modelluizote.baixafugulin(idpaciente,baixa, function(error, result){
													modelluizote.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteluizote?id=" + resultados[0].id_usuario);	
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
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'Luizote';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){

		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelluizote.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
				modelluizote.buscardispositivo(unidade, function(error, resultado){
					res.redirect("/dispositivoluizote?id=" + result[0].id_usuario);	
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
				res.redirect("/fugulinluizote?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Luizote';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);

	modelluizote.buscarpacienteporid(idpaciente, function(error, idpac){
		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelluizote.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
				modelluizote.buscarnews(unidade, function(error, resultado){
					res.redirect("/newskabanluizote?id=" + result[0].id_usuario);	
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
				res.redirect("/tissluizote?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouailuizote= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelluizote = new application.app.model.kaban.Luizote.modelluizote(application);
	var unidade = 'Luizote';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelluizote.buscarinternacaodialuizote(unidade, function(error, inter){
			modelluizote.buscarevasaoluizote(unidade, function(error, evasao){
				modelluizote.buscarobitoluizote(unidade, function(error, obito){
					modelluizote.buscartransferencialuizote(unidade, function(error, transf){
						modelluizote.buscarobservacaoluizote(unidade, function(error, obser){
							modelluizote.buscaraltaluizote(unidade, function(error, alta){
								modelluizote.buscarcirurgicoluizote(unidade, function(error, cirur){
									modelluizote.buscarpsquiatrialuizote(unidade, function(error, psq){
										modelluizote.buscarpediatrialuizote(unidade, function(error, ped){
											modelluizote.buscartraumatologialuizote(unidade, function(error, tto){
												modelluizote.buscarclinicoluizote(unidade, function(error, clinico){
													modelluizote.buscarsetoresluizote(function(error, setor){
														modelluizote.buscarbanhomanhaluizote(function(error, manha){
															modelluizote.buscarbanhotardeluizote(function(error, tarde){
																modelluizote.buscarbanhonoiteluizote(function(error, noite){
																	res.render("kaban/Luizote/infouailuizote", {inter : inter,
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


			