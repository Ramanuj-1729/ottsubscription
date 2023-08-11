const express = require('express') ;
const mongoose = require( 'mongoose');
const { APP_PORT, DB_URL } = require('./config');
const app = express();
const routes = require('./routes') ;
const cors = require('cors') ;
const path = require('path') ;

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

global.appRoot = path.resolve(__dirname);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', routes);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT} ...`));