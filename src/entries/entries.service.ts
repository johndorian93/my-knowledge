import {EntriesRepository, Entry, EntryDTO} from "./entry";

export interface EntriesService {
    createEntry: (entryDTO: EntryDTO) => Promise<Entry>;
}

export const createEntriesService = (entriesRepository: EntriesRepository): EntriesService => {
    const createEntry = function (entryDTO: EntryDTO) {
        const entry: Entry = {
            ...entryDTO,
            structuredContent: {
                type: 'text',
                value: entryDTO.content,
            }
        };

        return entriesRepository.createEntry(entry);
    };

    return {
        createEntry,
    }
};
