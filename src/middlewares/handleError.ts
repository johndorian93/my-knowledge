import { Request, Response, NextFunction } from 'express';
import { isApplicationError } from "../errors/applicationError";
import { isResourceNotFoundError } from '../errors/ResourceNotFoundError';
import { isHttpRequestValidationError } from "../errors/HttpRequestValidationError";

const handleError = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.error(error);

        let message = error.message;
        let code = 500;

        if (isApplicationError(error)) {
            message = 'Internal server error';
        }

        if (isHttpRequestValidationError(error)) {
            code = 400;
        }

        if (isResourceNotFoundError(error)) {
            code = 404;
        }

        res.status(code).send({
            code,
            message,
        });
    } else {
        next()
    }
};

export default handleError;
