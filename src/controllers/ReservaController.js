const { validationResult } = require('express-validator');
const Reserva = require('../models/Reserva');

exports.getReservas = async (req, res) => {
    Reserva.find({}, (err, reservas) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reservations."
            });
        } else {
            res.send(reservas);
        }
    });
};

exports.getReserva = async (req, res) => {
    Reserva.findById(req.params.id, (err, reserva) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the reservation."
            });
        } else {
            res.send(reserva);
        }
    });
};

exports.createReserva = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newReserva = new Reserva(req.body);
    newReserva.save((err, reserva) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the reservation."
            });
        } else {
            res.send(reserva);
        }
    });
};

exports.updateReserva = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, reserva) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the reservation."
            });
        } else {
            res.send(reserva);
        }
    });
};

exports.deleteReserva = async (req, res) => {
    Reserva.findByIdAndRemove(req.params.id, (err, reserva) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the reservation."
            });
        } else {
            res.send({ message: "Reservation was deleted successfully!" });
        }
    });
};
