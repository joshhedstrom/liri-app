# LIRI (a node.js app)

This node app is a text-interfaced version of siri used in the command line.

### Prerequisites

If you don't have Node.js installed already, download it with the default settings [here](https://nodejs.org/en/download/).

### Installing

Once you have it installed, clone this repo to your local machine, and install the dependancies with:

```
npm install
```

Then create a environment file to put your keys in:

```
touch .env
```

Paste the following in the file:

```
# Spotify API keys

SPOTIFY_ID=********************************************************
SPOTIFY_SECRET=****************************************************

# Twitter API keys

TWITTER_CONSUMER_KEY=***********************************************
TWITTER_CONSUMER_SECRET=********************************************
TWITTER_ACCESS_TOKEN_KEY=*******************************************
TWITTER_ACCESS_TOKEN_SECRET=****************************************
```

Sign up for your own Spotify and Twitter accounts with the links provided [here](https://developer.spotify.com/my-applications/#!/applications/create) and [here](https://apps.twitter.com/app/new).

Fill in the keys provided in the .env file.

The commands for using the app are:

```
my-tweets
```
-------
```
spotify this song 'whatever song you'd like to find'
```
-------
```
movie-this 'whatever movie you'd like to search for'
```
-------
```
do-what-it-says
```
The last command will pull whatever command is in the random.txt file.

I hope you enjoy the app, and let me know if you have any questions!

## Built With

* [Node.js](https://nodejs.org/en/)
* [Spotify API](https://developer.spotify.com/web-api/) - Used for spotify commands
* [Twitter API](https://developer.twitter.com/en/docs) - Used for twitter commands
* [Moment.js](https://momentjs.com/) - Used for timestamps in the log file

## Authors

* **Josh Hedstrom** - [jhedstrom.com](https://jhedstrom.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
