// middlewares/validationMiddleware.js

exports.validateData = (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    if (!nombre || !apellido || !email || !password) {
        return res.status(400).send({ message: 'Faltan campos requeridos' });
    }

    next();
};
    