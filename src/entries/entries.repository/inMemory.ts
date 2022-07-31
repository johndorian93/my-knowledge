import { Entry, EntriesRepository } from "../entry";
import { ResourceNotFoundError } from '../../errors/ResourceNotFoundError';

export const createEntriesRepository = (): EntriesRepository => {
    const collection: Record<Entry['id'], Entry> = {};

    const getEntry = (id: Entry['id']): Promise<Entry> => {
        const entry = collection[id];

        if (!entry) {
            throw new ResourceNotFoundError('Entry not found');
        }

        return Promise.resolve(entry);
    };

    const getAllEntries = (): Promise<Array<Entry>> => {
        return Promise.resolve(Object.values(collection));
    };

    const createEntry = (entry: Entry): Promise<Entry> => {
        collection[entry.id] = entry;

        return Promise.resolve(entry);
    };

    return {
        getEntry,
        getAllEntries,
        createEntry,
    };
};
