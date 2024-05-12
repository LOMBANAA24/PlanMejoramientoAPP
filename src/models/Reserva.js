const Reserva = require('../models/Reserva');

exports.getReservas = async (req, res) => {
    Reserva.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reservations."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getReserva = async (req, res) => {
    Reserva.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the reservation."
            });
        } else {
            res.send(data);
        }
    });
};

exports.createReserva = async (req, res) => {
    Reserva.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the reservation."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateReserva = async (req, res) => {
    Reserva.update(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the reservation."
            });
        } else {
            res.send(data);
        }
    });
};

exports.deleteReserva = async (req, res) => {
    Reserva.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the reservation."
            });
        } else {
            res.send({ message: "Reservation was deleted successfully!" });
        }
    });
};
