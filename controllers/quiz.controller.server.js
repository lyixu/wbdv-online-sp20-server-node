// const quizService = require('../services/quiz.service.server')
const quizService = require('../services/quizzes.service.server')

module.exports = function(app) {

    // app.post('/api/quizzes', (req, res) => {
    //     const quiz = req.body
    //     quiz._id = (new Date()).getTime() + ""
    //     quizService.createQuiz(quiz)
    //     res.send(quiz)
    // })

    // app.delete('/api/quizzes/:qid', (req, res) => {
    //     const quizId = req.params['qid']
    //     quizService.deleteQuiz(quizId)
    //     res.send(200)
    // })

    app.get('/api/quizzes/:qid/questions', (req, res) =>
        quizService.findQuizById(req.params['qid'])
            .then(quiz => res.json(quiz.questions)))

    app.get('/api/quizzes/:qid', (req, res) =>
        quizService.findQuizById(req.params['qid'])
            .then(quiz => res.json(quiz)))

    app.get('/api/quizzes', (req, res) =>
        quizService.findAllQuizzes()
            .then(allQuizzes => res.send(allQuizzes)))
}
