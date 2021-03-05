const Super = require('../models/super');

module.exports = (app) => {
    app.get('/', (req, res) => {
        Super.find({}).lean()
        .then(supers => {
            res.render('index', { supers });
        })
        .catch(err => {
            console.log(err.message);
        })
    })
}