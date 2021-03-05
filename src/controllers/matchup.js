Super = require('../models/super');

module.exports = (app) => {
    app.get("/", (req, res) => {
        var currentUser = req.user;
        res.render("index", { currentUser });
    });

    app.get('/matchup/new', (req, res) => {
        Super.find({}).lean()
        .then(Super => {
            res.render('matchup', { super1, super2 });
        })
        .catch(err => {
            console.log(err.message);
        })
    })
}