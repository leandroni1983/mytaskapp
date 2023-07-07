import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config.js';
import router from './routes/task.routes.js';
const app = express();


//Midelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

app.use(router)

app.listen(PORT);
console.log('listening on port ' + PORT);

