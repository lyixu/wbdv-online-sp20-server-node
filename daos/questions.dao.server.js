const questionsModel = require('../models/questions/questions.model.server')

const findAllQuestions = () =>
    questionsModel.find()

module.exports = {
    findAllQuestions
}
