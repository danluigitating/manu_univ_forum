const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'smartasone11HH!', //Change password based on local configuration
    database: 'anonymous-blog'
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
    console.log('Database initialized!')
})

module.exports = connection;