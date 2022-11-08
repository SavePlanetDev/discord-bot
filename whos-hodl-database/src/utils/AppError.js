class AppError extends Error {
    constructor(message, statusCode, functionCall = null, result = false) {
        super(message);
        this.result = result;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.functionCall = functionCall;
        this.isOperational = true;


        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;