const questionsDao = require('../daos/questions.dao.server')

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

module.exports = {
    findAllQuestions
}
