// middlewares/validationMiddleware.js

exports.validateData = (req, res, next) => {
    // Validar los datos según las necesidades
    // Por ejemplo, para crear un administrador, asegúrate de que los campos necesarios estén presentes
    const { nombre, apellido, email, password } = req.body;

    if (!nombre || !apellido || !email || !password) {
        return res.status(400).send({ message: 'Faltan campos requeridos' });
    }

    next();
};
