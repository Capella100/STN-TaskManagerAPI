// require custom error from errors folder
const { CustomAPIError } = require('../errors/custom-error');

// wen it is not an instance of custom error.
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware;