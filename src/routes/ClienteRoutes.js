const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const { validateCliente } = require('../middlewares/validationMiddleware');

// Rutas de Clientes
router.get('/', verifyToken, isAdmin, clienteController.getClientes);
router.get('/:id', verifyToken, isAdmin, clienteController.getCliente);
router.post('/', verifyToken, isAdmin, validateCliente, clienteController.createCliente);
router.put('/:id', verifyToken, isAdmin, validateCliente, clienteController.updateCliente);
router.delete('/:id', verifyToken, isAdmin, clienteController.deleteCliente);

module.exports = router;
