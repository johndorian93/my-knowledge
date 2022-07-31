export type EntryDTO = {
    id: number,
    content: string,
};

export type Entry = EntryDTO & {
    structuredContent: {
        type: 'text',
        value: string,
    },
}

export interface EntriesRepository {
    getEntry: (id: number) => Promise<Entry>;
    getAllEntries: () => Promise<Array<Entry>>;
    createEntry: (entry: Entry) => Promise<Entry>;
}

export const doEntryDTO = (data: Record<string | number | symbol, unknown>): EntryDTO => {
    return {
        id: data.id as number,
        content: data.content as string,
    }
};
