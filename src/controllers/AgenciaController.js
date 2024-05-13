const { validationResult } = require('express-validator');
const Agencia = require('../models/Agencia');

exports.getAgencias = async (req, res) => {
    Agencia.find({}, (err, agencias) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving agencies."
            });
        } else {
            res.send(agencias);
        }
    });
};

exports.getAgencia = async (req, res) => {
    Agencia.findById(req.params.id, (err, agencia) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the agency."
            });
        } else {
            res.send(agencia);
        }
    });
};

exports.createAgencia = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newAgencia = new Agencia(req.body);
    newAgencia.save((err, agencia) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the agency."
            });
        } else {
            res.send(agencia);
        }
    });
};

exports.updateAgencia = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Agencia.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, agencia) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the agency."
            });
        } else {
            res.send(agencia);
        }
    });
};

exports.deleteAgencia = async (req, res) => {
    Agencia.findByIdAndRemove(req.params.id, (err, agencia) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the agency."
            });
        } else {
            res.send({ message: "Agency was deleted successfully!" });
        }
    });
};
