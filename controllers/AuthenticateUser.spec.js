const { assert }            = require('chai');
const sinon                 = require('sinon');
const AuthenticateUser      = require('./AuthenticateUser');

describe('Controller than authenticates a user', () => {

    let authenticateUser;
    const passport = {
        use: () => {}
    }
    const Strategy = function(){}
    const Twit = '';
    const CONSUMER_KEY = '';
    const CONSUMER_SECRET = '';
    const CALLBACK_URL = '';
    beforeEach(() => {
        authenticateUser = new AuthenticateUser(passport, Strategy, Twit, CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL);
    });

    
    it('authenticateUserWithTwitter() method should have call this.passport.use method', () => {
        let stub = sinon.stub(authenticateUser.passport, 'use');
        authenticateUser.authenticateUserWithTwitter();
        sinon.assert.calledOnce(stub)
    });

});