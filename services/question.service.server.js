
let questions = [
    {_id: "123", title: "Question 1", quizId: "234", type: "TRUE_FALSE"},
    {_id: "234", title: "Question 2", quizId: "234", type: "MULTIPLE_CHOICE"},
    {_id: "345", title: "Question 3", quizId: "234", type: "TRUE_FALSE"},
    {_id: "456", title: "Question A", quizId: "345"},
    {_id: "567", title: "Question B", quizId: "345"},
    {_id: "678", title: "Question X", quizId: "123"}
]

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findQuestionsForQuiz
}
