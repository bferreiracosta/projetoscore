const fs = require('fs')

module.exports = function(application){
	
	application.get('/escalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.escalamorumbi(application, req, res);
		});
	
	application.get('/burcarferiado', function(req, res){
		fs.readFile('/home/bruno/Área de Trabalho/Sites/ProjetoSCIH - Original/app/routes/escala/Feriados', (err, resultado) => {
			if (err) throw err;

			res.send(resultado);
			
		  });
		});

	application.post('/criarescalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.criarescalamorumbi(application, req, res);
		});
	application.get('/updateescalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateescalamorumbi(application, req, res);
		});
	application.post('/validarescalamorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.validarescala(application, req, res);
		});
	application.post('/updateferiasmorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateferias(application, req, res);
		});
	application.get('/updateescalamorumbitarde', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateescalamorumbitarde(application, req, res);
		});
	application.get('/updateescalamorumbiSN1', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateescalamorumbiSN1(application, req, res);
		});
	application.get('/updateescalamorumbiSN2', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateescalamorumbiSN2(application, req, res);
		});
	application.get('/updateescalamorumbimaq', function(req, res){
		application.app.controllers.escala.escalamorumbi.updateescalamorumbimaq(application, req, res);
		});
	application.get('/buscarescalamensalmorumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbi(application, req, res);
		});
	application.get('/buscarescalamaqmorumbidiurno', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamaqmorumbidiurno(application, req, res);
		});
	application.get('/buscarescalamaqmorumbinoturno', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamaqmorumbinoturno(application, req, res);
		});
	application.get('/buscarescalamanhasetor1morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor1(application, req, res);
		});
	application.get('/buscarescalamanhasetor2morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor2(application, req, res);
		});
	application.get('/buscarescalamanhasetor3morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor3(application, req, res);
		});
	application.get('/buscarescalamanhasetor4morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor4(application, req, res);
		});
	application.get('/buscarescalamanhasetor5morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor5(application, req, res);
		});
	application.get('/buscarescalamanhasetor6morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor6(application, req, res);
		});
	application.get('/buscarescalamanhasetor7morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor7(application, req, res);
		});
	application.get('/buscarescalamanhasetor8morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor8(application, req, res);
		});
	application.get('/buscarescalamanhasetor9morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor9(application, req, res);
		});
	application.get('/buscarescalamanhasetor10morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor10(application, req, res);
		});
	application.get('/buscarescalamanhasetor11morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor11(application, req, res);
		});
	application.get('/buscarescalamanhasetor12morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor12(application, req, res);
		});
	application.get('/buscarescalamanhasetor13morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor13(application, req, res);
		});
	application.get('/buscarescalamanhasetor14morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamanhasetor14(application, req, res);
		});
	application.get('/buscarescalamensalmorumbitarde', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbitarde(application, req, res);
		});
	application.get('/buscarescalatardesetor1morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor1(application, req, res);
		});
	application.get('/buscarescalatardesetor2morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor2(application, req, res);
		});
	application.get('/buscarescalatardesetor3morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor3(application, req, res);
		});
	application.get('/buscarescalatardesetor4morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor4(application, req, res);
		});
	application.get('/buscarescalatardesetor5morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor5(application, req, res);
		});
	application.get('/buscarescalatardesetor6morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor6(application, req, res);
		});
	application.get('/buscarescalatardesetor7morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor7(application, req, res);
		});
	application.get('/buscarescalatardesetor8morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor8(application, req, res);
		});
	application.get('/buscarescalatardesetor9morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor9(application, req, res);
		});
	application.get('/buscarescalatardesetor10morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor10(application, req, res);
		});
	application.get('/buscarescalatardesetor11morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor11(application, req, res);
		});
	application.get('/buscarescalatardesetor12morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor12(application, req, res);
		});
	application.get('/buscarescalatardesetor13morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor13(application, req, res);
		});
	application.get('/buscarescalatardesetor14morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalatardesetor14(application, req, res);
		});
	application.get('/buscarescalamensalmorumbiSN1', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbiSN1(application, req, res);
		});
	application.get('/buscarescalaSN1setor1morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor1(application, req, res);
		});
	application.get('/buscarescalaSN1setor2morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor2(application, req, res);
		});
	application.get('/buscarescalaSN1setor3morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor3(application, req, res);
		});
	application.get('/buscarescalaSN1setor4morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor4(application, req, res);
		});
	application.get('/buscarescalaSN1setor5morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor5(application, req, res);
		});
	application.get('/buscarescalaSN1setor6morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor6(application, req, res);
		});
	application.get('/buscarescalaSN1setor7morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor7(application, req, res);
		});
	application.get('/buscarescalaSN1setor8morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor8(application, req, res);
		});
	application.get('/buscarescalaSN1setor9morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor9(application, req, res);
		});
	application.get('/buscarescalaSN1setor10morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor10(application, req, res);
		});
	application.get('/buscarescalaSN1setor11morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor11(application, req, res);
		});
	application.get('/buscarescalaSN1setor12morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor12(application, req, res);
		});
	application.get('/buscarescalaSN1setor13morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor13(application, req, res);
		});
	application.get('/buscarescalaSN1setor14morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN1setor14(application, req, res);
		});
	application.get('/buscarescalamensalmorumbiSN2', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalamensalmorumbiSN2(application, req, res);
		});
	application.get('/buscarescalaSN2setor1morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor1(application, req, res);
		});
	application.get('/buscarescalaSN2setor2morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor2(application, req, res);
		});
	application.get('/buscarescalaSN2setor3morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor3(application, req, res);
		});
	application.get('/buscarescalaSN2setor4morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor4(application, req, res);
		});
	application.get('/buscarescalaSN2setor5morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor5(application, req, res);
		});
	application.get('/buscarescalaSN2setor6morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor6(application, req, res);
		});
	application.get('/buscarescalaSN2setor7morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor7(application, req, res);
		});
	application.get('/buscarescalaSN2setor8morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor8(application, req, res);
		});
	application.get('/buscarescalaSN2setor9morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor9(application, req, res);
		});
	application.get('/buscarescalaSN2setor10morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor10(application, req, res);
		});
	application.get('/buscarescalaSN2setor11morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor11(application, req, res);
		});
	application.get('/buscarescalaSN2setor12morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor12(application, req, res);
		});
	application.get('/buscarescalaSN2setor13morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor13(application, req, res);
		});
	application.get('/buscarescalaSN2setor14morumbi', function(req, res){
		application.app.controllers.escala.escalamorumbi.buscarescalaSN2setor14(application, req, res);
		});
}

