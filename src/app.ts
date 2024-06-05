import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

// Routes
import breedRoutes from './routes/breed';


const app: Application = express();

app.set('port', process.env.PORT || 8085);

// Middlewares
if(!process.env.PRODUCTIO_MODE) {
    // app.use(morgan('dev'));
}

app.use(cors());

// Para formatear la data que nos llegue
app.use(bodyParser.json());


// routes
app.use('/api/breed', breedRoutes);





export default app;

