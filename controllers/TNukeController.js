class TNukeController {

    constructor(twit) {
        this.twit = twit;
    }

    /**
     * 
     * @description Main method to collect users Tweets, and then allow the controller to move on
     */
    runNuke() {
        this.getUsersTweets()
        .then(response => {
            console.log(JSON.stringify(response));

            // commented out for now
            // response.map(id => {
            //     this.twit.post('statuses/destroy/:id', { id: id }, function (err, data, response) {
            //         console.log(data)
            //     });
            // })
        });
    }

    /**
     * 
     * @description Get a users Tweets based on options based.
     */
    async getUsersTweets() {
        let tweet_arr = [];
        return await this.twit.get('statuses/user_timeline', {count: 5})
        .then(result => {
            // console.log(JSON.stringify(result))
            result.data.map(tweets => {
                tweet_arr.push({
                    id: tweets.id_str,
                    date: tweets.created_at
                });
            });
            return tweet_arr;
        })
        .catch(err => {
            console.log(err);
        });
    }

}
module.exports = TNukeController;