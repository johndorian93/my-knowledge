import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

import { HttpRequestValidationError } from '../errors/HttpRequestValidationError';
import { ApplicationError } from "../errors/ApplicationError";

export enum validationKeys {
    body= 'body',
}

export const createValidate = (schema: Schema, key: string) => (req: Request, res: Response, next: NextFunction) => {
    let value;

    if (key === validationKeys.body) {
        value = req.body;
    } else {
        throw new ApplicationError(`Unrecognised validation key ${key}`);
    }

    const validationResult = schema.validate(value);

    if (validationResult.error) {
        throw new HttpRequestValidationError(validationResult.error.message);
    }

    next();
};
