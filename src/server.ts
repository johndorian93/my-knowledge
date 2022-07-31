import { createApplication } from './application';
import { connect } from "./database/devMongo";

const port = 3030;

(async () => {
    try {
        const { database } = await connect();

        const application = createApplication(database);

        application.listen(port, () => console.log(`HTTP server works on port: ${port}`));
    } catch (error) {
        console.error(error);
    }
})();
