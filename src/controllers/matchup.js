const Super = require('../models/super');
const Matchup = require('../models/matchup')
const url = 'https://superheroapi.com/api/' + process.env.API_KEY + '/';
const axios = require('axios');
// const GetSuper = require('../util/getSuper')

function GetSuper() {
    // Get a random number between 1 and 300
    function getRandomInt() {
        return Math.floor(Math.random() * 300) + 1
    }

    console.log("any random string")

    var id1 = getRandomInt()
    var id2 = getRandomInt()
    if (id1 == id2) {
        id2 + 1
    }
    
    console.log(id1)
    console.log(id2)
    
    function apiCall(id) {
        axios.get(url + id)
            .then(data=>{
                console.log(data)
                return data
            })
            .catch(err=>console.log(err))
    }
    hero1 = apiCall(id1)
    hero2 = apiCall(id2)
    return hero1, hero2
}

module.exports = (app) => {
    // INDEX
    app.get('/', (req, res) => {
        var currentUser = req.user;

        console.log(req.cookies);
        res.render('matchup', { currentUser });
    })
    // New Matchup
    app.get('/matchup/new', (req, res) => {
        var currentUser = req.user
        var matchup = new Matchup(req.body);
        matchup.upVotes = [];
        matchup.downVotes = [];
        matchup.voteScore = 0;
        
        console.log("going to route")
        var super1data, super2data = GetSuper()

        var super1 = {
            name: super1data.data.name,
            origin: super1data.data.connections,
            image: super1data.data.image
        }

        var super2 = {
            name: super2data.data.name,
            origin: super2data.data.connections,
            image: super2data.data.image
        }

        Super.find({}).lean()
        .then(Super => {
            res.render('matchup', { currentUser, super1, super2 });
        })
        .catch(err => {
            console.log(err.message);
        })
    })
    app.put("/matchup/:id/vote-up", function(req, res) {
        Post.findById(req.params.id).exec(function(err, post) {
            matchup.upVotes.push(req.user._id);
            post.voteScore = post.voteScore + 1;
            post.save();

            res.status(200);
        });
    });
}
