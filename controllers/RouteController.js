class RouteController {

    constructor(express, passport, TNukeController, authenticateUser) {
        this.router = express.Router();
        this.passport = passport;
        this.TNukeController = TNukeController;
        this.authenticateUser = authenticateUser;
    }

    /**
     * Generic page routes
     */
    pageRoutes() {

        this.router.get('/', (req, res) => {
            if(req.user) {
                res.send(`Hi, ${req.user.displayName}(@${req.user.username})`)
            } else {
                res.send('<a href="/api/auth/twitter">Sign in with Twitter</a>');
            }
        });
               
        return this.router;
    }

    /**
     * 
     * @description Call userProfile method and send the response object.
     */
    userAPI() {
        this.router.get('/user', (req, res) => {
            res.json(this.authenticateUser.userProfile());
        });
        return this.router;
    }

    twitterAPIRoutes() {
        this.authenticateUser.authenticateUserWithTwitter();
        // Initiate an OAuth transaction with Twitter. This will redirect the user to Twitter, and use the callback below.
        this.router.get('/auth/twitter', this.passport.authenticate('twitter'));

        // We then try and get the users access token (and secret). We handle the response accordingly.
        this.router.get('/auth/twitter/callback', 
        this.passport.authenticate('twitter', { failureRedirect: '/#login' }),
        (req, res) => {
            res.redirect('/');
            console.log(`User ${req.user.username} has logged in.`)
            const tNukeController = new this.TNukeController(this.authenticateUser.authenticatedObject());
            tNukeController.runNuke();
        });
        return this.router;
         
    }

}
module.exports = RouteController;