const mysql = require('mysql');
const util = require('util')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'dynamic',
    password: 'test',
    database: 'Inventory',
    port:'3307'
})

pool.getConnection((err: any, connection: any) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
});

pool.query = util.promisify(pool.query) // Magic happens here.

export { pool };