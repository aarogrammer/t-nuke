class TNukeController {

    constructor(twit) {
        this.twit = twit;
    }

    /**
     *
     * @description Main method to collect users Tweets, and then allow the controller to move on
     */
    async runNuke() {
        const getTweets = await this.getUsersTweets();
        console.log(getTweets);
    }

    /**
     *
     * @description Get a users Tweets based on options based.
     */
    async getUsersTweets() {
        const result = await this.twit.get('statuses/user_timeline', { count: 5 });

        const tweetArr = result.data.map((tweets) => ({
            id: tweets.id_str,
            date: tweets.created_at
        }));
        return tweetArr;
        // return this.twit.get('statuses/user_timeline', { count: 5 })
    }

}
module.exports = TNukeController;
