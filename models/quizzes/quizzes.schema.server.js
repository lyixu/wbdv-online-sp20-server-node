const mongoose = require('mongoose')

const quizzesSchema = mongoose.Schema({
    title: String,
    avg: Number,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'quizzes'})

module.exports = quizzesSchema
