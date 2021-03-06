Super = require('../models/super');
Matchup = require('../models/matchup')
GetSuper = require('../util/getSuper')

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
