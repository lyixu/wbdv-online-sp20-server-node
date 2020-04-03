var bodyParser = require('body-parser')
var express = require('express')
var app = express()

const mongoose = require('mongoose')
let connectionString = 'mongodb://localhost:27017/whiteboard-cs5610o-sp20';
if(process.env.MONGODB_URI) {
    connectionString = process.env.MONGODB_URI
  }
console.log('connectionString:', connectionString);
mongoose.connect(connectionString,
{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let allowOrigins = 'http://localhost:4200'
if(process.env.PORT){
   allowOrigins = 'http://wbdv-online-sp20-jannunzi-clie.herokuapp.com'
}
app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin',
        allowOrigins);
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials',
        'true');
    next();
});

var session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

require('./controllers/session.controller.server')(app)
require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

// client --> req 'http://myapp/' --> server
// client <-- res 'hello world'   <-- server
app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(process.env.PORT || 3000)

