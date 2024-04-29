// Garaje.js
const mongoose = require('mongoose');

const GarajeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2, // Longitud mínima del nombre
    maxlength: 50, // Longitud máxima del nombre
  },
  direccion: {
    calle: {
      type: String,
      required: true,
      minlength: 2, // Longitud mínima de la calle
      maxlength: 100, // Longitud máxima de la calle
    },
    numero: {
      type: String,
      required: true,
      minlength: 1, // Longitud mínima del número
      maxlength: 10, // Longitud máxima del número
    },
    ciudad: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ciudad',
    }
  },
  capacidad: {
    type: Number,
    min: 1, // Capacidad mínima
    max: 100, // Capacidad máxima
  },
  espacio: {
    type: Number,
    min: 1, // Espacio mínimo
    max: 1000, // Espacio máximo
  },
  agencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agencia',
  }
});

module.exports = mongoose.model('Garaje', GarajeSchema);
