const Super = require('../models/super');
const Matchup = require('../models/matchup')
const GetSuper = require('../util/ApiCall')

async function GetSupers() {
    // Get a random number between 1 and 300
    function getRandomInt() {
        return Math.floor(Math.random() * 300) + 1
    }

    // Do this in function 
    var id1 = getRandomInt()
    var id2 = getRandomInt()
    if (id1 == id2) {
        id2 + 1
    }

    // console.log("hello")
    hero1 = GetSuper.apiCall(id1)
    hero2 = GetSuper.apiCall(id2)
    return Promise.all([hero1, hero2]).then(data => {
        const dataFromPromise1 = data[0]
        const dataFromPromise2 = data[1]
        console.log(data[0])
        console.log(data[1])
        return data
    })
}

module.exports = (app) => {
    // INDEX
    app.get('/', (req, res) => {
        var currentUser = req.user;

        // console.log(req.cookies);
        res.render('index', { currentUser });
    })
    // New Matchup
    app.get('/matchup/new', async (req, res) => {
        var currentUser = req.user
        var matchup = new Matchup(req.body);
        matchup.upVotes = [];
        matchup.downVotes = [];
        matchup.voteScore = 0;
        
        heroes = await GetSupers()
        console.log(heroes)
        super1data = heroes[0]
        super2data = heroes[1]

        var super1 = {
            name: super1data.name,
            origin: super1data.connections,
            image: super1data.image.url,
        }

        var super2 = {
            name: super2data.name,
            origin: super2data.connections,
            image: super2data.image.url
        }

        res.render('matchup', { currentUser, super1, super2 });

        matchup.save()
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
