const express = require('express');
const router = express.Router();
const motocicletaController = require('../controllers/MotocicletaController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const { validateMotocicleta } = require('../middlewares/validationMiddleware');

// Rutas de Motocicletas
router.get('/', verifyToken, isAdmin, motocicletaController.getMotos);
router.get('/:id', verifyToken, isAdmin, motocicletaController.getMoto);
router.post('/', verifyToken, isAdmin, validateMotocicleta, motocicletaController.createMoto);
router.put('/:id', verifyToken, isAdmin, validateMotocicleta, motocicletaController.updateMoto);
router.delete('/:id', verifyToken, isAdmin, motocicletaController.deleteMoto);

module.exports = router;
