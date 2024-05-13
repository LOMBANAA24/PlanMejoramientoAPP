const mysql = require('mysql2');
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const db = mysql.createConnection({
    host: process.env.DB_HOST,
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
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

module.exports = db;
