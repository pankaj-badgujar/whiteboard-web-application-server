const answerModel = require('../models/answer.model.server');

function findAllAnswers() {
    return answerModel.find();
}

function findAnswerById(answerId) {
    return answerModel.findById(answerId);
}

function findAnswersByQuestion(questionId) {
    return answerModel.find({question : questionId})
}

function findAnswersByStudent(studentId) {
    return answerModel.find({student: studentId})
}

function createAnswerByStudentForQuestion(studentId, questionId, answer) {
    answer['student'] = studentId;
    answer['question'] = questionId;
    return answerModel.create(answer);
}

function findAnswerByStudentForQuestion(studentId, questionId) {
    return answerModel.find({$and : [{question: questionId, student: studentId}]})
}

function truncateDatabase(){
    return answerModel.deleteMany({})
}

module.exports = {
    findAllAnswers,
    findAnswerById,
    createAnswerByStudentForQuestion,
    findAnswerByStudentForQuestion,
    findAnswersByStudent,
    findAnswersByQuestion,
    truncateDatabase
};
