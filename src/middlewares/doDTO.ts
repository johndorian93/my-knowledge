import { Request, Response, NextFunction } from 'express';

import { RequestBody } from '../shared/types';

export const createDoDTO = <T>(doResourceDto: (data: RequestBody) => T) =>
    (req: Request, res: Response, next: NextFunction) => {
        req.body = doResourceDto(req.body);

        next();
    };
