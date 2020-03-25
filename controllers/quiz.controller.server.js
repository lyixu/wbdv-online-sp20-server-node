const quizService = require('../services/quiz.service.server')

module.exports = function(app) {

    app.post('/api/quizzes', (req, res) => {
        const quiz = req.body
        quiz._id = (new Date()).getTime() + ""
        quizService.createQuiz(quiz)
        res.send(quiz)
    })

    app.delete('/api/quizzes/:qid', (req, res) => {
        const quizId = req.params['qid']
        quizService.deleteQuiz(quizId)
        res.send(200)
    })

    app.get('/api/quizzes/:qid', (req, res) => {
        const quizId = req.params['qid']
        const quiz = quizService.findQuizById(quizId)
        res.json(quiz)
    })

    app.get('/api/quizzes', (req, res) => {
        res.json(quizService.findAllQuizzes())
            // .then(allQuizzes => res.send(allQuizzes))
    })

    // app.get('/api/quizzes', (req, res) => {
    //     quizService.findAllQuizzes()
    //         .then(allQuizzes => res.send(allQuizzes))
    // })
}
