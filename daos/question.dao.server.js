let questions = require('../data/questions');

function findAllQuestions() {
    return questions;
}

function findQuestionById(questionId) {
    return questions.find(question => question._id === questionId);
}

module.exports = {
    findAllQuestions,
    findQuestionById
}
