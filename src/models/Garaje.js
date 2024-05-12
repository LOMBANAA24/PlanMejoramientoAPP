const Garaje = require('../models/Garaje');

exports.getGarajes = async (req, res) => {
    Garaje.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving garages."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getGaraje = async (req, res) => {
    Garaje.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the garage."
            });
        } else {
            res.send(data);
        }
    });
};

exports.createGaraje = async (req, res) => {
    Garaje.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the garage."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateGaraje = async (req, res) => {
    Garaje.update(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the garage."
            });
        } else {
            res.send(data);
        }
    });
};

exports.deleteGaraje = async (req, res) => {
    Garaje.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the garage."
            });
        } else {
            res.send({ message: "Garage was deleted successfully!" });
        }
    });
};
