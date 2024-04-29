const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
  },
  motocicleta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Motocicleta',
  },
  agencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agencia',
  },
  precio: {
    type: Number,
    required: true,
  },
  pagado: {
    type: Boolean,
    default: false,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  fechaReserva: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Reserva', ReservaSchema);
