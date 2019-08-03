module.exports = function (app) {

    const answerDAO = require('../daos/answer.dao.server');

    function findAllAnswers(req,res) {
        answerDAO
            .findAllAnswers()
            .then(answers => res.send(answers));
    }

    function findAnswerById(req,res) {
        answerDAO
            .findAnswerById(req.params['aid'])
            .then(answer => res.send(answer));
    }

    function createAnswerByStudentForQuestion(req, res){
        answerDAO
            .createAnswerByStudentForQuestion(req.params['sid'],req.params['qid'],req.body)
            .then(answer => res.send(answer));
    }

    function findAnswersByStudent(req, res){
        answerDAO
            .findAnswersByStudent(req.params['sid'])
            .then(answers => res.send(answers));
    }

    function findAnswersByQuestion(req, res){
        answerDAO
            .findAnswersByQuestion(req.params['qid'])
            .then(answers => res.send(answers));
    }

    function findAnswerByStudentForQuestion(req,res){
        answerDAO
            .findAnswerByStudentForQuestion(req.params['sid'],req.params['qid'])
            .then(answers => res.send(answers));
    }

    app.get("/api/answers",findAllAnswers);
    app.get("/api/answers/:aid",findAnswerById);
    app.get("/api/students/:sid/answers",findAnswersByStudent);
    app.get("/api/questions/:qid/answers",findAnswersByQuestion);
    app.post("/api/students/:sid/questions/:qid/answers",createAnswerByStudentForQuestion);
    app.get("/api/students/:sid/questions/:qid/answers", findAnswerByStudentForQuestion);
    app.get("/api/questions/:qid/students/:sid/answers",findAnswerByStudentForQuestion);
};
