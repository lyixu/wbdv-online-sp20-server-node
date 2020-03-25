const mongoose = require('mongoose')

let quizzes = [
    {_id: '123', title: 'Quiz 1'},
    {_id: '234', title: 'Quiz 2'},
    {_id: '345', title: 'Quiz 3'},
];

const quizzesSchema = mongoose.Schema({
    title: String,
    avg: Number
}, {collection: 'quizzes'})
const quizzesModel = mongoose.model('QuizzesModel', quizzesSchema)


function deleteQuiz(quizId) {
    quizzes = quizzes.filter(quiz => quiz._id !== quizId)
}

const findAllQuizzes = () => quizzes
// const findAllQuizzes = () => quizzesModel.find()

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

const createQuiz = (quiz) =>
    quizzes.push(quiz)

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz
}
