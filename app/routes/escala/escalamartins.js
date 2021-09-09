const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.escalamartins(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('/home/bruno/Área de Trabalho/Sites/ProjetoSCIH - Original/app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.criarescalamartins(application, req, res);
		});
	application.get('/updateescalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.updateescalamartins(application, req, res);
		});
	application.get('/updateescalamartinsmaq', function(req, res){
		application.app.controllers.escala.escalamartins.updateescalamartinsmaq(application, req, res);
		});
	application.get('/buscarescalamaqmartinsdiurno', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamaqmartinsdiurno(application, req, res);
		});
	application.get('/buscarescalamaqmartinsnoturno', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamaqmartinsnoturno(application, req, res);
		});
	application.post('/validarescalamartins', function(req, res){
		application.app.controllers.escala.escalamartins.validarescala(application, req, res);
		});
	application.post('/updateferiasmartins', function(req, res){
		application.app.controllers.escala.escalamartins.updateferias(application, req, res);
		});
	application.get('/updateescalamartinstarde', function(req, res){
		application.app.controllers.escala.escalamartins.updateescalamartinstarde(application, req, res);
		});
	application.get('/updateescalamartinsSN1', function(req, res){
		application.app.controllers.escala.escalamartins.updateescalamartinsSN1(application, req, res);
		});
	application.get('/updateescalamartinsSN2', function(req, res){
		application.app.controllers.escala.escalamartins.updateescalamartinsSN2(application, req, res);
		});
	application.get('/buscarescalamensalmartins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartins(application, req, res);
		});
	application.get('/buscarescalamanhasetor1martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamanhasetor15martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor15(application, req, res);
		});
	application.get('/buscarescalamanhasetor16martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamanhasetor16(application, req, res);
		});
	application.get('/buscarescalamensalmartinstarde', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinstarde(application, req, res);
		});
	application.get('/buscarescalatardesetor1martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor1(application, req, res);
		});
	application.get('/buscarescalatardesetor2martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor2(application, req, res);
		});
	application.get('/buscarescalatardesetor3martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor3(application, req, res);
		});
	application.get('/buscarescalatardesetor4martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor4(application, req, res);
		});
	application.get('/buscarescalatardesetor5martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor5(application, req, res);
		});
	application.get('/buscarescalatardesetor6martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor6(application, req, res);
		});
	application.get('/buscarescalatardesetor7martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor7(application, req, res);
		});
	application.get('/buscarescalatardesetor8martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor8(application, req, res);
		});
	application.get('/buscarescalatardesetor9martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor9(application, req, res);
		});
	application.get('/buscarescalatardesetor10martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor10(application, req, res);
		});
	application.get('/buscarescalatardesetor11martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor11(application, req, res);
		});
	application.get('/buscarescalatardesetor12martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor12(application, req, res);
		});
	application.get('/buscarescalatardesetor13martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor13(application, req, res);
		});
	application.get('/buscarescalatardesetor14martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor14(application, req, res);
		});
	application.get('/buscarescalatardesetor15martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor15(application, req, res);
		});
	application.get('/buscarescalatardesetor16martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalatardesetor16(application, req, res);
		});
	application.get('/buscarescalamensalmartinsSN1', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinsSN1(application, req, res);
		});
	application.get('/buscarescalaSN1setor1martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor1(application, req, res);
		});
	application.get('/buscarescalaSN1setor2martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor2(application, req, res);
		});
	application.get('/buscarescalaSN1setor3martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor3(application, req, res);
		});
	application.get('/buscarescalaSN1setor4martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor4(application, req, res);
		});
	application.get('/buscarescalaSN1setor5martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor5(application, req, res);
		});
	application.get('/buscarescalaSN1setor6martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor6(application, req, res);
		});
	application.get('/buscarescalaSN1setor7martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor7(application, req, res);
		});
	application.get('/buscarescalaSN1setor8martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor8(application, req, res);
		});
	application.get('/buscarescalaSN1setor9martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor9(application, req, res);
		});
	application.get('/buscarescalaSN1setor10martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor10(application, req, res);
		});
	application.get('/buscarescalaSN1setor11martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor11(application, req, res);
		});
	application.get('/buscarescalaSN1setor12martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor12(application, req, res);
		});
	application.get('/buscarescalaSN1setor13martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor13(application, req, res);
		});
	application.get('/buscarescalaSN1setor14martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor14(application, req, res);
		});
	application.get('/buscarescalaSN1setor15martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor15(application, req, res);
		});
	application.get('/buscarescalaSN1setor16martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN1setor16(application, req, res);
		});
	application.get('/buscarescalamensalmartinsSN2', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalamensalmartinsSN2(application, req, res);
		});
	application.get('/buscarescalaSN2setor1martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor1(application, req, res);
		});
	application.get('/buscarescalaSN2setor2martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor2(application, req, res);
		});
	application.get('/buscarescalaSN2setor3martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor3(application, req, res);
		});
	application.get('/buscarescalaSN2setor4martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor4(application, req, res);
		});
	application.get('/buscarescalaSN2setor5martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor5(application, req, res);
		});
	application.get('/buscarescalaSN2setor6martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor6(application, req, res);
		});
	application.get('/buscarescalaSN2setor7martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor7(application, req, res);
		});
	application.get('/buscarescalaSN2setor8martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor8(application, req, res);
		});
	application.get('/buscarescalaSN2setor9martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor9(application, req, res);
		});
	application.get('/buscarescalaSN2setor10martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor10(application, req, res);
		});
	application.get('/buscarescalaSN2setor11martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor11(application, req, res);
		});
	application.get('/buscarescalaSN2setor12martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor12(application, req, res);
		});
	application.get('/buscarescalaSN2setor13martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor13(application, req, res);
		});
	application.get('/buscarescalaSN2setor14martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor14(application, req, res);
		});
	application.get('/buscarescalaSN2setor15martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor15(application, req, res);
		});
	application.get('/buscarescalaSN2setor16martins', function(req, res){
		application.app.controllers.escala.escalamartins.buscarescalaSN2setor16(application, req, res);
		});
}

