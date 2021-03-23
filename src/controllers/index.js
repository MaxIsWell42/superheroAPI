const Matchup = require('../models/matchup')

module.exports = (app) => {
    // INDEX
    app.get('/', (req, res) => {
        var currentUser = req.user;
        console.log(currentUser._id)

        // Display the matchups that the current user has voted on, if any
        // Need all the matchups with this user's id, the heroes of those matchups, and if possible the hero they voted on
        Matchup.find({upVotes: currentUser._id}).lean()
            .then(matchup => {
                res.render('index', { matchups, currentUser });
            }).catch(err => {
                console.log(err.message);
            })
        res.render('index', { currentUser });
    })

    app.get('/search', (req, res) => {
        
    })
}