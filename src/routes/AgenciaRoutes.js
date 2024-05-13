const express = require('express');
const router = express.Router();
const agenciaController = require('../controllers/AgenciaController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const { validateAgencia } = require('../middlewares/validationMiddleware');

// Rutas de Agencias
router.get('/', verifyToken, isAdmin, agenciaController.getAgencias);
router.get('/:id', verifyToken, isAdmin, agenciaController.getAgencia);
router.post('/', verifyToken, isAdmin, validateAgencia, agenciaController.createAgencia);
router.put('/:id', verifyToken, isAdmin, validateAgencia, agenciaController.updateAgencia);
router.delete('/:id', verifyToken, isAdmin, agenciaController.deleteAgencia);

module.exports = router;
