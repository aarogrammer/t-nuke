const express           = require('express');
const app               = express();
const TNukeController   = require('./controllers/TNukeController');
const AuthenticateUser  = require('./controllers/AuthenticateUser');
const RouteController   = require('./controllers/RouteController');
const Twit              = require('twit');
const passport          = require('passport');
const { Strategy }      = require('passport-twitter');

const { 
    APP_PORT,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    CALLBACK_URL,
    SESSION_SECRET
} = require('./config/env');

// Authenticate user. Inject all our dependencies to the class.
const authenticateUser = new AuthenticateUser(passport, Strategy, Twit, CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

// Middleware for our Express server
app.use(require('body-parser').urlencoded({ extended: true })); // We will need this for parsing requests from a user. Adds req.body.
app.use(require('express-session')({ secret: SESSION_SECRET, resave: true, saveUninitialized: true })); // Allows for us to have sessions for when a user logs in. Required for Passport and OAuth.

app.use(passport.initialize()); // Init the authentication module
app.use(passport.session()); // Alter session with Passport user (Twitter user)

const routeController = new RouteController(express, passport, TNukeController, authenticateUser);

// Middleware for our routes.
app.use('/', routeController.pageRoutes());
app.use('/api', [routeController.userAPI(), routeController.twitterAPIRoutes()]);

app.listen(APP_PORT, () => {
    console.log(`T-Nuke running on port ${APP_PORT}`);  
});