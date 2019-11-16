const { assert } = require('chai');
const sinon = require('sinon');
const AuthenticateUser = require('./AuthenticateUser');

describe('Controller than authenticates a user', () => {

    let authenticateUser;
    const passport = {
        use: () => {}
    };
    function Strategy() {
        return {};
    }
    const Twit = '';
    const CONSUMER_KEY = '';
    const CONSUMER_SECRET = '';
    const CALLBACK_URL = '';

    beforeEach(() => {
        authenticateUser = new AuthenticateUser(
            passport,
            Strategy,
            Twit,
            CONSUMER_KEY,
            CONSUMER_SECRET,
            CALLBACK_URL
        );
    });

    it('authenticateUserWithTwitter() method should have call this.passport.use method', () => {
        const passportStub = sinon.stub(authenticateUser.passport, 'use');
        authenticateUser.authenticateUserWithTwitter();
        sinon.assert.calledOnce(passportStub);
    });

    it('userProfile() method should return 401 if not authenticated', () => {
        const expected = 401;
        const actual = authenticateUser.userProfile().status;
        assert.deepEqual(expected, actual);
    });

    it('userProfile() method should return a profile object if authenticated', () => {
        authenticateUser.profile = {
            username: '',
            displayName: '',
            photos: [{ value: '' }],
            _json: {
                followers_count: '',
                friends_count: '',
                description: '',
                created_at: ''
            }
        };
        assert.deepEqual(
            authenticateUser.userProfile()
                .username,
            authenticateUser.profile.username
        );
    });

});
