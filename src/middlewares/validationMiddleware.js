// validationMiddleware.js
exports.validateData = (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    if (!nombre || !apellido || !email || !password) {
        return res.status(400).send({ message: 'Missing required fields' });
    }

    // Puedes agregar más validaciones aquí según tus necesidades

    next();
};
