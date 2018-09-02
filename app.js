const express           = require('express');
const app               = express();
const TNukeController   = require('./controllers/TNukeController');
const Twit              = require('twit');
const passport          = require('passport');
const { Strategy }      = require('passport-twitter');

const { 
    APP_PORT,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    CALLBACK_URL
} = require('./config/env');

let twit = {};
passport.use(new Strategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: CALLBACK_URL
  }, (token, tokenSecret, profile, cb) => {
    twit = new Twit({
        consumer_key:         CONSUMER_KEY,
        consumer_secret:      CONSUMER_SECRET,
        access_token:         token,
        access_token_secret:  tokenSecret,
        timeout_ms:           60*1000,
        strictSSL:            true
    });
    return cb(null, profile);
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});


app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'probablymakethisanenvvar', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.get('/', (req, res) => {
    res.send('<a href="/auth/twitter">Sign in with Twitter</a>');
});


app.get('/auth/twitter',
    passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');
        new TNukeController(twit)

    }
);

app.listen(APP_PORT, () => {
    console.log('App running')  
});