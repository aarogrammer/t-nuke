const { assert } = require('chai');
const sinon = require('sinon');
const TNukeController = require('./TNukeController');

describe('TNukeController', () => {
    let tnukecontroller;
    const twitter = {
        config: {
            consumer_key: '',
            consumer_secret: '',
            access_token: '',
            access_token_secret: '',
            timeout_ms: 60 * 1000,
            strictSSL: true,
        }
    };

    beforeEach(() => {
        tnukecontroller = new TNukeController(twitter);
    });

    it('Twit config object should have a property of consumer_key', () => {
        const expected = '';
        const actual = tnukecontroller.twit.config.consumer_key;
        assert.deepEqual(expected, actual);
    });

    it('Twit config object should have a property of consumer_secret', () => {
        const expected = '';
        const actual = tnukecontroller.twit.config.consumer_secret;
        assert.deepEqual(expected, actual);
    });

    it('Twit config object should have a property of access_token', () => {
        const expected = '';
        const actual = tnukecontroller.twit.config.access_token;
        assert.deepEqual(expected, actual);
    });

    it('Twit config object should have a property of access_token_secret', () => {
        const expected = '';
        const actual = tnukecontroller.twit.config.access_token_secret;
        assert.deepEqual(expected, actual);
    });

    describe('TNukeController methods', () => {

        it('runNuke() should call getUsersTweets() method', () => {
            const getUsersTweetsStub = sinon.stub(tnukecontroller, 'getUsersTweets').returns(Promise.resolve({ then: () => {} }));
            tnukecontroller.runNuke();
            sinon.assert.calledOnce(getUsersTweetsStub);
            getUsersTweetsStub.restore();
        });

    });

});
