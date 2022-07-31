import { createConnect } from './mongo';

const url = 'mongodb://localhost:27017';
const dbName = 'testEntries';

const connect = createConnect({ url, dbName });

export { connect };
