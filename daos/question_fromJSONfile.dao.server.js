let questions = require('../data/questions');

function findAllQuestions() {
    return questions;
}

function findQuestionById(questionId) {
    return questions.find(question => question._id === questionId);
}

function createQuestion(question) {
    questions.push(question);
    return questions;
}

function updateQuestion(questionId,question){
    let index = questions.indexOf(question);
    questions.splice(index,1,question);
    return question;
}

function deleteQuestion(questionId){
    let index = questions.findIndex( question => question._id === questionId);
    questions.splice(index,1)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion
};
