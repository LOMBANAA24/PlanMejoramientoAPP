// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const Autenticacion = require('../models/Autenticacion');
const Administrador = require('../models/Administrador');

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Acceso no autorizado: Token no proporcionado.' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Acceso no autorizado: Token inválido.' });
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        const admin = await Administrador.findOne({ ID_Admin: req.user.adminId }).populate('Rol');
        if (admin && admin.Rol.Nombre_Rol === 'Alto') {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso prohibido: Permiso de administrador alto requerido.' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error en la autenticación.' });
    }
};

exports.isNormalAdmin = async (req, res, next) => {
    try {
        const admin = await Administrador.findOne({ ID_Admin: req.user.adminId }).populate('Rol');
        if (admin && admin.Rol.Nombre_Rol === 'Normal') {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso prohibido: Permiso de administrador normal requerido.' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error en la autenticación.' });
    }
};
