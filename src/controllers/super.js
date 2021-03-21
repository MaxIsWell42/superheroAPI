const Super = require('../models/super');
const GetSuper = require('../util/ApiCall')


module.exports = (app) => {
    app.get("/super/:id", async function(req, res) {
        currentUser = req.User
        // LOOK UP THE SUPER
        var hero = await GetSuper.apiCall(req.params.id)
        res.render('super-show', { currentUser, hero })
    });
}