class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}

// error to return msg and statuscode
const createCustomError = (msg, statusCode) => {
    return new CustormAPIError(msg, statusCode)
}

module.exports = {
    createCustomError,
    CustomAPIError,
}