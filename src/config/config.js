const mysql = require('mysql2');
const db = mysql.createConnection({
 host: '192.168.36.203', // Dirección de tu base de datos
 port: '8081', // Puerto de tu base de datos
 user: 'root', 
 password: '24023', 
 database: 'motosce',
 authPlugins : {
    mysql_clear_password: () => Buffer.from('24023','utf-8' ),
    caching_sha2_password : true,
 }
});
db.connect(function(err) {
 if (err) throw err; 
 console.log('Base de datos conectada');
});
module.exports = db;
