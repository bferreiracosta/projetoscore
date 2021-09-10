const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.escalatibery(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.criarescalatibery(application, req, res);
		});
	application.get('/updateescalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.updateescalatibery(application, req, res);
		});
	application.post('/validarescalatibery', function(req, res){
		application.app.controllers.escala.escalatibery.validarescala(application, req, res);
		});
	application.post('/updateferiastibery', function(req, res){
		application.app.controllers.escala.escalatibery.updateferias(application, req, res);
		});
	application.get('/updateescalatiberytarde', function(req, res){
		application.app.controllers.escala.escalatibery.updateescalatiberytarde(application, req, res);
		});
	application.get('/updateescalatiberySN1', function(req, res){
		application.app.controllers.escala.escalatibery.updateescalatiberySN1(application, req, res);
		});
	application.get('/updateescalatiberySN2', function(req, res){
		application.app.controllers.escala.escalatibery.updateescalatiberySN2(application, req, res);
		});
	application.get('/updateescalatiberymaq', function(req, res){
		application.app.controllers.escala.escalatibery.updateescalatiberymaq(application, req, res);
		});
	application.get('/buscarescalamensaltibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltibery(application, req, res);
		});
	application.get('/buscarescalamaqtiberydiurno', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamaqtiberydiurno(application, req, res);
		});
	application.get('/buscarescalamaqtiberynoturno', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamaqtiberynoturno(application, req, res);
		});
	application.get('/buscarescalamanhasetor1tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamensaltiberytarde', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberytarde(application, req, res);
		});
	application.get('/buscarescalatardesetor1tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor1(application, req, res);
		});
	application.get('/buscarescalatardesetor2tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor2(application, req, res);
		});
	application.get('/buscarescalatardesetor3tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor3(application, req, res);
		});
	application.get('/buscarescalatardesetor4tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor4(application, req, res);
		});
	application.get('/buscarescalatardesetor5tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor5(application, req, res);
		});
	application.get('/buscarescalatardesetor6tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor6(application, req, res);
		});
	application.get('/buscarescalatardesetor7tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor7(application, req, res);
		});
	application.get('/buscarescalatardesetor8tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor8(application, req, res);
		});
	application.get('/buscarescalatardesetor9tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor9(application, req, res);
		});
	application.get('/buscarescalatardesetor10tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor10(application, req, res);
		});
	application.get('/buscarescalatardesetor11tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor11(application, req, res);
		});
	application.get('/buscarescalatardesetor12tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor12(application, req, res);
		});
	application.get('/buscarescalatardesetor13tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor13(application, req, res);
		});
	application.get('/buscarescalatardesetor14tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalatardesetor14(application, req, res);
		});
	application.get('/buscarescalamensaltiberySN1', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberySN1(application, req, res);
		});
	application.get('/buscarescalaSN1setor1tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor1(application, req, res);
		});
	application.get('/buscarescalaSN1setor2tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor2(application, req, res);
		});
	application.get('/buscarescalaSN1setor3tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor3(application, req, res);
		});
	application.get('/buscarescalaSN1setor4tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor4(application, req, res);
		});
	application.get('/buscarescalaSN1setor5tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor5(application, req, res);
		});
	application.get('/buscarescalaSN1setor6tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor6(application, req, res);
		});
	application.get('/buscarescalaSN1setor7tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor7(application, req, res);
		});
	application.get('/buscarescalaSN1setor8tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor8(application, req, res);
		});
	application.get('/buscarescalaSN1setor9tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor9(application, req, res);
		});
	application.get('/buscarescalaSN1setor10tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor10(application, req, res);
		});
	application.get('/buscarescalaSN1setor11tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor11(application, req, res);
		});
	application.get('/buscarescalaSN1setor12tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor12(application, req, res);
		});
	application.get('/buscarescalaSN1setor13tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor13(application, req, res);
		});
	application.get('/buscarescalaSN1setor14tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN1setor14(application, req, res);
		});
	application.get('/buscarescalamensaltiberySN2', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalamensaltiberySN2(application, req, res);
		});
	application.get('/buscarescalaSN2setor1tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor1(application, req, res);
		});
	application.get('/buscarescalaSN2setor2tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor2(application, req, res);
		});
	application.get('/buscarescalaSN2setor3tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor3(application, req, res);
		});
	application.get('/buscarescalaSN2setor4tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor4(application, req, res);
		});
	application.get('/buscarescalaSN2setor5tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor5(application, req, res);
		});
	application.get('/buscarescalaSN2setor6tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor6(application, req, res);
		});
	application.get('/buscarescalaSN2setor7tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor7(application, req, res);
		});
	application.get('/buscarescalaSN2setor8tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor8(application, req, res);
		});
	application.get('/buscarescalaSN2setor9tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor9(application, req, res);
		});
	application.get('/buscarescalaSN2setor10tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor10(application, req, res);
		});
	application.get('/buscarescalaSN2setor11tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor11(application, req, res);
		});
	application.get('/buscarescalaSN2setor12tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor12(application, req, res);
		});
	application.get('/buscarescalaSN2setor13tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor13(application, req, res);
		});
	application.get('/buscarescalaSN2setor14tibery', function(req, res){
		application.app.controllers.escala.escalatibery.buscarescalaSN2setor14(application, req, res);
		});
}

