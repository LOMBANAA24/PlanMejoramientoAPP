// AuthController.js
const Autenticacion = require('../models/Autenticacion');

exports.getAutenticacion = async (req, res) => {
    try {
        const autenticaciones = await Autenticacion.find();
        res.send(autenticaciones);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving authentication data."
        });
    }
};

exports.createAutenticacion = async (req, res) => {
    try {
        const { ID_Admin, Usuario, Salt, ContrasenaHash } = req.body;
        const autenticacion = new Autenticacion({ ID_Admin, Usuario, Salt, ContrasenaHash });
        const newAutenticacion = await autenticacion.save();
        res.send(newAutenticacion);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating authentication data."
        });
    }
};

exports.updateAutenticacion = async (req, res) => {
    try {
        const { ID_Admin, Usuario, Salt, ContrasenaHash } = req.body;
        const updatedAutenticacion = await Autenticacion.findByIdAndUpdate(
            req.params.id,
            { ID_Admin, Usuario, Salt, ContrasenaHash },
            { new: true }
        );
        res.send(updatedAutenticacion);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while updating authentication data."
        });
    }
};

exports.deleteAutenticacion = async (req, res) => {
    try {
        const deletedAutenticacion = await Autenticacion.findByIdAndRemove(req.params.id);
        res.send({ message: "Authentication data was deleted successfully!" });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting authentication data."
        });
    }
};
