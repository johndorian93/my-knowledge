import { Router } from 'express';

import { EntriesController } from './entries.controller';
import { EntryDTO, doEntryDTO } from '../entries/entry';
import { createValidate, validationKeys } from '../middlewares/validate';
import { createDoDTO } from '../middlewares/doDTO';
import * as schemas from './entries.schema';

export const createEntriesRoutes = (entriesController: EntriesController): Router => {
    const router = Router();

    router.get(
        '/entries/:id',
        entriesController.getEntry,
    );

    router.get(
        '/entries',
        entriesController.getAllEntries,
    );

    router.post(
        '/entries',
        [
            createValidate(schemas.CreateEntry, validationKeys.body),
            createDoDTO<EntryDTO>(doEntryDTO),
        ],
        entriesController.createEntry);

    return router;
};
