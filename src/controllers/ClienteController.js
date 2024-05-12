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
