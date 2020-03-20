var express = require('express')
var app = express()

app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const quizController = require('./controllers/quiz.controller.server')
quizController(app)

require('./controllers/question.controller.server')(app)

// client --> req 'http://myapp/' --> server
// client <-- res 'hello world'   <-- server
app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000)

