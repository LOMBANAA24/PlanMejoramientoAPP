// AgenciaController.js
const Agencia = require('../models/Agencia');

// Controlador para obtener todas las agencias
exports.obtenerAgencias = async (req, res) => {
  try {
    const agencias = await Agencia.find();
    res.send(agencias);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al obtener las agencias');
  }
};

// Controlador para obtener una agencia por ID
exports.obtenerAgenciaPorId = async (req, res) => {
  try {
    const agencia = await Agencia.findById(req.params.id);
    if (!agencia) {
      return res.status(404).send('Agencia no encontrada');
    }
    res.send(agencia);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al obtener la agencia');
  }
};

// Otros controladores para actualizar y eliminar agencias
