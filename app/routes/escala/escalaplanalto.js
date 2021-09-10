const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.escalaplanalto(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.criarescalaplanalto(application, req, res);
		});
	application.get('/updateescalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateescalaplanalto(application, req, res);
		});
	application.post('/validarescalaplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.validarescala(application, req, res);
		});
	application.post('/updateferiasplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateferias(application, req, res);
		});
	application.get('/updateescalaplanaltotarde', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateescalaplanaltotarde(application, req, res);
		});
	application.get('/updateescalaplanaltoSN1', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateescalaplanaltoSN1(application, req, res);
		});
	application.get('/updateescalaplanaltoSN2', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateescalaplanaltoSN2(application, req, res);
		});
	application.get('/updateescalaplanaltomaq', function(req, res){
		application.app.controllers.escala.escalaplanalto.updateescalaplanaltomaq(application, req, res);
		});
	application.get('/buscarescalamensalplanalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanalto(application, req, res);
		});
	application.get('/buscarescalamaqplanaltodiurno', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamaqplanaltodiurno(application, req, res);
		});
	application.get('/buscarescalamaqplanaltonoturno', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamaqplanaltonoturno(application, req, res);
		});
	application.get('/buscarescalamanhasetor1planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamensalplanaltotarde', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltotarde(application, req, res);
		});
	application.get('/buscarescalatardesetor1planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor1(application, req, res);
		});
	application.get('/buscarescalatardesetor2planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor2(application, req, res);
		});
	application.get('/buscarescalatardesetor3planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor3(application, req, res);
		});
	application.get('/buscarescalatardesetor4planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor4(application, req, res);
		});
	application.get('/buscarescalatardesetor5planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor5(application, req, res);
		});
	application.get('/buscarescalatardesetor6planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor6(application, req, res);
		});
	application.get('/buscarescalatardesetor7planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor7(application, req, res);
		});
	application.get('/buscarescalatardesetor8planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor8(application, req, res);
		});
	application.get('/buscarescalatardesetor9planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor9(application, req, res);
		});
	application.get('/buscarescalatardesetor10planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor10(application, req, res);
		});
	application.get('/buscarescalatardesetor11planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor11(application, req, res);
		});
	application.get('/buscarescalatardesetor12planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor12(application, req, res);
		});
	application.get('/buscarescalatardesetor13planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor13(application, req, res);
		});
	application.get('/buscarescalatardesetor14planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalatardesetor14(application, req, res);
		});
	application.get('/buscarescalamensalplanaltoSN1', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltoSN1(application, req, res);
		});
	application.get('/buscarescalaSN1setor1planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor1(application, req, res);
		});
	application.get('/buscarescalaSN1setor2planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor2(application, req, res);
		});
	application.get('/buscarescalaSN1setor3planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor3(application, req, res);
		});
	application.get('/buscarescalaSN1setor4planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor4(application, req, res);
		});
	application.get('/buscarescalaSN1setor5planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor5(application, req, res);
		});
	application.get('/buscarescalaSN1setor6planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor6(application, req, res);
		});
	application.get('/buscarescalaSN1setor7planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor7(application, req, res);
		});
	application.get('/buscarescalaSN1setor8planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor8(application, req, res);
		});
	application.get('/buscarescalaSN1setor9planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor9(application, req, res);
		});
	application.get('/buscarescalaSN1setor10planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor10(application, req, res);
		});
	application.get('/buscarescalaSN1setor11planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor11(application, req, res);
		});
	application.get('/buscarescalaSN1setor12planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor12(application, req, res);
		});
	application.get('/buscarescalaSN1setor13planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor13(application, req, res);
		});
	application.get('/buscarescalaSN1setor14planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN1setor14(application, req, res);
		});
	application.get('/buscarescalamensalplanaltoSN2', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalamensalplanaltoSN2(application, req, res);
		});
	application.get('/buscarescalaSN2setor1planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor1(application, req, res);
		});
	application.get('/buscarescalaSN2setor2planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor2(application, req, res);
		});
	application.get('/buscarescalaSN2setor3planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor3(application, req, res);
		});
	application.get('/buscarescalaSN2setor4planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor4(application, req, res);
		});
	application.get('/buscarescalaSN2setor5planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor5(application, req, res);
		});
	application.get('/buscarescalaSN2setor6planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor6(application, req, res);
		});
	application.get('/buscarescalaSN2setor7planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor7(application, req, res);
		});
	application.get('/buscarescalaSN2setor8planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor8(application, req, res);
		});
	application.get('/buscarescalaSN2setor9planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor9(application, req, res);
		});
	application.get('/buscarescalaSN2setor10planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor10(application, req, res);
		});
	application.get('/buscarescalaSN2setor11planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor11(application, req, res);
		});
	application.get('/buscarescalaSN2setor12planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor12(application, req, res);
		});
	application.get('/buscarescalaSN2setor13planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor13(application, req, res);
		});
	application.get('/buscarescalaSN2setor14planalto', function(req, res){
		application.app.controllers.escala.escalaplanalto.buscarescalaSN2setor14(application, req, res);
		});
}

