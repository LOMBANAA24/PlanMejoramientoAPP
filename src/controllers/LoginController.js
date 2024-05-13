const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const Autenticacion = require('../models/Autenticacion');
const Administrador = require('../models/Administrador');

exports.login = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // Buscar el usuario en la base de datos
        const autenticacion = await Autenticacion.findOne({ Usuario: usuario });
        if (!autenticacion) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verificar la contraseña
        if (contrasena !== autenticacion.ContrasenaHash) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        // Obtener el rol del usuario
        const admin = await Administrador.findById(autenticacion.ID_Admin).populate('Rol');
        if (!admin) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Generar token de autenticación
        const token = jwt.sign({ adminId: admin._id, role: admin.Rol.Nombre_Rol }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el inicio de sesión.' });
    }
};
