require("dotenv").config();
const keys = require('./keys.js');
const Spotify = require('node-spotify-api');
const Twitter = require('twitter');
const request = require('request');
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

let action = process.argv[2];
let item = process.argv[3];

switch (action) {
    case 'my-tweets':
        const props = {
            user_id: "josh_hedstrom",
            count: 20,
            exclude_replies: true,
            include_rts: true,
            trim_user: true,

        }
        client.get('statuses/user_timeline', props, (err, body, res) => {
            if (err) return console.log(err);
            body.forEach((elem, i) => {
                console.log('---->>Tweet #', i + 1, '--------------------', 'on: ', elem.created_at);
                console.log('');
                console.log('---->>', elem.text);
                console.log('');
                console.log('-----------------------------------------------------------------------------------------');
                console.log('');
            });
        })
        break;

    case 'spotify-this-song':

        break;

    case 'movie-this':
        // statements_1
        break;

    case 'do-what-it-says':
        // statements_1
        break;

    default:
        console.log("I'm sorry, I didn't understand that command.")
        break;

}

// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


// var inquirer = require('inquirer');
// inquirer.prompt([ Pass your questions in here ]).then(answers => {
// 	// Use user feedback for... whatever!!
// });