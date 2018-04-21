require("dotenv").config();
const keys = require('./keys.js');
const Spotify = require('node-spotify-api');
const Twitter = require('twitter');
const request = require('request');
const fs = require('fs')
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);
let randomCommand;

let action = process.argv[2];
let item = process.argv[3];

main();

function main() {

    switch (action) {
        case 'my-tweets':
            let tweetProps = {
                user_id: "josh_hedstrom",
                count: 20,
                exclude_replies: true,
                include_rts: true,
                trim_user: true,

            }
            client.get('statuses/user_timeline', tweetProps, (err, body, res) => {
                if (err) return console.log('ERROR: ', err);
                body.forEach((elem, i) => {
                    console.log('---->>Tweet #', i + 1, '---------------------------------------', 'on: ', elem.created_at);
                    console.log('');
                    console.log('---->>', elem.text);
                    console.log('');
                    console.log('-----------------------------------------------------------------------------------------');
                    console.log('');
                });
            })
            break;

        case 'spotify-this-song':
            spotify.search({
                type: 'track',
                query: item,
                limit: 5,
                from: 'us'
            }, (err, data) => {
                if (err) return console.log('ERROR: ', err);
                let result = data.tracks.items;
                result.forEach((elem, i) => {
                    console.log('---->>Song #', i + 1, '-----------------------------------------------------------------');
                    console.log('');
                    console.log('Artist:-->>', elem.artists[0].name);
                    console.log('Name:---->>', elem.name);
                    console.log('Preview:->>', elem.preview_url);
                    console.log('Album:--->>', elem.album.name);
                    console.log('');
                    console.log('-----------------------------------------------------------------------------------------');
                    console.log('');
                });
            })

            break;

        case 'movie-this':
            let url = "http://www.omdbapi.com/?t=" + item + "&y=&plot=short&apikey=trilogy";
            request(url, (err, res, body) => {
                if (err) return console.log('ERROR: ', err);
                let movie = JSON.parse(body);
                console.log('Result------->>--------------------------------------------------------------------------');
                console.log('');
                console.log('Title:------->>', movie.Title);
                console.log('Year:-------->>', movie.Year);
                console.log('IMDB Rating:->>', movie.Ratings[0].Value);
                console.log('RT Rating:--->>', movie.Ratings[1].Value);
                console.log('Country:----->>', movie.Country);
                console.log('Language:---->>', movie.Language);
                console.log('Actors:------>>', movie.Actors);
                console.log('Plot:-------->>', movie.Plot);
                console.log('');
                console.log('-----------------------------------------------------------------------------------------');
                console.log('');
            });

            break;

        case 'do-what-it-says':
             fs.readFile('./random.txt', 'utf8', (err, data) => {
                    if (err) return console.log('ERROR: ', err);
                    let splitArr = data.split('"');
                    
                    console.log(splitArr)
                    action = splitArr[0];
                    item = splitArr[1];
                    main();
                })
                // statements_1
            break;

        default:
            console.log("I'm sorry, I didn't understand that command.")
            break;
    }
}

// * `do-what-it-says`


// var inquirer = require('inquirer');
// inquirer.prompt([ Pass your questions in here ]).then(answers => {
//  // Use user feedback for... whatever!!
// });