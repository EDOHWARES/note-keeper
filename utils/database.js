const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'note-keeper',
    password: 'new_password'
});

module.exports = pool.promise();