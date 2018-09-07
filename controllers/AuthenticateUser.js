class AuthenticateUser {

    constructor(passport, Strategy, Twit, CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL) {
        this.passport           = passport;
        this.Strategy           = Strategy;
        this.twit               = Twit;
        this.consumer_key       = CONSUMER_KEY;
        this.consumer_secret    = CONSUMER_SECRET;
        this.callback_url       = CALLBACK_URL;
        this.authenticatedTwit  = {}; // When a user has been authenticated, we will store their tokens within here.
        this.profile; // Property to store users profile
    }

    /**
     * 
     * @description Use Passports Twitter strategy to authenticate a user, get their tokens, and return their profile.
     * @returns {Function}
     */
    authenticateUserWithTwitter() {
        this.passport.use(new this.Strategy({
            consumerKey: this.consumer_key,
            consumerSecret: this.consumer_secret,
            callbackURL: this.callback_url
          }, (token, tokenSecret, profile, cb) => {
            this.authenticatedTwit  = new this.twit({
                consumer_key:         this.consumer_key,
                consumer_secret:      this.consumer_secret,
                access_token:         token,
                access_token_secret:  tokenSecret,
                timeout_ms:           60*1000,
                strictSSL:            true
            });
            this.profile = profile;
            return cb(null, profile);
        }));
    }

    /**
     * 
     * @description Returns a new Twit instance containing our consumer key and secret & the users access token & secret.
     * @returns {Object}
     */
    authenticatedObject() {
        return this.authenticatedTwit;
    }

    /**
     * 
     * @description If a user has been authenticated, we create a profile for the user. If not authenticated, we return a message for our API.
     * @returns {Object}
     */
    userProfile() {
        if(!this.profile) {
            return {
                data: 'No data available'
            };
        }
        return {
            username: this.profile.username,
            displayName: this.profile.displayName,
            displayPicture: this.profile.photos[0].value,
            followers: this.profile._json.followers_count,
            following: this.profile._json.friends_count,
            description: this.profile._json.description,
            createdAt: this.profile._json.created_at
        };
    }

}
module.exports = AuthenticateUser;