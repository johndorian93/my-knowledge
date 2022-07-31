import { ErrorTypes } from "./ErrorTypes";

export class HttpRequestValidationError extends Error {
    constructor(message: string) {
        super(message);

        this.name = ErrorTypes.HttpRequestValidationError;
    }
}

export const isHttpRequestValidationError = (error: Error): error is HttpRequestValidationError => {
    return error.name === ErrorTypes.HttpRequestValidationError;
};
