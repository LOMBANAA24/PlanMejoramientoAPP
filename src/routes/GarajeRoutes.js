const express = require('express');
const router = express.Router();
const garajeController = require('../controllers/GarajeController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const { validateGaraje } = require('../middlewares/validationMiddleware');

// Rutas de Garajes
router.get('/', verifyToken, isAdmin, garajeController.getGarajes);
router.get('/:id', verifyToken, isAdmin, garajeController.getGaraje);
router.post('/', verifyToken, isAdmin, validateGaraje, garajeController.createGaraje);
router.put('/:id', verifyToken, isAdmin, validateGaraje, garajeController.updateGaraje);
router.delete('/:id', verifyToken, isAdmin, garajeController.deleteGaraje);

module.exports = router;
