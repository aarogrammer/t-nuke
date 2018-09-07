# T-Nuke
T-Nuke deletes users Tweets from a certain time, depending on their options passed. 

## Requirements
* Node 8.11.3 (LTS)
* A Twitter and Twitter Developer account
* A developer application created and access to:
    * consumer_key
    * consumer_secret
    * access_token
    * access_token_secret

## Installation
Clone the repo
> git clone git@github.com:aarogrammer/t-nuke.git

## Usage
### Environment variables
**Make sure to set your environment variables so that config/env.js can use them.**
```
    export APP_PORT=''
    export CONSUMER_KEY=''
    export CONSUMER_SECRET=''
```
| Command | Description | Example/More Information |
| --- | --- | --- |
| `export TNUKE_APP_PORT=` | (`Number`) The port to run your express server on | 8080 |
| `export TNUKE_CONSUMER_KEY=''` | (`String`) The consumer key to your application | https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html |
| `export TNUKE_CONSUMER_SECRET=''` | (`String`) The consumer secret to your application | https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html |
| `export TNUKE_CALLBACK_URL=''` | (`String`) Callback URL for when user has logged in | https://developer.twitter.com/en/docs/basics/developer-portal/guides/callback-urls.html |
| `export TNUKE_SESSION_SECRET=''` | (`String`) Secret for your express session | https://www.npmjs.com/package/express-session#secret|

### Start Application
> npm start

### Testing Application
**Note**: Test coverage is pretty poor atm.
> npm test