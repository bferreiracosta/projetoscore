function pacienteDAO(application){
	var conection = require('../../../config/dbConnection');
	this._conection = conection();
}

module.exports = function(){
	return pacienteDAO;
}