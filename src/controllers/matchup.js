const Super = require('../models/super');
const Matchup = require('../models/matchup')
const GetSuper = require('../util/ApiCall')

async function GetSupers() {
    // Get a random number between 1 and 300
    function getRandomInt() {
        return Math.floor(Math.random() * 100) + 1
    }

    // Get the ids of the heroes to be rendered and make sure they're different
    var id1 = getRandomInt()
    var id2 = getRandomInt()
    if (id1 == id2) {
        id2 = id2 + 1
    }

    // Get the seperate heroes and make sure the promises get values before trying to return
    hero1 = GetSuper.apiCall(id1)
    hero2 = GetSuper.apiCall(id2)
    return Promise.all([hero1, hero2]).then(data => {
        const dataFromPromise1 = data[0]
        const dataFromPromise2 = data[1]
        // console.log(data[0])
        // console.log(data[1])
        return data
    })
}

module.exports = (app) => {
    // New Matchup
    app.get('/matchup/new', async (req, res) => {
        var currentUser = req.user
        var matchup = new Matchup(req.body);
        matchup.upVotes = [];
        matchup.hero1voteScore = 0;
        matchup.hero2voteScore = 0;
        
        heroes = await GetSupers()
        // console.log(heroes)
        super1data = heroes[0]
        super2data = heroes[1]

        res.render('matchup', { currentUser, super1data, super2data });

        matchup.save()
    })

    app.put("/matchup/:id/vote-up1", function(req, res) {
        Matchup.findById(req.params.id).exec(function(err, matchup) {
            matchup.upVotes.push(req.user._id);
            matchup.hero1VoteScore = matchup.hero1VoteScore + 1;
            matchup.save();
            res.status(200);
        });
    });

    app.put("/matchup/:id/vote-up2", function(req, res) {
        Matchup.findById(req.params.id).exec(function(err, matchup) {
            console.log(req.params.id)
            matchup.upVotes.push(req.user._id);
            matchup.hero2VoteScore = matchup.hero2VoteScore + 1;
            matchup.save();
            res.status(200);
        });
    });
}
