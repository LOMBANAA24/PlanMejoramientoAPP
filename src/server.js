const express = require('express');
require("dotenv").config();

const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 9010;

// Rutas
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// MongoDB Connection
connectDB();

app.listen(port, () => console.log("Servidor corriendo en puerto", port));
