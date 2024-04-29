const express = require('express');
const router = express.Router();
const motoController = require('../controllers/MotoController');

router.get('/', motoController.getMotos);
router.get('/:id', motoController.getMoto);
router.post('/', motoController.createMoto);
router.put('/:id', motoController.updateMoto);
router.delete('/:id', motoController.deleteMoto);

module.exports = router;
