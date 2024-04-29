const Reserva = require('../models/Reserva');

exports.crearReserva = async (req, res) => {
  try {
    let reserva = new Reserva(req.body);
    await reserva.save();
    res.send(reserva);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

// Otros controladores para manejar otras operaciones con reservas
