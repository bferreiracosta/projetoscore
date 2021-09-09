const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.escalaluizote(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('/home/bruno/Área de Trabalho/Sites/ProjetoSCIH - Original/app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.criarescalaluizote(application, req, res);
		});
	application.get('/updateescalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizote(application, req, res);
		});
	application.post('/validarescalaluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.validarescala(application, req, res);
		});
	application.post('/updateferiasluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.updateferias(application, req, res);
		});
	application.get('/updateescalaluizotetarde', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizotetarde(application, req, res);
		});
	application.get('/updateescalaluizoteSN1', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizoteSN1(application, req, res);
		});
	application.get('/updateescalaluizoteSN2', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizoteSN2(application, req, res);
		});
	application.get('/updateescalaluizotemaq', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizotemaq(application, req, res);
		});
	application.get('/updateescalaluizotecentro', function(req, res){
		application.app.controllers.escala.escalaluizote.updateescalaluizotecentro(application, req, res);
		});
	application.get('/buscarescalamensalluizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizote(application, req, res);
		});
	application.get('/buscarescalamaqluizotediurno', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamaqluizotediurno(application, req, res);
		});
	application.get('/buscarescalamaqluizotenoturno', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamaqluizotenoturno(application, req, res);
		});
	application.get('/buscarescalacentroluizotemanha', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalacentroluizotemanha(application, req, res);
		});
	application.get('/buscarescalacentroluizotetarde', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalacentroluizotetarde(application, req, res);
		});
	application.get('/buscarescalamanhasetor1luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamanhasetor15luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamanhasetor15(application, req, res);
		});
	application.get('/buscarescalamensalluizotetarde', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizotetarde(application, req, res);
		});
	application.get('/buscarescalatardesetor1luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor1(application, req, res);
		});
	application.get('/buscarescalatardesetor2luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor2(application, req, res);
		});
	application.get('/buscarescalatardesetor3luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor3(application, req, res);
		});
	application.get('/buscarescalatardesetor4luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor4(application, req, res);
		});
	application.get('/buscarescalatardesetor5luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor5(application, req, res);
		});
	application.get('/buscarescalatardesetor6luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor6(application, req, res);
		});
	application.get('/buscarescalatardesetor7luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor7(application, req, res);
		});
	application.get('/buscarescalatardesetor8luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor8(application, req, res);
		});
	application.get('/buscarescalatardesetor9luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor9(application, req, res);
		});
	application.get('/buscarescalatardesetor10luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor10(application, req, res);
		});
	application.get('/buscarescalatardesetor11luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor11(application, req, res);
		});
	application.get('/buscarescalatardesetor12luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor12(application, req, res);
		});
	application.get('/buscarescalatardesetor13luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor13(application, req, res);
		});
	application.get('/buscarescalatardesetor14luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor14(application, req, res);
		});
	application.get('/buscarescalatardesetor15luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalatardesetor15(application, req, res);
		});
	application.get('/buscarescalamensalluizoteSN1', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizoteSN1(application, req, res);
		});
	application.get('/buscarescalaSN1setor1luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor1(application, req, res);
		});
	application.get('/buscarescalaSN1setor2luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor2(application, req, res);
		});
	application.get('/buscarescalaSN1setor3luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor3(application, req, res);
		});
	application.get('/buscarescalaSN1setor4luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor4(application, req, res);
		});
	application.get('/buscarescalaSN1setor5luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor5(application, req, res);
		});
	application.get('/buscarescalaSN1setor6luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor6(application, req, res);
		});
	application.get('/buscarescalaSN1setor7luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor7(application, req, res);
		});
	application.get('/buscarescalaSN1setor8luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor8(application, req, res);
		});
	application.get('/buscarescalaSN1setor9luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor9(application, req, res);
		});
	application.get('/buscarescalaSN1setor10luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor10(application, req, res);
		});
	application.get('/buscarescalaSN1setor11luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor11(application, req, res);
		});
	application.get('/buscarescalaSN1setor12luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor12(application, req, res);
		});
	application.get('/buscarescalaSN1setor13luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor13(application, req, res);
		});
	application.get('/buscarescalaSN1setor14luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor14(application, req, res);
		});
	application.get('/buscarescalaSN1setor15luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN1setor15(application, req, res);
		});
	application.get('/buscarescalamensalluizoteSN2', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalamensalluizoteSN2(application, req, res);
		});
	application.get('/buscarescalaSN2setor1luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor1(application, req, res);
		});
	application.get('/buscarescalaSN2setor2luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor2(application, req, res);
		});
	application.get('/buscarescalaSN2setor3luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor3(application, req, res);
		});
	application.get('/buscarescalaSN2setor4luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor4(application, req, res);
		});
	application.get('/buscarescalaSN2setor5luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor5(application, req, res);
		});
	application.get('/buscarescalaSN2setor6luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor6(application, req, res);
		});
	application.get('/buscarescalaSN2setor7luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor7(application, req, res);
		});
	application.get('/buscarescalaSN2setor8luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor8(application, req, res);
		});
	application.get('/buscarescalaSN2setor9luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor9(application, req, res);
		});
	application.get('/buscarescalaSN2setor10luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor10(application, req, res);
		});
	application.get('/buscarescalaSN2setor11luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor11(application, req, res);
		});
	application.get('/buscarescalaSN2setor12luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor12(application, req, res);
		});
	application.get('/buscarescalaSN2setor13luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor13(application, req, res);
		});
	application.get('/buscarescalaSN2setor14luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor14(application, req, res);
		});
	application.get('/buscarescalaSN2setor15luizote', function(req, res){
		application.app.controllers.escala.escalaluizote.buscarescalaSN2setor15(application, req, res);
		});
}

