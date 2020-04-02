const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts.models.server')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions
        .forEach(question =>
            question.answer === question.correct ?
                numberOfCorrectQuestions++ :
                numberOfCorrectQuestions)
    return 100 * numberOfCorrectQuestions /
        questions.length
}

const submitQuiz = (qid, attempt) =>
    quizAttemptsModel
        .create({
            quiz: qid,
            answers: attempt,
            score: scoreQuiz(attempt)})

const findAllQuizAttemptsForQuiz = (qzid) =>
    quizAttemptsModel
        .find({quiz: qzid})
        .populate('quiz', 'title _id')

module.exports = {
    submitQuiz,
    findAllQuizAttemptsForQuiz
}
