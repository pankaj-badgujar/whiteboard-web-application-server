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

function createAnswerByStudentForQuestion(studentId, questionId, answer) {
    answer['student'] = studentId;
    answer['question']= questionId;
    answers.push(answer);
    return answers;
}

function findAnswerByStudentForQuestion(studentId, questionId) {
    return answers.filter(answer => answer.student === studentId && answer.question === questionId)
}

module.exports = {
    findAllAnswers,
    findAnswerById,
    findAnswersByQuestion,
    findAnswersByStudent,
    createAnswerByStudentForQuestion,
    findAnswerByStudentForQuestion
};
