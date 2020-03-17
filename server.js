var express = require('express')
var app = express()

const quizController = require('./controllers/quiz.controller.server')
quizController(app)

require('./controllers/question.controller.server')(app)

// client --> req 'http://myapp/' --> server
// client <-- res 'hello world'   <-- server
app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000)

