// middlewares/authzMiddleware.js

exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).send({ message: 'Prohibido' });
    }
    next();
};

exports.isNormalUser = (req, res, next) => {
    if (req.user.role !== 'Normal') {
        return res.status(403).send({ message: 'Prohibido' });
    }
    next();
};
