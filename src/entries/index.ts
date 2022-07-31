import { Db } from 'mongodb';

import { createEntriesRepository } from "./entries.repository/mongo";
import { createEntriesService } from "./entries.service";
import { createEntriesFacade } from "./entries.facade";
import { createEntriesController } from "./entries.controller";
import { createEntriesRoutes } from "./entries.routes";

const entriesRoutes = (database: Db) => {
    const entriesRepository = createEntriesRepository(database);
    const entriesService = createEntriesService(entriesRepository);
    const entriesFacade = createEntriesFacade(entriesRepository, entriesService);
    const entriesController = createEntriesController(entriesFacade);
    return createEntriesRoutes(entriesController);
};

export { entriesRoutes };
