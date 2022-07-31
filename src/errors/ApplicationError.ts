import { ErrorTypes } from "./ErrorTypes";

class ApplicationError extends Error {
    constructor(message: string) {
        super();

        this.message = message;
        this.name = ErrorTypes.ApplicationError;
    }
}

const isApplicationError = (error: Error): error is ApplicationError => {
    return error.name === ErrorTypes.ApplicationError;
};

export { ApplicationError, isApplicationError };
