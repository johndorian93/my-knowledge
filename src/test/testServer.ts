import { createApplication } from '../application';
import { connect } from "../database/testMongo";

const port = 3033;

export const createTestServer = async () => {
    const { database, closeConnection: closeDatabaseConnection } = await connect();

    const server = createApplication(database).listen(port);

    const closeServer = () => {
        server.close();
        closeDatabaseConnection();
    };

    return { server, closeServer };
};
