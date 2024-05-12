const mongoose = require('mongoose');

const MotocicletaSchema = new mongoose.Schema({
  matricula: {
    type: String,
    required: true,
    unique: true,
  },
  bastidor: {
    type: String,
    required: true,
    unique: true,
  },
  color: String,
  marca: String,
  modelo: String,
  garaje: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garaje',
  },
  fechaEntrada: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Motocicleta', MotocicletaSchema);
