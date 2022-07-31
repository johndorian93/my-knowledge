import { Db } from 'mongodb';

import { Entry, EntriesRepository } from "../entry";
import { ResourceNotFoundError } from '../../errors/ResourceNotFoundError';

const findOptions = { projection: { _id: 0 } };

export const createEntriesRepository = (database: Db): EntriesRepository => {
    const collection = database.collection<Entry>('entries');

    const getEntry = async (id: Entry['id']): Promise<Entry> => {
        const entry = await collection.findOne({ id }, findOptions);

        if (!entry) {
            throw new ResourceNotFoundError('Entry not found');
        }

        return entry;
    };

    const getAllEntries = async (): Promise<Array<Entry>> => {
        const entries = await collection.find({}, findOptions).toArray();

        return entries;
    };

    const createEntry = async (entry: Entry): Promise<Entry> => {
        await collection.insertOne( { ...entry });

        return entry;
    };


    return {
        getEntry,
        getAllEntries,
        createEntry,
    };
};
