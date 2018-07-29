const express           = require('express');
const app               = express();
const TNukeController   = require('./controllers/TNukeController');
const Twit              = require('twit');
const { 
    APP_PORT,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} = require('./config/env');

const twit = new Twit({
    consumer_key:         CONSUMER_KEY,
    consumer_secret:      CONSUMER_SECRET,
    access_token:         ACCESS_TOKEN,
    access_token_secret:  ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,
    strictSSL:            true,  
});

// These options will be passed via params once routes are set up.
let tweet_options = { 
    screen_name: '_aaronwelsh',
    count: 20
};

const tnukecontroller = new TNukeController(twit, tweet_options);

tnukecontroller.runNuke();

app.listen(APP_PORT, () => {
    console.log(`App running on port: ${APP_PORT}`);
});
