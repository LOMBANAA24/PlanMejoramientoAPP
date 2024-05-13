const { validationResult } = require('express-validator');
const Cliente = require('../models/Cliente');

exports.getClientes = async (req, res) => {
    Cliente.find({}, (err, clientes) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving clients."
            });
        } else {
            res.send(clientes);
        }
    });
};

exports.getCliente = async (req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the client."
            });
        } else {
            res.send(cliente);
        }
    });
};

exports.createCliente = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newCliente = new Cliente(req.body);
    newCliente.save((err, cliente) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the client."
            });
        } else {
            res.send(cliente);
        }
    });
};

exports.updateCliente = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, cliente) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the client."
            });
        } else {
            res.send(cliente);
        }
    });
};

exports.deleteCliente = async (req, res) => {
    Cliente.findByIdAndRemove(req.params.id, (err, cliente) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the client."
            });
        } else {
            res.send({ message: "Client was deleted successfully!" });
        }
    });
};
