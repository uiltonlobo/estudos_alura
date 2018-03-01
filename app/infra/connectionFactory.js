var mysql = require("mysql");

function createDBFactory() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mySQL@123',
        database: 'casadocodigo_nodejs'
    });
};

module.exports = function() {
    return createDBFactory;
}