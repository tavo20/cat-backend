import dotenv from 'dotenv';
dotenv.config();

// start server, routes
import app from './app';
import { Request, Response } from 'express';

// Nos conectamos a a DB
import './config/db';

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})


function main() {
    app.listen(app.get('port'))
    console.info(`Port connection in port ${app.get('port')}`);

}

main();