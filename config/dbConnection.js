var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 25,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portal_pacientes',

});

// const pool = mysql.createPool({
//     connectionLimit: 25,
//     host : 'mysql742.umbler.com',
//     user : 'scihuberlandia',
//     password : 'Bflc1989',
//     database : 'portal_pacientes',

// });


console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada')); 

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

pool => (req, res, next) => {

    pool.getConnection((err, connection) => {
        if(err) return next(err);
        console.log('pool => obteve conexão');
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
}