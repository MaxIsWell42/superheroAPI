module.exports = (app) => {
    // INDEX
    app.get('/', (req, res) => {
        var currentUser = req.user;

        // console.log(req.cookies);
        res.render('index', { currentUser });
    })

    app.get('/search', (req, res) => {
        
    })
}