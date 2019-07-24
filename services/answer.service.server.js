module.exports = function (app) {

    const answerDAO = require('../daos/answer.dao.server');

    function findAllAnswers(req, res) {
        res.json(answerDAO.findAllAnswers())
    }

    function findAnswerById(req, res) {
        res.json(answerDAO.findAnswerById(req.params['aid']))
    }

    function findAnswersByQuestion(req, res) {
        res.json(answerDAO.findAnswersByQuestion(req.params['qid']));
    }

    function findAnswersByStudent(req, res) {
        res.json(answerDAO.findAnswersByStudent(req.params['sid']));
    }


    app.get("/api/answer", findAllAnswers);
    app.get("/api/answer/:aid", findAnswerById);
    app.get("/api/question/:qid/answer", findAnswersByQuestion);
    app.get("/api/student/:sid/answer", findAnswersByStudent);
};
