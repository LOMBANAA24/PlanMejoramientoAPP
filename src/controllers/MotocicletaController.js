const { validationResult } = require('express-validator');
const Motocicleta = require('../models/Motocicleta');

exports.getMotos = async (req, res) => {
    Motocicleta.find({}, (err, motos) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving motorcycles."
            });
        } else {
            res.send(motos);
        }
    });
};

exports.getMoto = async (req, res) => {
    Motocicleta.findById(req.params.id, (err, moto) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the motorcycle."
            });
        } else {
            res.send(moto);
        }
    });
};

exports.createMoto = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newMoto = new Motocicleta(req.body);
    newMoto.save((err, moto) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the motorcycle."
            });
        } else {
            res.send(moto);
        }
    });
};

exports.updateMoto = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Motocicleta.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, moto) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the motorcycle."
            });
        } else {
            res.send(moto);
        }
    });
};

exports.deleteMoto = async (req, res) => {
    Motocicleta.findByIdAndRemove(req.params.id, (err, moto) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the motorcycle."
            });
        } else {
            res.send({ message: "Motorcycle was deleted successfully!" });
        }
    });
};
