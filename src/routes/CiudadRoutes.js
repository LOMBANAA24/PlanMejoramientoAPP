// CiudadRoutes.js
const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/CiudadController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Rutas de Ciudades
router.get('/', verifyToken, isAdmin, ciudadController.getCiudades);
router.get('/:id', verifyToken, isAdmin, ciudadController.getCiudad);
router.post('/', verifyToken, isAdmin, ciudadController.createCiudad);
router.put('/:id', verifyToken, isAdmin, ciudadController.updateCiudad);
router.delete('/:id', verifyToken, isAdmin, ciudadController.deleteCiudad);

module.exports = router;
