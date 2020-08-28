const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pug = require('pug');
const path = require("path");
const mongoose = require("mongoose");
const session = require('express-session');
const validator = require('express-validator');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');


let port = 3000;

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

//Middleware session
app.use(cookieParser());
app.use(session({secret: 'this is a secret word',
resave: false,
saveUninitialized: false,
cookie:{secure: true}}))
  
//https://www.youtube.com/watch?v=J1qXK66k1y4

let Articles = require('./model/articles.model');

//==================================================================//

// render the homepage
app.get('/', (req, res) => {
    // if(req.session.page_views > 0){
    //     req.session.page_views++;
    //     return res.send(`You visit this page ${req.session.page_views} times!`);
    // }else{
    //     req.session.page_views = 1;
    //     return res.send("Welcome to this page");
    // }
    // console.log(req.session.page_views);
    Articles.find({}, (err, articles) => {
        if (err) {
            return res.status(500).send("Somethings wrong");
        }
        res.render('home', { title: "Articles", articles: articles });
    });
});

app.use('/article',require('./router/article.route'));
app.use('/login',require('./router/login.route'));
app.use('/register',require('./router/register.route'));


app.use((err,req,res,next)=>{
    res.status(500).send(err);
})

app.listen(port, () => {
    console.log(`Listening in port ${port}!`);
});

