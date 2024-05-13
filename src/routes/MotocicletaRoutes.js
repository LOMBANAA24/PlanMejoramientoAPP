// MotocicletaRoutes.js
const express = require('express');
const router = express.Router();
const motocicletaController = require('../controllers/MotocicletaController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Rutas de Motocicletas
router.get('/', verifyToken, isAdmin, motocicletaController.getMotocicletas);
router.get('/:id', verifyToken, isAdmin, motocicletaController.getMotocicleta);
router.post('/', verifyToken, isAdmin, motocicletaController.createMotocicleta);
router.put('/:id', verifyToken, isAdmin, motocicletaController.updateMotocicleta);
router.delete('/:id', verifyToken, isAdmin, motocicletaController.deleteMotocicleta);

module.exports = router;
