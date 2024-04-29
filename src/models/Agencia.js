// Agencia.js
const mongoose = require('mongoose');

const AgenciaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
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
  telefonos: {
    type: [String],
    validate: { // Validación para asegurar que los números de teléfono tengan el formato correcto
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} no es un número de teléfono válido`
    }
  },
});

module.exports = mongoose.model('Agencia', AgenciaSchema);


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
