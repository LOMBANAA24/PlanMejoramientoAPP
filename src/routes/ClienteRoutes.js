// ClienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');
const { verifyToken, isAdmin, isNormalAdmin } = require('../middlewares/authMiddleware');

// Rutas de Clientes
router.get('/', verifyToken, isAdmin, clienteController.getClientes);
router.get('/:id', verifyToken, isAdmin, clienteController.getCliente);
router.post('/', verifyToken, isAdmin, clienteController.createCliente);
router.put('/:id', verifyToken, isAdmin, clienteController.updateCliente);
router.delete('/:id', verifyToken, isAdmin, clienteController.deleteCliente);

module.exports = router;
