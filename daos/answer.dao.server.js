let answers = require('../data/answers');

function findAllAnswers() {
    return answers;
}

function findAnswerById(answerId) {
    return answers.find(answer => answer._id === answerId);
}

function findAnswersByQuestion(questionId) {
    return answers.filter(answer => answer.question === questionId)

}

function findAnswersByStudent(studentId) {
    return answers.filter(answer => answer.student === studentId)
}

module.exports = {
    findAllAnswers,
    findAnswerById,
    findAnswersByQuestion,
    findAnswersByStudent
};
