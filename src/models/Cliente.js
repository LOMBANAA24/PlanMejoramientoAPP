const Cliente = require('../models/Cliente');

exports.getClientes = async (req, res) => {
    Cliente.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving clients."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getCliente = async (req, res) => {
    Cliente.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the client."
            });
        } else {
            res.send(data);
        }
    });
};

exports.createCliente = async (req, res) => {
    Cliente.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the client."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateCliente = async (req, res) => {
    Cliente.update(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the client."
            });
        } else {
            res.send(data);
        }
    });
};

exports.deleteCliente = async (req, res) => {
    Cliente.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the client."
            });
        } else {
            res.send({ message: "Client was deleted successfully!" });
        }
    });
};
