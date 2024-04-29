const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  DNI: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  buenaCliente: {
    type: Boolean,
    default: false, // Inicialmente, un cliente no es un buen cliente
  },
  seguro: {
    type: String,
    required: true,
  },
  motoAlquilada: {
    matricula: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    fechaInicio: {
      type: String,
      required: true,
    },
    fechaFin: {
      type: String,
      required: true,
    },
    alquiladoDesde: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Garaje', // Referencia al garaje desde el cual se alquila la moto
    },
    foto: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Cliente', ClienteSchema);
