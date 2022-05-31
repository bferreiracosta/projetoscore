module.exports.escalacolorida = function(application, req, res){
	
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
																		res.render("escalacolorida/homeescalacolorida", 
																		{planalto:resultplanalto,
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
																			capsnorte:resultcapsnorte});
																	});
																});
															});
														});
													});
												});
											});
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


