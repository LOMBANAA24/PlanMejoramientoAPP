const { validationResult } = require('express-validator');
const Ciudad = require('../models/Ciudad');

exports.getCiudades = async (req, res) => {
    Ciudad.find({}, (err, ciudades) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving cities."
            });
        } else {
            res.send(ciudades);
        }
    });
};

exports.getCiudad = async (req, res) => {
    Ciudad.findById(req.params.id, (err, ciudad) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the city."
            });
        } else {
            res.send(ciudad);
        }
    });
};

exports.createCiudad = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newCiudad = new Ciudad(req.body);
    newCiudad.save((err, ciudad) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the city."
            });
        } else {
            res.send(ciudad);
        }
    });
};

exports.updateCiudad = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Ciudad.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, ciudad) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the city."
            });
        } else {
            res.send(ciudad);
        }
    });
};

exports.deleteCiudad = async (req, res) => {
    Ciudad.findByIdAndRemove(req.params.id, (err, ciudad) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the city."
            });
        } else {
            res.send({ message: "City was deleted successfully!" });
        }
    });
};
