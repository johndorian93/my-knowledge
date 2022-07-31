import { EntriesService } from "./entries.service";
import { EntriesRepository } from "./entry";

export type EntriesFacade = {
    getEntry: EntriesRepository['getEntry'],
    getAllEntries: EntriesRepository['getAllEntries'],
    createEntry: EntriesService['createEntry'],
};

export const createEntriesFacade = (entriesRepository: EntriesRepository, entriesService: EntriesService): EntriesFacade => {
    return {
        getEntry: entriesRepository.getEntry,
        getAllEntries: entriesRepository.getAllEntries,
        createEntry: entriesService.createEntry,
    }
};
