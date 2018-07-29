class TNukeController {

    constructor(twitConfg, tweet_options) {
        this.twitConfig     = twitConfg;
        this.tweet_options  = tweet_options;
    }

    /**
     * 
     * @description Main method to collect users Tweets, and then allow the controller to move on
     */
    runNuke() {
        this.getUsersTweets();
    }

    /**
     * 
     * @description Get a users Tweets based on options based.
     */
    getUsersTweets() {
        let tweet_arr = [];
        this.twitConfig.get('statuses/user_timeline', this.tweet_options)
        .then(result => {
            result.data.map(tweets => {
                tweet_arr.push(tweets.text);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

}
module.exports = TNukeController;