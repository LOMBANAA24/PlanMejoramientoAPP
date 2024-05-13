const { validationResult } = require('express-validator');
const Garaje = require('../models/Garaje');

exports.getGarajes = async (req, res) => {
    Garaje.find({}, (err, garajes) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving garages."
            });
        } else {
            res.send(garajes);
        }
    });
};

exports.getGaraje = async (req, res) => {
    Garaje.findById(req.params.id, (err, garaje) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the garage."
            });
        } else {
            res.send(garaje);
        }
    });
};

exports.createGaraje = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newGaraje = new Garaje(req.body);
    newGaraje.save((err, garaje) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the garage."
            });
        } else {
            res.send(garaje);
        }
    });
};

exports.updateGaraje = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Garaje.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, garaje) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the garage."
            });
        } else {
            res.send(garaje);
        }
    });
};

exports.deleteGaraje = async (req, res) => {
    Garaje.findByIdAndRemove(req.params.id, (err, garaje) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the garage."
            });
        } else {
            res.send({ message: "Garage was deleted successfully!" });
        }
    });
};
