const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST, // Utilizando la variable de entorno
    port: process.env.DB_PORT, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME, 
    authPlugins: {
        mysql_clear_password: () => Buffer.from(process.env.DB_PASSWORD, 'utf-8'),
        caching_sha2_password: true,
    }
});

db.connect(function(err) {
    if (err) throw err; 
    console.log('Base de datos conectada');
});

module.exports = db;
