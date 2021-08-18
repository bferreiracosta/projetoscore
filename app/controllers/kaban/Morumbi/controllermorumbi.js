module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Morumbi/kabanpacientemorumbi", {paciente : resultado, id : result});
		});
	});	
}
module.exports.relatoriopendencias= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatoriopendenciasmorumbi", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatorioplanoalta= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatorioplanoaltamorumbi", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriocovidmorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpacienterelatoriocovid(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatoriocovidmorumbi", {paciente : resultado, id : result});
		});
	});	
}

module.exports.relatoriomentalmorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var unidade = 'Morumbi';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarpacienterelatoriomental(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatoriomentalmorumbi", {paciente : resultado, id : result});
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
					res.redirect("/kabanpacientemorumbi?id=" + result[0].id_usuario);	
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
				res.redirect("/kabanpacientemorumbi?id=" + result[0].id_usuario);	
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
				res.redirect("/examemorumbi?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitomorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var idleito = req.body.idleito;
	var id = req.body.idusuario;
	console.log(idleito)
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelmorumbi.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(nome == "Remover"){
				console.log(nome)
				modelmorumbi.mudarpacienteleito(idleito, function(error,resultado){
					modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
						res.redirect("/leitosmorumbi?id=" + result[0].id_usuario);
					});	
				})
			}
			else{
				if(setoresrecuperado == ""){
					modelmorumbi.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
						modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
							res.redirect("/leitosmorumbi?id=" + result[0].id_usuario);
						});	
					});
				}
				else{
					modelmorumbi.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
						modelmorumbi.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
							modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
								res.redirect("/leitosmorumbi?id=" + result[0].id_usuario);
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
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarleitospacientes(function(error, resultadosetores){
			res.render("kaban/Morumbi/leitosmorumbi", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.cadastrarleitosmorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.cadastrarleitosmorumbi(function(error, resultadosetores){
			res.render("kaban/Morumbi/cadastrarleitosmorumbi", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.buscarpacientesmorumbi= function(application, req, res){
	
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	
	modelmorumbi.buscarpacientesmorumbi(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.buscaridpacientesmorumbi= function(application, req, res){
	
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var valor = req.query;
	
	modelmorumbi.buscarpacientesidmorumbi(valor,function(error, resultadoid){
		res.send(resultadoid);
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
			res.render("kaban/Morumbi/relatoriokabanmorumbi", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriosemleitosmorumbi = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	

	var id = req.query;
	var unidade = 'Morumbi';
	modeladmin.buscarusuario(id, function(error,result){
		modelmorumbi.buscarpacientesemleitos(unidade, function(error, resultado){
			res.render("kaban/Morumbi/relatoriosemleitosmorumbi", {paciente: resultado, id : result});
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
			modelmorumbi.buscardieta1(unidade, function(error,dieta1){
				modelmorumbi.buscardieta2(unidade, function(error, dieta2){
					modelmorumbi.buscardieta3(unidade, function(error, dieta3){
						modelmorumbi.buscardieta4(unidade, function(error, dieta4){
							modelmorumbi.buscardieta5(unidade, function(error, dieta5){
								modelmorumbi.buscardieta6(unidade, function(error, dieta6){
									modelmorumbi.buscardieta7(unidade, function(error, dieta7){
										modelmorumbi.buscardieta8(unidade, function(error, dieta8){
											modelmorumbi.buscardieta9(unidade, function(error, dieta9){
												modelmorumbi.buscardieta10(unidade, function(error, dieta10){
													modelmorumbi.buscardieta11(unidade, function(error, dieta11){
														modelmorumbi.buscardieta12(unidade,function(error, dieta12){
															modelmorumbi.buscardieta13(unidade,function(error, dieta13){
																modelmorumbi.buscardieta14(unidade,function(error, dieta14){
																	modelmorumbi.buscardieta15(unidade,function(error, dieta15){
																		modelmorumbi.buscardieta16(unidade, function(error, dieta16){
																			modelmorumbi.buscardieta17(unidade, function(error, dieta17){
																				modelmorumbi.buscardieta18(unidade, function(error, dieta18){
																					modelmorumbi.buscardieta19(unidade, function(error, dieta19){
																						modelmorumbi.buscardieta20(unidade, function(error, dieta20){
																							modelmorumbi.buscardieta21(unidade, function(error, dieta21){
																								modelmorumbi.buscardieta22(unidade,function(error, dieta22){
																									modelmorumbi.buscardieta23(unidade,function(error, dieta23){
																										modelmorumbi.buscardieta24(unidade,function(error, dieta24){
																											modelmorumbi.buscardieta25(unidade,function(error, dieta25){
																												modelmorumbi.buscardieta25(unidade,function(error, dieta25){
																													modelmorumbi.buscardieta26(unidade,function(error, dieta26){
																														modelmorumbi.buscardieta27(unidade,function(error, dieta27){
																															modelmorumbi.buscardieta28(unidade,function(error, dieta28){
																																modelmorumbi.buscardieta29(unidade,function(error, dieta29){
																																	modelmorumbi.buscardieta30(unidade,function(error, dieta30){
																																		modelmorumbi.buscardieta31(unidade,function(error, dieta31){
																												res.render("kaban/Morumbi/relatoriodietasmorumbi", {paciente: resultado, id : result,
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
	var unidade = 'Morumbi';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);

	if(mental == 'true'){
		
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelmorumbi.cadastrarpaciente(paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmentalmorumbi.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
					modelmorumbi.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelmorumbi.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelmorumbi.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelmorumbi.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelmorumbi.buscarpaciente(unidade, function(error, resultado){
										res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);					
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
			modelmorumbi.cadastrarpaciente(paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmorumbi.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
					modelmorumbi.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
						modelmorumbi.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelmorumbi.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
								modelmorumbi.buscarpaciente(unidade, function(error, resultado){
									res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);					
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
	var unidade = 'Morumbi';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modelmorumbi.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelmorumbi.buscardispositivo(unidade, function(error, resultado){
						res.redirect("/dispositivomorumbi?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmorumbi.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelmorumbi.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
						modelmorumbi.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivomorumbi?id=" + result[0].id_usuario);	
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
	var unidade = 'Morumbi';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modelmorumbi.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmorumbi.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinmorumbi?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmorumbi.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelmorumbi.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelmorumbi.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinmorumbi?id=" + result[0].id_usuario);	
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
	var unidade = 'Morumbi';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modelmorumbi.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelmorumbi.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelmorumbi.buscartiss(unidade, function(error, resultado){
						res.redirect("/tissmorumbi?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelmorumbi.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelmorumbi.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelmorumbi.buscartiss(unidade, function(error, resultado){
							res.redirect("/tissmorumbi?id=" + result[0].id_usuario);	
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
	modelmorumbi.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		modelmorumbi.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
			if(resultados[0].dataatualizacao == null){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelmorumbi.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelmorumbi.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabanmorumbi?id=" + result[0].id_usuario);	
						});
					});
				});	
			}else{
				modeladmin.buscarusuarioeditavel(id, function(error, result){	
					modelmorumbi.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelmorumbi.updatenewsstatus(resultados[0].idnews, function(error, resulta){
							modelmorumbi.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanmorumbi?id=" + result[0].id_usuario);	
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
	var unidade = 'Morumbi';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);

	modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
		modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modelmorumbi.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelmorumbi.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalmorumbi.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
													});
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
					modelmorumbi.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelmorumbi.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelmorumbi.buscardispositivo(unidade, function(error, result){
												modelmorumbi.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
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
					modelmorumbi.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelmorumbi.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalmorumbi.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
													});
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
					modelmorumbi.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelmorumbi.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelmorumbi.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelmorumbi.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelmorumbi.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelmorumbi.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelmorumbi.buscardispositivo(unidade, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
													});
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
	var unidade = 'Morumbi';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var modelmentalmorumbi = new application.app.model.mentalurgencia.modelmentalmorumbi(application);
	modelmorumbi.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
		console.log(setoresrecuperado);
		if(setoresrecuperado != ''){
			modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){	
					modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
															modelmorumbi.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
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
								modelmorumbi.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
											modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
												modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
													modelmorumbi.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
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
			modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
					modelmentalmorumbi.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelmorumbi.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalmorumbi.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
											modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
												modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
													modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
														modelmorumbi.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
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
								modelmorumbi.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmorumbi.baixadispositivo(idpaciente,baixa, function(error, result){
										modelmorumbi.baixatiss(idpaciente,baixa, function(error, result){
											modelmorumbi.baixanews(idpaciente,baixa, function(error, result){
												modelmorumbi.baixafugulin(idpaciente,baixa, function(error, result){
													modelmorumbi.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacientemorumbi?id=" + resultados[0].id_usuario);	
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
	var glasgow = req.body.glasgow;
	var bic = req.body.bic;
	var id = req.body.idusuario;
	var data = req.body.data;
	var unidade = 'Morumbi';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){

		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelmorumbi.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
				modelmorumbi.buscardispositivo(unidade, function(error, resultado){
					res.redirect("/dispositivomorumbi?id=" + result[0].id_usuario);	
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
	var unidade = 'Morumbi';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelmorumbi.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelmorumbi.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulinmorumbi?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Morumbi';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);

	modelmorumbi.buscarpacienteporid(idpaciente, function(error, idpac){
		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelmorumbi.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
				modelmorumbi.buscarnews(unidade, function(error, resultado){
					res.redirect("/newskabanmorumbi?id=" + result[0].id_usuario);	
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
				res.redirect("/tissmorumbi?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaimorumbi= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelmorumbi = new application.app.model.kaban.Morumbi.modelmorumbi(application);
	var unidade = 'Morumbi';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelmorumbi.buscarinternacaodiamorumbi(unidade, function(error, inter){
			modelmorumbi.buscarevasaomorumbi(unidade, function(error, evasao){
				modelmorumbi.buscarobitomorumbi(unidade, function(error, obito){
					modelmorumbi.buscartransferenciamorumbi(unidade, function(error, transf){
						modelmorumbi.buscarobservacaomorumbi(unidade, function(error, obser){
							modelmorumbi.buscaraltamorumbi(unidade, function(error, alta){
								modelmorumbi.buscarcirurgicomorumbi(unidade, function(error, cirur){
									modelmorumbi.buscarpsquiatriamorumbi(unidade, function(error, psq){
										modelmorumbi.buscarpediatriamorumbi(unidade, function(error, ped){
											modelmorumbi.buscartraumatologiamorumbi(unidade, function(error, tto){
												modelmorumbi.buscarclinicomorumbi(unidade, function(error, clinico){
													modelmorumbi.buscarsetoresmorumbi(function(error, setor){
														modelmorumbi.buscarbanhomanhamorumbi(function(error, manha){
															modelmorumbi.buscarbanhotardemorumbi(function(error, tarde){
																modelmorumbi.buscarbanhonoitemorumbi(function(error, noite){
																	res.render("kaban/Morumbi/infouaimorumbi", {inter : inter,
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


			