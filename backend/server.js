import express from 'express';
import mongoose from 'mongoose';
import { APP_PORT, DB_URL } from './config';
const app = express();
import routes from './routes';
import cors from 'cors';

// DB Connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', routes);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT} ...`));