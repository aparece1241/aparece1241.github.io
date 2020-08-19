const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pug = require('pug');
const path = require("path");
const mongoose = require("mongoose");
const session = require('express-session');
const validator = require('express-validator');
const flash = require('connect-flash');


let port = 3000;

//Middleware session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//Express middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//set a static directory
app.use(express.static(path.join(__dirname, "public")));

//set a path for views and an engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

// db url 
let db_url = 'mongodb://127.0.0.1/user_test'
//connect to mongodb
mongoose.connect(db_url, (err) => {
    if (err) { console.log(err) }
});

let db = mongoose.connection;

//check if connected
db.once('open', () => {
    console.log("Connected to MongoDB");
})

//check for error
db.on('error', console.error.bind(console, "MongoDB connection failed!"));

let Articles = require('./model/articles.model');

//==================================================================//

// render the homepage
app.get('/', (req, res) => {
    Articles.find({}, (err, articles) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('home', { title: "Articles", articles: articles });
    });
});

app.use('/article',require('./router/article.route'));
let ArticleRoutes = require('./router/article.route');


app.listen(port, () => {
    console.log(`Listening in port ${port}!`);
});

