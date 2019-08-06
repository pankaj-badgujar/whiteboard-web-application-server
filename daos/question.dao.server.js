const questionModel = require('../models/question.model.server');

function findAllQuestions() {
    return questionModel.find();
}

function findQuestionById(questionId) {
    return questionModel.findById(questionId);
}

function createQuestion(question) {
    return questionModel.create(question)
}

function updateQuestion(questionId,question){
    return questionModel.updateOne({_id: questionId},{
        $set: question
    })
}

function deleteQuestion(questionId){
    return questionModel.deleteOne({_id: questionId});
}

function truncateDatabase(){
    return questionModel.deleteMany({});
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    truncateDatabase
};
