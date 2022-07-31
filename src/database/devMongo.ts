import { createConnect } from './mongo';

const url = 'mongodb://localhost:27017';
const dbName = 'devEntries';

const connect = createConnect({ url, dbName });

export { connect };
