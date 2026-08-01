

// Create a custom ErrorHandler class by extending the built-in Error class
class ErrorHandler extends Error {

    constructor(message, statusCode) {

        // Call the parent Error class constructor

        super(message);

        // Store the HTTP status code

        this.statusCode = statusCode;

        // Set the error message

        this.message = message;

        // Capture the stack trace for easier debugging

        Error.captureStackTrace(this, this.constructor);
    }
}

// Export the custom error handler
module.exports = ErrorHandler;