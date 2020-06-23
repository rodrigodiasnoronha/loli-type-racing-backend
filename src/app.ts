import 'dotenv/config';
import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import { errors } from 'celebrate';

export class App {
    public server = express();

    constructor() {
        this.database();
        this.middlewares();
        this.routes();
        this.server.use(errors());
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    database() {
        mongoose.connect(
            `mongodb+srv://admin:root@cluster0-8ak9k.mongodb.net/db_loli_type_racing?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
    }
}
