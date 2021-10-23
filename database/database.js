const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'smartasone11HH!', //Change password based on local configuration
    database: 'anonymous-blog'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err

    console.log('Database initialized!')
})

connection.end()