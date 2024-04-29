// GarajeController.js
const Garaje = require('../models/Garaje');

// Controlador para crear un garaje
exports.crearGaraje = async (req, res) => {
  try {
    const { nombre, direccion } = req.body;
    if (!nombre || !direccion) {
      return res.status(400).send('Se requiere nombre y dirección');
    }
    const garaje = new Garaje({ nombre, direccion });
    await garaje.save();
    res.send(garaje);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al crear el garaje');
  }
};

// Otros controladores para actualizar y eliminar garajes
