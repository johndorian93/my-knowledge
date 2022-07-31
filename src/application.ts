import express from 'express';
import { Db } from 'mongodb';
import { create } from 'express-handlebars';
import path from 'path';

import { entriesRoutes } from "./entries";
import handleError from "./middlewares/handleError";

const createApplication = (database: Db) => {
    const app = express();
    const hbs = create({ defaultLayout: false });

    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '..', 'views'));
    app.use(express.json());
    app.get('/check', (req, res) => res.send('OK!'));
    app.use(entriesRoutes(database));
    app.use(handleError);

    return app;
};

export { createApplication };
