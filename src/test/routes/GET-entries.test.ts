import request from 'supertest';

import { createTestServer } from "../testServer";

describe('GET /entries endpoint', () => {
    let closeServer: () => void;

    afterEach(() => {
        if (closeServer) {
            closeServer();
        }
    });

    it('returns list of entries stored in a database', async () => {
        const testServer = await createTestServer();

        const server = testServer.server;
        closeServer = testServer.closeServer;

        const createEntryResult = await request(server)
            .post('/entries')
            .send({
                id: 1,
                content: 'Test content 1',
            });

        expect(createEntryResult.statusCode).toBe(201);
        expect(createEntryResult.body).toMatchSnapshot();

        const getEntryResult = await request(server)
            .get(`/entries/${createEntryResult.body.id}`);

        expect(getEntryResult.statusCode).toBe(200);
        expect(getEntryResult.body).toMatchSnapshot();

        const getAllEntriesResult = await request(server)
            .get('/entries');

        expect(getAllEntriesResult.statusCode).toBe(200);
        expect(getAllEntriesResult.body).toMatchSnapshot();
    });
});
