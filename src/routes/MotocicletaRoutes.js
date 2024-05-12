const express = require('express');
const router = express.Router();
const motocicletaController = require('../controllers/MotocicletaController');

router.get('/', motocicletaController.getMotocicletas);
router.get('/:id', motocicletaController.getMotocicleta);
router.post('/', motocicletaController.createMotocicleta);
router.put('/:id', motocicletaController.updateMotocicleta);
router.delete('/:id', motocicletaController.deleteMotocicleta);

module.exports = router;
