const express = require('express');
const router = express.Router();
const garajeController = require('../controllers/GarajeController');

router.get('/', garajeController.getGarajes);
router.get('/:id', garajeController.getGaraje);
router.post('/', garajeController.createGaraje);
router.put('/:id', garajeController.updateGaraje);
router.delete('/:id', garajeController.deleteGaraje);

module.exports = router;
