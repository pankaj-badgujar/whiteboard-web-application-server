module.exports = function (app) {

    const answerDAO = require('../daos/answer_fromJSONfile.dao.server');

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

    function createAnswerByStudentForQuestion(req, res) {
        res.json(answerDAO.createAnswerByStudentForQuestion(req.params['sid'],req.params['qid'],req.body));
    }

    function findAnswerByStudentForQuestion(req, res) {
        res.json(answerDAO.findAnswerByStudentForQuestion(req.params['sid'],req.params['qid']));
    }
    app.get("/api/answer", findAllAnswers);
    app.get("/api/answer/:aid", findAnswerById);
    app.get("/api/question/:qid/answer", findAnswersByQuestion);
    app.get("/api/student/:sid/answer", findAnswersByStudent);
    app.post("/api/student/:sid/question/:qid/answer", createAnswerByStudentForQuestion);
    app.get("/api/student/:sid/question/:qid/answer",findAnswerByStudentForQuestion);
    app.get("/api/question/:qid/student/:sid/answer",findAnswerByStudentForQuestion);

};
