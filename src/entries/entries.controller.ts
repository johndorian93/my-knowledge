import { NextFunction, Request, Response } from 'express';

import { EntriesFacade } from "./entries.facade";
import { ControllerFunctions } from "../shared/types";

export type EntriesController = ControllerFunctions<['getEntry', 'getAllEntries', 'createEntry']>;

const withErrorHandling = (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await func(req, res, next);
        } catch (error) {
            next(error);
        }
    };

export const createEntriesController = (entriesFacade: EntriesFacade): EntriesController => {
    const getEntry = withErrorHandling(async (req, res) => {
        const { id: rawId } = req.params;

        const id = parseInt(rawId, 10);

        const entry = await entriesFacade.getEntry(id);

        res.format({
            'application/json': () => { res.json(entry) },
            'application/structured-content+json': () => {
                res
                    .links({
                        self: 'http://localhost:3030/entries',
                        next: 'http://localhost:3030/entries',
                    })
                    .header('Cache-Control', 'public, max-age=7')
                    .json({ ...entry, content: undefined })
            },
            'text/html': () => { res.render('entry', { entry }) },
            default: () => { res.status(406).send('Not acceptable') },
        })
    });

    const getAllEntries = withErrorHandling(async (req, res) => {
        const entries = await entriesFacade.getAllEntries();

        res.format({
            'application/json': () => { res.json(entries) },
            'application/structured-content+json': () => {
                res
                    .header('Cache-Control', 'public, max-age=7')
                    .json(entries.map(entry => ({ ...entry, content: undefined })))
            },
            'text/html': () => { res.render('entries', { entries }) },
            default: () => { res.status(406).send('Not acceptable') },
        })
    });

    const createEntry = withErrorHandling(async (req, res) => {
        const createdEntry = await entriesFacade.createEntry(req.body);

        res.status(201).send(createdEntry);
    });

    return {
        getEntry,
        getAllEntries,
        createEntry,
    }
};
