const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/CiudadController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const { validateCiudad } = require('../middlewares/validationMiddleware');

// Rutas de Ciudades
router.get('/', verifyToken, isAdmin, ciudadController.getCiudades);
router.get('/:id', verifyToken, isAdmin, ciudadController.getCiudad);
router.post('/', verifyToken, isAdmin, validateCiudad, ciudadController.createCiudad);
router.put('/:id', verifyToken, isAdmin, validateCiudad, ciudadController.updateCiudad);
router.delete('/:id', verifyToken, isAdmin, ciudadController.deleteCiudad);

module.exports = router;
