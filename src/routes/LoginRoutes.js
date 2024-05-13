const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const { validateLogin } = require('../middlewares/validationMiddleware');

// Ruta para el inicio de sesión
router.post('/login', validateLogin, authController.login);

module.exports = router;
