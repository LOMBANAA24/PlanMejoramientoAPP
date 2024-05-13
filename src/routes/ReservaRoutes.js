const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReservaController');
const { verifyToken, isAdmin, isNormalAdmin } = require('../middlewares/authMiddleware');
const { validateReserva } = require('../middlewares/validationMiddleware');

// Rutas de Reservas
router.get('/', verifyToken, isAdmin, reservaController.getReservas);
router.get('/:id', verifyToken, isAdmin, reservaController.getReserva);
router.post('/', verifyToken, isNormalAdmin, validateReserva, reservaController.createReserva);
router.put('/:id', verifyToken, isNormalAdmin, validateReserva, reservaController.updateReserva);
router.delete('/:id', verifyToken, isNormalAdmin, reservaController.deleteReserva);

module.exports = router;
