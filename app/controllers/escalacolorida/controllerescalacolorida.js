module.exports.escalacolorida = function(application, req, res){
	if(req.session.loggedin){
		var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalaplanalto(function(error,resultplanalto){
			modelescalacolorida.buscarescalaluizote(function(error,resultluizote){
				modelescalacolorida.buscarescalamartins(function(error,resultmartins){
					modelescalacolorida.buscarescalaroosevelt(function(error,resultroosevelt){
						modelescalacolorida.buscarescalatibery(function(error,resulttibery){
							modelescalacolorida.buscarescalamorumbi(function(error,resultmorumbi){
								modelescalacolorida.buscarescalasiate(function(error,resultsiate){
									modelescalacolorida.buscarescalasad(function(error,resultsad){
										modelescalacolorida.buscarescalacer(function(error,resultcer){
											modelescalacolorida.buscarescalacc(function(error,resultcc){
												modelescalacolorida.buscarescalaua(function(error,resultua){
													modelescalacolorida.buscarescalacapsad(function(error,resultcapsad){
														modelescalacolorida.buscarescalacapsi(function(error,resultcapsi){
															modelescalacolorida.buscarescalacapsoeste(function(error,resultcapsoeste){
																modelescalacolorida.buscarescalacapsleste(function(error,resultcapsleste){
																	modelescalacolorida.buscarescalacapsnorte(function(error,resultcapsnorte){
																		modelescalacolorida.buscarescalavagas(function(error,resultvagas){
																		res.render("escalacolorida/homeescalacolorida", 
																		{usuario: req.flash('info'),planalto:resultplanalto,
																			luizote:resultluizote,
																			martins:resultmartins,
																			roosevelt:resultroosevelt,
																			tibery:resulttibery,
																			morumbi:resultmorumbi,
																			siate:resultsiate,
																			sad:resultsad,
																			cer:resultcer,
																			cc:resultcc,
																			ua:resultua,
																			capsad:resultcapsad,
																			capsi:resultcapsi,
																			capsoeste:resultcapsoeste,
																			capsleste:resultcapsleste,
																			capsnorte:resultcapsnorte,
																			vagas:resultvagas});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	 }else {

	
		 res.redirect('/');
	 }
	

}

module.exports.buscarplanalto = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalaplanalto(function(error,resultplanalto){
			res.send(resultplanalto)
				
		});

}
module.exports.buscarluizote = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalaluizote(function(error,resultluizote){
			res.send(resultluizote)
				
		});

}
module.exports.buscarmartins = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalamartins(function(error,resultmartins){
			res.send(resultmartins)
				
		});

}
module.exports.buscarroosevelt = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalaroosevelt(function(error,resultroosevelt){
			res.send(resultroosevelt)
				
		});

}
module.exports.buscartibery = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalatibery(function(error,resulttibery){
			res.send(resulttibery)
				
		});

}
module.exports.buscarmorumbi = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalamorumbi(function(error,resultmorumbi){
			res.send(resultmorumbi)
				
		});

}
module.exports.buscarsad = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalasad(function(error,resultsad){
			res.send(resultsad)
				
		});

}
module.exports.buscarcer = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacer(function(error,resultcer){
			res.send(resultcer)
				
		});

}
module.exports.buscarcc = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacc(function(error,resultcc){
			res.send(resultcc)
				
		});

}
module.exports.buscarua = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalaua(function(error,resultua){
			res.send(resultua)
				
		});

}
module.exports.buscarsiate = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalasiate(function(error,resultsiate){
			res.send(resultsiate)
				
		});

}
module.exports.buscarcapsad = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacapsad(function(error,resultcapsad){
			res.send(resultcapsad)
				
		});

}
module.exports.buscarcapsi = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacapsi(function(error,resultcapsi){
			res.send(resultcapsi)
				
		});

}
module.exports.buscarcapsleste = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacapsleste(function(error,resultcapsleste){
			res.send(resultcapsleste)
				
		});

}
module.exports.buscarcapsoeste = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacapsoeste(function(error,resultcapsoeste){
			res.send(resultcapsoeste)
				
		});

}
module.exports.buscarcapsnorte = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.buscarescalacapsnorte(function(error,resultcapsnorte){
			res.send(resultcapsnorte)
				
		});

}

module.exports.saveferiasplanalto = function(application, req, res){
	
	var inputunidadeselect =req.body.unidade
	var inputfuncionario =req.body.funcionario
	var inputsituacao =req.body.situação
	console.log(inputfuncionario, inputunidadeselect,inputsituacao)
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);
		modelescalacolorida.saveferiasplanalto(inputfuncionario, inputunidadeselect,inputsituacao, function(error,resultcapsnorte){
			res.redirect("/homeescalacolorida");
				
		});

}


module.exports.savevagasplanalto = function(application, req, res){
	
	var modelescalacolorida = new application.app.model.escalacolorida.modelescalacolorida(application);

	var turno = req.body.inputturno
	var unidade = req.body.unidade
	var cargoplanaltodir = req.body.cargoplanaltodir
	var cargoplanaltoger = req.body.cargoplanaltoger
	var cargoplanaltoedu = req.body.cargoplanaltoedu
	var cargoplanaltosup = req.body.cargoplanaltosup
	var cargoplanaltoqua = req.body.cargoplanaltoqua
	var cargoplanaltort = req.body.cargoplanaltort
	var cargoplanaltoenf = req.body.cargoplanaltoenf
	var cargoplanaltotec = req.body.cargoplanaltotec
	var cargoplanaltoaux = req.body.cargoplanaltoaux
	var cargoplanaltomul = req.body.cargoplanaltomul
	var quadroplanaltodir = req.body.quadroplanaltodir
	var feriasplanaltodir = req.body.feriasplanaltodir
	var licencaplanaltodir = req.body.licencaplanaltodir
	var vagasplanaltodir = req.body.vagasplanaltodir
	var bloqueadaplanaltodir = req.body.bloqueadaplanaltodir
	var quadroplanaltoger = req.body.quadroplanaltoger
	var feriasplanaltoger = req.body.feriasplanaltoger
	var licencaplanaltoger = req.body.licencaplanaltoger
	var vagasplanaltoger = req.body.vagasplanaltoger
	var bloqueadaplanaltoger = req.body.bloqueadaplanaltoger
	var quadroplanaltoedu = req.body.quadroplanaltoedu
	var feriasplanaltoedu = req.body.feriasplanaltoedu
	var licencaplanaltoedu = req.body.licencaplanaltoedu
	var vagasplanaltoedu = req.body.vagasplanaltoedu
	var bloqueadaplanaltoedu = req.body.bloqueadaplanaltoedu
	var quadroplanaltosup = req.body.quadroplanaltosup
	var feriasplanaltosup = req.body.feriasplanaltosup
	var licencaplanaltosup = req.body.licencaplanaltosup
	var vagasplanaltosup = req.body.vagasplanaltosup
	var bloqueadaplanaltosup = req.body.bloqueadaplanaltosup
	var quadroplanaltort = req.body.quadroplanaltort
	var feriasplanaltort = req.body.feriasplanaltort
	var licencaplanaltort = req.body.licencaplanaltort
	var vagasplanaltort = req.body.vagasplanaltort
	var bloqueadaplanaltort = req.body.bloqueadaplanaltort
	var quadroplanaltoqua = req.body.quadroplanaltoqua
	var feriasplanaltoqua = req.body.feriasplanaltoqua
	var licencaplanaltoqua = req.body.licencaplanaltoqua
	var vagasplanaltoqua = req.body.vagasplanaltoqua
	var bloqueadaplanaltoqua = req.body.bloqueadaplanaltoqua
	var quadroplanaltoenf = req.body.quadroplanaltoenf
	var feriasplanaltoenf = req.body.feriasplanaltoenf
	var licencaplanaltoenf = req.body.licencaplanaltoenf
	var vagasplanaltoenf = req.body.vagasplanaltoenf
	var bloqueadaplanaltoenf = req.body.bloqueadaplanaltoenf
	var quadroplanaltotec = req.body.quadroplanaltotec
	var feriasplanaltotec = req.body.feriasplanaltotec
	var licencaplanaltotec = req.body.licencaplanaltotec
	var vagasplanaltotec = req.body.vagasplanaltotec
	var bloqueadaplanaltotec = req.body.bloqueadaplanaltotec
	var quadroplanaltoaux = req.body.quadroplanaltoaux
	var feriasplanaltoaux = req.body.feriasplanaltoaux
	var licencaplanaltoaux = req.body.licencaplanaltoaux
	var vagasplanaltoaux = req.body.vagasplanaltoaux
	var bloqueadaplanaltoaux = req.body.bloqueadaplanaltoaux
	var quadroplanaltomul = req.body.quadroplanaltomul
	var feriasplanaltomul = req.body.feriasplanaltomul
	var licencaplanaltomul = req.body.licencaplanaltomul
	var vagasplanaltomul = req.body.vagasplanaltomul
	var bloqueadaplanaltomul = req.body.bloqueadaplanaltomul




	modelescalacolorida.criarvagasplanalto(unidade,
		turno, 
		cargoplanaltodir,
		cargoplanaltoger,
		cargoplanaltoedu,
		cargoplanaltosup,
		cargoplanaltoqua,
		cargoplanaltort,
		cargoplanaltoenf,
		cargoplanaltotec,
		cargoplanaltoaux,
		cargoplanaltomul,
		quadroplanaltodir , 
		feriasplanaltodir , 
		licencaplanaltodir , 
		vagasplanaltodir , 
		bloqueadaplanaltodir , 
		quadroplanaltoger , 
		feriasplanaltoger , 
		licencaplanaltoger , 
		vagasplanaltoger , 
		bloqueadaplanaltoger , 
		quadroplanaltoedu , 
		feriasplanaltoedu , 
		licencaplanaltoedu , 
		vagasplanaltoedu , 
		bloqueadaplanaltoedu , 
		quadroplanaltosup , 
		feriasplanaltosup , 
		licencaplanaltosup , 
		vagasplanaltosup , 
		bloqueadaplanaltosup , 
		quadroplanaltort , 
		feriasplanaltort , 
		licencaplanaltort , 
		vagasplanaltort , 
		bloqueadaplanaltort , 
		quadroplanaltoqua , 
		feriasplanaltoqua , 
		licencaplanaltoqua , 
		vagasplanaltoqua , 
		bloqueadaplanaltoqua , 
		quadroplanaltoenf , 
		feriasplanaltoenf , 
		licencaplanaltoenf , 
		vagasplanaltoenf , 
		bloqueadaplanaltoenf , 
		quadroplanaltotec , 
		feriasplanaltotec , 
		licencaplanaltotec , 
		vagasplanaltotec , 
		bloqueadaplanaltotec , 
		quadroplanaltoaux , 
		feriasplanaltoaux , 
		licencaplanaltoaux , 
		vagasplanaltoaux , 
		bloqueadaplanaltoaux , 
		quadroplanaltomul , 
		feriasplanaltomul , 
		licencaplanaltomul , 
		vagasplanaltomul , 
		bloqueadaplanaltomul , 

		function(error,resultado){

		res.redirect("/homeescalacolorida");
	})
}

