<<<<<<< HEAD
var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 25,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portal_paciente',

});

// const pool = mysql.createPool({
//     connectionLimit: 25,
//     host : 'portal-paciente.mysql.uhserver.com',
//     user : 'portal_paciente',
//     password : 'Bflc1989@',
//     database : 'portal_paciente',

// });







process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        process.exit(0);
    })
); 

pool => (req, res, next) => {

    pool.getConnection((err, connection) => {
        if(err) return next(err);
        // adicionou a conexão na requisição
        req.connection = connection;
        // passa a requisição o próximo middleware
        next();
        // devolve a conexão para o pool no final da resposta
        res.on('finish', () => req.connection.release());
    });
};
module.exports = function () {
	return pool;
=======
var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 25,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portal_paciente',

});

// const pool = mysql.createPool({
//     connectionLimit: 25,
//     host : 'portal-paciente.mysql.uhserver.com',
//     user : 'portal_paciente',
//     password : 'Bflc1989@',
//     database : 'portal_paciente',

// });







process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        process.exit(0);
    })
); 

pool => (req, res, next) => {

    pool.getConnection((err, connection) => {
        if(err) return next(err);
        // adicionou a conexão na requisição
        req.connection = connection;
        // passa a requisição o próximo middleware
        next();
        // devolve a conexão para o pool no final da resposta
        res.on('finish', () => req.connection.release());
    });
};
module.exports = function () {
	return pool;
>>>>>>> 17b38d426456f0d2076af807e7cfc404ea34af31
}