import { ErrorTypes } from "./ErrorTypes";

export class ResourceNotFoundError extends Error {
    constructor(message: string) {
        super();

        this.message = message;
        this.name = ErrorTypes.ResourceNotFoundError;
    }
}

export const isResourceNotFoundError = (error: Error): error is ResourceNotFoundError => {
    return error.name === ErrorTypes.ResourceNotFoundError;
};