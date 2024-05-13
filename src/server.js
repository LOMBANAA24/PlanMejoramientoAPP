const express = require('express');
const mysql = require('mysql2');
require("dotenv").config();
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// Conexión a la base de datos MySQL
const connection = mysql.createConnection({
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

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

// Iniciando el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
