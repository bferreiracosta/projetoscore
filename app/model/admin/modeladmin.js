function modeladmin(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}
modeladmin.prototype.autenticar = function(usuario, senha, req, res){
	var usuario = usuario;
	var senha = senha;

	if (usuario && senha) {
		this._conection.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha], function(error, results, fields) {
			
			res.send(results);				
			
		});
	} 	
}



modeladmin.prototype.login = function(usuario, senha, funcao, req, res){
	
	var usuario = usuario;
	var senha = senha;
	var funcao = funcao;
	
	if (usuario && senha) {
		this._conection.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha], function(error, results, fields) {
			
				if (results.length > 0) {
					if(results[0].escala == 1){
					 req.session.loggedin = true;
					req.session.usuario = results[0].usuario;
												
					res.render('home/homeescala', {id : results});
				} else {
					var mensage = "Você nao tem autorização para esse modulo";
					res.render("home/index", {msg : mensage});
				}			
			}
			else{
				var mensage = "Usuario o senha incorreto";
					res.render("home/index", {msg : mensage});
			}
			res.end();
		});
	} else {
		var mensage = "Por favor entre com usuario e senha";
					res.render("home/index", {msg : mensage});
	}
}


modeladmin.prototype.updatepassword = function(usuario, senha,  callback){

	this._conection.query('select id_usuario from usuarios where usuario = "'+usuario+'" and senha = "'+senha+'"', callback);
}
modeladmin.prototype.mudarsenha = function(id, senha,  callback){
	var idusuario = id[0].id_usuario;
	
	this._conection.query('update usuarios set senha =  "'+senha+'" where id_usuario = "'+idusuario+'"', callback);
}

modeladmin.prototype.buscarusuarioeditavel = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

modeladmin.prototype.buscarusuario = function(id, callback){
	
	this._conection.query('select * from usuarios where id_usuario = ' + id.id, callback);
}

modeladmin.prototype.buscarusuarioporid = function(id, callback){

	this._conection.query('select * from usuarios where id_usuario = ' + id, callback);
}

module.exports = function(){
	return modeladmin;
}