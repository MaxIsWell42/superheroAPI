// Initialize
require('dotenv').config();
const express = require('express')
const app = express()
const path = require("path")
const port = 3000

// Middleware
const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Check authentication
var checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }

    next();
};

// Set db
const db = require('../data/matchup-db')

// After defining app, before controllers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(checkAuth);
app.use(express.static('public'));

// Engine
app.engine('handlebars', exphbs({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: 'main'
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

// Controllers
require('./controllers/matchup.js')(app);
require('./controllers/superhero.js')(app);
require('./controllers/auth.js')(app);

// Run on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;