// loggerMiddleware.js
exports.logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} - ${new Date()}`);
    next();
};
