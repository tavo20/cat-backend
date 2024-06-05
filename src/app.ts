import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';


const app: Application = express();

app.set('port', process.env.PORT || 8085);

// Middlewares
if(!process.env.PRODUCTIO_MODE) {
    app.use(morgan('dev'));
}

app.use(cors());

// Para formatear la data que nos llegue
app.use(bodyParser.json());


// routes





export default app;

