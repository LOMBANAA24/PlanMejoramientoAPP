const mongoose = require('mongoose');

const CiudadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigoPostal: {
    type: String,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  habitantes: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Ciudad', CiudadSchema);
