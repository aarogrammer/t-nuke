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
    export ACCESS_TOKEN=''
    export ACCESS_TOKEN_SECRET=''
```
| Command | Description | Example/More Information |
| --- | --- | --- |
| `export APP_PORT=''` | The port to run your express server on | 8080 |
| `export CONSUMER_KEY=''` | The consumer key to your application | https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html |
| `export CONSUMER_SECRET=''` | The consumer secret to your application | https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html |
| `export ACCESS_TOKEN=''` | The access token to your application | https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html |
| `export ACCESS_TOKEN_SECRET=''` | The access token secret to your application | https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html |

### Start Application
> **Ensure you have *nodemon* installed** `npm i -g nodemon`
> npm start

### Testing Application
> npm test