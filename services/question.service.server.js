
let questions = [
    {_id: "123", title: "Question 1", quizId: "234", type: "TRUE_FALSE",
        question: "Do you like the beach?",
        correct: "TRUE"
    },
    {_id: "234", titl   e: "Question 2", quizId: "234", type: "MULTIPLE_CHOICE",
        question: "What is your favorite color?",
        correct: "Blue",
        options: [
            "Yellow", "Blue", "Red", "Purple"
        ]
    },
    {_id: "345", title: "Question 3", quizId: "234", type: "TRUE_FALSE",
        question: "Do you like the mountain?",
        correct: "FALSE"
    },
    {_id: "456", title: "Question A", quizId: "345"},
    {_id: "567", title: "Question B", quizId: "345"},
    {_id: "678", title: "Question X", quizId: "123"}
]

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findQuestionsForQuiz
}
