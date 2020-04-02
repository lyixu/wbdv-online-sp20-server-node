
// const questionService = require("../services/question.service.server")
const questionService = require("../services/questions.service.server")

module.exports = (app) => {
    // app.get("/api/quizzes/:qid/questions", (req, res) => {
    //     const quizId = req.params['qid']
    //     const questions = questionService.findQuestionsForQuiz(quizId)
    //     res.json(questions)
    // })
    app.get("/api/questions", (req, res) =>
        questionService.findAllQuestions()
            .then(allQuestions => res.send(allQuestions)))
}
