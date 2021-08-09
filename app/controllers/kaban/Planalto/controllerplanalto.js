module.exports.cadastrar= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var unidade = 'Planalto';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelplanalto.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Planalto/kabanpacienteplanalto", {paciente : resultado, id : result});
		});
	});	
}

module.exports.saveexameplanalto= function(application, req, res){
	var title = req.body.title;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;

	var unidade = 'Planalto';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
		modeladmin.buscarusuarioeditavel(id, function(error, result){	
			modelplanalto.addexame(title, start,end,paciente,unidade, function(error, resulta){
				modelplanalto.buscarpaciente(unidade, function(error, resultado){
					res.redirect("/kabanpacienteplanalto?id=" + result[0].id_usuario);	
				});
			});	
		});
}

module.exports.calendarioplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var unidade = 'Planalto';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		res.render("kaban/Planalto/calendarioplanalto" ,{id : result});
	});	
}

module.exports.addexameplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Planalto';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Planalto/addexameplanalto", {id : result, paciente: resultado});
		});
	});
}

module.exports.exameplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var unidade = 'Planalto';
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error, result){
		modelplanalto.buscarexames(function(error, resultado){
			res.render("kaban/Planalto/exameplanalto", {id : result, evento: resultado});
		});
	});	
}
module.exports.editexameplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var id = req.params.idusuario;
	var idevento = req.query;

	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelplanalto.buscarexamesid(idevento, function(error, resultado){
			res.render("kaban/Planalto/editexameplanalto", {id : result, evento: resultado});
		});
	});	
}

module.exports.deleteexameplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var id = req.params.idusuario;
	var idevento = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuarioeditavel(id, function(error, result){
		modelplanalto.deleteexameplanalto(idevento.id, function(error, resultado){
			modelplanalto.buscarpaciente(unidade, function(error, resultado){
				res.redirect("/kabanpacienteplanalto?id=" + result[0].id_usuario);	
			});
		});
	});	
}

module.exports.montarcalendarioplanalto= function(application, req, res){
	
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	modelplanalto.buscarexames(function(error, resultadoexame){
		
		res.send(resultadoexame);
	});
}

module.exports.updateexameplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	var title = req.body.title;
	var idevento = req.body.idevento;
	var start = req.body.dataformatada;
	var paciente = req.body.paciente;
	var end = req.body.dataformatada;
	var id = req.body.idusuario;
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.updateexameplanalto(idevento, title, start, paciente, end,  function(error, resultado){
			modelplanalto.buscarexames(function(error, resultado){
				res.redirect("/exameplanalto?id=" + result[0].id_usuario);	
			});
		});
	});
}

module.exports.atualizarleitoplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var idpaciente = req.body.idpaciente;
	var nome = req.body.nome;
	var idleito = req.body.idleito;
	var id = req.body.idusuario;
	console.log(idleito)
	modeladmin.buscarusuarioporid(id, function(error, result){
		modelplanalto.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
			if(nome == "Remover"){
				console.log(nome)
				modelplanalto.mudarpacienteleito(idleito, function(error,resultado){
					modelplanalto.buscarleitospacientes(function(error, resultadosetores){
						res.redirect("/leitosplanalto?id=" + result[0].id_usuario);
					});	
				})
			}
			else{
				if(setoresrecuperado == ""){
					modelplanalto.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
						modelplanalto.buscarleitospacientes(function(error, resultadosetores){
							res.redirect("/leitosplanalto?id=" + result[0].id_usuario);
						});	
					});
				}
				else{
					modelplanalto.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
						modelplanalto.atualizarleitokaban(idleito, idpaciente,nome,  function(error, resultado){
							modelplanalto.buscarleitospacientes(function(error, resultadosetores){
								res.redirect("/leitosplanalto?id=" + result[0].id_usuario);
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
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelplanalto.buscarleitospacientes(function(error, resultadosetores){
			res.render("kaban/Planalto/leitosplanalto", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.cadastrarleitosplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelplanalto.cadastrarleitosplanalto(function(error, resultadosetores){
			res.render("kaban/Planalto/cadastrarleitosplanalto", {leito : resultadosetores, id : result});
		});
	});	
}

module.exports.buscarpacientesplanalto= function(application, req, res){
	
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	
	modelplanalto.buscarpacientesplanalto(function(error, resultadosetor){
		res.send(resultadosetor);
	});
	
}

module.exports.buscaridpacientesplanalto= function(application, req, res){
	
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	var valor = req.query;
	
	modelplanalto.buscarpacientesidplanalto(valor,function(error, resultadoid){
		res.send(resultadoid);
	});
	
}

module.exports.editfugulinplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Planalto';

	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.buscarfugulinid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Planalto/editfugulinplanalto", { fugulin: resultado, id : result});
			});
	});
}

module.exports.editkabandispositivoplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Planalto';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.buscardispositivoid(idpaciente, unidade, function(error, resultado){
				res.render("kaban/Planalto/editkabandispositivoplanalto", { dispositivo: resultado, id : result});
			});
	});
}

module.exports.editnewsplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.buscarnewsid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Planalto/editnewskabanplanalto", {news: resultado, id : result});
		});
	});
}

module.exports.edittissplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.params.idusuario;
	var idpaciente = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.buscartissid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Planalto/edittissplanalto", {tiss: resultado, id : result});
		});
	});
}

module.exports.fugulinplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarfugulin(unidade, function(error, resultado){
			res.render("kaban/Planalto/fugulinplanalto", {fugulin: resultado, id : result});
		});
	});
}

module.exports.newsplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarnews(unidade, function(error, resultado){
			res.render("kaban/Planalto/newskabanplanalto", {news: resultado, id : result});
		});
	});
}

module.exports.tissplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscartiss(unidade, function(error, resultado){
			res.render("kaban/Planalto/tissplanalto", {tiss: resultado, id : result});
		});
	});
}

module.exports.relatorioadmkabanplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarpaciente(unidade, function(error, resultado){
			res.render("kaban/Planalto/relatorioadmkabanplanalto", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriokabanplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Planalto/relatoriokabanplanalto", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriosemleitosplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarpacientesemleitos(unidade, function(error, resultado){
			res.render("kaban/Planalto/relatoriosemleitosplanalto", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriovisitasplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarpacienterelatorio(unidade, function(error, resultado){
			res.render("kaban/Planalto/relatoriovisitasplanalto", {paciente: resultado, id : result});
		});
	});
}

module.exports.relatoriodietasplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarpacienterelatorio(unidade, function(error, resultado){
			modelplanalto.buscardieta1(unidade, function(error,dieta1){
				modelplanalto.buscardieta2(unidade, function(error, dieta2){
					modelplanalto.buscardieta3(unidade, function(error, dieta3){
						modelplanalto.buscardieta4(unidade, function(error, dieta4){
							modelplanalto.buscardieta5(unidade, function(error, dieta5){
								modelplanalto.buscardieta6(unidade, function(error, dieta6){
									modelplanalto.buscardieta7(unidade, function(error, dieta7){
										modelplanalto.buscardieta8(unidade, function(error, dieta8){
											modelplanalto.buscardieta9(unidade, function(error, dieta9){
												modelplanalto.buscardieta10(unidade, function(error, dieta10){
													modelplanalto.buscardieta11(unidade, function(error, dieta11){
														modelplanalto.buscardieta12(unidade,function(error, dieta12){
															modelplanalto.buscardieta13(unidade,function(error, dieta13){
																modelplanalto.buscardieta14(unidade,function(error, dieta14){
																	modelplanalto.buscardieta15(unidade,function(error, dieta15){
																		modelplanalto.buscardieta16(unidade, function(error, dieta16){
																			modelplanalto.buscardieta17(unidade, function(error, dieta17){
																				modelplanalto.buscardieta18(unidade, function(error, dieta18){
																					modelplanalto.buscardieta19(unidade, function(error, dieta19){
																						modelplanalto.buscardieta20(unidade, function(error, dieta20){
																							modelplanalto.buscardieta21(unidade, function(error, dieta21){
																								modelplanalto.buscardieta22(unidade,function(error, dieta22){
																									modelplanalto.buscardieta23(unidade,function(error, dieta23){
																										modelplanalto.buscardieta24(unidade,function(error, dieta24){
																											modelplanalto.buscardieta25(unidade,function(error, dieta25){
																												modelplanalto.buscardieta25(unidade,function(error, dieta25){
																													modelplanalto.buscardieta26(unidade,function(error, dieta26){
																														modelplanalto.buscardieta27(unidade,function(error, dieta27){
																															modelplanalto.buscardieta28(unidade,function(error, dieta28){
																																modelplanalto.buscardieta29(unidade,function(error, dieta29){
																																	modelplanalto.buscardieta30(unidade,function(error, dieta30){
																																		modelplanalto.buscardieta31(unidade,function(error, dieta31){
																												res.render("kaban/Planalto/relatoriodietasplanalto", {paciente: resultado, id : result,
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
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	
	modeladmin.buscarusuario(id, function(error, result){
		modelplanalto.historico(unidade, function(error, resultado){
			res.render("kaban/Planalto/historicokabanplanalto", {paciente : resultado, id : result});
		});
	});		
}

module.exports.dispositivoplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscardispositivo(unidade, function(error, resultado){
			res.render("kaban/Planalto/dispositivoplanalto", {id : result, dispositivo: resultado });
		});
	});
}

module.exports.addpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	
	
	var id = req.query;
	
	modeladmin.buscarusuario(id, function(error,result){
		res.render("kaban/Planalto/addkabanpacienteplanalto", {id : result});
	});
}

module.exports.adddispositivoplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscardispositivohora(unidade, function(error, resultados){
			res.render("kaban/Planalto/adddispositivoplanalto", {id : result, dispositivo: resultados });
		});
	});
}

module.exports.addfugulinplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarfugulinhora(unidade, function(error, resultados){
			res.render("kaban/Planalto/addfugulinplanalto", {id : result, fugulin: resultados });
		});
	});
}

module.exports.addtissplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscartisshora(unidade, function(error, resultados){
			res.render("kaban/Planalto/addtissplanalto", {id : result, tiss: resultados });
		});
	});
}

module.exports.addnewsplanalto = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	

	var id = req.query;
	var unidade = 'Planalto';
	modeladmin.buscarusuario(id, function(error,result){
		modelplanalto.buscarnewshora(unidade, function(error, resultados){
			res.render("kaban/Planalto/addnewsplanalto", {id : result, news: resultados });
		});
	});
}

module.exports.editpaciente = function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	var id = req.params.idusuario;
	var idpaciente = req.query;
	
	var unidade = 'Planalto';
	
	modeladmin.buscarusuarioeditavel(id, function(error,result){
		modelplanalto.buscarpacienteid(idpaciente, unidade, function(error, resultado){
			res.render("kaban/Planalto/editkabanplanalto", {paciente: resultado, id : result});
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
	var unidade = 'Planalto';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);

	if(mental == 'true'){
		
		modeladmin.buscarusuarioporid(id, function(error, resultados){
			modelplanalto.cadastrarpaciente(paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelmentalplanalto.cadastrarpaciente(prt, paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
					modelplanalto.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
						modelplanalto.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelplanalto.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
								modelplanalto.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
									modelplanalto.buscarpaciente(unidade, function(error, resultado){
										res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);					
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
			modelplanalto.cadastrarpaciente(paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade, function(error, resultdoinsert){
				modelplanalto.adddispositivoid(resultdoinsert.insertId, paciente, unidade, function(error, results){
					modelplanalto.addfugulinid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
						modelplanalto.addtissid(resultdoinsert.insertId,setor, paciente,unidade, function(error, results){
							modelplanalto.addnewsid(resultdoinsert.insertId,setor, paciente, unidade,function(error, results){
								modelplanalto.buscarpaciente(unidade, function(error, resultado){
									res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);					
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
	var unidade = 'Planalto';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	modelplanalto.buscardispositivodataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelplanalto.updatedispositivo(idpaciente, glasgow, bic,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelplanalto.buscardispositivo(unidade, function(error, resultado){
						res.redirect("/dispositivoplanalto?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelplanalto.adddispositivo(idpaciente,glasgow, bic, nome, svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,data,unidade,  function(error, resulta){
					modelplanalto.updatedispositivostatus(resultados[0].iddispositivo, function(error, resulta){
						modelplanalto.buscardispositivo(unidade, function(error, resultado){
							res.redirect("/dispositivoplanalto?id=" + result[0].id_usuario);	
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
	var unidade = 'Planalto';
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	modelplanalto.buscarfugulindataid(idpaciente, unidade, function(error, resultados){
		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelplanalto.updatefugulin(idpaciente, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelplanalto.buscarfugulin(unidade, function(error, resultado){
						res.redirect("/fugulinplanalto?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{
			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelplanalto.addfugulin(idpaciente, setor, nome , mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,data,unidade,  function(error, resulta){
					modelplanalto.updatefugulinstatus(resultados[0].idfugulin, function(error, resulta){
						modelplanalto.buscarfugulin(unidade, function(error, resultado){
							res.redirect("/fugulinplanalto?id=" + result[0].id_usuario);	
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
	var unidade = 'Planalto';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	modelplanalto.buscartissdataid(idpaciente, unidade, function(error, resultados){

		if(resultados[0].dataatualizacao == null){
			modeladmin.buscarusuarioporid(id, function(error, result){	
				modelplanalto.updatetiss(idpaciente, tiss ,data,unidade,  function(error, resulta){
					modelplanalto.buscartiss(unidade, function(error, resultado){
						res.redirect("/tissplanalto?id=" + result[0].id_usuario);	
					});
				});
			});	
		}else{

			modeladmin.buscarusuarioeditavel(id, function(error, result){	
				modelplanalto.addtiss(idpaciente, setor, nome,  tiss ,data,unidade,  function(error, resulta){
					modelplanalto.updatetissstatus(resultados[0].idtiss, function(error, resulta){
						modelplanalto.buscartiss(unidade, function(error, resultado){
							res.redirect("/tissplanalto?id=" + result[0].id_usuario);	
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
	var unidade = 'Planalto';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	modelplanalto.buscardispositivoporid(idpaciente, unidade, function(error, resultadoscovid){
		modelplanalto.buscarnewsdataid(idpaciente, unidade, function(error, resultados){
			if(resultados[0].dataatualizacao == null){
				modeladmin.buscarusuarioporid(id, function(error, result){	
					modelplanalto.updatenews(idpaciente, setor, news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelplanalto.buscarnews(unidade, function(error, resultado){
							res.redirect("/newskabanplanalto?id=" + result[0].id_usuario);	
						});
					});
				});	
			}else{
				modeladmin.buscarusuarioeditavel(id, function(error, result){	
					modelplanalto.addnews(idpaciente, setor, nome,news, data, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
						modelplanalto.updatenewsstatus(resultados[0].idnews, function(error, resulta){
							modelplanalto.buscarnews(unidade, function(error, resultado){
								res.redirect("/newskabanplanalto?id=" + result[0].id_usuario);	
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
	var unidade = 'Planalto';

	var svd = "";
	var sne = "";
	var avp = "";
	var cvc = "";
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);

	modelplanalto.buscarpacienteporid(idpaciente, function(error, idpac){
		modelmentalplanalto.buscarpacientepornome(idpac[0].nome, function(error, idmental){	
			if(mental == 'true' && idpac[0].mental == "true" ){
				modeladmin.buscarusuarioporid(id, function(error, resultados){	
					modelplanalto.update(idpaciente,paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelplanalto.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalplanalto.update(idmental[0].id_paciente,prt,paciente, idade,diagnostico,referencia,unidade,  function(error, result){
								modelplanalto.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelplanalto.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelplanalto.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelplanalto.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelplanalto.buscardispositivo(unidade, function(error, result){
													modelplanalto.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
													});
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
					modelplanalto.update(idpaciente,paciente, round, alta, metas,agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelplanalto.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelplanalto.updatetissnome(idpaciente,paciente,setor,  function(error, result){
								modelplanalto.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
									modelplanalto.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
										modelplanalto.updatedispositivonome(idpaciente,paciente,  function(error, result){
											modelplanalto.buscardispositivo(unidade, function(error, result){
												modelplanalto.buscarpaciente(unidade, function(error, resultado){
													res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
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
					modelplanalto.update(idpaciente,medico, paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelplanalto.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalplanalto.cadastrarpaciente(prt,paciente, idade,diagnostico,referencia,unidade,da, function(error, result){
								modelplanalto.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelplanalto.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelplanalto.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelplanalto.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelplanalto.buscardispositivo(unidade, function(error, result){
													modelplanalto.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
													});
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
					modelplanalto.update(idpaciente,medico, dieta, paciente, round, alta,metas, agenexames, laudo, descexame, desclaudo, oxigenios,casas, avespecialistas,descespecialista, coletas, resultadolabs, transferencias, desctransferencia, hemos, medico, dieta, exame, dataexame, mental, referencia, covid, setor,susfacil,prt,dn,idade,da,qtdi,ecf,spict,paliativo,diagnostico,especialidade,observacao,banho,pendencias,mobilidade,unidade,  function(error, result){
						modelplanalto.updateleitosnome(idpaciente, paciente,unidade,  function(error, result){
							modelmentalplanalto.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
								modelplanalto.updatetissnome(idpaciente,paciente,setor,  function(error, result){
									modelplanalto.updatefugulinnome(idpaciente,paciente,setor,  function(error, result){
										modelplanalto.updatenewsnome(idpaciente,paciente,setor,  function(error, result){
											modelplanalto.updatedispositivonome(idpaciente,paciente,  function(error, result){
												modelplanalto.buscardispositivo(unidade, function(error, result){
													modelplanalto.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
													});
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
	var unidade = 'Planalto';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	var modelmentalplanalto = new application.app.model.mentalurgencia.modelmentalplanalto(application);
	modelplanalto.buscarleitospacientesporid(idpaciente, function(error, setoresrecuperado){
		console.log(setoresrecuperado);
		if(setoresrecuperado != ''){
			modelplanalto.buscarpacienteporid(idpaciente, function(error, idpac){	
					modelmentalplanalto.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelplanalto.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalplanalto.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelplanalto.baixadispositivo(idpaciente,baixa, function(error, result){
											modelplanalto.baixatiss(idpaciente,baixa, function(error, result){
												modelplanalto.baixanews(idpaciente,baixa, function(error, result){
													modelplanalto.baixafugulin(idpaciente,baixa, function(error, result){
														modelplanalto.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
															modelplanalto.buscarpaciente(unidade, function(error, resultado){
																res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
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
								modelplanalto.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelplanalto.baixadispositivo(idpaciente,baixa, function(error, result){
										modelplanalto.baixatiss(idpaciente,baixa, function(error, result){
											modelplanalto.baixanews(idpaciente,baixa, function(error, result){
												modelplanalto.baixafugulin(idpaciente,baixa, function(error, result){
													modelplanalto.mudarpacienteleito(setoresrecuperado[0].idleito, function(error,resultado){
														modelplanalto.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
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
			modelplanalto.buscarpacienteporid(idpaciente, function(error, idpac){
					modelmentalplanalto.buscarpacientepornome(idpac[0].nome, function(error, idmental){
						if(idpac[0].mental == 'true'){
							modeladmin.buscarusuarioporid(id, function(error, resultados){
								modelplanalto.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelmentalplanalto.baixa(idmental[0].id_paciente,baixa, data, function(error, result){
										modelplanalto.baixadispositivo(idpaciente,baixa, function(error, result){
											modelplanalto.baixatiss(idpaciente,baixa, function(error, result){
												modelplanalto.baixanews(idpaciente,baixa, function(error, result){
													modelplanalto.baixafugulin(idpaciente,baixa, function(error, result){
														modelplanalto.buscarpaciente(unidade, function(error, resultado){
															res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
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
								modelplanalto.baixa(idpaciente,baixa, destino, alta,data, function(error, result){
									modelplanalto.baixadispositivo(idpaciente,baixa, function(error, result){
										modelplanalto.baixatiss(idpaciente,baixa, function(error, result){
											modelplanalto.baixanews(idpaciente,baixa, function(error, result){
												modelplanalto.baixafugulin(idpaciente,baixa, function(error, result){
													modelplanalto.buscarpaciente(unidade, function(error, resultado){
														res.redirect("/kabanpacienteplanalto?id=" + resultados[0].id_usuario);	
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

module.exports.updatedispositivokabanplanalto= function(application, req, res){
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
	var unidade = 'Planalto';
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	modelplanalto.buscarpacienteporid(idpaciente, function(error, idpac){

		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelplanalto.updatedispositivodados(idpaciente,glasgow, bic,data,svd,datasvd,sne,datasne,avp,dataavp,cvc,datacvc,dispositivoventilatorio,fluxoo2,fio2,peep,drogas,nora,vazaonora,adre,vazaoadre,bica,vazaobica,sedacao,dormonid3,vazaoDormonid,fentanil3,vazaoFentanil,rocuronio3,vazaoRocuronio,propofol3,vazaoPropofol,unidade,  function(error, resulta){
				modelplanalto.buscardispositivo(unidade, function(error, resultado){
					res.redirect("/dispositivoplanalto?id=" + result[0].id_usuario);	
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
	var unidade = 'Planalto';
	var data = req.body.data;

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelplanalto.updatefugulindados(idpaciente, data, mental2,oxigenacao2,sinaisvitais2,motilidade2,deambulacao2,alimentacao2,cuidado2,eliminacao2,terapeutica2,integridade2,curativo2,tempo2,fugulin,unidade,  function(error, result){
			modelplanalto.buscarfugulin(unidade, function(error, resultado){
				res.redirect("/fugulinplanalto?id=" + resultados[0].id_usuario);	
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
	var unidade = 'Planalto';
	
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);

	modelplanalto.buscarpacienteporid(idpaciente, function(error, idpac){
		modeladmin.buscarusuarioporid(id, function(error, result){	
			modelplanalto.updatenewsdados(idpaciente, data, setor, news, fr, sat, temp, o2, sistolica, fc, alerta, unidade,  function(error, resulta){
				modelplanalto.buscarnews(unidade, function(error, resultado){
					res.redirect("/newskabanplanalto?id=" + result[0].id_usuario);	
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
	var unidade = 'Planalto';

	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	
	modeladmin.buscarusuarioporid(id, function(error, resultados){	
		modelplanalto.updatetissdados(idpaciente, data, atividades, ventilatorio, cardiovascular, renal, neurologico, metabolico, intervencoes, tiss,unidade,  function(error, result){
			modelplanalto.buscartiss(unidade, function(error, resultado){
				res.redirect("/tissplanalto?id=" + resultados[0].id_usuario);	
			});
		});
	});	
}

module.exports.infouaiplanalto= function(application, req, res){
	
	var modeladmin = new application.app.model.admin.modeladmin(application);
	var modelplanalto = new application.app.model.kaban.Planalto.modelplanalto(application);
	var unidade = 'Planalto';
	var id = req.query;
	

	modeladmin.buscarusuario(id, function(error, result){
		modelplanalto.buscarinternacaodiaplanalto(unidade, function(error, inter){
			modelplanalto.buscarevasaoplanalto(unidade, function(error, evasao){
				modelplanalto.buscarobitoplanalto(unidade, function(error, obito){
					modelplanalto.buscartransferenciaplanalto(unidade, function(error, transf){
						modelplanalto.buscarobservacaoplanalto(unidade, function(error, obser){
							modelplanalto.buscaraltaplanalto(unidade, function(error, alta){
								modelplanalto.buscarcirurgicoplanalto(unidade, function(error, cirur){
									modelplanalto.buscarpsquiatriaplanalto(unidade, function(error, psq){
										modelplanalto.buscarpediatriaplanalto(unidade, function(error, ped){
											modelplanalto.buscartraumatologiaplanalto(unidade, function(error, tto){
												modelplanalto.buscarclinicoplanalto(unidade, function(error, clinico){
													modelplanalto.buscarsetoresplanalto(function(error, setor){
														modelplanalto.buscarbanhomanhaplanalto(function(error, manha){
															modelplanalto.buscarbanhotardeplanalto(function(error, tarde){
																modelplanalto.buscarbanhonoiteplanalto(function(error, noite){
																	res.render("kaban/Planalto/infouaiplanalto", {inter : inter,
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


			