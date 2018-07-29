const express           = require('express');
const app               = express();
const TNukeController   = require('./controllers/TNukeController');
const { 
    APP_PORT,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} = require('./config/env');

app.listen(APP_PORT, () => {
    console.log(`App running on port: ${APP_PORT}`);
});
