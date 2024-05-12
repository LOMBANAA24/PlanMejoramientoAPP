const Ciudad = require('../models/Ciudad');

exports.getCiudades = async (req, res) => {
    Ciudad.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving cities."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getCiudad = async (req, res) => {
    Ciudad.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the city."
            });
        } else {
            res.send(data);
        }
    });
};

exports.createCiudad = async (req, res) => {
    Ciudad.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the city."
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateCiudad = async (req, res) => {
    Ciudad.update(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the city."
            });
        } else {
            res.send(data);
        }
    });
};

exports.deleteCiudad = async (req, res) => {
    Ciudad.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the city."
            });
        } else {
            res.send({ message: "City was deleted successfully!" });
        }
    });
};
