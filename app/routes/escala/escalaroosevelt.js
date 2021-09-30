const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.escalaroosevelt(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.criarescalaroosevelt(application, req, res);
		});
	application.get('/updateescalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateescalaroosevelt(application, req, res);
		});
	application.post('/validarescalaroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.validarescala(application, req, res);
		});
	application.post('/updateferiasroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateferias(application, req, res);
		});
	application.get('/updateescalaroosevelttarde', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateescalaroosevelttarde(application, req, res);
		});
	application.get('/updateescalarooseveltSN1', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateescalarooseveltSN1(application, req, res);
		});
	application.get('/updateescalarooseveltSN2', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateescalarooseveltSN2(application, req, res);
		});
	application.get('/updateescalarooseveltmaq', function(req, res){
		application.app.controllers.escala.escalaroosevelt.updateescalarooseveltmaq(application, req, res);
		});
	application.get('/buscarescalamensalroosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalroosevelt(application, req, res);
		});
	application.get('/buscarescalamaqrooseveltdiurno', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamaqrooseveltdiurno(application, req, res);
		});
	application.get('/buscarescalamaqrooseveltnoturno', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamaqrooseveltnoturno(application, req, res);
		});
	application.get('/buscarescalamanhasetor1roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamensalroosevelttarde', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalroosevelttarde(application, req, res);
		});
	application.get('/buscarescalatardesetor1roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor1(application, req, res);
		});
	application.get('/buscarescalatardesetor2roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor2(application, req, res);
		});
	application.get('/buscarescalatardesetor3roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor3(application, req, res);
		});
	application.get('/buscarescalatardesetor4roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor4(application, req, res);
		});
	application.get('/buscarescalatardesetor5roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor5(application, req, res);
		});
	application.get('/buscarescalatardesetor6roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor6(application, req, res);
		});
	application.get('/buscarescalatardesetor7roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor7(application, req, res);
		});
	application.get('/buscarescalatardesetor8roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor8(application, req, res);
		});
	application.get('/buscarescalatardesetor9roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor9(application, req, res);
		});
	application.get('/buscarescalatardesetor10roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor10(application, req, res);
		});
	application.get('/buscarescalatardesetor11roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor11(application, req, res);
		});
	application.get('/buscarescalatardesetor12roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor12(application, req, res);
		});
	application.get('/buscarescalatardesetor13roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor13(application, req, res);
		});
	application.get('/buscarescalatardesetor14roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalatardesetor14(application, req, res);
		});
	application.get('/buscarescalamensalrooseveltSN1', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalrooseveltSN1(application, req, res);
		});
	application.get('/buscarescalaSN1setor1roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor1(application, req, res);
		});
	application.get('/buscarescalaSN1setor2roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor2(application, req, res);
		});
	application.get('/buscarescalaSN1setor3roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor3(application, req, res);
		});
	application.get('/buscarescalaSN1setor4roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor4(application, req, res);
		});
	application.get('/buscarescalaSN1setor5roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor5(application, req, res);
		});
	application.get('/buscarescalaSN1setor6roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor6(application, req, res);
		});
	application.get('/buscarescalaSN1setor7roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor7(application, req, res);
		});
	application.get('/buscarescalaSN1setor8roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor8(application, req, res);
		});
	application.get('/buscarescalaSN1setor9roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor9(application, req, res);
		});
	application.get('/buscarescalaSN1setor10roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor10(application, req, res);
		});
	application.get('/buscarescalaSN1setor11roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor11(application, req, res);
		});
	application.get('/buscarescalaSN1setor12roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor12(application, req, res);
		});
	application.get('/buscarescalaSN1setor13roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor13(application, req, res);
		});
	application.get('/buscarescalaSN1setor14roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN1setor14(application, req, res);
		});
	application.get('/buscarescalamensalrooseveltSN2', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalamensalrooseveltSN2(application, req, res);
		});
	application.get('/buscarescalaSN2setor1roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor1(application, req, res);
		});
	application.get('/buscarescalaSN2setor2roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor2(application, req, res);
		});
	application.get('/buscarescalaSN2setor3roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor3(application, req, res);
		});
	application.get('/buscarescalaSN2setor4roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor4(application, req, res);
		});
	application.get('/buscarescalaSN2setor5roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor5(application, req, res);
		});
	application.get('/buscarescalaSN2setor6roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor6(application, req, res);
		});
	application.get('/buscarescalaSN2setor7roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor7(application, req, res);
		});
	application.get('/buscarescalaSN2setor8roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor8(application, req, res);
		});
	application.get('/buscarescalaSN2setor9roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor9(application, req, res);
		});
	application.get('/buscarescalaSN2setor10roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor10(application, req, res);
		});
	application.get('/buscarescalaSN2setor11roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor11(application, req, res);
		});
	application.get('/buscarescalaSN2setor12roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor12(application, req, res);
		});
	application.get('/buscarescalaSN2setor13roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor13(application, req, res);
		});
	application.get('/buscarescalaSN2setor14roosevelt', function(req, res){
		application.app.controllers.escala.escalaroosevelt.buscarescalaSN2setor14(application, req, res);
		});
}

