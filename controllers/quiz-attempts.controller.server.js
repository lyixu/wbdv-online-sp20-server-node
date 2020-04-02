const quizAttemptDao = require('../daos/quiz-attempts.dao.server')
module.exports = (app) => {
    app.post('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptDao.submitQuiz( req.params.qid, req.body)
            .then(attempt => res.send(attempt)))
    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptDao.findAllQuizAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts)))
}
