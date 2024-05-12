const Moto = require('../models/Moto');

exports.getMotos = async (req, res) => {
    Moto.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving motorcycles."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getMoto = async (req, res) => {
    Moto.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the motorcycle."
            });
        } else {
            res.send(data);
        }
    });
};

exports.createMoto = async (req, res) => {
    Moto.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the motorcycle."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateMoto = async (req, res) => {
    Moto.update(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the motorcycle."
            });
        } else {
            res.send(data);
        }
    });
};

exports.deleteMoto = async (req, res) => {
    Moto.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the motorcycle."
            });
        } else {
            res.send({ message: "Motorcycle was deleted successfully!" });
        }
    });
};
