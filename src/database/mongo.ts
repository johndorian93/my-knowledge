import { MongoClient, Db } from 'mongodb';

const createConnect = (
    { url, dbName }: { url: string, dbName: string }
) => async (): Promise<{ database: Db, closeConnection: () => void }> => {
    const client = new MongoClient(url);

    await client.connect();

    const database = client.db(dbName);

    return {
        database,
        closeConnection: () => { client.close() },
    };
};

export { createConnect };