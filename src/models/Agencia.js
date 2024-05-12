const Agencia = require('../models/Agencia');

exports.getAgencias = async (req, res) => {
    Agencia.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving agencies."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getAgencia = async (req, res) => {
    Agencia.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the agency."
            });
        } else {
            res.send(data);
        }
    });
};

exports.createAgencia = async (req, res) => {
    Agencia.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the agency."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateAgencia = async (req, res) => {
    Agencia.update(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the agency."
            });
        } else {
            res.send(data);
        }
    });
};

exports.deleteAgencia = async (req, res) => {
    Agencia.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the agency."
            });
        } else {
            res.send({ message: "Agency was deleted successfully!" });
        }
    });
};
