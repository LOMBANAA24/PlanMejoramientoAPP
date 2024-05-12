const express = require('express');
const router = express.Router();
const agenciaController = require('../controllers/AgenciaController');

router.get('/', agenciaController.getAgencias);
router.get('/:id', agenciaController.getAgencia);
router.post('/', agenciaController.createAgencia);
router.put('/:id', agenciaController.updateAgencia);
router.delete('/:id', agenciaController.deleteAgencia);

module.exports = router;
