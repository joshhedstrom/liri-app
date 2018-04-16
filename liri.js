require("./.env").config();
const request = require('request');
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

let action = process.argv[2];
let item = process.argv[3];

switch (action) {
    case 'my-tweets':
    let query = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=josh_hedstrom&count=2"
        request(query, (error, response, body)=> {
        	// if(err) return console.log(err);

        	console.log('twitter: ' + query);
        	console.log(body)

        })
        break;
    case 'spotify-this-song':
        // statements_1
        break;
    case 'movie-this':
        // statements_1
        break;
    case 'do-what-it-says':
        // statements_1
        break;
    default:
        // statements_def
        break;
}

// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`