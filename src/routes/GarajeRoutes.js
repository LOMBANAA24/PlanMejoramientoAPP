// GarajeRoutes.js
const express = require('express');
const router = express.Router();
const garajeController = require('../controllers/GarajeController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Rutas de Garajes
router.get('/', verifyToken, isAdmin, garajeController.getGarajes);
router.get('/:id', verifyToken, isAdmin, garajeController.getGaraje);
router.post('/', verifyToken, isAdmin, garajeController.createGaraje);
router.put('/:id', verifyToken, isAdmin, garajeController.updateGaraje);
router.delete('/:id', verifyToken, isAdmin, garajeController.deleteGaraje);

module.exports = router;
