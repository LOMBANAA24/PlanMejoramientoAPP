// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const { validateData } = require('../middlewares/validationMiddleware');

// Ruta para el inicio de sesión
router.post('/login', validateData, authController.login);

module.exports = router;
