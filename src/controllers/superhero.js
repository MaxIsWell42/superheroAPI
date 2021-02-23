const Super = require('../models/super');

module.exports = (app) => {
    app.get('/', (req, res) => {
        Super.find({}).lean()
        .then(posts => {
            res.render('index', { supers });
        })
        .catch(err => {
            console.log(err.message);
        })
    })
    // FIND
}