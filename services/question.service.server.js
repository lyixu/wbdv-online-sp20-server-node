
let questions = [
    {title: "Question 1", type: "TRUE_FALSE",
        question: "Do you like the beach?",
        correct: "TRUE"
    },
        {title: "Question 2", type: "MULTIPLE_CHOICE",
            question: "What is your favorite color?",
            correct: "Blue",
            options: [
                "Yellow", "Blue", "Red", "Purple"
            ]
        },
    {title: "Question 3", type: "TRUE_FALSE",
        question: "Do you like the mountain?",
        correct: "FALSE"
    },
    {title: "Question A"},
    {title: "Question B"},
    {title: "Question X"}
]

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findQuestionsForQuiz
}
